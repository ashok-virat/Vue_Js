import { bus } from '../../main'

export default {
  name: 'ChildComponent',
  data () {
    return {
      title: 'childComponent',
      val: ''
    }
  },
  methods: {
    deleteStory: function (id) {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          bus.$emit('delete story', id)
          this.$swal.fire(
            'Deleted!',
            'Your Story has been deleted.',
            'success'
          )
        } else if (
          result.dismiss === this.$swal.DismissReason.cancel
        ) {
          this.$swal.fire(
            'Cancelled',
            'Your story is safe :)',
            'error'
          )
        }
      })
    },
    editStory: function (story, id) {
      let editData = {
        title: story.title,
        status: story.status,
        selectedFile: story.img,
        id: id
      }
      bus.$emit('editStory', editData)
    }
  },
  mounted () {
    bus.$on('changeIt', (data) => {
      this.val = data
    })
  }
}
