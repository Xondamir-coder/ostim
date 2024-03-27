<template>
	<section class="instagram" ref="posts">
		<h1 class="heading-m">instagram sahifamizada</h1>
		<ul class="instagram__list">
			<li class="instagram__item" v-for="_ in [1, 2, 3, 4, 5]">
				<a href="#">
					<img
						class="instagram__banner"
						src="../assets/about-insta.avif"
						alt="some photo" />
					<img
						class="instagram__icon"
						src="../assets/icons/instagram.svg"
						alt="instagram icon" />
				</a>
			</li>
		</ul>
	</section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const posts = ref(null);

onMounted(() => {
	gsap.fromTo(
		posts.value.lastElementChild.children,
		{
			scale: 0,
			opacity: 0
		},
		{
			scrollTrigger: posts.value,
			scale: 1,
			opacity: 1,
			stagger: 0.5,
			duration: 1
		}
	);
});
</script>

<style lang="scss" scoped>
@import '@/sass/abstracts/index';
.instagram {
	text-align: center;
	@include grid-row-gap(2.5rem);
	&__list {
		display: flex;
		gap: 2rem;
		overflow-x: auto;
	}
	&__item {
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
