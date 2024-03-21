<template>
	<header class="header" v-if="route.name != 'error'">
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
					<input
						class="nav__toggler"
						type="checkbox"
						@change="toggleMenu"
						id="menu"
						ref="menu_btn"
						aria-label="checkbox" />
					<label for="menu" class="nav__hamburger" aria-label="menu button"
						><div></div
					></label>
					<div class="header__menu">
						<NavLinks class="header__list" :links="links" @click="toggleCheckbox" />
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup>
import NavLinks from '@/components/NavLinks.vue';
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const bodyStyle = document.body.style;
const menu_btn = ref();
const toggleMenu = () =>
	(bodyStyle.overflow = bodyStyle.overflow === 'hidden' ? 'visible' : 'hidden');
const toggleCheckbox = () => {
	menu_btn.value.checked = !menu_btn.value.checked;
	toggleMenu();
};

const links = [
	{
		to: 'main',
		name: 'Asosiy'
	},
	{
		to: 'about',
		name: 'Biz Haqimizda'
	},
	{
		to: 'catalog',
		name: 'Katalog'
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
	&__container {
		@include flex-justify(space-between);
		@include media($tab-port) {
			max-width: 90%;
		}
		padding: 0.9rem 0;
		max-width: 70%;
		margin: 0 auto;
		gap: 2rem;
	}
	&__menu {
		@include grid-center;
		@include hidden;
		overflow: hidden;
		background-color: $color-intermediate-primary;
		position: absolute;
		z-index: 3;
		inset: 0;
		height: 0;
		transition: {
			property: opacity, height;
			duration: 1s;
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
		justify-content: flex-end;
		gap: 1rem;
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
		flex-basis: 80%;
		justify-content: space-evenly;
		gap: 1rem;
		@include media($tab-port) {
			display: none;
		}
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
	&__toggler {
		@include dimensions(50px);
		@include hidden;
		grid-area: area;
		z-index: 5;
		cursor: pointer;
		&:checked + .nav__hamburger > div {
			background: rgba(0, 0, 0, 0);
		}
		&:checked + .nav__hamburger > div::before {
			top: 0;
			transform: rotate(45deg);
			background-color: #fff;
		}
		&:checked + .nav__hamburger > div::after {
			top: 0;
			transform: rotate(135deg);
			background-color: #fff;
		}
		&:checked ~ .header__menu {
			height: 100vh;
			@include visible;
		}
	}
	&__hamburger {
		@include dimensions(40px);
		@include flex-center;
		z-index: 4;
		grid-area: area;
		padding: 0.6rem;
		& > div {
			position: relative;
			top: 0;
			left: 0;
			background-color: #000;
			height: 2px;
			width: 60%;
			transition: all 0.4s ease;
		}
		& > div::before,
		& > div::after {
			@include pseudo('', -10px);
			@include dimensions(100%, 2px);
			background-color: #000;
			transition: all 0.4s ease;
		}
		& > div::after {
			top: 10px;
		}
	}
}
</style>
