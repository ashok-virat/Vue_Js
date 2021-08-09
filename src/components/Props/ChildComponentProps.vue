<template>
    <div class='mt-2'>
        <h2>ChildComponent</h2>
          <label for="child-input">Child input: </label>
    <input id="child-input" type="text" name="msg" v-model="childMessage" v-on:keyup="emitToParent">
        <p class='mt-2'>count passed through the props from parentComponent {{count}}</p>
         <button type="button" class='btn-primary' name="button" v-on:click="$emit('increment')">Click me to increment!</button>
    </div>
</template>

<script>
export default {
  name: 'ChildComponentProps',
  props: ['count'],
  data () {
    return {
      childMessage: ''
    }
  },
  methods: {
    emitToParent (event) {
      event.preventDefault()
      this.$emit('childToParent', this.childMessage)
    }
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  font-family: 'Times New Roman', Times, serif;
  margin-left: 5px;
}
</style>
