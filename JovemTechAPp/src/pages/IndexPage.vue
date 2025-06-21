<template>
  <q-page class="q-pa-lg flex flex-center login-page">
    <div class="row items-center justify-around login-container">
      
      <div class="col-12 col-md-5 q-pa-md login-form">
        <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
          <q-input
            color="accent"
            ref="mailRef"
            filled
            v-model="mail"
            label="Escreva seu email"
            lazy-rules
            :rules="nameRules"
          />

          <q-input 
            color="accent"
            v-model="password" 
            filled :type="isPwd ? 'password' : 'text'" 
            label="Escreva sua senha">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <q-toggle v-model="accept" label="Eu aceito os termos e condições" color="accent" />

          <div>
            <q-btn label="Entrar" type="submit" color="accent" />
            <q-btn label="Cadastre-se" type="submit" color="accent" flat class="q-ml-sm" />
          </div>
        </form>
      </div>
      
      <!-- AQUI adicionamos a classe login-info -->
      <div class="col-12 col-md-6 q-pa-md login-info">
        <img src="~assets/images/aulafoto.png" 
             alt="Aula de tecnologia" 
             class="login-image">
        <h6><span>J</span>OVEM <span>T</span>ECH</h6>
        <p>
          O Jovem Tech é um programa comunitário que incentiva a cultura de inovação e a capacitação inicial de jovens em Tecnologia da Informação e Computação (TI&C). Nosso objetivo é aproximar jovens da comunidade Mário Quintana e Zona Norte de Porto Alegre do universo digital, preparando-os para os desafios acadêmicos, sociais e profissionais.

          As aulas são ministradas nos laboratórios de informática da UniRitter FAPA por tutores e docentes, abordando temas essenciais como cidadania digital, mercado de trabalho e tecnologias atuais.

          Para potencializar ainda mais esse aprendizado, desenvolvemos esta plataforma exclusiva, onde você, aluno do Jovem Tech, poderá acessar conteúdos completos, acompanhar aulas, realizar atividades e interagir com o universo da tecnologia de forma prática e dinâmica.

        Explore nossos cursos, desafie-se nas atividades e conecte-se com o futuro da TI! Aqui, o conhecimento está ao seu alcance para transformar seu potencial em realidade.
        </p>
      </div>
      
    </div>
  </q-page>
</template>



<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      mail: ref(''),
      password: ref(''),
      isPwd: ref(true),
      accept: ref(false),
      nameRules: [(val) => val && val.length > 0 || 'Por favor, preencha o campo']
    };
  }
});
</script>



