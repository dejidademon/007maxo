<template>
  <q-page class="q-pa-md a">
    <div class="q-gutter-md text-white absolute-center everything">
      
      <q-btn
        v-if="!show"
        @click="show = !show"
        color="light-green-9"
        push
        class="text-center btn"
        label="ENTER"
        size="42px"
        glossy
      />
    

      <transition name="fade">
        <div v-if="show">
          <vue-typer type-delay=100 :repeat='0' class="h2" pre-type-delay=2500 text='Please Input Code:'></vue-typer>
         
          <q-input
            @keydown.enter="navigate()"
            @keyup="checkingPassword"
            standout
            clearable
            class="text-white input"
            bg-color="black"
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
export default {
  data() {
    return {
      password: "",
      isPwd: true,
      show: false,
      text: "",
      correctPassword: "correct",
      adminPassword: "admin",
      perms: "",
    }
  },

  methods: {
    ...mapActions('auth', ['getAcsess']),
    navigate() {
      if (this.perms == "customer") {
        this.$router.push({ name: 'apparel' })
      }
      else if (this.perms == "admin") {
        this.$router.push({ name: 'admin' })
      }
   },

    checkingPassword() {

      if (this.password == this.correctPassword) {
        this.perms = "customer"
        this.$store.dispatch('fbReadData')
      }
      if (this.password == this.adminPassword) {
        this.perms = "admin"
      }
      return this.perms
    }

  }
}
</script>

<style>

.a {
    min-height: 100%;
   background-image: url(../assets/authpage_background.jpg);
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
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
  @media screen and (max-width: 768px) {
    .input{
      width: 300px;
    }
    .h2{
      font-size: 35px !important;
    }
  }
.h2 {
  margin-bottom: 0px;
  text-align: center;
  text-shadow: 2px 2px black;
  font-family: FakeHope;
   font-size: 55px;
}

.btn {
  font-family: FakeHope;
  text-shadow: 2px 2px black;
  height: 100px;
  width: 300px;
}
.typed[data-v-302772ec] {
  color: white;
}
</style>
