<template>
    <q-list>
    
<transition-group name="fade">
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
          <q-item-label class="descrip">
            {{ shop.description }}
            </q-item-label>
        </q-item-section>
</div>
<div class="row absolute-right">
  

      <q-item-section side>
        <q-btn
          class="noLine snipcart-add-item btn2"
          :data-item-id="shop.name"
          :data-item-price="shop.price"
          data-item-url="/apparel"
          :data-item-name="shop.name"
           :data-item-description="shop.description"
          :data-item-image="shop.image"
          data-item-custom1-name="Sizes"
          data-item-custom1-options="Extra Small|Small|Medium|Large|Extra Large"
           glossy
          
          size="30px"
          icon="add_shopping_cart"
          >
          $
{{ shop.price }}
        </q-btn>
      </q-item-section>
        
      
</div>
      </q-item>

</transition-group>
    </q-list>
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('shop', ['shops'])
  },
  methods: {
    onLoad() {
        this.fbReadData()
      }
  }


}
</script>

<style>
.noLine {
  font-family: SpyFont;
}
.descrip {
  font-size: 18px;
}
.fade-enter-active {
   animation: tetris 3s;
}
@keyframes tetris {
  0% {
 
    bottom: 500px;
  }
  100% {

    bottom: 0px;
  }
}
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
  font-family: SpyFont;
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