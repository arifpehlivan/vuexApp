<template>
  <div id="app">
    <div class="up">
      {{title}}
    </div>
    <div class="down">
      
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'App',
  computed:mapState([
    'title',
  ])
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
