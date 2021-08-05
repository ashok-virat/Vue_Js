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
        <b-nav-item @click='openBlog'>CreateBlog</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
      blogData: [
        {
          name: 'ashok',
          village: 'mimisal',
          status: 'i am ashok i am from india i love my country'
        },
        {
          name: 'ashok',
          village: 'mimisal',
          status: 'i am ashok i am from india i love my country'
        }
      ]
    }
  },
  methods: {
    openBlog: function () {
      bus.$emit('isBlogOpen', !this.isOpen)
    }
  },
  components: {
    ChildComponent,
    CreateBlog
  },
  mounted () {
    bus.$emit('changeIt', this.blogData)
  }
}
</script>

<style scoped></style>
