<template>
	<header class="header" v-if="route.name != 'error'">
		<div class="header__container">
			<label class="header__btn" for="menu">
				<input class="header__menu" type="checkbox" name="menu" id="menu" ref="menuBtn" />
				<label for="menu" class="header__label"></label>
				<div class="menu">
					<NavLinks :links="links" class="menu__list" @click="toggleMenu" />
					<div class="menu__content">
						<button class="menu__button button">joy tanlash</button>
						<a href="tel:+998 71 210 44 54">+998 71 210 44 54</a>
						<p>Dushanba-shanba: 9:00–18:00</p>
					</div>
				</div>
			</label>
			<RouterLink to="/">
				<img class="header__logo" src="../assets/logo.svg" alt="logo" />
				<img class="header__logo-white" src="../assets/logo-white.svg" alt="logo" />
			</RouterLink>
			<nav class="nav">
				<NavLinks :links="links" class="nav__list" />
				<div class="nav__lang">
					<label for="lang">UZ</label>
					<input class="nav__lang-checkbox" type="checkbox" name="lang" id="lang" />
				</div>
			</nav>
			<button class="header__btn header__btn-tel">
				<img src="../assets/icons/tel.svg" alt="tel" />
			</button>
		</div>
	</header>
</template>

<script setup>
import NavLinks from '@/components/NavLinks.vue';
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const menuBtn = ref(null);

const toggleMenu = () => (menuBtn.value.checked = !menuBtn.value.checked);

const links = [
	{
		to: '',
		name: 'Asosiy'
	},
	{
		to: 'project',
		name: 'Loyiha'
	},
	{
		to: 'about',
		name: 'Biz Haqimizda'
	},
	{
		to: 'contact',
		name: 'Aloqa'
	}
];
</script>

<style lang="scss" scoped>
@import '@/sass/abstracts/index';
.header {
	&__menu {
		display: none;
	}
	&__menu:checked + .header__label {
		background-color: transparent;
	}
	&__menu:checked + .header__label::after {
		transform: rotate(45deg);
		background-color: #fff;
	}
	&__menu:checked + .header__label::before {
		transform: rotate(-45deg);
		background-color: #fff;
	}
	&__menu:checked ~ .menu {
		@include visible;
	}
	&__btn {
		@include dimensions(40px);
		@include grid-center;
		@include media($tab-port, min) {
			display: none;
		}
		background: white;
		box-shadow: 0px 10px 60px -5px rgba(#937249, 0.45);
		border-radius: 50%;
		&-tel {
			background: $color-secondary;
		}
	}
	&__label {
		@include rounded-border;
		@include grid-area('area');
		z-index: 2;
		width: 15.6px;
		height: 2.4px;
		background-color: $color-secondary;
		transition: background-color 0.4s;
		&::before,
		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			border-radius: inherit;
			background-color: $color-secondary;
			grid-area: area;
			transition: transform 0.5s, background-color 0.5s;
		}
		&::before {
			transform: translateY(-5px);
		}
		&::after {
			transform: translateY(5px);
		}
	}
	&__container {
		@include flex-justify(space-between);
		@include media($tab-port) {
			padding-top: 20px;
			max-width: 90%;
			align-items: center;
		}
		& > * {
			z-index: 2;
		}
		padding: 0.9rem 0;
		max-width: 70%;
		margin: 0 auto;
		gap: 2rem;
	}
	&__logo {
		@include media($tab-port) {
			display: none;
		}
		&-white {
			@include media($tab-port, min) {
				display: none;
			}
		}
	}
	&__list {
		@include grid-row-gap(2rem);
	}
}
.nav {
	@include flex(space-between, center);
	@include responsive-width(60rem);
	@include media($tab-port) {
		display: none;
	}
	&__menu {
		@include grid-center;
		@include grid-area('area');
		@include media($tab-port, min) {
			display: none;
		}
	}
	&__checkbox {
		grid-area: area;
		appearance: none;
		&:checked ~ .header__menu {
			height: 100vh;
			@include visible;
			overflow: visible;
		}
	}
	&__btn {
		@include flex-align(center);
		grid-area: area;
		z-index: 4;
		svg path {
			transition: fill 0.5s;
		}
	}
	&__list {
		font-weight: 400;
		font-size: 14px;
		flex-basis: 80%;
		justify-content: space-evenly;
		gap: 1rem;
	}
	&__lang {
		@include flex-align(center, 1rem);

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
.menu {
	@include full-viewport;
	@include hidden(-100%);
	@include flex-justify(space-around, null, null, column);
	padding-top: 120px;
	transition: opacity 0.8s, transform 0.8s;
	position: fixed;
	inset: 0;
	background-image: linear-gradient(to bottom, #4a0605, #150303);

	&__list {
		font-family: $font-jost;
		font-weight: 400;
		font-size: 5.4rem;
		color: #fff;
		line-height: 148%;
		flex-direction: column;
		gap: 3rem;
	}
	&__button {
		font-family: $font-jost;
		font-size: 12px;
		border: 1px solid #fff;
	}
	&__content {
		@include grid-row-gap(20px);
		justify-items: center;
		align-items: center;
		font-family: $font-jost;
		a {
			font-weight: 300;
			font-size: 3.5rem;
			color: #fff;
			text-decoration: none;
		}
		p {
			color: rgba(#fff, 0.3);
		}
	}
}
</style>
