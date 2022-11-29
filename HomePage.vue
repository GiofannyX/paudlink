<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/posts')
      .then((response) => {
        this.posts = response.data
      })
  }
}
</script>

<template>
<main class="mx-auto container bg-white border">
<Header />
<article class="h-screen py-14">
<section class="py-2 bg-white text-neutral-900 border-b-2 mb-1"  v-for="post in posts" :key="post.id">
<div class="flex justify-start ml-4 py-2 border-b-2 border-gray-100">
 <div class="h-7 w-7">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDiC8634-gCrRnUY1tCR7yrBQEhg4CTDaZA" class="border-2 border-blue-600 rounded"/>
 </div>
 <div class="px-2 ml-1 text-xl text-neutral-900">
    {{ post.name }}
 </div>
 <div class="mr-4 text-2xl font-bold">
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#2563eb"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M18.49,9.88l0.08-0.85l0.18-1.95l-1.9-0.43l-0.84-0.19l-0.44-0.74l-0.99-1.68L12.79,4.8L12,5.14L11.21,4.8 L9.42,4.03L8.43,5.71L7.99,6.45L7.15,6.64l-1.9,0.43l0.18,1.94l0.08,0.85l-0.56,0.65l-1.29,1.48l1.29,1.47l0.56,0.65l-0.08,0.85 l-0.18,1.96l1.9,0.43l0.84,0.19l0.44,0.74l0.99,1.67l1.78-0.77L12,18.85l0.79,0.34l1.78,0.77l0.99-1.68l0.44-0.74l0.84-0.19 l1.9-0.43l-0.18-1.95l-0.08-0.85l0.56-0.65l1.29-1.47l-1.29-1.47L18.49,9.88z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" opacity=".3"/><path d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z"/><polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87"/></g></g></svg>
 </div>
</div>
    <img :src="post.image" class="w-screen" alt="Photo Images"/>
<div class="px-2 py-2 pb-2"><details>
<summary>Perlihatkan deskripsi pada gambar ini</summary>
{{ post.detail }}
<!--Pendidikan anak usia dini adalah upaya pemberian pendidikan untuk mencapai perkembangan dan pertumbuhan yang optimal sejak dini.-->
</details></div>
</section>
</article>
<Footer />
</main>
</template>


<style scoped>
.initial {
    font-family: Initial;
}
</style>
