<template>
    <div class='mt-5'>
      <b-container fluid>
        <b-row v-for="(value,index) in val" :key="index" class='mt-5'>
          <b-col md='4'></b-col>
      <b-col md="4">
                <b-button-group class='icon-group'>
           <b-icon @click="editStory(value,index)" icon="tools" scale='1' class='edit-icon' variant="warning"></b-icon>
            <b-icon @click="deleteStory(index)" icon="trash" scale='1' class='delete-icon'></b-icon>
              </b-button-group>
      <b-card
    overlay
    :img-src='value.img'
    img-alt="Card Image"
    text-variant="white"
  >
 <h5 class="card-title">{{value.title}}</h5>
    <b-card-text class='card-text'>
      {{value.status}}
    </b-card-text>
  </b-card>
      </b-col>
            <b-col md='4'></b-col>
        </b-row>
      </b-container>
    </div>

</template>

<script>
import { bus } from './../../main'
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
      console.log(data)
      this.val = data
    })
  }
}
</script>

<style scoped>
.card-text {
font-family: Georgia, 'Times New Roman', Times, serif;
font-style: italic;
color: black;
font-weight: bold;
margin-top: 10px;
}
.card-title {
  font-family: 'Times New Roman', Times, serif;
}
.edit-icon {
  margin-bottom: 10px;
  cursor: pointer;
}
.delete-icon {
  color:  red;
  margin-bottom: 10px;
  cursor: pointer;
  margin-left: 15px;
}
.icon-group {
  text-align: left;
  width: 100%;
}
</style>
