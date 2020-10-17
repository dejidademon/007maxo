<template>
  <q-layout view="lHh lpR lFf">

      <router-view />

  </q-layout>
</template>

<script>

export default {
  data () {
    return { 
      left: false,

      navs: [
  {
    icon: 'list',
    label: 'Admin',
    separator: false,
    to: '/adminapparel'
  },
  {
    icon: 'settings',
    label: 'apparel',
    separator: false,
    to: '/apparel'
  },
  {
    icon: 'settings',
    label: 'checkout',
    separator: false,
    to: '/checkout'
  },
  {
    icon: 'settings',
    label: 'cart',
    separator: false,
    to: '/cart'
  },
  {
    icon: 'shopping_cart',
    label: 'auth',
    separator: false,
    to: '/'
  }

]
    }
  }

}
</script>


<style lang="scss">
  .q-drawer {
    color: black;
    .q-router-link--exact-active {
      color: #ff7b00 !important;
    }
  }
@font-face {
  font-family: FakeHope;
  src: url(../assets/FakeHope.otf);
}
@font-face {
  font-family: SpyFont;
  src: url(../assets/SpyFont.otf);
}
@font-face {
  font-family: SpyFont_WithLine;
  src: url(../assets/SpyFont_WithLine.otf);
}
</style>