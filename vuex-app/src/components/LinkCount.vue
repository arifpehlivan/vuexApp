<template>
  <div>
      <h1>Links Count Component</h1>
      <p>Number Of Active Links: {{linkCount}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name:'LinkCount',
    computed:{
        ...mapGetters([
            'linkCount'
        ])
    }
}
</script>

<style>

</style>