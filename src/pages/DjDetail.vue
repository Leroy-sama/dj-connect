<template>
	<section class="dj">
		<div class="dj__wrapper">
			<h1 class="dj__name">Dj Smooth Groove</h1>
			<img src="../assets/img/black-man-posing.jpg" alt="" />
			<p class="dj__description">
				Smooth Groove has been a professional DJ for over 15years
				playing at some of the exciting events in the world. WIth a deep
				knowledge of music and passion for performance, Smooth Groove is
				the perfect choice for your next event.
			</p>
			<RouterLink class="dj__contact" :to="`/djs/${id}/contact`"
				>Contact Dj</RouterLink
			>
			<h2 class="events__head">Events</h2>
			<div class="events__grid">
				<div class="event">
					<img src="../assets/img/new-york.jpg" alt="" />
					<h3 class="event__name">New York Fashion Week</h3>
				</div>
				<div class="event">
					<img src="../assets/img/burning-man.webp" alt="" />
					<h3 class="event__name">Burning Man</h3>
				</div>
				<div class="event">
					<img src="../assets/img/coachella.webp" alt="" />
					<h3 class="event__name">Coachella</h3>
				</div>
			</div>
			<h2 class="reviews__head">Reviews</h2>
			<div class="reviews__grid">
				<div class="review">
					<h3 class="review__name">User 1</h3>
					<p class="review__text">
						Smooth Groove's music is amazing and the DJ is super
						friendly. I highly recommend this DJ to anyone looking
						for a great show.
					</p>
					<div class="review__rating"></div>
				</div>
				<div class="review">
					<h3 class="review__name">User 2</h3>
					<p class="review__text">
						I had a great time with Smooth Groove. The DJ was super
						friendly and the music was amazing. I highly recommend
						this DJ to anyone looking for a great show.
					</p>
					<div class="review__rating"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { useRoute } from "vue-router";

	const route = useRoute();

	const id = route.params.id;
</script>

<style lang="css" scoped>
	.dj__name {
		font-size: 2rem;
	}

	.dj__contact {
		padding: 0.75rem 1rem;
		background-color: var(--clr-01);
		color: var(--clr-white);
	}
</style>
