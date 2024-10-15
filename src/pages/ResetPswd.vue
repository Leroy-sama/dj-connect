<template>
	<section class="reset">
		<div class="reset__wrapper">
			<h1 class="reset__head">Reset Password</h1>
			<p class="reset__text">
				Enter your email account to reset your account password
			</p>
			<form action="">
				<div class="form-control">
					<label for="email">Email Address</label>
					<input type="email" placeholder="example@me.com" />
				</div>
				<div class="form-control">
					<button>Reset</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script setup></script>

<style lang="css" scoped>
	.reset {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 80vh;
	}

	.reset__head,
	.reset__text {
		text-align: center;
	}

	.reset__head {
		color: var(--clr-01);
		font-size: 2rem;
		/* padding: 1rem 0; */
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
