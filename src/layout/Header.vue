<template>
	<header class="header" v-if="route.name != 'error'">
		<div class="header__container">
			<RouterLink class="header__logo-container" to="/">
				<img class="header__logo" src="@/assets/icons/logo.svg" alt="logo" />
				<img class="header__logo-white" src="@/assets/icons/header-logo.svg" alt="logo" />
			</RouterLink>
			<label class="header__btn" for="menu">
				<input class="header__menu" type="checkbox" name="menu" id="menu" ref="menuBtn" />
				<label for="menu" class="header__label"></label>
				<div class="menu">
					<NavLinks :links="routingLinks" class="menu__list" @click="toggleMenu" />
					<div class="menu__content">
						<label class="nav__lang nav__lang-mobile" for="menu-lang">
							<label class="nav__lang-label" for="menu-lang">{{
								i18n.global.locale.toUpperCase()
							}}</label>
							<input
								class="nav__lang-checkbox"
								type="checkbox"
								name="lang"
								id="menu-lang" />
							<ul class="nav__lang-list">
								<li class="nav__lang-item" v-for="lang in ['UZ', 'RU', 'EN', 'TR']">
									<label
										class="nav__lang-label"
										for="menu-lang"
										@click="changeLanguage(lang.toLowerCase())"
										>{{ lang }}</label
									>
								</li>
							</ul>
						</label>
						<button class="menu__button button">{{ i18n.global.t('hero-btn') }}</button>
						<a href="tel:+998 77 124 10 10">+998 77 124 10 10</a>
						<p>{{ i18n.global.t('mon-sat') }}: 9:00–18:00</p>
					</div>
				</div>
			</label>
			<nav class="nav">
				<NavLinks :links="routingLinks" class="nav__list" />
				<label class="nav__lang" for="lang">
					<label class="nav__lang-label" for="lang">{{
						i18n.global.locale.toUpperCase()
					}}</label>
					<input class="nav__lang-checkbox" type="checkbox" name="lang" id="lang" />
					<ul class="nav__lang-list">
						<li class="nav__lang-item" v-for="lang in ['UZ', 'RU', 'EN', 'TR']">
							<label
								class="nav__lang-label"
								for="lang"
								@click="changeLanguage(lang.toLowerCase())"
								>{{ lang }}</label
							>
						</li>
					</ul>
				</label>
			</nav>
		</div>
	</header>
</template>

<script setup>
import NavLinks from '@/components/NavLinks.vue';
import { routingLinks } from '@/content/data';
import i18n, { changeLanguage } from '@/locales';
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const menuBtn = ref(null);

const toggleMenu = () => (menuBtn.value.checked = !menuBtn.value.checked);
</script>

<style lang="scss" scoped>
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
		transform: translateX(0);
	}
	&__right {
		@include media($tab-port, min) {
			display: none;
		}
		display: flex;
		gap: 2rem;
		.nav__lang {
			gap: 0.5rem;
		}
		label {
			color: #b4bcc8;
		}
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
		padding: 0.9rem 0;
		gap: 2rem;
		margin: 0 $header-margin;
		&-investors {
			grid-auto-columns: max-content !important;
			max-width: 100% !important;
			margin: 0 6.4rem;
		}
		@include media($desktop) {
			margin: 0 calc($header-margin - 8rem);
		}
		@include flex-justify(space-between);
		@include media($tab-port) {
			position: absolute;
			inset: 0;
			max-width: 100%;
			display: grid;
			grid-auto-flow: column;
			align-content: start;
			grid-auto-columns: max-content;
			justify-items: center;
			align-items: center;
			padding-top: 20px;
		}

		@include media(500px) {
			margin: 0 3rem;
		}

		@include media(1500px) {
			max-width: 90%;
		}
		& > * {
			z-index: 2;
		}
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
		&-container {
			z-index: 10;
		}
	}
	&__list {
		@include grid-row-gap(2rem);
	}
}
.nav {
	@include flex(space-between, center);
	@include responsive-width(80rem);
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
		position: relative;
		&-mobile {
			color: #fff;
			input {
				content: url(@/assets/icons/down-arrow_white.svg);
			}
		}
		&-list {
			transition-property: opacity, transform, visibility;
			transition-duration: 0.25s;
			width: 6rem;
			position: absolute;
			right: 0;
			top: 3rem;
			display: flex;
			align-items: center;
			flex-direction: column;
			gap: 0.5rem;
			background-color: #fff;
			padding: 1rem;
			font-family: $font-jost;
			font-size: 1.6rem;
			font-weight: 500;
			color: rgb(39, 39, 39);
			z-index: 10;
			border-radius: 0.7rem;
			box-shadow: 0px 0px 10px 3px rgba($color-primary, 0.5);
			transform: translateY(-4rem);
			opacity: 0;
			visibility: hidden;
			li:nth-child(2) {
				transition-delay: 0.3s;
			}
			li:nth-child(3) {
				transition-delay: 0.4s;
			}
			li:last-child {
				transition-delay: 0.5s;
			}
			& > *:hover {
				color: $color-secondary;
			}
			& * {
				cursor: pointer;
			}
			& > * {
				transition-property: opacity, transform;
				transition-duration: 0.2s;
				transition-delay: 0.1s;
				transform: translateX(-2rem);
				opacity: 0;
			}
		}
		& > * {
			cursor: pointer;
		}
		&-label {
			font-family: $font-jost;
			font-size: 1.6rem;
			font-weight: 500;
		}
		&-checkbox {
			appearance: none;
			transition: transform 0.3s;
			&:checked {
				transform: rotate(180deg);
			}
			&:checked + .nav__lang-list {
				opacity: 1;
				transform: translateY(0);
				visibility: visible;
			}
			&:checked + .nav__lang-list > * {
				opacity: 1;
				transform: translateX(0);
			}
			&::before {
				content: url(../assets/icons/down-arrow.svg);
			}
			&_white {
				content: url(../assets/icons/down-arrow_white.svg);
				& + .nav__lang-list {
					top: 6rem;
				}
			}
		}
	}
}
.menu {
	@include full-viewport;
	transform: translateX(-100%);
	@include flex-justify(space-evenly, null, null, column);
	padding-top: 120px;
	transition: transform 0.8s;
	position: fixed;
	inset: 0;
	background-image: linear-gradient(to bottom, #4a0605, #150303);

	&__list {
		font-family: $font-jost;
		font-weight: 400;
		font-size: 3.5rem;
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
