<template>
  <q-page >
    <img id="a" src="../assets/MaxoGifAnimation.gif">

 <transition  name="popout">
<div  
  v-if= "showEnter"
  class= "EntBtn absolute-center">

     <q-btn
        v-if="!show"
        @click="show = !show"
        color="pink-3"
        push
        id="enterBtn"
        class="btn"
        label="ENTER"
        glossy
      />
</div>
</transition>

    <div class="q-gutter-md text-white absolute-center everything">
      
     
    

      <transition name="fade">
        <div class="wholeInput" v-if="show">
          <vue-typer :repeat='0' class="h2" pre-type-delay='2500' text='Input Code:'></vue-typer>
         
          <q-input
            @keydown.enter="navigate()"
            @keyup="checkingPassword"
            color="red"
            outlined
            clearable
            class="text-white input"
            bg-color="primary"
            dark
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
          >
          
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

        <transition name="fade">
          <q-btn 
          color="green"  
          v-if="perms" 
          @click="navigate"
           clickable  
           class="q-mt-md float-right">
            Enter
          </q-btn>
    </transition>
        </div>
      </transition>
        <q-page-container>
      <router-view />
    </q-page-container>
    </div>
      
  </q-page >
</template>

<script>
import router from '../router/routes.js'
  import { openURL } from 'quasar'
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
export default {
  data() {

    return {
      password: "",
      isPwd: true,
      show: false,
      text: "",
      perms: "",
      showEnter: false,
    }
  },
  computed: {
 ...mapGetters('auth', ['passwords']),
  },
  methods: {
    ...mapActions('auth', ['stateModifiers', 'handleStateChange']),

    navigate() {
      if (this.perms == 'customer') {
        this.handleStateChange(this.perms)
      }
      else if (this.perms == 'admin') {
        this.handleStateChange(this.perms)
      }
   },
    showEnterBtn() {
     setTimeout(() => this.showEnter = true, 7500);
    },
    checkingPassword() {
      if (this.password == this.passwords.cusPass.cusPass) {
        this.perms = "customer"
      }
      if (this.password == this.passwords.adminPass.adminPass) {
        this.perms = "admin"
      }
      return this.perms
    }
    },

  mounted() {
    this.showEnterBtn()
    this.stateModifiers()
    this.handleStateChange()
  }

}
</script>

<style>

#a {
position:fixed;
z-index: -1;
background-color: #4c484a;

}


.fade-enter-active {
  animation: bounceIn 2s;
 
}



@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
  }
}
.input {
  width: 600px;
  
  margin: auto;
}
/* Small screen */
@media screen and (max-width: 812px) {
  .EntBtn {
    padding-left: 40%;
  }
    #a {
    transform: scaleY(3);
    width: 100%;
    height: 100%;
    
  }
    .input{
      width: 300px;
    }
    .h2{
      font-size: 35px !important;
    }
    .wholeInput {
  margin-bottom: 510px;
}
#enterBtn {
  height: 60px;
  width: 80px;
}
  }
  /* Big screen */
  @media screen and (min-width: 812px) {
     .EntBtn {
    padding-left: 30%;
  }
  #enterBtn {
  height: 30vh;
  width: 15vh;
  font-size: 3vh;
}
  #a {
  transform: scale(1);
  width: 100%;
  height: 100%;
 }
.wholeInput {
  margin-bottom: 50%;
}
  }
.h2 {
  margin-bottom: 0px;
  text-align: center;
  text-shadow: 2px 2px black;
  font-family: SpyFont_WithLine;
   font-size: 55px;
}

.btn {
  font-family: SpyFont_WithLine;
  text-shadow: 2px 2px black;
  max-height: 100px;
  max-width: 300px;
}

.EntBtn {
   display: flex;
    justify-content: center;
    margin-top: 0vh;
    font-family: SpyFont
    }
.typed[data-v-302772ec] {
  color: white;
}

.popout-enter-active {
  animation: popout 1s;
   position: absolute;
}
@keyframes popout {
  0% {
    opacity: 0;
    scale: 0;
    padding-left: 0%;
    
  }

  80% {
    opacity: 1;
  
  }
}
</style>
