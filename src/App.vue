<template lang="pug">
  v-app
    router-view
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),

  mounted() {
    document.title = 'Vue APK'
  },
}
</script>

<style>
* {
  user-select: none;
}
#app {
  font-family: 'Zen Maru Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
