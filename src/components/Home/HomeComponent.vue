<template>
  <div>
    <div>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand >Blog</b-navbar-brand>

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
<script>
import { bus } from './../../main'
import ChildComponent from './ChildComponent.vue'
import CreateBlog from './CreateBlogComponent.vue'

export default {
  name: 'HomeComponent',
  data () {
    return {
      title: 'Title',
      isOpen: false,
      blogData: [ ]
    }
  },
  methods: {
    openBlog: function () {
      bus.$emit('isBlogOpen', !this.isOpen)
    },
    logOut: function () {
      this.$swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'success',
        title: 'Logged out successfully'
      })
      this.$store.commit('setAuthentication', false)
      this.$router.push('/')
    }
  },
  components: {
    ChildComponent,
    CreateBlog
  },
  mounted () {
    bus.$emit('changeIt', this.blogData)
    bus.$on('delete story', (data) => {
      this.blogData.splice(data.id, 1)
    })
    bus.$on('newBlog', (data) => {
      if (data.id >= 0) {
        this.$swal.fire(
          'Edited',
          'Your Story Edited Successfully',
          'success'
        ).then(() => {
          this.blogData.splice(data.id, 1, data)
        })
      } else {
        this.$swal.fire(
          'Added',
          'Your Story Added Successfully',
          'success'
        ).then(() => {
          this.blogData.push(data)
        })
      }
    })
  }
}
</script>

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
