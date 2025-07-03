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
      { path: '/home', component: () => import('pages/HomePage.vue'), meta: { requiresAuth: true }},
      { path: '/modulos', component: () => import('pages/ModulosPage.vue'), meta: { requiresAuth: true } },
      { path: '/equipe', component: () => import('pages/EquipePage.vue'), meta: { requiresAuth: true } },
      { path: '/fotos', component: () => import('pages/FotosPage.vue'), meta: { requiresAuth: true } },
      { path: '/sobre', component: () => import('pages/SobrePage.vue'), meta: { requiresAuth: true } },
      { path: '/perfil', component: () => import('pages/PerfilPage.vue'), meta: { requiresAuth: true } },
      { path: '/aula-desenvolvimento-web', component: () => import('pages/AulaDesenvolvimentoWeb.vue'), meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

