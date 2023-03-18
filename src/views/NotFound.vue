<template>
  <div>
    <h2>404</h2>
    <h3>Page Not Found</h3>
    <!-- <button @click="goBack">Go Back</button> -->
  </div>
</template>

<script>
export default {
  setup() {
    const goBack = () => {
      // $router.push({name: 'Home'})
    }
    return {
    goBack
  }
  }
  
}
</script>

<style>

</style>