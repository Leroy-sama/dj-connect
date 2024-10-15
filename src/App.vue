<template>
	<BaseNav />
	<RouterView />
</template>

<script setup>
	import BaseNav from "./components/BaseNav.vue";
</script>

<style lang="css">
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Open Sans", sans-serif;
		list-style: none;
		text-decoration: none;
	}

	:root {
		--clr-01: #004268;
		--clr-01-dark: #002c46;
		--clr-01-light: #006ba8;
	}

	img {
		width: 100%;
	}
</style>
