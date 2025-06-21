<template>
  <q-layout view="hHh lpR fFf" class="login-page-layout">

  <q-header elevated class="gradient-header text-white">
    <q-toolbar class="q-py-sm">
      <q-toolbar-title class="flex flex-center">
          <q-img
            class="header-logo"
            src="~assets/images/LogoHeader.png"
            fit="contain"
          />
      </q-toolbar-title>
    </q-toolbar>
  </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
    
    <q-footer class="bg-white q-px-lg q-py-md">
      <q-toolbar class="footer-toolbar">
        <q-toolbar-title class="flex flex-center">
          <img
            class="footer-logo"
            src="~assets/images/footer.png"
            alt="unirriter|animahub"
          >
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

