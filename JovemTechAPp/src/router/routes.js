const routes = [
  {
    path: '',
    component: () => import('layouts/LoginPageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    component: () => import('layouts/HomeView.vue'),
    children: [
      { path: '/modulos', component: () => import('pages/ModulosPage.vue') },
      { path: '/equipe', component: () => import('pages/EquipePage.vue') },
      { path: '/fotos', component: () => import('pages/FotosPage.vue') },
      { path: '/sobre', component: () => import('pages/SobrePage.vue') },
      { path: '/perfil', component: () => import('pages/PerfilPage.vue') },
      { path: '/aula-desenvolvimento-web', component: () => import('pages/AulaDesenvolvimentoWeb.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

