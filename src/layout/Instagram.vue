<template>
	<section class="instagram">
		<h1 class="heading-m">instagram sahifamizada</h1>
		<ul class="instagram__list">
			<li class="instagram__item" v-for="_ in [1, 2, 3, 4, 5]">
				<a href="#">
					<img
						class="instagram__banner"
						src="../assets/about-insta.jpg"
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

<style lang="scss" scoped>
@import '@/sass/abstracts/index';
.instagram {
	text-align: center;
	@include grid-row-gap(2.5rem);
	&__list {
		@include grid-responsive-cols(200px, 2rem);
	}
	&__item {
		a {
			@include grid-center;
			@include grid-area('area');
			&:hover {
				&::before {
					@include visible;
				}
				& .instagram__icon {
					@include visible;
					transform: translateY(0);
				}
			}
			&::before {
				@include hidden;
				@include transition-appear;
				@include dimensions(100%);
				@include rounded-border;
				content: '';
				position: relative;
				z-index: 1;
				grid-area: area;
				background-color: rgba(0, 0, 0, 0.4);
			}
		}
	}
	&__banner {
		@include rounded-border;
		@include cover-img(100%, 100%, center);
		grid-area: area;
		aspect-ratio: 2/2;
	}
	&__icon {
		@include hidden;
		@include transition-appear-transform;
		grid-area: area;
		z-index: 2;
		transform: translateY(1rem);
	}
}
</style>
