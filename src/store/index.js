import Vue from 'vue'
import Vuex from 'vuex'
import VueTyperPlugin from 'vue-typer'
import shop from './store-shop'
import VueYoutube from 'vue-youtube'
import auth from './store-auth'
import VideoBackground from 'vue-responsive-video-background-player'
import { Plugin } from 'vue-responsive-video-background-player'

Vue.use(Plugin);
Vue.component('video-background', VideoBackground);
Vue.use(Vuex)
Vue.use(VueTyperPlugin)
Vue.use(VueYoutube)
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      shop,
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
