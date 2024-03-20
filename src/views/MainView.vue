<template>
	<main class="main">
		<section class="hero">
			<div class="hero__content">
				<h1 class="hero__heading">Ishlab chiqarishning yangi bosqichi</h1>
				<p class="body-l">
					Bringing interiors to life, understanding the person or people living in a home
					is far greater need in design.
				</p>
				<button class="secondary-button">joy tanlash</button>
			</div>
		</section>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/sass/abstracts/index';

.hero {
	margin: 0;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(../assets/about-hero.jpg);
	background-position: center;
	background-size: cover;
	height: calc(100dvh - 7.7rem);
	display: grid;
	place-items: center;
	&__content {
		width: 100%;
		max-width: 80rem;
		color: #fff;
		display: grid;
		row-gap: 2rem;
		justify-items: center;
		text-align: center;
		button {
			animation: slide-bottom 1s;
		}
		p {
			animation: slide-right 1s ease-out;
		}
	}
	&__heading {
		animation: slide-left 1s ease-out;
		text-transform: none;
		font-size: 7.2rem;
		font-weight: 600;
		line-height: 8rem;
	}
}
</style>
