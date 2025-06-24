<template>
  <q-layout view="lHh LpR fF" class="login-page-layout">

    <q-header elevated class="gradient-header text-white">
      <q-toolbar class="q-py-sm">
        <!-- Esquerda: botão de menu -->
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <!-- Centro: logo -->
        <q-toolbar-title class="q-mx-auto" style="text-align: center;">
          <q-img
            class="header-logo"
            src="~assets/images/LogoHeader.png"
            fit="contain"
            style="margin: 0 auto;"
          />
        </q-toolbar-title>

        <!-- Direita: espaço vazio para balancear -->
        <div style="width:40px"></div>
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

    <q-footer class="bg-white q-px-lg q-py-xs">
      <q-toolbar class="footer-toolbar">
        <!-- Esquerda: ícones -->
        <div class="footer-left flex gap-sm">
          <a
            href="https://www.instagram.com/jovemtech_fapa/"
            target="_blank"
            rel="noopener"
          >
            <img src="~assets/images/instagram.png" alt="Instagram" class="social-icon" />
          </a>
        </div>

        <!-- Centro: logo -->
        <div class="footer-center flex items-center justify-center">
          <img class="footer-logo" src="~assets/images/footer.png" alt="unirriter|animahub">
        </div>

        <!-- Direita: textos e github -->
        <div class="footer-right flex flex-column items-end">
          <div class="footer-title-row flex items-center gap-sm">
            <span class="footer-text-line1">DESENVOLVEDORES</span>
            <img src="~assets/images/gith.svg" alt="GitHub" class="github-icon" />
          </div>
          <a
            href="https://github.com/dev1"
            class="footer-github-link"
            target="_blank"
            rel="noopener"
          >CauanGuerreiro</a>
          <a
            href="https://github.com/dev2"
            class="footer-github-link"
            target="_blank"
            rel="noopener"
          >GustavoCamargo</a>
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