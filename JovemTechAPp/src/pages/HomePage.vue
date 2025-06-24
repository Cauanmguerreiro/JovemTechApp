<template>
  <div class="home-page-row row no-wrap">
    <!-- Esquerda: Card principal + mascote -->
    <div class="col-auto home-main-col">
      <q-card class="home-main-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">Bem Vindo ao JovemTech</div>
            <div class="text-h5 q-mt-sm q-mb-xs">O que é</div>
            <div class="text-caption text-grey">
              O Jovem Tech é um programa comunitário que incentiva a cultura de inovação e a capacitação inicial de jovens em Tecnologia da Informação e Computação (TI&C). Nosso objetivo é aproximar jovens da comunidade Mário Quintana e Zona Norte de Porto Alegre do universo digital, preparando-os para os desafios acadêmicos, sociais e profissionais.

              As aulas são ministradas nos laboratórios de informática da UniRitter FAPA por tutores e docentes, abordando temas essenciais como cidadania digital, mercado de trabalho e tecnologias atuais.

              Para potencializar ainda mais esse aprendizado, desenvolvemos esta plataforma exclusiva, onde você, aluno do Jovem Tech, poderá acessar conteúdos completos, acompanhar aulas, realizar atividades e interagir com o universo da tecnologia de forma prática e dinâmica.

              Explore nossos cursos, desafie-se nas atividades e conecte-se com o futuro da TI! Aqui, o conhecimento está ao seu alcance para transformar seu potencial em realidade.
            </div>
          </q-card-section>
          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="#"
              alt="Aula de tecnologia Jovem Tech"
              style="border-radius: 12px; max-width: 220px; max-height: 180px; object-fit: cover;"
            />
          </q-card-section>
        </q-card-section>
      </q-card>
      <!-- Mascote abaixo do card -->
      <div class="mascote-row flex items-center q-mt-md">
        <img
          src="~/assets/images/mascote.png"
          alt="Mascote JovemTech"
          class="mascote-img"
        />
        <div class="mascote-info q-ml-md">
          <span class="mascote-nome">Robotinik</span>
          <div class="mascote-criador">by kikanjuun</div>
        </div>
      </div>
    </div>

    <!-- Centro: Espaço vazio -->
    <div class="col"></div>

    <!-- Direita: Botão e imagem -->
    <div class="col-3 home-info-right flex flex-column items-center">
      <q-btn
        color="accent"
        label="Ação"
        class="info-btn q-mb-md"
        style="width: 100%;"
      />
      <img
        src="#"
        alt="Informação"
        class="info-img"
      />
    </div>
  </div>
</template>

<script setup>
// Não há necessidade de lógica JS para este card
</script>

