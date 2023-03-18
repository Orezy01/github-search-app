<template>
  <div class="notFound">
    <h2>404</h2>
    <h3>Page Not Found</h3>
    <!-- <button @click="goBack">Go Back</button> -->
    <router-link to="/" class="btn btn-secondary shadow-none ms-3">Return To Home Page</router-link>
  </div>
</template>

<script>
export default {
  setup() {
   
    return {
   
  }
  }
  
}
</script>

<style>
.notFound {
  max-width: 100%;
  width: 3000px;
  justify-content: center;
  align-items: center;
}
.notFound h2 {
font-weight: bold;

}
</style>