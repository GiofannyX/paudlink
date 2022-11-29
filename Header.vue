<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
<header class="fixed top-0 left-0 sm:left-24 right-0 sm:right-24 border-b border-slate-100 bg-white text-slate-800 flex justify-between">
    <div class="py-2 px-4 text-slate-900 font-medium text-2xl">
	Paudlink
    </div>
    <div class="flex justify-end">
        <RouterLink to="/system">
	<div class="py-2 px-4 hover:bg-cyan-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
        </div>
	</RouterLink>
	<RouterLink to="/homepage">
        <div class="py-2 px-4 hover:bg-cyan-400">
            <svg fill="dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M13.341 4A6 6 0 0 0 21 11.659V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9.341zM19 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
            </svg>
        </div>
	</RouterLink>
    </div>
</header>
</template>
<style scoped>
</style>
