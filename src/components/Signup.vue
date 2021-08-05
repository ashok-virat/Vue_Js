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
               <b-form-group id="input-group-3" label-for="input-3" class="mt-2">
        <b-form-input
          class="input-box"
          id="input-3"
          v-model="name"
          type="text"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>
       <b-form-group id="input-group-4" label-for="input-4" class="mt-2">
        <b-form-input
          class="input-box"
          id="input-4"
          v-model="number"
          type="number"
          placeholder="Mobilenumber"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        class="mt-3"
      >
        <b-form-input
         class="input-box"
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2" class="mt-3">
        <b-form-input
          class="input-box"
          id="input-2"
          v-model="password"
          type="password"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>
<div class="mt-2">
 <span><small class="text-muted" style="fontSize:13px"> Aleardy Have a Account?</small></span><b-link href="#/" class="link" >Signin</b-link>
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
      console.log(this.email)
      console.log(this.password)
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
