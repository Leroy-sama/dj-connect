<template>
	<section class="hero overlay">
		<div class="wrapper">
			<div class="hero__content">
				<h1 class="hero__title">Book a DJ for your Event</h1>
				<p class="hero__description">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Repellendus modi nesciunt animi repudiandae ab porro quaerat
					dolorum deserunt? Maiores, autem?
				</p>
				<RouterLink to="/about" class="cta">Learn More</RouterLink>
			</div>
		</div>
	</section>
	<section class="features">
		<div class="wrapper">
			<div class="feature1">
				<div class="feature__text">
					<h2 class="feature__text-head">Best services available</h2>
					<p class="feature__text-desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Illum ab vel reprehenderit temporibus veritatis nisi ea
						maiores cumque! Dolore similique error.
					</p>
					<RouterLink to="/djs" class="cta">Find DJ</RouterLink>
				</div>
				<div class="feature__img">
					<img
						src="https://i.pinimg.com/236x/a3/11/8e/a3118e3479e6561c9aa5018c79f97236.jpg"
						alt=""
					/>
				</div>
			</div>
			<div class="feature2">
				<div class="feature__img">
					<img
						src="https://i.pinimg.com/236x/f5/2d/ca/f52dca9e97dc0ee8aae84ee9f597c819.jpg"
						alt=""
					/>
				</div>
				<div class="feature__text">
					<h2 class="feature__text-head">Fun times with the lads</h2>
					<p class="feature__text-desc">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Iure temporibus blanditiis veritatis? Ad officia
						architecto quibusdam quam. Atque consequuntur, ratione
						eos velit eum ullam, veniam, consequatur fuga facilis in
						molestias.
					</p>
					<RouterLink to="/about" class="cta"
						>Make Booking</RouterLink
					>
				</div>
			</div>
		</div>
	</section>
	<section class="djs">
		<div class="wrapper">
			<h2 class="djs__head">Featured Djs</h2>
			<div class="djs__grid">
				<div v-for="dj in djStore.djs.slice(0, 3)" :key="dj.id">
					<DjItem
						:id="dj.id"
						:image="dj.image"
						:name="dj.name"
						:location="dj.location"
					/>
				</div>
			</div>
			<RouterLink to="/djs">View All</RouterLink>
		</div>
	</section>
</template>

<script setup>
	import DjItem from "@/components/DjItem.vue";
	import { useDjStore } from "@/stores/counter";

	const djStore = useDjStore();
</script>

<style lang="css" scoped>
	.overlay {
		border-image: linear-gradient(
				hsl(240, 100%, 20% / 0.6),
				hsl(0, 100%, 20% / 0.6)
			)
			fill 1;
	}

	.hero {
		min-height: 90vh;
		background-image: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
			url(../assets/img/hero-trail.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		align-items: center;
	}

	.hero__wrapper {
		padding: 1.5rem;
	}

	.hero__title {
		color: rgb(255, 255, 255);
		font-size: 3rem;
		line-height: 1;
		font-family: var(--ff-accent);
		font-weight: 700;
	}

	.hero__description {
		color: #fff;
		padding: 1rem 0 2rem;
		/* width: 60%; */
	}

	.cta {
		background-color: #004268;
		color: #fff;
		padding: 0.75rem 2rem;
		text-decoration: none;
		border-radius: 5px;
		transition: background-color 0.3s ease;
	}

	.features {
		padding: 0 1.5rem;
		/* background-color: #ccc; */
	}

	.features__wrapper {
		display: grid;
		gap: 1.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}

	.feature__text {
		padding: 1.5rem;
	}

	.feature1 {
		display: flex;
		flex-direction: column-reverse;
		gap: 1.5rem;
	}
	.feature2 {
		display: grid;
		gap: 1.5rem;
	}

	.feature__text-desc {
		padding: 1rem 0 2rem;
	}

	.djs {
		padding: 0 1.5rem;
	}

	.djs__head {
		font-size: 2rem;
		font-family: "Playfair", serif;
	}

	.djs__grid {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	}

	@media (min-width: 768px) {
		.hero__title {
			font-weight: 700;
			font-size: 3.5rem;
		}

		.features__wrapper {
			gap: 0;
		}

		.feature1,
		.feature2 {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0;
		}
	}
</style>
