<template>
  <div><h3 v-text="title"></h3>
  <button v-on:click="changeTitle">change count</button>
  <ChildComponent :name='value'></ChildComponent>
  </div>
</template>
<script>
import { bus } from './../../main'
import ChildComponent from './ChildComponent.vue'

export default {
  name: 'HomeComponent',
  data () {
    return {
      title: 'Title',
      isDisabled: false,
      value: 'ashok',
      count: 0
    }
  },
  components: {
    ChildComponent
  },
  methods: {
    changeTitle: function () {
      this.count++
      this.isDisabled = true
      this.name = 'change'
      this.title = this.title === 'Title' ? 'Title Changed' : 'Title'
      bus.$emit('changeIt', this.count)
    }
  }
}
</script>

<style scoped></style>
