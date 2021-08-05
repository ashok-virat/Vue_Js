<template>
    <div><h2>{{this.val}}</h2>
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
 h2 {
     color: 'blue'
 }
</style>
