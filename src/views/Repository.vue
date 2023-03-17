<template>
  <div v-for="(itm,i) in data.items" :key="i">
        <div className="co-md-6 d-flex justify-content-center" key={{itm.id}}>
         <div className="card m-2 cbl text center">
           <div className="card-body">
            <img className='my_avatar' src={{itm.owner.avatar_url}} alt="profile_image" />
             <span className="card-number">ID: {{itm.id}}</span> 
             <h5 className="card-title mb-4">Repository Name: {itm.full_name}</h5>
             <p className="card-text">Description: {itm.description}</p>
             <button className="button-85" >
               
               <a href={{itm.html_url}} className="link-btn" target="_blank" rel="noreferrer">
               {{itm.name}}
               </a>
             </button>
           </div>
         </div>
       </div>
      
    </div>
  
</template>

<script>
import { reactive, onMounted } from 'vue';

export default {
  setup() {
    // Define a reactive object to store the fetched data
    const data = reactive({
      items: [],
    });

    // Define a function to fetch the data from the API
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/Orezy01/repos');
      const jsonData = await response.json();
      data.items = jsonData;
      console.log(data.items);
    }

    // Call the fetchData function when the component is mounted
    onMounted(() => {
      fetchData();
    });

    return {
      data,
    };
  },
};
</script>

<style>

</style>