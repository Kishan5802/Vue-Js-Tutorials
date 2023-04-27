<template>
<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
<RouterView></RouterView>
<!-- <SignUpForm /> -->
</template>

<script>
// import InputText from 'primevue/inputtext';
// import { ref } from 'vue';
export default {
  name: 'App',
  components: {
    // InputText,
    // ref
  },
  data () {
    return {
      // value: ref(null),
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/* html {
  font-size: 14px;
} */

body {
  font-family: var(--font-family);
  /* font-weight: normal; */
  /* background: var(--surface-ground); */
  /* color: var(--text-color); */
  padding: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} 
</style>
