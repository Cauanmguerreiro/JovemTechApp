<template>
  <div class="q-pa-lg">
    <h1 class="text-h4 q-mb-md">Módulos</h1>
    <div class="row q-col-gutter-xl">
      <!-- Conteúdo Básico de T.I. -->
      <div class="col-12 col-md-6">
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Conteúdo Básico de T.I.</div>
            <div class="text-body2 q-mt-sm">Fundamentos essenciais para quem está começando na área de tecnologia da informação.</div>
            <q-list bordered separator class="q-mt-md">
              <q-item v-for="(atividade, idx) in atividadesTI" :key="idx">
                <q-item-section>
                  <div class="text-h6">{{ atividade.titulo }}</div>
                  <div class="text-body2">{{ atividade.descricao }}</div>
                </q-item-section>
                <q-item-section side>
                  <q-btn color="primary" label="Acessar" @click="acessarAtividade(atividade)" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <!-- Conteúdo de Programação -->
      <div class="col-12 col-md-6">
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Conteúdo de Programação</div>
            <div class="text-body2 q-mt-sm">Atividades e módulos focados em lógica, algoritmos e desenvolvimento de software.</div>
            <q-list bordered separator class="q-mt-md">
              <q-item v-for="(atividade, idx) in atividadesProg" :key="idx">
                <q-item-section>
                  <div class="text-h6">{{ atividade.titulo }}</div>
                  <div class="text-body2">{{ atividade.descricao }}</div>
                </q-item-section>
                <q-item-section side>
                  <q-btn color="primary" label="Acessar" @click="acessarAtividade(atividade, idx)" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const atividadesTI = ref([])
const atividadesProg = ref([])
const carregando = ref(true)
const erro = ref('')

async function carregarAtividades() {
  carregando.value = true
  erro.value = ''
  try {
    const resp = await fetch('http://localhost:3000/api/atividades')
    if (!resp.ok) throw new Error('Erro ao buscar atividades')
    const atividades = await resp.json()
    atividadesTI.value = atividades.filter(a => a.tipo === 'T.I.')
    atividadesProg.value = atividades.filter(a => a.tipo === 'Programação')
  } catch (e) {
    erro.value = e.message || 'Erro desconhecido'
  }
  carregando.value = false
}

onMounted(carregarAtividades)

function acessarAtividade(atividade, idx) {
  if (atividade.titulo === 'Desenvolvimento Web' || idx === 1) {
    router.push('/aula-desenvolvimento-web')
  } else {
    alert('Acessando: ' + atividade.titulo)
  }
}
</script>

<style scoped>
.q-card {
  max-width: 700px;
  margin: 0 auto 32px auto;
}
@media (max-width: 1024px) {
  .row.q-col-gutter-xl {
    flex-direction: column;
  }
}
</style>
