import Vue from "vue"
import { uid } from 'quasar'
import { firebaseDb } from "boot/firebase"

const state = {
  shops: {
    // 'ID1': {
    //   description: "Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elitsad.",
    //   name: "Maxo max T-shirt",
    //   id: "5765641470117",
    //   image: "https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-10557-ad_men--2x1--940.jpg",
    //   price: "$12.00"
    // },
    // 'ID2': {
    //     description: "Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elitsad.",
    //     name: "Maxo max T-shirt",
    //     id: "5765641470117",
    //     image: "https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-10557-ad_men--2x1--940.jpg",
    //     price: "$12.00"
    //   },
    //   'ID3': {
    //     description: "just a shirt",
    //     name: "Maxo max T-shirt",
    //     id: "5765749047461",
    //     image: "https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-10557-ad_men--2x1--940.jpg",
    //     price: "$12.00"
    //   }
  }
}

const mutations = {
  deleteShop(state, key) {
    Vue.delete(state.shops, key)
  },
  addShop(state, payload) {
    Vue.set(state.shops, payload.id, payload.shop)
  }
}

const actions = {
 
  deleteShop({dispatch}, key) {
    dispatch('fbDeleteShop', key)
  },
  addShop({ dispatch }, shop) {
    let shopID = uid()
    let payload = {
      id: shopID,
      shop: shop
    }
    dispatch('fbAddShop', payload)
    dispatch('fbAddUrl', payload)
  },

  fbReadData({commit}) {
   
    let allShops = firebaseDb.ref('shop')

    //child added
    allShops.on('child_added', snapshot => {
      let shop = snapshot.val()
      let payload = {
        id: snapshot.key,
        shop: shop
      }
      commit('addShop', payload)
    })

    //chind removed
    allShops.on('child_removed', snapshot => {
      let shopId = snapshot.key
      commit('deleteShop', shopId)
    })
  },
  //https://maxo-14a51.firebaseio.com/shop/   .json
  fbAddShop({}, payload) {
    let shopRef = firebaseDb.ref('shop' + '/' + payload.id)
    shopRef.set(payload.shop)
  },
  fbAddUrl({}, payload) {
    let shopRef = firebaseDb.ref('shop' + '/' + payload.id)
    let newUrl = "https://maxo-14a51.firebaseio.com/shop/" + payload.id +".json"
    shopRef.update({
     url: newUrl
    })
  },
  fbDeleteShop({}, shopId) {
    let shopRef = firebaseDb.ref('shop' + '/' + shopId)
    shopRef.remove()
  }
}

const getters = {
  shops: (state) => {
    return state.shops
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
