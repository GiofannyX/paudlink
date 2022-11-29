<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<footer class="shadow fixed bottom-0 left-0 right-0 border-t border-slate-100 text-slate-500 bg-white">
    <div class="flex justify-evenly sm:justify-between mx-auto md:w-1/2">
	<RouterLink to="/">
        <div class="py-3 px-5 hover:border-t-2 border-neutral-900 hover:bg-cyan-100">
	    <svg xmlns="http://www.w3.org/2000/svg" height="30pt" viewBox="0 0 24 24" width="30pt" fill="#3b82f6"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"/><path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3"/></svg>
	</div>
	</RouterLink>
        <RouterLink to="/store">
	<div class="py-3 px-5 hover:border-t-2 border-neutral-900 hover:bg-cyan-100">
	    <svg xmlns="http://www.w3.org/2000/svg" height="30pt" viewBox="0 0 24 24" width="30pt" fill="#3b82f6"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5.64 9l-.6 3h13.92l-.6-3z" opacity=".3"/><path d="M4 4h16v2H4zm16 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm-8 11H6v-4h6v4zm-6.96-6l.6-3h12.72l.6 3H5.04z"/></svg>
	</div>
	</RouterLink>
	<div class="py-3 px-5 hover:border-t-2 border-neutral-900">
	    <svg class="text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#252525">
		<path fill="none" d="M0 0h24v24H0z"/>
		<path d="M3 10h18v10.004c0 .55-.445.996-.993.996H3.993A.994.994 0 0 1 3 20.004V10zm6 2v2h6v-2H9zM2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1v4H2V4z"/>
	    </svg>
	</div>
	<RouterLink to="/comments">
	<div class="py-3 px-5 hover:border-t-2 border-neutral-900 hover:bg-cyan-100">
	   <svg xmlns="http://www.w3.org/2000/svg" height="30pt" viewBox="0 0 24 24" width="30pt" fill="#3b82f6"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 17.17L5.17 16H20V4H4v13.17zM11 6h2v4h-2V6zm0 6h2v2h-2v-2z" opacity=".3"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"/></svg> 
	</div>
	</RouterLink>
	<RouterLink to="/education">
	<div class="py-3 px-5 hover:border-t-2 border-neutral-900 hover:bg-cyan-100">
	    <svg xmlns="http://www.w3.org/2000/svg" height="30pt" viewBox="0 0 24 24" width="30pt" fill="#3b82f6"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8h16v11H4z" opacity=".3"/><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/></svg>
	</div>
	</RouterLink>
    </div>
</footer>
</template>

<style scoped>
</style>
