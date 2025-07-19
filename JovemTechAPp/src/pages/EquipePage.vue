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
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="my-card">
            <img src="/src/assets/images/equipeimg/cauan.png" alt="Cauan Guerreiro" />
            <q-card-section>
              <div class="text-h6">Cauan Guerreiro</div>
              <div class="text-subtitle2">Professor</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div>Estudante de Ciência da Computação | Desenvolvimento de Software | Cibersegurança | Programação | Python | HTML5 | CSS | JavaScript
                <br><br>
                Sou estudante de Ciência da Computação com foco em Desenvolvimento Web, e estou constantemente aprimorando minhas habilidades práticas.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="my-card">
            <img src="/src/assets/images/equipeimg/nicolas.png" alt="Cauan Guerreiro" />
            <q-card-section>
              <div class="text-h6">Nicolas Dimer</div>
              <div class="text-subtitle2">Professor</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nam ipsa hic similique debitis, distinctio alias, eaque sed fuga recusandae facere magni veritatis impedit facilis ratione. Quod nam recusandae sapiente?
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="equipe-section">
      <div class="equipe-title text-h5 q-mb-md">Monitores</div>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/avatar3.jpg" alt="Monitor 1" />
            <q-card-section>
              <div class="text-h6">Monitor 1</div>
              <div class="text-subtitle2">Monitor</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div>Descrição do monitor.</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="equipe-section">
      <div class="equipe-title text-h5 q-mb-md">Mídia</div>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/avatar4.jpg" alt="Mídia 1" />
            <q-card-section>
              <div class="text-h6">Mídia 1</div>
              <div class="text-subtitle2">Mídia</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div>Descrição da pessoa da mídia.</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ...existing code removed, pois não há mais arrays dinâmicos...
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
  border-bottom: 2px solid #8c52ff;
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