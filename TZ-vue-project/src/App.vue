<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue' 
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="app__container">
    <Header /> 
    <main class="main__content">
      <RouterView /> 
    </main>
    <Footer />
  </div>
  
</template>

<style>

body {
  font-family: 'Montserrat', sans-serif;
}

.app__container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main__content{
  flex: 1;
}
</style>