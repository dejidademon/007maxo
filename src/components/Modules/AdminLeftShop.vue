<template>

    <q-list>
    

      <q-item  v-for="(shop, key) in shops" clickable :key="key" dark class="items row justify-between shadow-5">
        <div>

        <q-item-section  >
          <q-avatar class="imags" rounded>
          <img :src="shop.image">
          </q-avatar>
        </q-item-section>
        </div>
<div class="q-pa-sm words">
        <q-item-section>
          <q-item-label class="name">
            {{ shop.name }}
            </q-item-label>
        </q-item-section>
          <q-item-section>
          <q-item-label class="text-h7 text-weight-light">
            {{ shop.description }}
            </q-item-label>
        </q-item-section>
</div>

  
<div class="allBtns">

      <q-item-section >
        <q-btn
          enctype="application/json"
          class="noLine snipcart-add-item btn2"
          :data-item-id="shop.name"
          :data-item-price="shop.price"
           :data-item-url="shop.url"
          :data-item-name="shop.name"
           :data-item-description="shop.description"
          :data-item-image="shop.image"
          data-item-custom1-name="Sizes"
          data-item-custom1-options="Extra Small|Small|Medium|Large|Extra Large"
           glossy
          icon="add_shopping_cart"
          >
          $
{{ shop.price }}
        </q-btn>
      </q-item-section>
        

        <q-btn
          @click.stop="promptToDelete(key)"
          class="deleteButton"
          icon="delete_forever"
          color="red"
          push
          glossy
          
          >
        </q-btn>
 
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
@media screen and (max-width: 812px) {
  .allBtns {
     display:flex;
     flex-direction:column;
    align-content: center;

  }
  .words {
    width: 140px;
    word-wrap:break-word;
  }
  .imags {
    width: 80px;
    height: 80px;
  }

    .items {
      width: 350px;
    }
    .name {
     font-size: 17px;
    }
.text-h7 {
  font-size: 13px;
}
    .deleteButton {
      margin-top: 10px;
      max-width: 100px;
      font-size: 13px;
     
    }
    .snipcart-add-item {
      max-width: 150px;
      max-height: 100px;
 
      font-size: 14px;

    }


}
@media screen and (min-width: 812px) {
      .deleteButton {
      margin-top: 10px;
      width: 150px;
      height: 50px;
      font-size: 17px;
      margin-bottom: 5px;
      }
    .snipcart-add-item {
      width: 150px;
      height: 100px;
      
      font-size: 24px;

    }
      .name {
     font-size: 27px;
    }
    .words {
    width: 540px;
    word-wrap:break-word;
  }
    .items {
      width: 825px;
}
 .imags {
    width: 120px;
    height: 120px;
  }
  .allBtns {
     display:flex;
     flex-direction:column;
    align-content: center;

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