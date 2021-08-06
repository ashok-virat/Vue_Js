<template>
    <div>
  <b-modal v-model="isOpen" hide-footer hide-header>
    <b-container fluid>
  <b-row>
        <div>
          <b-row>
           <b-col md="12" class="login-form">
    <b-form @submit="onSubmit" class="form-element">
      <b-icon icon="camera" font-scale="3" class='icon' style="color:  #fdcd3b "></b-icon>
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        class="mt-3"
      >
        <b-form-input
         class="input-box"
          id="input-1"
          v-model="$v.form.title.$model"
          type="text"
          placeholder="Title..."
          :state="validateState('title')"
        ></b-form-input>
         <b-form-invalid-feedback v-if="!$v.form.title.required">
         Required
      </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.title.minLength">
       Title must be greater that three letters
      </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2" class="mt-2">
        <b-form-input
          class="input-box"
          id="input-2"
          v-model="$v.form.status.$model"
          type="text"
          placeholder="Status..."
           :state="validateState('status')"
        ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.status.required">
         Required
      </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.status.minLength">
        Status must be greater that three letters
      </b-form-invalid-feedback>
      </b-form-group>
      <div>
         <input type="file" @change="fileSelected" accept="image/*" class='mt-3'>
            </div>
            <b-row>
                <b-col md='12'>
                     <div class="image-preview" v-if="selectedFile">
                <img class="preview" :src="selectedFile">
            </div>
                </b-col>
            </b-row>
<div class="mt-2">
</div>
      <b-button type="submit"  style="backgroundColor:  #fdcd3b;border:none " class="btn mt-3" size="sm">Submit</b-button>
      <b-button style="backgroundColor:  red;border:none " class="btn mt-3 mr-2" size="sm" @click="closeModal">close</b-button>
    </b-form></b-col>
          </b-row>
         </div>
  </b-row>
</b-container>
  </b-modal>

    </div>
</template>

<script>
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
      console.log(data)
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
        console.log(this.form.status)
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
</script>

<style scoped>
.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 100%;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}
.input-box {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0px;
}
.icon {
  width:100%;
  margin:0 auto;
}
.input-box:focus {
  outline: none;
box-shadow: none;
}

.btn:focus {
outline: none;
box-shadow: none;
}
</style>
