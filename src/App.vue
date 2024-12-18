<template>
	<BaseNav />
	<RouterView />
</template>

<script setup>
	import BaseNav from "./components/BaseNav.vue";
</script>

<style lang="css">
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap");

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root {
		--clr-01: #004268;
		--clr-01-dark: #002c46;
		--clr-01-light: #006ba8;
		--clr-black: #010103;
		--clr-white: #ffffff;

		--ff-primary: "Open Sans", sans-serif;
		--ff-accent: "Playfair", serif;
	}

	* {
		margin: 0;
	}

	body {
		font-family: var(--ff-primary);
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: 1.1;
	}

	p {
		line-height: 1.6;
	}

	input,
	textarea {
		font: inherit;
	}

	img,
	picture,
	video,
	svg {
		width: 100%;
		display: block;
	}

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	.wrapper {
		width: min(90%, 90rem);
		margin-inline: auto;
	}
</style>
