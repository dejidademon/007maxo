<template>

    <q-list class="list">
    
      <q-btn class="animate__animated animate__fadeInRight" clickable @click="toggled = !toggled" glossy push id="dropDwn">
        <div class="absolute-center">SHOP</div>
      </q-btn>

 
<transition name = "fallDown">
    <div v-if="toggled">
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
          :data-item-id="shop.id"
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
    </div>
    </transition>
    </q-list>

</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import { LocalStorage } from 'quasar'
let loggedIn = LocalStorage.getItem('loggedIn')
export default {
  data() {
        
        return {
          toggled: false
        }
  },
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
    },

 
},

}


</script>

<style>

.fallDown-enter-active {
  animation: fallDown 2s;
position: relative;

}

.fallDown-leave-active {
  animation: fallDown 2s reverse;
  position: relative;
}

@keyframes fallDown {
  0% {
    top: -20%;
    opacity: 0;
  }

  100% {
    top: 0;
    opacity: 1;
  }
}

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
  .list {
    padding-top: 3%;
    width: 100%;
  }
    .items {
    width: 99%;
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
      .list {
         width: 100%;
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

 .imags {
    width: 120px;
    height: 120px;
  }
  .allBtns {
     display:flex;
     flex-direction:column;
    align-content: center;

  }

  .list {
    width:51%
  }

}


.items {
  background-color: rgba(122, 122, 122, 0.6);

}
.name {
  /* background: linear-gradient( #6e6e6e, #eaeaea, #270a0a); */
  font-style: italic;
  color: linear-gradient( #6e6e6e, #eaeaea, #270a0a);
  background-clip: border-box;
  -webkit-background-clip: text;
  font-family: SpyFont;
  font-weight: 500;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: black;
  
}
.btn2 {
  background-color:#f86afd;
}

.text-amber {
    color: #2196f3 !important;
}
#dropDwn {
  background-color: #f86afd;
  color: white;
  width: 100%;
  height: 5vh;
  font-family: SpyFont;
  font-size: 3vh;
  padding: 0px;
  margin: 0px;


}
</style>