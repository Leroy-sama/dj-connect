<template>
	<section class="dj" v-if="selectedDj">
		<ContactDj v-if="contact" />
		<div class="wrapper">
			<h1 class="dj__name">{{ djName }}</h1>
			<img :src="djImage" alt="" />
			<p class="dj__description">
				{{ djDescription }}
			</p>
			<button @click="contactDj" class="dj__contact">Contact Dj</button>
			<h2 class="events__head">Events</h2>
			<div class="events__grid">
				<div
					class="event"
					v-for="event in selectedDj.events"
					:key="event.name"
				>
					<img :src="event.image" alt="" />
					<h3 class="event__name">{{ event.name }}</h3>
				</div>
			</div>
			<!-- <h2 class="reviews__head">Reviews</h2>
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
			</div> -->
		</div>
	</section>
	<section v-else>
		<h1>Not found</h1>
		<p style="font-size: 4rem">{{ id }}</p>
	</section>
</template>

<script setup>
	import { computed, onMounted, ref } from "vue";
	import { useRoute } from "vue-router";
	import { useDjStore } from "@/stores/counter";
	import ContactDj from "./ContactDj.vue";

	const contact = ref(null);

	const route = useRoute();
	const djStore = useDjStore();
	const selectedDj = ref(null);
	const id = route.params.id;

	const djName = computed(() => selectedDj.value.name);
	const djDescription = computed(() => selectedDj.value.description);
	const djImage = computed(() => selectedDj.value.image);

	onMounted(() => {
		const djs = djStore.djs;
		selectedDj.value = djs.find((dj) => {
			return dj.id === Number(id);
		});
		console.log(selectedDj.value);
	});

	const contactDj = () => {
		contact.value = true;
	};
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
