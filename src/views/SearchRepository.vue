<template>
  <div>
    <h2>SearchRepository</h2>
    <!-- <h3>{{ name }}</h3> -->
    <h4>{{ searchInput }}</h4>
    <div class="input-group mb-3">
  <input type="text" v-model="searchInput" class="form-control" placeholder="Search A Repository" aria-label="Search" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="getData(searchInput)">Search</button>
  <div v-if="repoData.length < 0 && isLoading == true">
    Loading Data...

  </div>
 
  <div v-else>
    {{repoData.created_at}}
    <h2>{{  }}</h2>
  </div>
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
 let id;
 const repoData = ref([])

 const getData = async (name) => {
  if(name !== '' && name !== null){
 try {
  
  const res = await fetch(`https://api.github.com/users/${name}`)
  fetchData.value = await res.json()
  id = setTimeout(() => {
    repoData.value = fetchData.value;
    if(repoData.value.length > 0){
  isLoading.value = false
  }
  console.log(fetchData.value)
  },3000)
 
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
      getData,
      id,
      repoData 
    };
}
}
</script>

<style>

</style>
