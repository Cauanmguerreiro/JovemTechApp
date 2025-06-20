<template>
  <q-page class="q-pa-lg flex flex-center" style="padding-top: 5%">
    <div class="row items-center justify-around" 
    style=
    "width: 100%; 
    max-width: 1200px;">
      <!-- Texto à esquerda -->
      <div class="col-12 col-md-6 q-pa-md">
              <img src="~assets/images/aulafoto.png" 
              alt="Aula de tecnologia" style="
              width: 100%; 
              height: auto; 
              display: block; 
              border-radius: 3px;">
        <h1>Jovem Tech</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore in ex, mollitia, ipsa voluptatibus
          necessitatibus minus debitis saepe reprehenderit laborum cupiditate obcaecati, libero aliquam dolores
          dicta sapiente distinctio perferendis odit.
        </p>
      </div>

      <!-- Formulário à direita -->
      <div class="col-12 col-md-5 q-pa-md" 
      style=
      "
      max-width: 1000px;
      background-color: #ece5da;
      border-radius: 5%;
      ">
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



