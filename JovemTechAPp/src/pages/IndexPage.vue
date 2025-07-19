<template>
  <q-page class="q-pa-lg flex flex-center login-page">
    <div class="row items-center justify-around login-container">

      <section class="col-12 col-md-5 q-pa-md login-form">
        <div class="form-title text-h5 text-center q-mb-md"
          style="padding-bottom: 20px; font-weight: 800; color: #8c52ff;">
          {{ isLoginMode ? 'LOGIN' : 'CADASTRO' }}
        </div>

        <form v-if="isLoginMode" @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
          <q-input color="accent" ref="mailRef" filled v-model="email" label="Escreva seu email" lazy-rules
            :rules="nameRules" type="email" autocomplete="email" />

          <q-input color="accent" v-model="senha" filled :type="isPwd ? 'password' : 'text'" label="Escreva sua senha"
            autocomplete="current-password">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"
                aria-label="Mostrar ou ocultar senha" tabindex="0" />
            </template>
          </q-input>

          <q-toggle v-model="accept" label="Eu aceito os termos e condições" color="accent" />

          <div class="q-mt-md">
            <q-btn label="Entrar" type="submit" color="accent" />
            <q-btn label="Cadastre-se" type="button" color="accent" flat class="q-ml-sm" @click="toggleMode" />
          </div>
        </form>

        <div v-else>
          <CadastroForm 
            :loading="cadastroLoading"
            submit-label="Cadastrar"
            @submit="handleCadastroSubmit"
            @reset="handleCadastroReset"
          />
          
          <div class="q-mt-md text-center">
            <q-btn label="Já tenho conta" type="button" color="accent" flat @click="toggleMode" />
          </div>
        </div>
      </section>
      <section class="col-12 col-md-6 q-pa-md login-info">
        <img src="~assets/images/aulafoto.png" alt="Aula de tecnologia Jovem Tech" class="login-image q-mb-md">
        <h6 class="text-h6 text-weight-bold"><span>J</span>OVEM <span>T</span>ECH</h6>
        <p class="text-body2 text-grey-8">
          O Jovem Tech é um programa comunitário que incentiva a cultura de inovação e a capacitação inicial de jovens
          em
          Tecnologia da Informação e Computação (TI&C). Nosso objetivo é aproximar jovens da comunidade Mário Quintana e
          Zona
          Norte de Porto Alegre do universo digital, preparando-os para os desafios acadêmicos, sociais e profissionais.
          <br><br>
          As aulas são ministradas nos laboratórios de informática da UniRitter FAPA por tutores e docentes, abordando
          temas
          essenciais como cidadania digital, mercado de trabalho e tecnologias atuais.
          <br><br>
          Para potencializar ainda mais esse aprendizado, desenvolvemos esta plataforma exclusiva, onde você, aluno do
          Jovem
          Tech, poderá acessar conteúdos completos, acompanhar aulas, realizar atividades e interagir com o universo da
          tecnologia de forma prática e dinâmica.
          <br><br>
          Explore nossos cursos, desafie-se nas atividades e conecte-se com o futuro da TI! Aqui, o conhecimento está ao
          seu
          alcance para transformar seu potencial em realidade.
        </p>
      </section>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import CadastroForm from 'components/CadastroForm.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    CadastroForm
  },
  setup() {
    const email = ref('');
    const senha = ref('');
    const isPwd = ref(true);
    const accept = ref(false);
    const nameRules = [val => val && val.length > 0 || 'Por favor, preencha o campo'];
    const isLoginMode = ref(true);
    const cadastroLoading = ref(false);

    const $q = useQuasar();
    const router = useRouter();

    const toggleMode = () => {
      isLoginMode.value = !isLoginMode.value;
      if (isLoginMode.value) {
        email.value = '';
        senha.value = '';
        accept.value = false;
      }
    };

    const onSubmit = async () => {
      if (!email.value || !senha.value || !accept.value) {
        $q.notify({
          message: 'Todos os campos devem ser preenchidos',
          color: 'negative',
          position: 'top',
        });
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/usuarios/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            senha: senha.value,
          }),
        });

        if (!response.ok) {
          throw new Error('Falha no login, verifique se seus dados estão corretos');
        }

        const data = await response.json();


        if (data.token) {
          localStorage.setItem('token', data.token.token);

          $q.notify({
            message: 'Login realizado com sucesso!',
            color: 'positive',
            position: 'top',
          });

          const decoded = jwtDecode((data.token.token));
       

          if (decoded && decoded.email === email.value) {
            router.push('/home');
          } else {
            throw new Error('Token não retornado');
          }
        }
      } catch{

        $q.notify({
          message: 'Falha no login, verifique se seus dados estão corretos',
          color: 'negative',
          position: 'top',
        });
      }
    };

    const handleCadastroSubmit = async (formData) => {
      cadastroLoading.value = true;

      try {
        const response = await fetch('http://localhost:3000/usuarios/registrar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Erro ao criar conta');
        }

        $q.notify({
          message: 'Cadastro realizado com sucesso! Faça login para continuar.',
          color: 'positive',
          position: 'top',
        });

        setTimeout(() => {
          isLoginMode.value = true;
        }, 2000);

      } catch (error) {
        console.error('Erro no cadastro:', error);
        $q.notify({
          message: error.message || 'Erro ao criar conta. Tente novamente.',
          color: 'negative',
          position: 'top',
        });
      } finally {
        cadastroLoading.value = false;
      }
    };

    const handleCadastroReset = () => {
      $q.notify({
        message: 'Formulário limpo!',
        color: 'info',
        position: 'top',
      });
    };

    return {
      email,
      senha,
      isPwd,
      accept,
      nameRules,
      isLoginMode,
      cadastroLoading,
      onSubmit,
      toggleMode,
      handleCadastroSubmit,
      handleCadastroReset,
    };
  }
});
</script>
