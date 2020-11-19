const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: '/',
        name: "auth",
        component: () => import('pages/AuthPage.vue')
      },
      {
        path: '/apparel',
        name: "apparel",
        component: () => import('pages/ApparelPage.vue')
      },
      {
        path: '/adminapparel',
        name: "admin",
        component: () => import('pages/AdminApparelPage.vue')
      },
      {
        path: '/shop',
        name: "shop",
        component: () => import('components/Modules/LeftShop.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
