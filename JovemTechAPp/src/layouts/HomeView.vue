<template>
  <q-layout view="lHh LpR fF" class="login-page-layout">

    <q-header elevated class="gradient-header text-white">
      <q-toolbar class="q-py-sm">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="flex flex-center">
          <q-img
            class="header-logo"
            src="~assets/images/LogoHeader.png"
            fit="contain"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
  class="menu-drawer"
  v-model="leftDrawerOpen"
  side="left"
  style="min-width: 220px;"
>
  <div class="top-buttons">
    <q-btn flat class="drawer-btn">
      <span class="btn-text">MODULOS</span>
      <q-icon name="book" />
    </q-btn>

    <q-btn flat class="drawer-btn">
      <span class="btn-text">EQUIPE</span>
      <q-icon name="group" />
    </q-btn>

    <q-btn flat class="drawer-btn">
      <span class="btn-text">FOTOS</span>
      <q-icon name="camera_alt" />
    </q-btn>
  </div>

  <div class="bottom-buttons">
    <q-btn flat class="drawer-btn">
      <span class="btn-text">SOBRE NÓS</span>
      <q-img src="#" />
    </q-btn>

    <q-btn flat class="drawer-btn">
      <span class="btn-text">PERFIL</span>
      <q-icon name="account_circle" />
    </q-btn>
  </div>
</q-drawer>



    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white q-px-lg q-py-md">
      <q-toolbar class="footer-toolbar flex justify-between items-center">

    <!-- Esquerda: ícones pequenos (ex: redes sociais) -->
        <div class="footer-left flex gap-sm">
          <img src="#" alt="Rede Social 1" class="social-icon" />
          <img src="#" alt="Rede Social 2" class="social-icon" />
        </div>

        <!-- Direita: imagem + texto -->
        <div class="footer-center flex items-center gap-md">
          <img
            class="footer-logo"
            src="~assets/images/footer.png"
            alt="unirriter|animahub"
          >
          <div class="footer-right flex items-center gap-md">
            <span class="footer-text-line1">Linha de texto 1</span>
            <span class="footer-text-line2">Linha de texto 2</span>
          </div>
          />
        </div>

      </q-toolbar>
    </q-footer>


  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import '../css/app.scss'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>