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

<script src='./ChildComponent.js' />

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
