<template>
	<header>
		<nav>
			<RouterLink to="/" class="logo">DJConnect</RouterLink>
			<ul>
				<li>
					<RouterLink to="/">Home</RouterLink>
				</li>
				<li>
					<RouterLink to="/djs">Djs</RouterLink>
				</li>
				<li>
					<RouterLink to="/about">About</RouterLink>
				</li>
				<li>
					<RouterLink to="/signin">Sign In</RouterLink>
				</li>
			</ul>
			<div class="burger">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</div>
		</nav>
	</header>
</template>

<script setup></script>

<style lang="css" scoped>
	nav {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		align-items: center;
	}

	nav ul {
		position: fixed;
		z-index: 1000;
		inset: 0 0 0 30%;
		display: flex;
		flex-direction: column;
		gap: 2em;
		padding: min(30vh, 10rem) 2em;
		background: hsl(0 0% 100% / 0.7);
		backdrop-filter: blur(1rem);
		transform: translateX(100%);
		transition: transform 350ms ease-out;
	}

	.logo {
		font-size: 1.6rem;
		text-transform: uppercase;
		color: #004268;
		font-weight: 600;
	}

	nav ul li a {
		color: hsl(271, 62%, 16%);
		font-weight: 600;
		color: #000;
	}

	nav ul li a:hover {
		color: #004268;
	}

	.burger {
		cursor: pointer;
	}

	.bar {
		width: 25px;
		height: 2px;
		background-color: #004268;
		margin: 5px;
		display: block;
	}

	@media (min-width: 768px) {
		nav ul {
			transform: translateX(0%);
			position: static;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0;
		}

		.burger {
			display: none;
		}
	}
</style>
