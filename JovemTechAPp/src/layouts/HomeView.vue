<template>
  <q-layout view="lHh Lpr lFf" class="login-page-layout">

    <q-header elevated class="gradient-header text-white">
      <q-toolbar class="q-py-sm">
        <!-- Esquerda: botão de menu -->
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />


        <!-- Centro: logo -->
        <q-toolbar-title class="q-mx-auto" style="text-align: center;">
          <q-img class="header-logo" src="~assets/images/LogoHeader.png" @click="$router.push('/home')" fit="contain" style="max-width: 50px; cursor: pointer"  />
        </q-toolbar-title>

        <!-- Direita: botão de logout -->
        <q-btn flat icon="logout" label="Sair" @click="fazerLogout" />
      </q-toolbar>

    </q-header>
    

    <q-drawer :width="180" class="menu-drawer " v-model="leftDrawerOpen" side="left">
      <div class="text-center">
        <q-avatar class="q-mb-md">
          <img
            src="https://png.pngtree.com/png-clipart/20230817/original/pngtree-round-kid-avatar-boy-face-picture-image_8005285.png">
        </q-avatar>
        <p class="text-h7 q-mb-xxs" style="word-wrap: break-word; overflow-wrap: break-word;"><strong>{{ nome
            }}</strong></p>
        <p class="text-h7 q-mb-xxs" style="word-wrap: break-word; overflow-wrap: break-word;"><strong>{{ email
            }}</strong></p>
      </div>
      <div class="left-buttons q-gutter-md ">

        <q-btn flat class="drawer-btn full-width justify-start items-center" @click="$router.push('/home')"
          label="INÍCIO" icon="home">
        </q-btn>
        <q-btn flat class="drawer-btn full-width justify-start items-center" @click="$router.push('/modulos')"
          label="MÓDULOS" icon="book">

        </q-btn>

        <q-btn flat class="drawer-btn full-width justify-start items-center" @click="$router.push('/equipe')"
          label="EQUIPE" icon="group">


        </q-btn>

        <q-btn flat class="drawer-btn full-width justify-start items-center" @click="$router.push('/fotos')"
          label="FOTOS" icon="camera_alt">

        </q-btn>
      </div>

      <div class="bottom-buttons">
        <q-btn flat class="drawer-btn" @click="$router.push('/sobre')" label="SOBRE NÓS">

        </q-btn>

        <q-btn flat class="drawer-btn" @click="$router.push('/perfil')" label="PERFIL" icon="account_circle">

        </q-btn>
      </div>
    </q-drawer>



    <q-page-container>
  <q-page class="q-pa-md" style="min-height: 100vh;">
    <router-view />
  </q-page>
</q-page-container>

<q-footer reveal reveal-offset="600" bordered class="bg-white q-px-lg q-py-xs">
  <q-toolbar class="footer-toolbar" style="flex-wrap: wrap">

    <!-- Esquerda: ícones -->
    <div class="footer-left flex gap-sm items-center q-mr-md" style="min-width: 150px;">
      <img
        class="social-icon-md"
        style="max-width: 150px"
        src="~assets/images/footer.png"
        alt="unirriter|animahub"
      >
    </div>

    <!-- Centro: logo -->
    <div
      class="footer-center flex flex-wrap items-center justify-center q-pa-md"
      style="flex-grow: 1;"
    >
      <span
        @click="$router.push('/home')"
        class="footer-link q-mr-md cursor-pointer q-my-xs"
      >
        Início
      </span>
      <span
        @click="$router.push('/desenvolvedores')"
        class="footer-link q-mr-md cursor-pointer q-my-xs"
      >
        Desenvolvedores
      </span>
      <span
        @click="$router.push('/sobre')"
        class="footer-link q-mr-md cursor-pointer q-my-xs"
      >
        Sobre nós
      </span>
      <span
        @click="$router.push('/fale_conosco')"
        class="footer-link q-mr-md cursor-pointer q-my-xs"
      >
        Fale conosco
      </span>
    </div>

    <!-- Direita: instagram -->
    <div
      class="footer-right flex items-center q-ml-md"
      style="min-width: 50px;"
    >
      <a
        href="https://www.instagram.com/jovemtech_fapa/"
        target="_blank"
        rel="noopener"
      >
        <img
          src="~assets/images/instagram.png"
          alt="Instagram"
          class="social-icon"
          style="max-width: 40px; max-height: 40px;"
        />
      </a>
    </div>

  </q-toolbar>
</q-footer>


  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { jwtDecode } from 'jwt-decode'
import { useQuasar } from 'quasar'
import '../css/app.scss'

const nome = ref('')
const email = ref('')
const $q = useQuasar()
const router = useRouter()
const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const fazerLogout = () => {
  localStorage.removeItem('token')
  router.push('/')
}

// Função para buscar usuário por ID extraído do token
async function buscarUsuario() {
  try {
    const token = localStorage.getItem('token')
    if (!token) throw new Error('Token não encontrado')

    const decoded = jwtDecode(token)
    const userId = decoded.id || decoded._id || decoded.uid

    const response = await fetch(`http://localhost:3000/usuarios/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

    if (!response.ok) throw new Error('Falha ao buscar usuário')

    const data = await response.json()

    nome.value = data.nome
    email.value = data.email

  } catch (err) {
    $q.notify({
      message: 'Erro: ' + err.message,
      color: 'negative',
      position: 'top',
    })
  }
}

// Chama buscarUsuario quando o componente for montado
onMounted(() => {
  buscarUsuario()
})
</script>
<style>
.drawer-btn span {
  font-size: 15px;
}

.footer-link {
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.footer-link:hover {
  color: #8c52ff;
  /* cor azul Quasar padrão */
  text-decoration: underline;
}
</style>