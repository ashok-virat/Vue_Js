<template>
    <div class='mt-5'>
      <b-container fluid>
        <b-row>
      <b-col md="4" v-for="(value,index) in val" :key="index">
     <b-card class='card' text-variant="white" >
       {{value.name}}
  <b-card-text class='text-primary'>
   {{value.status}}
  </b-card-text>
  <b-button href="#" variant="primary">Go somewhere</b-button>
</b-card>
      </b-col>
        </b-row>
      </b-container>
    </div>

</template>

<script>
import { bus } from './../../main'
export default {
  name: 'ChildComponent',
  data () {
    return {
      title: 'childComponent',
      val: ''
    }
  },
  created () {
    bus.$on('changeIt', (data) => {
      console.log(data)
      this.val = data
    })
  }
}
</script>

<style scoped>
.card {
  background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
}
</style>
