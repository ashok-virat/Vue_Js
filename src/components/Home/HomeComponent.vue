<template>
  <div class="blog">
    <span> <router-link to="/">back</router-link></span>
    <h1>{{ title }}</h1>
    <input v-model="text" />
    <span><button v-on:click="addTitle">addTitle</button></span>
    <p>
      <span>condition:-</span>
      <span v-if="text === 'ashok'">yep, i am ashok !</span>
    </p>

    <p v-for="(todo, index) in todos">
      <span>array{{ index }}:-</span> {{ todo.text }}
    </p>
    <button v-on:click="changeTitle">changeTitle</button>
  </div>
</template>
<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      title: "Title",
      text: "",
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ]
    };
  },
  methods: {
    changeTitle: function() {
    console.log("called")
      this.title = this.title === "Title" ? "Title Changed" : "Title";
    },
    addTitle: function() {
      this.text ? this.todos.push({ text: this.text }) : null;
    }
  }
};
</script>

<style scoped></style>
