<template>
  <div class="youtube">
    <youtube-media
      @ready="getUrl"
      :video-id="this.videoId"
      player-width="820"
      player-height="540"
      :player-vars="{ autoplay: 1 }"
    ></youtube-media>
    <!-- <form @submit.prevent="submitUrl">
      <q-input
        dark
        v-model="userUrl"
        color="red"
        class="youtubeSearch"
        filled
        label="Youtube URL (just the last part)"
      >
        <q-btn type="submit" flat icon="search"></q-btn>
      </q-input>
    </form> -->
  </div>
</template>

<script>
import Vue from "vue"
import VueYouTubeEmbed from "vue-youtube-embed"
import { mapActions } from "vuex"
import { firebaseDb } from "boot/firebase"
const youtubeUrl = firebaseDb.ref("youtubeUrl")
Vue.use(VueYouTubeEmbed);
export default {
  data() {
    return {
      videoId: '4LNQ3gVgRHY',
      userUrl: "",
    }
  },
  methods: {
    // submitUrl() {
    //   this.saveUrl(this.userUrl);
    // },

    saveUrl(video) {
      const videos = {
        video: video,
      }
      const result = videos.video;
      youtubeUrl.set(videos)
      this.videoId = result

    },
    getUrl() {

     
 

      
      // console.log(this.result)
     
     
    } 
  },
}
</script>

<style>
.youtubeSearch {
  background-color: black;
}
</style>