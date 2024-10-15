<template>
	<div class="dj">
		<img :src="image" alt="" />
		<div class="deets">
			<h3 class="dj-name">{{ name }}</h3>
			<p class="dj-locale">{{ location }}</p>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps(["image", "name", "location"]);
</script>

<style lang="css" scoped>
	.dj {
		display: grid;
		gap: 1rem;
	}

	.dj img {
		aspect-ratio: 4/3;
		object-fit: cover;
		border-radius: 10px;
	}
</style>
