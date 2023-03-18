<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="copy" data-aos="fade-up" data-aos-duration="3000">
            <div class="text-label">
              Get The Best  Experience
            </div>
            <div class="text-hero-bold">The Place For Anyone From Anywhere To View Repositories</div>
            <div class="text-hero-regular">
              Check out my  Repositories page to see my project
            </div>
            <!-- <div class="cta"> -->
              <!-- <a href="./SearchRepository.vue" class="btn btn-primary shadow-none">Explore Now</a> -->
              <!-- <a href="#" class="btn btn-secondary shadow-none ms-3">About Me</a> -->
            <!-- </div> -->
          </div>
        </div>
        <div class="col-md-6" data-aos="fade-up" data-aos-duration="3000">
          <img src="../assets/img/undraw_web_search_re_efla.svg" class="w-100" alt="">
        </div>
      </div>
    </div>
  </section>

  <section class="testimoni-brand">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-5 text-center">
          <img src="" alt="" class="w-100">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import '../assets/global.css'
import { onMounted } from "vue"
import AOS from "aos"


export default {
  setup() {
    onMounted(() => {
  AOS.init();
})
  }
};
</script>

<style></style>
