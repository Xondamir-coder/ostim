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
						ref="menu_btn" />
					<div class="nav__hamburger"><div></div></div>
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
@import '../sass/abstracts/index';

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
		@include media($tab-port, min) {
			display: none;
		}
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
	&__toggler {
		/* ALWAYS KEEPING THE TOGGLER OR THE CHECKBOX ON TOP OF EVERYTHING :  */
		grid-area: area;
		z-index: 5;
		height: 50px;
		width: 50px;
		cursor: pointer;
		opacity: 0;
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
			opacity: 1;
			visibility: visible;
		}
	}
	&__hamburger {
		z-index: 4;
		grid-area: area;
		height: 40px;
		width: 40px;
		padding: 0.6rem;

		display: flex;
		align-items: center;
		justify-content: center;
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
			content: '';
			position: absolute;
			top: -10px;
			background-color: #000;
			width: 100%;
			height: 2px;
			transition: all 0.4s ease;
		}
		& > div::after {
			top: 10px;
		}
	}
}
</style>
