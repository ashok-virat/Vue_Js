<template>
  <div>
    <div>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand class='brand'>Akz</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
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
<script src='./Home.js'/>

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
.brand {
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serifp;
  color: red;
  margin-left: 10px;
}
</style>
