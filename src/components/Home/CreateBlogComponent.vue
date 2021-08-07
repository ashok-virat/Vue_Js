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

<script src='./CreateBlogComponent.js' />

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
