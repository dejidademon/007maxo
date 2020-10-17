<template>

    <q-list>
    

      <q-item  v-for="(shop, key) in shops" clickable :key="key" dark class="items shadow-5">
        <q-item-section  thumbnail class="q-pa-md">
          <q-avatar size="100px" rounded>
          <img :src="shop.image">
          </q-avatar>
        </q-item-section>
<div class="q-pa-lg" style="width: 400px;">
        <q-item-section>
          <q-item-label class="tit text-h5 name">
            {{ shop.name }}
            </q-item-label>
        </q-item-section>
          <q-item-section>
          <q-item-label class="text-h7 text-weight-light">
            {{ shop.description }}
            </q-item-label>
        </q-item-section>
</div>
<div class="row absolute-right">
  

      <q-item-section side>
        <q-btn
          class="buy-button  snipcart-add-item btn2"
          :data-item-id="shop.id"
          :data-item-price="shop.price"
          data-item-url="/adminapparel"
          :data-item-name="shop.name"
           :data-item-description="shop.description"
          :data-item-image="shop.image"
          glossy
          
          size="30px"
          icon="add_shopping_cart"
          >
          $
{{ shop.price }}
        </q-btn>
      </q-item-section>
        
        <q-item-section side>
        <q-btn
          @click.stop="promptToDelete(key)"
          class="deleteButton"
          icon="delete_forever"
          color="red"
          push
          glossy
          size="30px"
          >
        </q-btn>
      </q-item-section>
      
</div>
      </q-item>

    </q-list>

</template>

<script>
import { mapActions } from 'vuex'

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('shop', ['shops'])
  },

  methods: {
    ...mapActions('shop', ['deleteShop'] ),

    promptToDelete(key) {
      this.$q.dialog({
        dark: true,
        title: 'Confirm',
        message: 'Do you really want to delete this item?',
        cancel: true,
        persistent: true
      }).onOk(() => {
       this.deleteShop(key)
    })
    }
  },
 
}



</script>

<style>
.tit {
  font-family: SpyFont_WithLine;
  
}
.gs {
  padding-top: 60px;
}
@media screen and (max-width: 812px) {
.items {
  width: 325px;
}
.name {
  font-size: 19px;
}
.text-h7 {
  font-size: 13px;
}

}
@media screen and (min-width: 812px) {
.items {
  width: 800px;
}
.name {
  font-size: 27px;
}

}
.items {
  background-color: rgba(122, 122, 122, 0.6);

}
.name {
  background: linear-gradient( #6e6e6e, #eaeaea, #270a0a);
  font-style: italic;
  color: transparent;
  background-clip: border-box;
  -webkit-background-clip: text;
  font-weight: 500;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: black;
  
}
.btn2 {
  background-color: green;
}

.text-amber {
    color: #2196f3 !important;
}
</style>