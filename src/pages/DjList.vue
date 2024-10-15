<template>
	<main>
		<div class="head">
			<div class="wrap">
				<div class="head__first">
					<h1 class="head__heading">Find a DJ</h1>
					<p class="head__text">Search by Djs, cities, category...</p>
					<div class="form-control">
						<input
							type="text"
							name="search"
							id="search"
							placeholder="Search DJs, cities, categories"
						/>
					</div>
				</div>
				<div class="head__second">
					<h2 class="second__head">Popular Cities</h2>
					<div class="spans">
						<span class="city">Los Angeles</span>
						<span class="city">Chicago</span>
						<span class="city">Las Vegas</span>
					</div>
				</div>
				<div class="head__third">
					<h2 class="third__head">Categories</h2>
					<div class="cats">
						<span class="city">Corporate</span>
						<span class="city">Birthday</span>
						<span class="city">Wedding</span>
					</div>
				</div>
			</div>
		</div>
		<section class="list">
			<div class="list__wrapper">
				<h2 class="list__head">Featured DJs</h2>
				<div class="djs-wrap">
					<div v-for="dj in djStore.djs" :key="dj.id">
						<DjItem
							:image="dj.image"
							:name="dj.name"
							:location="dj.location"
						/>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
	import DjItem from "../components/DjItem.vue";

	import { useDjStore } from "../stores/counter.js";
	const djStore = useDjStore();
</script>

<style lang="css" scoped>
	.head {
		padding: 0 1.5rem;
	}

	.wrap {
		display: grid;
		gap: 1rem;
	}

	.head__heading,
	.second__head,
	.third__head,
	.list__head {
		color: var(--clr-01-dark);
	}

	.form-control input {
		width: 100%;
		padding: 0.75rem;
		outline: none;
	}

	.head__second,
	.head__third {
		display: grid;
		gap: 0.75rem;
	}

	.spans,
	.cats {
		display: flex;
		gap: 1rem;
	}

	.city {
		color: var(--clr-01-light);
		background-color: #ccc;
		padding: 0.5rem;
		border-radius: 5px;
	}

	.list {
		padding: 1.5rem;
	}

	.djs-wrap {
		padding: 1.5rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.dj {
		display: grid;
		gap: 1rem;
	}

	.dj img {
		aspect-ratio: 4/3;
		object-fit: cover;
		border-radius: 10px;
	}

	@media (min-width: 768px) {
	}
</style>
