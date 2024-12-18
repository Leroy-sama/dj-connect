<template>
	<main>
		<section class="signin">
			<div class="signin__wrapper">
				<h1 class="signin__head">Sign In</h1>
				<p class="signin__text">
					Enter your account details to log in to your account
				</p>
				<form action="#" @submit.prevent="handleSubmit">
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
					<p class="forgot">
						Forgot Password?
						<RouterLink to="/reset">Reset</RouterLink>
					</p>
					<div class="form-control">
						<button type="submit" :disabled="!isFormValid">
							Sign In
						</button>
					</div>
					<p class="new">
						Don't have an account?
						<RouterLink to="/signup">Sign Up</RouterLink>
					</p>
				</form>
			</div>
		</section>
	</main>
</template>

<script setup>
	import { ref } from "vue";

	const email = ref("");
	const password = ref("");
	const isEmailValid = ref(false);
	const isPasswordValid = ref(false);
	const isFormValid = ref(false);

	const validateForm = () => {
		isEmailValid.value = validateEmail(email.value);
		isPasswordValid.value = password.value.length >= 6;
		isFormValid.value = isEmailValid.value && isPasswordValid.value;
	};

	const validateEmail = (email) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const handleSubmit = () => {
		if (isFormValid.value) {
			// Handle form submission logic
			console.log("Form submitted with:", {
				email: email.value,
				password: password.value,
			});
		}
	};
</script>

<style lang="css" scoped>
	.signin {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 80vh;
	}

	.signin__head,
	.signin__text {
		text-align: center;
	}

	.signin__head {
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
