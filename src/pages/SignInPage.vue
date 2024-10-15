<template>
	<section class="signin">
		<div class="signin__wrapper">
			<h1 class="signin__head">Sign In</h1>
			<p class="signin__text">
				Enter your account details to log in to your account
			</p>
			<form action="#">
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
				<p class="forgot">
					Forgot Password? <RouterLink to="/reset">Reset</RouterLink>
				</p>
				<div class="form-control">
					<button>Sign In</button>
				</div>
				<p class="new">
					Don't have an account?
					<RouterLink to="/signup">Sign Up</RouterLink>
				</p>
			</form>
		</div>
	</section>
</template>

<script setup></script>

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
</style>
