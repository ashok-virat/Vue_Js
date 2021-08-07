<template>
  <div>
    <div>
  <b-navbar toggleable type="dark">
    <b-navbar-brand style="color:black">Blog</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" style="color:white" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click='openBlog'>Post Stories</b-nav-item>
            <b-nav-item @click="logOut">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<div class='mt-4'>
  <h2 class="title">Welcome {{this.$route.params.id}}</h2>
  <p class="status">Post Your Stories Here</p>
</div>
<ChildComponent />
<CreateBlog />
  </div>
</template>
<script src='./HomeComponent.js'/>

<style scoped>
.link {
  text-decoration: none;
  color: white
}
.status {
  color:red;
  font-family: 'Times New Roman', Times, serif;
}
.title {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
