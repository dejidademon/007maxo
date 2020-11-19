<template>
  <q-page v-bind="call" class="all-pg1 q-pa-md">

     

 <div v-bind="passCall" style="color: red;  padding-bottom: 10px;" class=" text-center row justify-between head">
   <q-btn @click="this.return" color="red" class=" rtn-btn" icon="keyboard_return" push round ></q-btn>
<q-btn rounded flat clickable color="blue" icon="shopping_cart" round class="snipcart-checkout">
      <span class="snipcart-total-price">$0.00</span>
    </q-btn>
</div>

<div class="row q-pt-lg justify-between">
    
<div>
<youtube-player />
</div>


   
    <admin-left-shop />


</div>

<div class="AllInputs">

  <h1 style="color: red; font-size: 5vh; text-align: center;" class="name Line">Passwords</h1>
  <!-- Admin -->
    <form @submit.prevent="saveAdmin">
  <q-input
        v-model="adminPass"
        class="q-pb-md"
        bg-color="black"
        dark
        color="red"
        filled
        :type="visPass ? 'password' : 'text'"
        label="Admin Password"
      >
      <template v-slot:append>
              <q-icon
                :name="visPass ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="visPass = !visPass"
              />
            </template>
        <q-btn flat type="submit" color="pink-4" icon="check_circle"></q-btn>
      </q-input>
    </form>

<!-- Customer -->

    <form @submit.prevent="saveCus">
    <q-input
    v-model="cusPass"
       class="q-pb-md"
        bg-color="black"
        dark
        :type="visPass2 ? 'password' : 'text'"
        color="red"
        filled
        label="Customer Password"
      >
            <template v-slot:append>
              <q-icon
                :name="visPass2 ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="visPass2 = !visPass2"
              />
            </template>
        <q-btn flat type="submit" color="pink-4" icon="check_circle"></q-btn>
      </q-input>
    </form>
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
import { mapGetters } from 'vuex'
import Vue from 'vue'
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'
export default {
  data() {
    let call = this.fbReadData()
    let passCall = this.stateModifiers()
    return{
      showAddShop: false,
      call: call,
      passCall: passCall,
      showShopList: false,
      visPass: true,
      visPass2: true,
      adminPass: "",
      cusPass: ""
      
      
      
    }
  },
  computed: {
 ...mapGetters('auth', ['passwords']),
  },
    methods: {
      ...mapActions('shop', ['fbReadData']),
      ...mapActions('auth', ['getCus', 'getAdmin', 'stateModifiers']),
     
      saveCus() {
        this.getCus(this.cusPass)
      },

      saveAdmin() {
        this.getAdmin(this.adminPass)
      },

      return() {
        this.$router.push("/")
      }
      },
  components: {
    "admin-left-shop": require("src/components/Modules/AdminLeftShop.vue").default,
    "add-shop": require("src/components/Modules/AddShop.vue").default,
    "youtube-player": require("src/components/Modules/YoutubePlayer.vue").default
  },

};
</script>

<style>
.AllInputs {
  margin-top: 1%;
}
::-webkit-scrollbar {
  width: 0 !important;
}
@media screen and (max-width: 812px) {

  .AllInputs {
      width: 98%;
  }
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
    .AllInputs {
      width: 48%;
  }
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
.Line {
  font-family: SpyFont_WithLine;
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