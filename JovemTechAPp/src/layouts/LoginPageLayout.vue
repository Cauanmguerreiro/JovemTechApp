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
        <!-- Esquerda: ícones -->
        <div class="footer-left flex gap-sm">
          <a
            href="https://www.instagram.com/jovemtech_fapa/"
            target="_blank"
            rel="noopener"
          >
            <img
              src="~assets/images/instagram.png"
              alt="Instagram"
              class="social-icon"
            />
          </a>
        </div>

        <!-- Centro: logo -->
        <div class="footer-center flex items-center justify-center">
          <img
            class="footer-logo"
            src="~assets/images/footer.png"
            alt="unirriter|animahub"
          />
        </div>

        <!-- Direita: textos e github -->
        <div class="footer-right flex flex-column items-end">
          <div class="footer-title-row flex items-center gap-sm">
            <span class="footer-text-line1">DESENVOLVEDORES</span>
            <img
              src="~assets/images/gith.svg"
              alt="GitHub"
              class="github-icon"
            />
          </div>
          <a
            href="https://github.com/dev1"
            class="footer-github-link"
            target="_blank"
            rel="noopener"
          >
            CauanGuerreiro
          </a>
          <a
            href="https://github.com/dev2"
            class="footer-github-link"
            target="_blank"
            rel="noopener"
          >
            GustavoCamargo
          </a>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

