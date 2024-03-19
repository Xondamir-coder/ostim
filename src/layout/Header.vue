<template>
	<header class="header">
		<div class="header__container">
			<RouterLink to="/">
				<img src="../assets/logo.svg" alt="logo" />
			</RouterLink>
			<nav class="nav">
				<NavLinks :links="links" class="nav__list" />
				<div class="nav__lang">
					<label for="lang">UZ</label>
					<input class="nav__lang-checkbox" type="checkbox" name="lang" id="lang" />
				</div>
				<div class="nav__menu">
					<input class="nav__checkbox" type="checkbox" name="menu" id="menu" />
					<label for="menu" class="nav__btn">
						<svg
							width="30px"
							height="30px"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							fill="none">
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<path
									fill="#000000"
									fill-rule="evenodd"
									d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2h-8a1 1 0 100 2h8zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2h-8a1 1 0 100 2h8z"></path>
							</g>
						</svg>
					</label>
					<div class="header__menu">
						<NavLinks class="header__list" :links="links" />
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup>
import NavLinks from '@/components/NavLinks.vue';
import { RouterLink } from 'vue-router';

const links = [
	{
		to: 'main',
		name: 'Asosiy',
	},
	{
		to: 'about',
		name: 'Biz Haqimizda',
	},
	{
		to: 'catalog',
		name: 'Katalog',
	},
	{
		to: 'contact',
		name: 'Aloqa',
	},
];
</script>

<style lang="scss" scoped>
@import '../sass/abstracts/mixins';
@import '../sass/abstracts/variables';

.header {
	&__container {
		padding: 0.9rem 0;
		max-width: 70%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		@include media($tab-port) {
			max-width: 90%;
		}
	}
	&__menu {
		background-color: $color-intermediate-primary;
		position: absolute;
		z-index: 3;
		inset: 0;
		display: grid;
		place-items: center;
		height: 0;
		opacity: 0;
		visibility: hidden;
		transition: {
			property: visibility, opacity, height;
			duration: 1s;
		}
	}
	&__list {
		display: grid;
		row-gap: 2rem;
	}
}
.nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 60rem;
	@include media($tab-port) {
		justify-content: flex-end;
		gap: 1rem;
	}
	&__menu {
		display: grid;
		place-items: center;
		grid-template-areas: 'area';
	}
	&__checkbox {
		grid-area: area;
		appearance: none;
		&:checked ~ .header__menu {
			height: 100vh;
			opacity: 1;
			visibility: visible;
		}
	}
	&__btn {
		grid-area: area;
		display: flex;
		align-items: center;
		z-index: 4;
		svg path {
			transition: fill 0.5s;
		}
	}
	&__list {
		flex-basis: 80%;
		justify-content: space-evenly;
		gap: 1rem;
		@include media($tab-port) {
			display: none;
		}
	}
	&__lang {
		display: flex;
		align-items: center;
		gap: 1rem;
		& > * {
			cursor: pointer;
		}
		&-checkbox {
			appearance: none;
			&:checked::before {
				transform: rotate(180deg);
			}
			&::before {
				content: url(../assets/icons/down-arrow.svg);
				display: block;
				transition: transform 0.3s;
			}
		}
	}
}
</style>
