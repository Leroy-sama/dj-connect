<template>
	<section class="signup">
		<div class="signup__wrapper">
			<h1 class="signup__head">Sign Up</h1>
			<p class="signup__text">
				Enter your details to create an account on this platform
			</p>
			<form action="#">
				<div class="form-control">
					<label for="username">Username</label>
					<input type="text" name="username" placeholder="Username" />
				</div>
				<div class="form-control">
					<label for="email">Email Address</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="example@me.com"
					/>
				</div>
				<div class="form-control">
					<label for="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="********"
					/>
				</div>

				<div class="form-control">
					<button>Sign Up</button>
				</div>
				<p class="new">
					Already have an account?
					<RouterLink to="/signin">Sign In</RouterLink>
				</p>
			</form>
		</div>
	</section>
</template>

<script setup></script>

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
</style>
