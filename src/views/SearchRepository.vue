<template>
  <div>
    <h2>SearchRepository</h2>
    <!-- <h3>{{ name }}</h3> -->
    <h4>{{ searchInput }}</h4>
    <div class="input-group mb-3">
  <input type="text" v-model="searchInput" class="" placeholder="Search A Repository" aria-label="Search" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="getData(searchInput)">Search</button>
  
  <div>
   <div v-if="isLoading">
    Loading Data...
  </div>
  <div v-else>
    {{fetchData.created_at}}
    <h2>{{ fetchData.name  }}</h2>
    <div class="co-md-6 d-flex justify-content-center cbl" key={{fetchData.id}}>
        <div class="card m-2 cbl text center">
          <div class="profile-card">
            <div class="profile-image">
            <!-- <img class='my_avatar' :src="fetchData.owner.avatar_url" alt="profile_image" :width="60" :height="60" /> -->
          </div>
          <span>Repository Title</span>
            <div class="profile-info card-title mb-4">Repository Name: {{ fetchData.name }}</div>
           
            <p class="card-text">Description: {{ fetchData.description === null ? 'No Description' : fetchData.description }}</p>
           

            <a :href="fetchData.html_url" class="link-btn" target="_blank" rel="noreferrer">
              <button class="button-85">View on github</button>
            </a>

          </div>
        </div>
      </div>
  </div>
  </div>
</div>

  </div>
</template>

<script>
import { ref, onUnmounted} from 'vue'
export default {
setup() {
 const fetchData = ref([]);
 const isLoading = ref(false)
 const searchInput = ref('');
 let id;
 
 const getData = async (name) => {
  if(name !== '' && name !== null){
 try {
  isLoading.value = true
  const res = await fetch(`https://api.github.com/users/${name}/repos`)
  fetchData.value = await res.json()
  if(fetchData.value.message === 'Not Found'){
   alert('User not found')
  }
  id = setTimeout(()=>{
    isLoading.value = false
  }, 2000)
 } catch (error) {
  console.log(error)
 }
  }
  else{
   alert('Please enter a valid username')
  }
 }
onUnmounted(()=>{clearTimeout(id)})
    return {
      fetchData ,
      isLoading,
      searchInput,
      getData,
    };
}
}
</script>

<style>

</style>
