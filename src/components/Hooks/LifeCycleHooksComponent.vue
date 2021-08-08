<template>
    <div style="color:white">
          <b-link href="#/homeComponent/brother" class="link" >backHome</b-link>
          <p>{{count}}</p>
    </div>
</template>

<script>
export default {
  name: 'lifeCycleComponent',
  data () {
    return {
      count: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this.$swal.fire(
        'cool',
        'mounted hook triggered',
        'success'
      )
    }, 2000)
    setTimeout(() => {
      this.count = 1
    }, 3000)
    console.log('mounted hook called')
  },
  created () {
    this.$swal.fire(
      'cool',
      'created hook triggered',
      'success'
    )
    console.log('created hook called')
  },
  beforeCreate () {
    console.log('before create called')
  },
  beforeMount () {
    setTimeout(() => {
      this.$swal.fire(
        'cool',
        'beforeMount hook triggered',
        'success'
      )
    }, 1000)
    console.log('before mount called')
  },
  beforeDestroy () {
    console.log('before destroy called')
    this.$swal.fire(
      'cool',
      'beforeDestroy triggered',
      'error'
    )
  },
  destroyed () {
    console.log('destroed called')
    setTimeout(() => {
      this.$swal.fire(
        'oops',
        'component destroyed',
        'error'
      )
    }, 1000)
  },
  beforeUpdate () {
    this.$swal.fire(
      'cool',
      'before update hook triggered',
      'success'
    )
  },
  updated () {
    setTimeout(() => {
      this.$swal.fire(
        'cool',
        'updated hook triggered',
        'success'
      )
    }, 1000)
  }

}
</script>

<style scoped>
.link {
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  font-family: 'Times New Roman', Times, serif;
  margin-left: 5px;
}
</style>
