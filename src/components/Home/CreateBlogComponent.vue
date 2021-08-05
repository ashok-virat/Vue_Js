<template>
    <div>
  <b-modal v-model="isOpen">
    <p class="my-4">Hello from modal!</p>
  </b-modal>

    </div>
</template>

<script>
import { bus } from './../../main'
export default {
  name: 'CreateBlog',
  data () {
    return {
      isOpen: false
    }
  },
  mounted () {
    bus.$on('isBlogOpen', (data) => {
      console.log(data)
      this.isOpen = data
    })
  }
}
</script>
