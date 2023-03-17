<template>
  <div>
    <h2>SearchRepository</h2>
    <!-- <h3>{{ name }}</h3> -->
    <h4>{{ searchInput }}</h4>
    <div class="input-group mb-3">
  <input type="text" v-model="searchInput" class="form-control" placeholder="Search A Repository" aria-label="Search" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="getData">Search</button>
  <div v-for="data in fetchData" :key="data.id">
{{ data }}
  </div>
  <div v-if="isLoading">
    Loading Data...
  </div>
</div>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
setup() {
 const fetchData = ref([]);
 const isLoading = ref(true)
 const searchInput = ref('');
 const getData = () => {
 const url = `https://api.github.com/users/${searchInput.value}`
 fetch(url)
 .then((resp) => resp.json())
 .then((data) => (fetchData.value = data))
 .catch((error) => alert(error.message))
 .finally(() => isLoading.value = false)
 }

 onMounted(() => {
  
 })
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