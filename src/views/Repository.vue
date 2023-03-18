<template>
  <RepositorySkeleton v-if="isLoading"/>
  <div v-else>
    <div v-for="(itm, i) in displayed[currentPosition - 1]" :key="i">
      <div class="co-md-6 d-flex justify-content-center cbl" key={{itm.id}}>
        <div class="card m-2 cbl text center">
          <div class="profile-card">
            <div class="profile-image">
            <img class='my_avatar' :src="itm.owner.avatar_url" alt="profile_image" :width="60" :height="60" />
          </div>
          <span>Repository Title</span>
            <div class="profile-info card-title mb-4">Repository Name: {{ itm.name }}</div>
           
            <p class="card-text">Description: {{ itm.description === null ? 'No Description' : itm.description }}</p>
           

            <a :href="itm.html_url" class="link-btn" target="_blank" rel="noreferrer">
              <button class="button-85">View on github</button>
            </a>

          </div>
        </div>
      </div>
    </div>

    <section :class="{ pagination: true }">
            <ul>
                <li v-if="currentPosition > 1" :class="{ prev: true }">
                    <button @click="Prev">
                        {{ Prevbtn }}
                    </button>
                </li>
                <li v-for="btn in Editbtns" :key="btn">
                    <button @click="changePage(btn)">
                      {{ btn }}
                    </button>
                </li>
                <li v-if="currentPosition < displayed.length" :class="{ next: true }">
                  <button @click="Next">{{ Nextbtn }}</button>
                </li>
            </ul>
        </section>
  </div>
</template>

<script>
import RepositorySkeleton from '@/components/RepositorySkeleton.vue';
import { ref, reactive, watchEffect, onUpdated } from 'vue';

export default {
  components: {
    RepositorySkeleton
  },
  setup() {
    // Define a reactive object to store the fetched data
    const data = reactive({
      items: [],
    });

    const isLoading = ref(true)
    const length = ref(0)
    const neededLength = ref(4)
    const positions = ref(0)
    const currentPosition = ref(1)
    const Splice = ref([])
    const displayed = ref([])
    const btns = ref([])
    const Editbtns = ref([])
    const Prevbtn = '<'
    const Nextbtn = '>'


    // Define a function to fetch the data from the API
    watchEffect(async () => {
      const response = await fetch('https://api.github.com/users/Orezy01/repos');
      try {
        const jsonData = await response.json();
        data.items = jsonData;
        if (data.items.length > 0) {
          isLoading.value = false;
          Splice.value = [...data.items] //Duplicate the original repos container
            length.value = data.items.length //Length of the total repos fetched
            positions.value = Math.ceil(length.value / neededLength.value) // Length / 5, five repos is needed in each page
            for (let i = 0; i < positions.value; i++) {
                displayed.value.push(Splice.value.splice(0, neededLength.value))
                btns.value.push(i + 1)
                if (i < 3) {
                    Editbtns.value.push(i + 1)
                    continue
                }
            }
        }
      } catch (error) {
        console.log(error)
      }
    })

onUpdated(() => {
    posts.value = document.querySelectorAll('.pagination ul li button')
    posts.value.forEach((post) => {
        post.removeAttribute('id')
        if (post.innerText === `${ currentPosition.value }`) {
        post.setAttribute("id", 'activePage')
    }
})
})

    const changePage = (n) => {
    currentPosition.value = n
    //set currentPosition value to n
    posts.value.forEach((post) => {
        post.removeAttribute('id')
        if (post.innerHTML === `${ n }`) {
        post.setAttribute("id", 'activePage') 
        // give the current and active post the attribute (id, activePage)
        }
    })
}

const Next = () => {
    if (currentPosition.value < displayed.value.length + 1) {
        currentPosition.value += 1
        //Add one from the currentposition value
    }
    if (currentPosition.value > 3 && currentPosition.value < btns.value.length + 1) {
        //if currentposition value is great than 3 and currentposition is less than the number of the btns present.
        Editbtns.value.forEach((btn, index) => {
            btn = btn + 1 //Add one to the present element in editbtns
            Editbtns.value.splice(index, 1, btn) // then replace the previous btn starting from index of the btn with the new btn
        })
    }
}

const Prev = () => {
    if (currentPosition.value < displayed.value.length + 1 && currentPosition.value > 1) {
        currentPosition.value -= 1
        //subtract one from the currentposition value
    }
    if (Editbtns.value[0] !== 1) {
        //if editbtns first element is not 0
        Editbtns.value.forEach((btn, index) => {
            btn = btn - 1 //subtract one from the present element in editbtns
            Editbtns.value.splice(index, 1, btn) // then replace the previous btn starting from index of the btn with the new btn
        })
    }
}
    // Call the fetchData function when the component is mounted

    return {
      data,
      isLoading,
      Splice,
      length,
      neededLength,
      positions,
      currentPosition,
      displayed,
      btns,
      Editbtns,
      Prevbtn,
      Nextbtn,
      changePage,
      Next,
      Prev
    };
  },
};
</script>

<style>
.pagination {
    width: 90%;
    height: 35px;
    margin: 20px 0;
}
.pagination ul {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 100%;
}
.pagination ul li {
    width: 20%;
    height: 100%;
}
.pagination ul li button {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 10px;
    font-weight: 700;
}
#activePage {
    background-color: blue;
    color: white;
}
.button-85 {
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .button-85:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  
  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  
  .button-85:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  .profile-card {
    width: 100%;
    max-width: 700px;
    min-height: 180px;
    background: white;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius:20px;
  }

  .profile-image {
    width: 10%;
    float: left;
  }
  .profile-image img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 5px solid #FBC257;
    padding: 5px;
  }
  .profile-info {
    width: 85%;
    float: right;
  }

  .profile-info span {
    text-transform: uppercase;
    color: #777;
    letter-spacing: 3px;
  }

  .profile-info h3 {
    margin: 10px 0;
    font-size: 1.5rem;
    color: #3222;
  }

  .profile-info p {
    line-height: 140%;
    color: #777
  }

  .cbl {
    background: linear-gradient(to right bottom, rgba(255,255,255,0.5), rgba(255, 255, 255, 0.3));
  }

  @media (max-width: 576px) {
  .profile-image {
    width: 30%;
    float: left;
  }
  .profile-image img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 5px solid #FBC257;
    padding: 5px;
  }
  }
</style>
