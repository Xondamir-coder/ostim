<template>
	<section class="hero">
		<div class="hero__content">
			<h1 class="hero__heading heading-xl">{{ i18n.global.t(`link-${route.name}`) }}</h1>
			<p class="hero__text">
				<RouterLink
					class="hero__link router__link"
					active-class="router__link--active"
					to="/">
					{{ i18n.global.t('link-main') }}
				</RouterLink>
				>
				<RouterLink
					class="hero__link router__link"
					active-class="router__link--active"
					:to="route.path">
					{{ i18n.global.t(`link-${route.name}`) }}
				</RouterLink>
			</p>
		</div>
	</section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import i18n from '@/locales';

const route = useRoute();
</script>

<style lang="scss" scoped>
.hero {
	@include grid-center;
	margin: 0 !important;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url(@/assets/about-hero.avif);
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
		text-transform: uppercase;
		@include media($tab-port) {
			font-size: 5.5rem;
		}
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
