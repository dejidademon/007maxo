<template>
    <q-card dark style="width: 600px; height: 725px;">
      <form  @submit.prevent="submitForm">
<q-card-section>
          <div  class="text-h4 header">Add To List</div>
        </q-card-section>

<div class="q-pb-md">
<q-card-section>
<q-input dark standout v-model="shopToSubmit.name" ref='name' :rules="[val => !!val || 'Field is required']" label="Name " />
</q-card-section>

<q-card-section>
<q-input type="textarea" v-model="shopToSubmit.description" dark standout label="Description" />
</q-card-section>

<q-card-section>
<q-input dark v-model="shopToSubmit.id" standout :rules="[val => !!val || 'Field is required']" label="ID" />
</q-card-section>

<q-card-section class="q-pt-none">
  <q-input
        filled
        dark
        v-model="shopToSubmit.price"
        label="Price"
        mask="#.##"
        fill-mask="0"
        reverse-fill-mask
        
      />
</q-card-section>

<div class="text-h4 header text-center q-pt-none">Image</div>
<q-card-section class="q-pt-md column justify-center">



 <input

      multiple
      @change="onFilePicked"
      type="file"
      ref='inputFile'
      accept=".jpg, image/*"
      
      
    />
    (Max 900KB)
</q-card-section>

</div>

      <q-card-actions class="absolute-top q-pa-md" align="right">
        <q-btn size="20px" color="red" icon="close" flat dense v-close-popup />
      </q-card-actions>
      <q-card-section class="absolute-bottom q-pa-md">
      <q-card-actions class="absolute-bottom q-pa-md" align="right">
      <q-btn size="20px" color="green" type="submit" label="Submit"  />
      </q-card-actions>
</q-card-section>
      </form>
    </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import { firebaseDb } from "boot/firebase"
import storeShop from '../../store/store-shop'
    export default {
      data() {

      
      return {
        shopToSubmit: {
          "name": '',
          "description": '',
          "id": '',
          "image": null,
          "price": '',
          "url": ''
        }
      }
    },
 
    methods: {
      ...mapActions('shop', ['addShop']),
      submitForm() {
        this.$refs.name.validate()
        if (!this.$refs.name.hasError) {
          this.submitShop()
        }
      },
      submitShop() {
        this.addShop(this.shopToSubmit)
        this.$emit('close')
      },
      inputClicked() {
       let inputFile = this.$refs.inputFile
       inputFile.click();
      },
   onFilePicked(event) {
     const files = event.target.files
     console.log(files)
     let filename = files[0].name
     if (filename.lastIndexOf('.') <= 0) {
       return alert('Add a valid file Please')
     }
     const fileReader = new FileReader()
     console.log(fileReader)
     fileReader.addEventListener('load', () => {
       this.shopToSubmit.image = fileReader.result
  
     })
     fileReader.readAsDataURL(files[0])
  },

    }
    }
</script>

<style lang="scss" scoped>
.header {
  font-family: SpyFont;
}
</style>