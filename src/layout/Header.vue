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
				<input class="header__menu-btn" type="checkbox" name="menu" id="menu" />
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
		&-btn {
			appearance: none;
			height: 2px;
			width: 2rem;
			background-color: $color-primary;
			transition: background-color 0.3s;
			@include media($tab-port, min) {
				display: none;
			}
			&::before {
				content: '';
				display: block;
				background-color: #000;
				width: 100%;
				height: 100%;
				translate: 0px 5px;
			}
			&::after {
				content: '';
				display: block;
				background-color: #000;
				width: 100%;
				height: 50%;
				translate: 0px -7px;
			}
		}
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
