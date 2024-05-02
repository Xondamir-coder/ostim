<template>
	<section class="instagram instagram-animate" ref="container">
		<h1 class="heading-m">{{ i18n.global.t('on-insta') }}</h1>
		<ul class="instagram__list">
			<li class="instagram__item" v-for="_ in posts">
				<a href="#">
					<img class="instagram__banner" src="@/assets/insta.avif" alt="some photo" />
					<img
						class="instagram__icon"
						src="@/assets/icons/instagram.svg"
						alt="instagram icon" />
				</a>
			</li>
		</ul>
	</section>
</template>

<script setup>
import i18n from '@/locales';
import { onMounted, ref } from 'vue';

const container = ref(null);
const posts = new Array(5);
const handleObserve = entries =>
	entries.forEach(
		entry => entry.isIntersecting && entry.target.classList.remove('instagram-animate')
	);

const observer = new IntersectionObserver(handleObserve, { threshold: 0.3 });
onMounted(() => observer.observe(container.value));
</script>

<style lang="scss" scoped>
.instagram {
	text-align: center;
	@include grid-row-gap(2.5rem);
	&-animate &__item {
		transform: scale(0);
		opacity: 0;
	}
	&__list {
		display: flex;
		gap: 2rem;
		overflow-x: auto;
	}
	&__item {
		@include transition-appear-transform(1s);
		$transition-delays: 100ms 200ms 300ms 400ms 500ms 600ms;
		@each $delay in $transition-delays {
			$index: index($transition-delays, $delay);
			&:nth-child(#{$index}) {
				transition-delay: $delay * $index * 0.5;
			}
		}
		a {
			@include grid-center;
			@include grid-area('area');
			&:hover {
				&::before,
				& .instagram__icon {
					@include visible;
				}
			}
			&::before {
				@include hidden;
				@include rounded-border;
				@include dimensions(100%);
				content: '';
				transition: opacity 0.5s;
				position: relative;
				z-index: 1;
				grid-area: area;
				background-color: rgba(0, 0, 0, 0.4);
			}
		}
	}
	&__banner {
		@include rounded-border;
		@include cover-img(24.1rem, 24.1rem);
		grid-area: area;
		aspect-ratio: 2/2;
	}
	&__icon {
		@include hidden(0, 1rem);
		@include transition-appear-transform;
		grid-area: area;
		z-index: 2;
	}
}
</style>
