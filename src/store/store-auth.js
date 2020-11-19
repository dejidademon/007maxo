import Vue from "vue"
import { uid } from 'quasar'
import { firebaseDb } from "boot/firebase"
import { LocalStorage } from 'quasar'
const state = {
  loggedIn: false,

  passwords: {

  }
}

const mutations = {
getCus(state, payload) {
  Vue.set(state.passwords, 'cusPass', payload)
},
getAdmin(state, payload) {
  Vue.set(state.passwords, 'adminPass', payload)
},
setLoggedIn(state, payload) {
  state.loggedIn = payload
}
}

const actions = {
  getAdmin({dispatch}, admin) {
    let payload = {
      adminPass: admin
    }
    dispatch('fbGetAdmin', payload)
  },
  getCus({dispatch}, cus) {
    let payload = {
      cusPass: cus
    }
    dispatch('fbGetCus', payload)
  },

  fbGetAdmin({}, payload) {
    let adminRef = firebaseDb.ref('passwordAdmin' + '/' + 'adminPass')
    adminRef.set(payload.adminPass)
  },

  fbGetCus({}, payload) {
    let cusRef = firebaseDb.ref('passwordCus' + '/' + 'cusPass')
    cusRef.set(payload.cusPass)
  },

  stateModifiers({commit}) {
    let cusPass = firebaseDb.ref('passwordCus')
    let adminPass = firebaseDb.ref('passwordAdmin')
    cusPass.on('child_added', data => {
      let pass = data.val()
      let payload = {
        cusPass: pass
      }
   
      commit('getCus', payload)
    })
    adminPass.on('child_added', data => {
      let pass = data.val()
      let payload = {
        adminPass: pass
      }
 
      commit('getAdmin', payload)
    })
  },

  handleStateChange({commit}, payload) {
    if(payload == "admin") {
      commit('setLoggedIn', 'admin')
      LocalStorage.set('loggedIn', 'admin')
      this.$router.push({name: 'admin'})
    }
    else if(payload == 'customer') {
      commit('setLoggedIn', 'customer')
      LocalStorage.set('loggedIn', 'customer')
      this.$router.push({name: 'apparel'})
    }
    else {
      commit('setLoggedIn', false)
      LocalStorage.set('loggedIn', false)
      this.$router.replace({name: 'auth'})
    }
  }
}

const getters = {
  passwords: (state) => {
    return state.passwords
  },
  
  loggedIn: (state) => {
    return state.loggedIn
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
