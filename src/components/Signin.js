import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Signin',
  mixins: [validationMixin],
  data () {
    return {
      show: false,
      form: {
        email: '',
        password: '',
        userName: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      userName: {
        required,
        minLength: minLength(2)
      }
    }
  },
  methods: {
    validateState (name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    onSubmit (e) {
      e.preventDefault()
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      this.$swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'success',
        title: 'Signed in successfully'
      })
      this.$store.commit('setAuthentication', true)
      this.$router.push(`/homecomponent/${this.form.userName}`)
    },
    onReset () {
      this.form.email = ''
      this.form.password = ''
      this.form.userName = ''
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
