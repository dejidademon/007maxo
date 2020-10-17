import { firebaseAuth } from 'boot/firebase'

const state = {

}

const mutations = {

}

const actions = {
getAcsess({}) {
    firebaseAuth.signInWithCustomToken('correcttoken')
    .then(response => {

    })
    .catch(error => {
        console.log('error.message:', error.message)
    })
}
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
