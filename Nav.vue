<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
<header class="top-0 left-0 sm:left-24 right-0 sm:right-24 border-b border-slate-100 bg-white text-slate-800 flex justify-between">
    <RouterLink to="/">
    <div class="py-2 px-4 font-bold text-neutral-600 text-lg hover:bg-blue-200">
    	Back
    </div>
    </RouterLink>
    <div class="py-2 px-4 text-lg font-medium">Setting & System</div>
</header>
</template>
<style scoped>
</style>
