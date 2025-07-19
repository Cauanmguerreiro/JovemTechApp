<template>
  <div class="q-pa-lg ">
    <h1 class="text-h4 q-mb-md">Perfil</h1>

  <q-card class="q-mb-md row full-width" style="max-width: 1000px; margin: 0 auto;">

<q-card-section class="col-12 col-md-4 border-right q-pr-md">
  <div class="column items-center q-gutter-sm">
    <q-avatar size="150px">
      <img
        src="https://png.pngtree.com/png-clipart/20230817/original/pngtree-round-kid-avatar-boy-face-picture-image_8005285.png"
        style="object-fit: cover"
      />
    </q-avatar>
    <div class="text-h5 text-center">
    {{nome}}
    </div>
      <q-btn color="accent" label="Editar perfil" />
  </div>
</q-card-section>



  <q-card-section class="col-12 col-md-8 q-pl-md">
    <div class="text-h6">Informações de perfil</div>

    <div class="text-subtitle2 text-accent q-mt-sm">
      E-mail
      <div class="text-body1 text-dark q-mt-xs">
        {{email}}
      </div>
    </div>
    <div class="text-subtitle2 text-accent q-mt-sm">
      Data de nascimento
      <div class="text-body1 text-dark q-mt-xs">
       {{ data_nascimento }}
      </div>
    </div>
    <div class="text-subtitle2 text-accent q-mt-sm">
      Tipo
      <div class="text-body1 text-dark q-mt-xs">
        {{ cargo }}
      </div>
    </div>
    <div class="text-subtitle2 text-accent q-mt-sm">
      Instituição
      <div class="text-body1 text-dark q-mt-xs">
        {{ nomesMap[instituicao] || instituicao }}
      </div>
    </div>
  </q-card-section>

</q-card>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { jwtDecode } from 'jwt-decode'
import { useQuasar } from 'quasar'
import '../css/app.scss'

const nome = ref('')
const email = ref('')
const instituicao = ref('')
const data_nascimento = ref('')
const cargo = ref('')
const $q = useQuasar()


// Função para buscar usuário por ID extraído do token
async function buscarUsuario() {
  try {
    const token = localStorage.getItem('token')
    if (!token) throw new Error('Token não encontrado')

    const decoded = jwtDecode(token)
    const userId = decoded.id || decoded._id || decoded.uid

    const response = await fetch(`http://localhost:3000/usuarios/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

    if (!response.ok) throw new Error('Falha ao buscar usuário')

    const data = await response.json()

    nome.value = data.nome
    email.value = data.email
    data_nascimento.value = data.data_nascimento
    instituicao.value = data.instituicao
    cargo.value = data.cargo

  } catch (err) {
    $q.notify({
      message: 'Erro: ' + err.message,
      color: 'negative',
      position: 'top',
    })
  }
}

const nomesMap = {
  clube_de_maes: 'Clube de Mães',
  uniritter: 'Uniritter',
  
}
// Chama buscarUsuario quando o componente for montado
onMounted(() => {
  buscarUsuario()
})
</script>


