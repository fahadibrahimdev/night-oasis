<script setup>
import { ref } from "vue";
import NavBar from "@/views/HomeView/component/NavBar.vue";
import HeroSection from "@/views/HomeView/component/HeroSection.vue";
import BrandFeatures from "@/views/HomeView/component/BrandFeatures.vue";
import BrandSelection from "@/views/HomeView/component/BrandSelection.vue";
import ExtraBenefits from "@/views/HomeView/component/BrandBenefits.vue";
import BrandFAQs from "@/views/HomeView/component/BrandFAQs.vue";
import BrandCTO from "@/views/HomeView/component/BrandCTO.vue";
import Footer from "@/views/HomeView/component/Footer.vue";
import MenuSideBar from "@/views/HomeView/component/MenuSideBar.vue";

const isSideBarOpen = ref(false)
</script>

<template>
  <MenuSideBar
      :is-expanded="isSideBarOpen"
      @toggle-menu-sidebar="(val) => isSideBarOpen = val"
  />
  <main>
    <div class="header-bg-image">
      <NavBar
          @toggle-menu-sidebar="(val) => isSideBarOpen = val"
      />
      <HeroSection/>
    </div>
    <BrandFeatures/>
    <BrandSelection/>
    <ExtraBenefits/>
    <BrandFAQs/>
    <BrandCTO/>
    <Footer/>
  </main>
</template>

<style>
.header-bg-image{
  position: relative;
  z-index: 1;
  background-image: url("/images/hero-image.webp");
  background-position: 80%;
  background-repeat: no-repeat;
  background-size: cover;
}
.header-bg-image::after{
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(104deg, #27AE60 0%, rgba(39, 174, 96, 0.04) 77.39%, rgba(39, 174, 96, 0.04) 77.39%);
  top: 0;
  left: 0;
  z-index: -1;
}
</style>