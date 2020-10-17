<template>
  <q-page v-bind="call" class="q-pa-md">

     

 <div style="color: red; font-size: 70px; padding: 30px;" class=" text-center row justify-between text-h3 head">
   <q-btn @click="this.return" color="red" class="noLine" icon="keyboard_return" push round size="25px"></q-btn>
   Admin Page
<q-btn rounded flat clickable color="blue" size="20px" icon="shopping_cart" round class="snipcart-checkout">
      <span class="snipcart-total-price">$0.00</span>
    </q-btn>
</div>

<div class="row q-pt-lg justify-between">
    
<div>
<youtube-player />
</div>

<div class="q-pt-lg ">
    <admin-left-shop />
    </div>

</div>


<div class="text-center q-pa-md">
  <q-btn icon="add" class="text-center q-mb-lg" color="green" @click="showAddShop = true" size="40px" />
</div>

<q-dialog v-model="showAddShop">
<add-shop @close="showAddShop = false"/>
  </q-dialog>

  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import { openURL } from "quasar";
import Vue from 'vue'
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'
export default {
    methods: {
      ...mapActions('shop', ['fbReadData']),
      
      return() {
        this.$router.push("/")
      }
      },
  components: {
    "admin-left-shop": require("src/components/Modules/AdminLeftShop.vue").default,
    "add-shop": require("src/components/Modules/AddShop.vue").default,
    "youtube-player": require("src/components/Modules/YoutubePlayer.vue").default
  },
  data() {
    let call = this.fbReadData()
    return{
      showAddShop: false,
      call: call,


      
    }
  }
};
</script>

<style>
.noLine {
  font-family: SpyFont;
}
html {
     background: url(../assets/bullets_falling.gif) no-repeat center fixed; 
        background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
   min-height: 100%;
}
.head {
  font-family: SpyFont_WithLine;
}

</style>