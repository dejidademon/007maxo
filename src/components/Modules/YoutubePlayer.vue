<template>
  <div class="animate__animated animate__fadeInLeft youtube">
    <youtube
      
      :video-id="vid.url"
      :player-vars="playerVars"
    >

    </youtube>
    <form v-if="!hide" @submit.prevent="saveUrl">
      <q-input
        dark
        v-model="videos"
        color="red"
        class="youtubeSearch"
        filled
        label="Youtube URL (just the last part)"
      >
        <q-btn type="submit" flat icon="search"></q-btn>
      </q-input>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { firebaseDb } from "boot/firebase"
import storeShop from '../../store/store-shop'
import { LocalStorage } from 'quasar'
const youtubeUrl = firebaseDb.ref("youtubeUrl")
const loggedIn = LocalStorage.getItem('loggedIn')
export default {
  data() {
    return {
      playerVars: {
        autoplay: 0
      },
      videos: "",
      hide: false

    }
  },
    computed: {
    ...mapGetters('shop', ['vid']),

  },
  methods: {
     ...mapActions('shop', ['replaceUrl']),

    saveUrl() {
      this.replaceUrl(this.videos)
      this.vid.url = this.videos
    },

    hideForm() {
      if (loggedIn == 'customer') {
        this.hide = true
      }
      else if (loggedIn == 'admin') {
        this.hide = false
      }
      else {
        this.hide = false
      }
    }

  },
  mounted() {
    this.hideForm()
  }
}
</script>

<style>
.youtubeSearch {
  background-color: black;
}
@media screen and (min-width: 812px) {
iframe {
  width:  47vw;
  height: 25vw;
}
}
@media screen and (max-width: 812px) {
iframe {
  width:  92vw;
  height: 40vh;
}
}
</style>