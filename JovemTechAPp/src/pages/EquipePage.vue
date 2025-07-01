<template>
  <div class="equipe-page q-pa-lg">
    <div class="equipe-section">
      <div class="equipe-title text-h5 q-mb-md">Coordenadores</div>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="my-card">
            <img src="/src/assets/images/equipeimg/adriano.png" alt="Adriano Menezes da Silva" />
            <q-card-section>
              <div class="text-h6">Adriano Menezes da Silva</div>
              <div class="text-subtitle2">Coordenador</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div>Professor Universitário de engenharias das disciplinas de Metrologia, Expressão Gráfica, Mecânica dos Sólidos, Resistência dos Materiais, Projetos de Engenharia, Elementos de Mecanismos.</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="equipe-section">
      <div class="equipe-title text-h5 q-mb-md">Professores</div>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4" v-for="prof in professores" :key="prof.nome">
          <q-card class="my-card">
            <img :src="prof.foto" :alt="prof.nome" />
            <q-card-section>
              <div class="text-h6">{{ prof.nome }}</div>
              <div class="text-subtitle2">{{ prof.cargo }}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div>{{ prof.descricao }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="equipe-section">
      <div class="equipe-title text-h5 q-mb-md">Monitores</div>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4" v-for="mon in monitores" :key="mon.nome">
          <q-card class="my-card">
            <img :src="mon.foto" :alt="mon.nome" />
            <q-card-section>
              <div class="text-h6">{{ mon.nome }}</div>
              <div class="text-subtitle2">{{ mon.cargo }}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div>{{ mon.descricao }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="equipe-section">
      <div class="equipe-title text-h5 q-mb-md">Mídia</div>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4" v-for="mid in midia" :key="mid.nome">
          <q-card class="my-card">
            <img :src="mid.foto" :alt="mid.nome" />
            <q-card-section>
              <div class="text-h6">{{ mid.nome }}</div>
              <div class="text-subtitle2">{{ mid.cargo }}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div>{{ mid.descricao }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const professores = ref([
  {
    nome: 'Professora 1',
    cargo: 'Professora',
    foto: 'https://cdn.quasar.dev/img/avatar2.jpg',
    descricao: 'Descrição da professora.'
  }
])
const monitores = ref([
  {
    nome: 'Monitor 1',
    cargo: 'Monitor',
    foto: 'https://cdn.quasar.dev/img/avatar3.jpg',
    descricao: 'Descrição do monitor.'
  }
])
const midia = ref([
  {
    nome: 'Mídia 1',
    cargo: 'Mídia',
    foto: 'https://cdn.quasar.dev/img/avatar4.jpg',
    descricao: 'Descrição da pessoa da mídia.'
  }
])
</script>

<style scoped>
.equipe-page {
  max-width: 1200px;
  margin: 0 auto;
}

.equipe-section {
  margin-bottom: 2rem;
}

.equipe-title {
  border-bottom: 2px solid #0078d4;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.my-card {
  transition: transform 0.2s;
}

.my-card:hover {
  transform: scale(1.05);
}
</style>