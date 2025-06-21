<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="flex items-center">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    
    <q-footer class="bg-white q-px-lg"> <!-- Adicionado padding horizontal (ex: q-px-lg) -->
      <q-toolbar style="border-top: 1px solid #ccc;"> <!-- Borda movida para o q-toolbar -->
        <q-toolbar-title class="flex flex-center">
          <img src="~assets/images/footer.png" 
              alt="unirriter|animahub" style="
              width: 10%;  
              border-radius: 3px;">
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>