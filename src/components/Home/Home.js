import { bus } from '../../main'
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
    openHooks: function () {
      this.$router.push('/lifecyclehooks')
    },
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
