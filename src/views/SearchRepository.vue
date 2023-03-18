<template>
  <div>
    <h2>SearchRepository</h2>
    <!-- <h3>{{ name }}</h3> -->
    <h4>{{ searchInput }}</h4>
    <div class="input-group mb-3">
  <input type="text" v-model="searchInput" class="form-control" placeholder="Search A Repository" aria-label="Search" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="getData(searchInput)">Search</button>
  <div v-if="isLoading">
    Loading Data...
  </div>
  <!--<div v-else v-for="data in fetchData" :key="data.id">
    {{ data }}
  </div>-->
</div>

  </div>
</template>

<script>
import { ref } from 'vue'
export default {
setup() {
 const fetchData = ref([]);
 const isLoading = ref(true)
 const searchInput = ref('');

 const getData = async (name) => {
  if(name !== '' && name !== null){
 try {
  const res = await fetch(`https://api.github.com/users/${name}`)
  fetchData.value = await res.json()
  console.log(fetchData.value)
  if(fetchData.value.length > 0){
  isLoading.value = false
  }
 } catch (error) {
  console.log(error)
 }
  }
  else{
   alert('Please enter a valid username')
  }
 }

    return {
      fetchData ,
      isLoading,
      searchInput,
      getData
    };
}
}
</script>

<style>

</style>
