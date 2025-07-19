<template>
  <q-layout view="lHh Lpr lFf" class="login-page-layout">
    <q-header elevated class="gradient-header text-white">
      <q-toolbar class="q-py-sm">
        <q-toolbar-title class="min-w-32">
          <q-img
            class="header-logo min-w-24 max-w-sm-md"
            src="~assets/images/LogoHeader.png"
            fit="contain"
            style="max-width: 50px"
        
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white q-px-lg q-py-xs">
      <q-toolbar class="footer-toolbar" style="flex-wrap: wrap">
        <!-- Esquerda: ícones -->
        <div class="footer-left flex gap-sm">

          <img class="social-icon-md" style="max-width: 150px" src="~assets/images/footer.png" alt="unirriter|animahub">
        </div>

        <!-- Centro: logo -->
        <div class="footer-center flex items-center justify-center q-pa-md">
          <span @click="$router.push('/desenvolvedores')" class="footer-link q-mr-md cursor-pointer">
            Desenvolvedores
          </span>
          <span @click="$router.push('/sobre')" class="footer-link q-mr-md cursor-pointer">
            Sobre nós
          </span>
          <span @click="$router.push('/fale_conosco')" class="footer-link q-mr-md cursor-pointer">
            Fale conosco
          </span>
          
        </div>
              <div class="footer-right flex flex-column items-end">
          <a href="https://www.instagram.com/jovemtech_fapa/" target="_blank" rel="noopener">
            <img src="~assets/images/instagram.png" alt="Instagram" class="social-icon" />
          </a>

        </div>
      </q-toolbar>
    </q-footer>
  </q-layout> 
</template>
<style>
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

