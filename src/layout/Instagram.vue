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
.instagram {
	text-align: center;
	display: grid;
	row-gap: 2.5rem;
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 2rem;
	}
	&__item {
		a {
			display: grid;
			place-items: center;
			grid-template-areas: 'area';
			&:hover {
				&::before {
					opacity: 1;
				}
				& .instagram__icon {
					opacity: 1;
					transform: translateY(0);
				}
			}
			&::before {
				content: '';
				position: relative;
				z-index: 1;
				grid-area: area;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.4);
				opacity: 0;
				transition: opacity 0.5s;
				border-radius: 1rem;
			}
		}
	}
	&__banner {
		border-radius: 1rem;
		grid-area: area;
		width: 100%;
		height: 100%;
		aspect-ratio: 2/2;
		object-fit: cover;
		object-position: center;
	}
	&__icon {
		grid-area: area;
		z-index: 2;
		opacity: 0;
		transform: translateY(1rem);
		transition: {
			property: opacity, transform;
			duration: 0.5s;
		}
	}
}
</style>
