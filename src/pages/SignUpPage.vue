<template>
	<section class="signup">
		<div class="signup__wrapper">
			<h1 class="signup__head">Sign Up</h1>
			<p class="signup__text">
				Enter your details to create an account on this platform
			</p>
			<form action="#" @submit.prevent="handleSubmit">
				<div class="form-control">
					<label for="username">Username</label>
					<input
						type="text"
						name="username"
						placeholder="Username"
						v-model="username"
						@input="validateForm"
						required
					/>
				</div>
				<div class="form-control">
					<label for="email">Email Address</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="example@me.com"
						v-model="email"
						@input="validateForm"
						required
					/>
				</div>
				<div class="form-control">
					<label for="location">Location</label>
					<input
						type="text"
						id="location"
						name="location"
						v-model="location"
						@input="validateForm"
						required
					/>
				</div>
				<div class="form-control">
					<label for="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="********"
						v-model="password"
						@input="validateForm"
						required
						minlength="6"
					/>
				</div>

				<div class="form-control">
					<button type="submit" :disabled="!isFormValid">
						Sign Up
					</button>
				</div>
				<p class="new">
					Already have an account?
					<RouterLink to="/signin">Sign In</RouterLink>
				</p>
			</form>
		</div>
	</section>
</template>

<script setup>
	import { ref } from "vue";
	import { useDjStore } from "@/stores/counter";
	import { useRouter } from "vue-router";

	const username = ref("");
	const location = ref("");
	const email = ref("");
	const password = ref("");
	const isUsernameValid = ref(false);
	const isLocationValid = ref(false);
	const isEmailValid = ref(false);
	const isPasswordValid = ref(false);
	const isFormValid = ref(false);

	const validateForm = () => {
		isUsernameValid.value = !username.value;
		isLocationValid.value = !location.value;
		isEmailValid.value = validateEmail(email.value);
		isPasswordValid.value = password.value.length >= 6;
		isFormValid.value = isEmailValid.value && isPasswordValid.value;
	};

	const validateEmail = (email) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const handleSubmit = () => {
		const djStore = useDjStore();
		const router = useRouter();

		if (isFormValid.value) {
			const formData = {
				username: username.value,
				location: location.value,
				email: email.value,
				password: password.value,
			};
			console.log("Form submitted with:", formData);
			djStore.registerDj(formData);
			router.push("/djs");
		}
	};
</script>

<style lang="css" scoped>
	.signup {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 80vh;
	}

	.signup__head,
	.signup__text {
		text-align: center;
	}

	.signup__head {
		color: var(--clr-01);
		font-size: 2rem;
		padding: 1rem 0;
	}

	form {
		display: grid;
		gap: 1rem;
		padding: 1rem 0;
	}

	.form-control label {
		display: block;
		padding-bottom: 0.75rem;
	}

	.form-control input,
	.form-control button {
		width: 100%;
	}

	.form-control input {
		padding: 0.75rem;
		outline: none;
	}

	.form-control button {
		padding: 0.75rem;
		border: none;
		background-color: var(--clr-01);
		color: #fff;
		font-size: 1rem;
		cursor: pointer;
		transition: 0.3s;
	}

	.form-control button:hover {
		background-color: var(--clr-01-dark);
	}

	.form-control button:disabled {
		background-color: #ccc;
		cursor: not-allowed;
		color: black;
	}
</style>
