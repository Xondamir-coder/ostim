<template>
	<section class="hero">
		<div class="hero__content">
			<h1 class="hero__heading heading-xl">{{ name }}</h1>
			<p class="hero__text">
				<RouterLink
					class="hero__link router__link"
					active-class="router__link--active"
					to="/"
					>Asosiy</RouterLink
				>
				>
				<RouterLink
					class="hero__link router__link"
					active-class="router__link--active"
					:to="route.path"
					>{{ name }}</RouterLink
				>
			</p>
		</div>
	</section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const name = computed(() => (route.name === 'about' ? 'Biz Haqimizda' : 'Aloqa'));
</script>

<style lang="scss" scoped>
@import '@/sass/abstracts/index';

.hero {
	@include grid-center;
	margin: 0 !important;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(../assets/about-hero.avif);
	background-position-y: top;
	background-size: cover;
	height: 30rem;
	color: #fff;
	text-align: center;
	font-weight: 300;
	animation: appear 1s ease-out;
	@include media($tab-port) {
		background: none;
	}
	&__heading {
		animation: slide-left 1s ease-out;
	}
	&__link {
		&:last-child {
			color: $color-secondary;
			@include underline();
		}
	}
	&__text {
		color: #fff;
		animation: slide-right 1s ease-out;
	}
}
</style>
