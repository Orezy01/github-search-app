<template>
  <div class="container">
    <h1>404 Page Not Found</h1>
		<p>We're sorry, the page you are looking for cannot be found.</p>
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

<style scoped>
.container {
	max-width: 800px;
	margin: 0 auto;
	padding: 50px 0;
	text-align: center;
}

h1 {
	font-size: 60px;
	margin-bottom: 20px;
	color: #333;
}

p {
	font-size: 18px;
	margin-bottom: 30px;
	line-height: 1.5;
	color: #666;
}

a {
	display: inline-block;
	padding: 10px 20px;
	border-radius: 5px;
	background-color: #333;
	color: #fff;
	text-decoration: none;
	font-size: 20px;
	transition: all 0.3s ease;
}

a:hover {
	background-color: #666;
}

</style>