<template>
  <div id="app">
    <div class="up">
      <h2>{{title}}</h2>
      <ul>
        <li v-for="(link,index) in links" :key="index">{{link}}</li>
      </ul>
    </div>
    <div class="down">
      
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'App',
  // computed:mapState([
  //   'title',
  // ])
  computed:{
    ...mapState([
      'title',
      'links'
    ])
  }
}
</script>

<style scoped>
body{
  background-color: #dfc57e;
  margin: 0;
  height: 100%;
}

.app{
  display: grid;
  grid-template-columns: repeat(2,50);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}

.up, .down{
  padding: 30px;
}

ul{
  list-style-type: none;
  padding: 0;
}

ul li{
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

.down{
  grid-area: right;
  background-color: #dfc57e;
}

</style>
