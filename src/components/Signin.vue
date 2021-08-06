<template>
<div>
 <b-container fluid>
  <b-row>
      <b-col md="6">
        <div>
          <b-row>
           <b-col md="12" class="login-form">
    <b-form @submit="onSubmit" @reset="onReset" class="form-element">
      <b-icon icon="person-fill" scale="3"   style="color:  #fdcd3b "></b-icon>

        <b-form-group
        id="input-group-4"
        label-for="input-4"
        class="mt-3"
      >
        <b-form-input
         class="input-box"
          id="input-4"
          v-model="$v.form.userName.$model"
          type="text"
          placeholder="userName"
          :state="validateState('userName')"
        ></b-form-input>
         <b-form-invalid-feedback v-if="!$v.form.userName.required">
         Required
      </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.userName.minLength">
        userName must be greater that two letters
      </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label-for="input-1"
        class="mt-2"
      >
        <b-form-input
         class="input-box"
          id="input-1"
          v-model="$v.form.email.$model"
          type="email"
          placeholder="Email"
          :state="validateState('email')"
        ></b-form-input>
         <b-form-invalid-feedback v-if="!$v.form.email.required">
         Required
      </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.email.email">
        This must be an email
      </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2" class="mt-2">
        <b-form-input
          class="input-box"
          id="input-2"
          v-model="$v.form.password.$model"
          type="password"
          placeholder="Password"
           :state="validateState('password')"
        ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.form.password.required">
         Required
      </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.password.minLength">
        Password must be greater that six letters
      </b-form-invalid-feedback>
      </b-form-group>
<div class="mt-2">
 <span><small class="text-muted" style="fontSize:13px"> Don't Have a Account?</small></span><b-link href="#/signup" class="link" >Signup</b-link>
</div>
      <b-button type="submit"  style="backgroundColor:  #fdcd3b;border:none " class="btn mt-3" size="sm">Submit</b-button>
      <b-button type="reset" variant="danger" class='btn mt-3'  size="sm" style="border:none">Reset</b-button>
    </b-form></b-col>
          </b-row>
         </div>
      </b-col>
    <b-col md="6" class="text-center left-bar"></b-col>
  </b-row>
</b-container>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import Swal from 'sweetalert2/dist/sweetalert2.js'
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
    onSubmit () {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'success',
        title: 'Signed in successfully'
      }).then(() => {
        this.$router.push(`/homecomponent/${this.form.userName}`)
      })
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-bar {
  height: 100vh;
  background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
}
.login-form {
 height: 100vh;
  display: flex;
  align-items: center;
  margin:0 auto;
}
.input-box {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0px;
}
.input-box:focus {
  outline: none;
box-shadow: none;
}
.btn:focus {
outline: none;
box-shadow: none;
}
.form-element{
  margin:0 auto;
}
.link {
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  font-family: 'Times New Roman', Times, serif;
  margin-left: 5px;
}
</style>
