<template>
  <q-page v-bind="call" class="all-pg1 q-pa-md">

     

 <div style="color: red;  padding-bottom: 10px;" class=" text-center row justify-between head">
   <q-btn @click="this.return" color="red" class=" rtn-btn" icon="keyboard_return" push round ></q-btn>
   Admin Page
<q-btn rounded flat clickable color="blue" icon="shopping_cart" round class="snipcart-checkout">
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
  <q-btn icon="add" class="text-center addBtn q-ma-sm" color="green" @click="showAddShop = true" />
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
@media screen and (max-width: 812px) {
  .snipcart-checkout {
    width: 50px;
    height: 50px;
  }
  .head {
    font-size: 30px;
    flex-wrap: nowrap;
    display: flex;
    justify-content: space-between;
   
  }
  .rtn-btn {
    width: 60px;
    height: 60px;
    font-size: 20px;
  }
  .addBtn {
    width: 80px;
    height: 80px;
    font-size: 30px;
  }
}
@media screen and (min-width: 812px) {
  .head {
    font-size: 70px;
    flex-wrap: nowrap;
  }
  .rtn-btn {
    width: 80px;
    height: 80px;
    font-size: 25px;
  }
  .addBtn {
    width: 120px;
    height: 120px;
    font-size: 40px;
  }
   .snipcart-checkout {
    width: 100px;
    height: 100px;
    font-size: 18px;
    margin-right: 30px;
  }
}
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