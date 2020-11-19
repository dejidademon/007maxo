<template>
  <q-page v-bind="call" class="q-pa-md">

     

 <div style=" padding-bottom: 10px;" class=" text-center row justify-between head">
   <q-btn @click="this.return" color="red" class=" rtn-btn" icon="keyboard_return" push round ></q-btn>
  Welcome
<q-btn rounded flat clickable color="blue" icon="shopping_cart" round class="snipcart-checkout">
      <span class="snipcart-total-price">$0.00</span>
    </q-btn>
</div>

<div class="row q-pt-lg justify-between">
    
<div>
<youtube-player />
</div>



    <left-shop />



</div>


  </q-page>
</template>


<script>
import { mapActions } from 'vuex'
export default {
  methods: {
        ...mapActions('shop', ['fbReadData']),
        return() {
        this.$router.push("/")
      }
  },
  data() {
   let call = this.fbReadData()
    return {
      call: call
    }
  },

  components: {
    "left-shop": require("src/components/Modules/AdminLeftShop.vue").default,
     "youtube-player": require("src/components/Modules/YoutubePlayer.vue").default
  },
};
</script>

<style>
@media screen and (max-width: 812px) {
  .snipcart-checkout {
    width: 50px;
    height: 50px;
  }
  .head {
    font-size: 3px;
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

html {
     background: url(../assets/bullets_falling.gif) no-repeat center fixed; 
        background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
   min-height: 100%;
}
.head {
  font-family: SpyFont_WithLine;
    background: linear-gradient( #525252, #eaeaea, #525252);
  font-style: italic;
  color: transparent;
  background-clip: border-box;
    flex-wrap: nowrap;
    display: flex;
    justify-content: space-between;
  -webkit-background-clip: text;
  font-weight: 600;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: black;
}

</style>