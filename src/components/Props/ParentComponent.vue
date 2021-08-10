<template>
    <div>
        <h2 >ParentCompponent</h2>
        <p v-if='childMessage.length'>Message received from child component : {{childMessage}}</p>
        <ChildComponentProps :count="count"  v-on:increment="count++" v-on:childToParent='onChildClick'/>
                  <b-link href="#/homeComponent/brother" class="link" >backHome</b-link>
    </div>
</template>

<script>
import ChildComponentProps from './ChildComponentProps.vue'
export default {
  name: 'parentComponent',
  components: {ChildComponentProps},
  data () {
    return {
      childMessage: '',
      count: 0
    }
  },
  methods: {
    onChildClick (value) {
      this.childMessage = value
    }
  }
}
</script>
