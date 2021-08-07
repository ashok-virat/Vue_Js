export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      name: '',
      number: '',
      show: false
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
    },
    onReset () {
      this.email = ''
      this.password = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
