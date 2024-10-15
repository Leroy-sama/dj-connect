<template>
	<section class="hero overlay">
		<div class="hero__wrapper">
			<div class="hero__content">
				<h1 class="hero__title">Book A DJ for your Event</h1>
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
		<div class="features__wrapper">
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
</template>

<script setup></script>

<style lang="css" scoped>
	.hero {
		min-height: 90vh;
		background-image: url(https://i.pinimg.com/564x/2e/52/d8/2e52d83830f9b05d3f4bfcb3451af028.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		align-items: center;
		border-image: linear-gradient(
				hsl(240% 100% 20% / 0.8),
				hsl(0% 100% 20% / 0.8)
			)
			fill 1;
	}

	/* .overlay {
		border-image: linear-gradient(
				hsl(240, 100%, 20% / 0.6),
				hsl(0, 100%, 20% / 0.6)
			)
			fill 1;
	} */

	.hero__wrapper {
		padding: 1.5rem;
	}

	.hero__title {
		color: rgb(255, 255, 255);
		font-size: 3rem;
		line-height: 1;
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
		background-color: #ccc;
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

	@media (min-width: 768px) {
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
