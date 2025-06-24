<template>
  <q-layout view="hHh lpR fFf" class="login-page-layout">
    <q-header elevated class="gradient-header text-white">
      <q-toolbar class="q-py-sm">
        <q-toolbar-title class="q-mx-auto">
          <q-img
            class="header-logo"
            src="~assets/images/LogoHeader.png"
            fit="contain"
            style="margin: 0 auto;"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white q-px-lg q-py-xs">
      <q-toolbar class="footer-toolbar">
        <q-toolbar-title class="q-mx-auto">
          <img
            class="footer-logo"
            src="~assets/images/footer.png"
            alt="unirriter|animahub"
            style="display: block; margin: 0 auto; width: 48px; height: auto; object-fit: contain;"
          >
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import '../css/app.scss'
</script>

