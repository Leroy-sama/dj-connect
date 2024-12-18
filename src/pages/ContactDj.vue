<template>
	<section class="contact">
		<div class="contact__contact">
			<form action="" @submit.prevent="submitForm">
				<div class="form-control">
					<label for="email">Email Address</label>
					<input
						type="email"
						name="email"
						id="email"
						v-model="email"
					/>
				</div>
				<div class="form-control">
					<label for="message">Message</label>
					<textarea
						name="message"
						id="message"
						v-model="message"
						columns="10"
					></textarea>
				</div>
				<p class="errors" v-if="!formIsValid">
					Please enter a valid email or message
				</p>
				<div class="form-control">
					<button>Send Message</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script setup>
	import { ref } from "vue";
	import { useRoute } from "vue-router";
	// const route = useRoute();
	// const id = route.params.id;

	const email = ref("");
	const message = ref("");
	const formIsValid = ref(true);

	const submitForm = () => {
		formIsValid.value = true;

		if (
			email.value === "" ||
			email.value.includes("@") ||
			message.value === ""
		) {
			formIsValid.value = false;
			return;
		}
	};
</script>

<style lang="css" scoped>
	.contact {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 11010;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		background-color: rgba(0, 0, 0, 0.7);
		white-space: nowrap;
	}

	.contact__contact {
		border-radius: 8px;
		max-width: 700px;
		padding: 2rem;
		background-color: #fff;
	}

	form {
		padding: 1rem;
	}

	.form-control {
		margin: 0.5rem 0;
	}

	label {
		font-weight: bold;
		display: block;
	}

	input,
	textarea {
		display: block;
		width: 100%;
		border: 1px solid #ccc;
	}

	input:focus,
	textarea:focus {
		border-color: #3d008d;
		background-color: #faf6ff;
		outline: none;
	}

	.errors {
		font-weight: bold;
		color: red;
	}

	.actions {
		text-align: center;
	}
</style>
