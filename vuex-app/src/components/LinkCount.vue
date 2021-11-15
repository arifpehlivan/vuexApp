<template>
  <div>
      <h1>Links Count Component</h1>
      <p>Number Of Active Links: {{linkCount}}</p>
      <button v-on:click="deleteLinks">Delete All Links</button>
      <p>{{msg}}</p>
  </div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex';

export default {
    name:'LinkCount',
    data(){
        return{
            msg:''
        }
    },
    computed:{
        ...mapGetters([
            'linkCount'
        ])
    },
    methods:{
        ...mapMutations(['REMOVE_ALL']),
        ...mapActions(['deleteAll']),
        deleteLinks(){
            this.deleteAll().then(()=>{
                this.msg="Deleted All Links"
            })
        }
    }
}
</script>

<style scoped>
button{
    padding: 10px;
    margin-top: 30px;
    background-color: rgb(139, 131, 131);
    width: 100%;
    border: 1px solid lightgreen;
    outline: 0;
    cursor: pointer;
}
</style>