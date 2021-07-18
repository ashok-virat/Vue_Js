<template>
  <div class="blog">
    <h1>{{ title }}</h1>
    <input v-model="text" />
    <span>Input Value : {{ text }}</span>
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
      this.title = this.title === "Title" ? "Title Changed" : "Title";
    }
  }
};
</script>

<style scoped></style>
