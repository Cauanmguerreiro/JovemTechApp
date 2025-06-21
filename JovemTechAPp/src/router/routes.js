const routes = [
  {
    path: '/login',
    component: () => import('layouts/LoginPageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/HomeView.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
