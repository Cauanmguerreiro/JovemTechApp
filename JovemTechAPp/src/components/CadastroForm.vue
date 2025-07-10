<template>
  <div class="cadastro-form-component">
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
      <q-input 
        color="accent" 
        ref="nomeRef" 
        filled 
        v-model="formData.nome" 
        label="Nome completo" 
        lazy-rules
        :rules="nomeRules" 
        autocomplete="name" 
      />
      <q-input 
        color="accent" 
        filled 
        v-model="formData.data_nascimento" 
        label="Data de nascimento" 
        lazy-rules
        :rules="dataRules"
        type="date"
        autocomplete="bday"
      />
      <q-input 
        color="accent" 
        ref="emailRef" 
        filled 
        v-model="formData.email" 
        label="Email" 
        lazy-rules
        :rules="emailRules" 
        type="email" 
        autocomplete="email" 
      />
      <q-input 
        color="accent" 
        v-model="formData.senha" 
        filled 
        :type="isPwd ? 'password' : 'text'" 
        label="Senha"
        lazy-rules
        :rules="senhaRules"
        autocomplete="new-password"
      >
        <template v-slot:append>
          <q-icon 
            :name="isPwd ? 'visibility_off' : 'visibility'" 
            class="cursor-pointer" 
            @click="isPwd = !isPwd"
            aria-label="Mostrar ou ocultar senha" 
            tabindex="0" 
          />
        </template>
      </q-input>
      <q-input 
        color="accent" 
        v-model="confirmarSenha" 
        filled 
        :type="isConfirmPwd ? 'password' : 'text'" 
        label="Confirmar senha"
        lazy-rules
        :rules="confirmarSenhaRules"
        autocomplete="new-password"
      >
        <template v-slot:append>
          <q-icon 
            :name="isConfirmPwd ? 'visibility_off' : 'visibility'" 
            class="cursor-pointer" 
            @click="isConfirmPwd = !isConfirmPwd"
            aria-label="Mostrar ou ocultar senha" 
            tabindex="0" 
          />
        </template>
      </q-input>
  <q-select 
  color="accent"
  filled
  v-model="formData.instituicao"
  label="Instituição"
  lazy-rules
  :rules="instituicaoRules"
  :options="instituicoes"
  option-label="label"
  option-value="value"
  emit-value
  map-options
/>
      <q-toggle 
        v-model="accept" 
        label="Eu aceito os termos e condições" 
        color="accent" 
      />
      <div class="q-mt-md">
        <q-btn 
          :label="submitLabel" 
          type="submit" 
          color="accent" 
          :loading="loading"
          :disable="!accept"
        />
        <q-btn 
          label="Limpar" 
          type="reset" 
          color="accent" 
          flat 
          class="q-ml-sm" 
        />
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'CadastroForm',
  props: {
    submitLabel: {
      type: String,
      default: 'Cadastrar'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['submit', 'reset'],
  setup(props, { emit }) {
    // Dados do formulário
    const formData = reactive({
      nome: '',
      data_nascimento: '',
      email: '',
      senha: '',
      instituicao: '',
      cargo: 'aluno'
    });

    const confirmarSenha = ref('');
    const accept = ref(false);
    const isPwd = ref(true);
    const isConfirmPwd = ref(true);

    // Regras de validação
    const nomeRules = [
      val => val && val.length > 0 || 'Nome é obrigatório',
      val => val && val.length >= 3 || 'Nome deve ter pelo menos 3 caracteres'
    ];


    const emailRules = [
      val => val && val.length > 0 || 'Email é obrigatório',
      val => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(val) || 'Email inválido';
      }
    ];

   const dataRules = [
  val => !!val || 'Data de nascimento é obrigatória',
  val => {
    const data = new Date(val)
    const agora = new Date()

    if (data > agora) {
      return 'Data inválida'
    }
    return true
  }
]

    const senhaRules = [
      val => val && val.length > 0 || 'Senha é obrigatória',
      val => val && val.length >= 6 || 'Senha deve ter pelo menos 6 caracteres'
    ];

    const confirmarSenhaRules = [
      val => val && val.length > 0 || 'Confirmação de senha é obrigatória',
      val => val === formData.senha || 'Senhas não coincidem'
    ];

    const instituicaoRules = [
      val => val && val.length > 0 || 'Instituição é obrigatória'
    ];

    const instituicoes = [
  { label: 'Uniritter', value: 'uniritter' },
  { label: 'JT', value: 'jt' },
  { label: 'Clube de mães', value: 'clube_de_maes' },
]

    const $q = useQuasar();

    const onSubmit = async () => {
      // Validação dos campos
      if (!formData.nome || !formData.data_nascimento || !formData.email || !formData.senha || 
          !confirmarSenha.value || !formData.instituicao || !accept.value) {
        $q.notify({
          message: 'Todos os campos devem ser preenchidos',
          color: 'negative',
          position: 'top',
        });
        return;
      }

      if (formData.senha !== confirmarSenha.value) {
        $q.notify({
          message: 'As senhas não coincidem',
          color: 'negative',
          position: 'top',
        });
        return;
      }

      // Emitir evento com os dados do formulário
      emit('submit', { ...formData });
    };

    const onReset = () => {
      formData.nome = '';
      formData.data_nascimento = '';
      formData.email = '';
      formData.senha = '';
      formData.instituicao = '';
      confirmarSenha.value = '';
      accept.value = false;
      
      emit('reset');
    };

    return {
      formData,
      confirmarSenha,
      accept,
      isPwd,
      isConfirmPwd,
      nomeRules,
      emailRules,
      senhaRules,
      confirmarSenhaRules,
      instituicaoRules,
      dataRules,
      instituicoes,
      onSubmit,
      onReset
    };
  }
});
</script>

<style scoped>
.cadastro-form-component {
  width: 100%;
}
</style> 