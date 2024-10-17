<template>
	<div class="dj">
		<RouterLink :to="`/djs/${id}`">
			<img :src="image" alt="" />
		</RouterLink>
		<div class="deets">
			<RouterLink :to="`/djs/${id}`">
				<h3 class="dj-name">{{ name }}</h3>
			</RouterLink>
			<p class="dj-locale">{{ location }}</p>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps(["id", "image", "name", "location"]);
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

	.dj-name {
		color: var(--clr-black);
	}
</style>
