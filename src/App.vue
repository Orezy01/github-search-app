<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container">
    <a class="navbar-brand" href="#">
        
      <span class="logo">RepoApp</span>
    </a>
    <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <i class='bx bx-menu'></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <router-link class="nav-link" to="/">Home</router-link>
        <!-- <router-link class="nav-link" to="/SearchRepository">Search Repository</router-link> -->
        <router-link class="nav-link" to="/Repository">Repositories</router-link>
      </div>
    </div>
  </div>
</nav>
<router-view />


</template>

<script setup>
import { useHead } from '@vueuse/head'
import { reactive , computed} from 'vue'
import "./assets/global.css"


const siteData = reactive({
  title: 'Github API App',
  description: 'github repository app'
})

useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: 'description',
      content: computed(() => siteData.description)
    }
  ] 
})
// export default {
//   name: 'App',
//   // components: {
//   //   // Home
//   //   pagination
//   // }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0;
  padding: 0;
}
</style>
