import { bus } from './../../main'
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'CreateBlog',
  mixins: [validationMixin],
  data () {
    return {
      isOpen: false,
      selectedFile: '',
      isEdited: false,
      id: '',
      form: {
        title: '',
        status: ''
      }
    }
  },
  mounted () {
    bus.$on('editStory', (data) => {
      this.isOpen = true
      this.selectedFile = data.selectedFile
      this.form.title = data.title
      this.form.status = data.status
      this.isEdited = true
      this.id = data.id
    })
    bus.$on('isBlogOpen', (data) => {
      this.isOpen = data
    })
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(3)
      },
      status: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    closeModal: function () {
      this.form.title = ''
      this.form.status = ''
      this.selectedFile = ''
      this.$v.form.title.$reset()
      this.$v.form.status.$reset()
      this.isOpen = false
    },
    fileSelected (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.selectedFile = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    validateState (name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    onSubmit () {
      if (this.selectedFile) {
        this.$v.form.$touch()
        this.$v.form.$touch()
        if (this.$v.form.$anyError) {
          return
        }
        let blogData = {
          title: this.form.title,
          status: this.form.status,
          img: this.selectedFile
        }
        if (this.isEdited) {
          blogData.id = this.id
        }
        bus.$emit('newBlog', blogData)
        this.form.title = ''
        this.form.status = ''
        this.selectedFile = ''
        this.$v.form.title.$reset()
        this.$v.form.status.$reset()
        this.isOpen = false
        this.isEdited = false
      } else {
        this.$swal.fire({
          title: 'Error!',
          text: 'Please Choose Image For Your Story',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    }
  }
}
