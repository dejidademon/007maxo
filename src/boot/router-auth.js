import { LocalStorage } from 'quasar'

export default ({ router }) => {
  router.beforeEach((to, from, next) =>{
    let loggedIn = LocalStorage.getItem('loggedIn')
    if (!loggedIn && to.path !== '/') {
      next('/')
    }
    if (loggedIn == 'customer' && to.path == '/adminapparel') {
      next('/apparel')
    }
    else {
    next()
    }
  })
}
