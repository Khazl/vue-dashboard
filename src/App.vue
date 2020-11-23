<template>
  <div id="app">
    <div class="sidebar">
      <the-logo></the-logo>
      <the-navigation></the-navigation>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheLogo from './components/TheLogo.vue';
import TheNavigation from './components/TheNavigation.vue';

export default {
  name: 'App',
  components: {
    TheLogo,
    TheNavigation
  }
}
</script>

<style lang="scss">
  @import "./../node_modules/bulma/css/bulma.min.css";
</style>
