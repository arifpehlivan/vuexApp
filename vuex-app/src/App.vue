<template>
  <div id="app">
    <div class="up">
      <h2>{{title}}</h2>
      <form @submit.prevent="addLink">
        <input class="link-input" type="text" placeholder="Add Link" v-model="newLink"/>
      </form>
      <ul>
        <li v-for="(link,index) in links" :key="index">{{link}}
        <button v-on:click="deleteLinks(index)" class="rm">Delete</button>
        </li>
      </ul>
    </div>
    <div class="down">
      <link-count/>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
import LinkCount from './components/LinkCount.vue';


export default {
  name: 'App',
  data(){
    return{
      newLink:''
      }
  },
  components:{
    LinkCount
  },
  // computed:mapState([
  //   'title',
  // ])
  computed:{
    ...mapState([
      'title',
      'links'
    ])
  },
  methods:{
    ...mapMutations([
      'ADD_LINK'
    ]),
    addLink:function(){
      this.ADD_LINK(this.newLink)
      this.newLink=''
    },
    ...mapActions([
      'deleteLink'
    ]),
    deleteLinks:function(link){
      this.deleteLink(link)
    }
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

input{
  border:none;
  padding: 20px;
  width: calc(100%-40px);
  box-shadow: 0 5px 5px lightgray;
  margin-bottom: 50px;
  outline: none;
}

.rm{
  float: right;
  text-transform: uppercase;
  font-size: .8em;
  background: rgb(182, 9, 9);
  padding: 5px;
  color: #5a4304;
  cursor:pointer;
}

</style>
