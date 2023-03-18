<template>
  <div v-for="(itm,i) in data.items" :key="i">
        <div className="co-md-6 d-flex justify-content-center" key={{itm.id}}>
         <div className="card m-2 cbl text center">
           <div className="card-body">
            <img className='my_avatar' :src="itm.owner.avatar_url" alt="profile_image" :width="60" :height="60" />
            <!--You can change the width and height of this img later-->
             <span className="card-number">ID: {{itm.id}}</span> 
             <h5 className="card-title mb-4">Repository Name: {{itm.name}}</h5>
             <!--The better way to use text interpolation is using {{  }} not one {}-->
             <p className="card-text">Description: {{itm.description === null ? 'No Description': itm.description}}</p>
             <!--What I did here was, if description is null 'no description' should be shown or the description if it is present-->
             
               <a href={{itm.html_url}} className="link-btn" target="_blank" rel="noreferrer">
                <button className="button-85" >View on github</button>
               </a>
             
           </div>
         </div>
       </div>
      
    </div>
  
</template>

<script>
import { reactive, watchEffect } from 'vue';

export default {
  setup() {
    // Define a reactive object to store the fetched data
    const data = reactive({
      items: [],
    });

    // Define a function to fetch the data from the API
    watchEffect(async () => {
      const response = await fetch('https://api.github.com/users/Orezy01/repos');
      try {
        const jsonData = await response.json();
        data.items = jsonData;
      } catch (error) {
        console.log(error)  
      }
    })

    // Call the fetchData function when the component is mounted

    return {
      data,
    };
  },
};
</script>

<style>

</style>