<template>
	<Background />
	<main class="main">
		<section class="hero">
			<img class="hero__img" src="../assets/about-hero.avif" alt="banner" />
			<div class="hero__content">
				<h1 class="hero__heading">{{ i18n.global.t('hero-title') }}</h1>
				<p class="body-l">
					{{ i18n.global.t('hero-subtitle') }}
				</p>
				<button class="secondary-button">{{ i18n.global.t('hero-btn') }}</button>
			</div>
		</section>
		<section class="reasons" data-animate>
			<h2 class="heading">{{ i18n.global.t('reasons-title') }}</h2>
			<div class="reasons__container reasons-animate" ref="reasonsContainer">
				<div class="reasons__box body-l" v-for="reason in reasons" :key="reason">
					<div class="reasons__icon">
						<img :src="reason.icon" :alt="reason.title" />
					</div>
					<h3 class="reasons__heading">{{ reason.title }}</h3>
					<p>{{ reason.text }}</p>
				</div>
			</div>
		</section>
		<section class="avenues" data-animate>
			<h2 class="heading avenues__heading">{{ i18n.global.t('avenues-title') }}</h2>
			<p class="body-l">
				{{ i18n.global.t('avenues-subtitle') }}
			</p>
			<div class="avenues__content">
				<!-- <button class="avenues__left">
					<svg
						width="10"
						height="17"
						viewBox="0 0 10 17"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.24791 15.7186L1.3042 8.77488L8.24791 1.83118"
							stroke="#3B3B3B"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
				</button> -->
				<div class="avenues__container avenues-animate" ref="avenuesContainer">
					<div class="avenues__box" v-for="avenue in avenues" :key="avenue">
						<div class="avenues__banner">
							<img loading="lazy" :src="avenue.banner" alt="banner" />
						</div>
						<h3>{{ avenue.title }}</h3>
					</div>
				</div>
				<!-- <button class="avenues__right">
					<svg
						width="10"
						height="17"
						viewBox="0 0 10 17"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.30225 15.7186L8.24595 8.77488L1.30225 1.83118"
							stroke="#3B3B3B"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
				</button> -->
			</div>
		</section>
		<section class="faq" data-animate>
			<div class="faq__left">
				<h2 class="heading">{{ i18n.global.t('faq-title') }}</h2>
				<p class="body-l">
					{{ i18n.global.t('faq-subtitle') }}
				</p>
				<TransitionGroup tag="ul" name="list" class="faq__list">
					<li class="faq__list__item body-l" v-for="faq in questions" :key="faq">
						<input type="checkbox" class="faq__list__checkbox" :id="faq.question" />
						<label :for="faq.question" class="faq__list__label">{{
							faq.question
						}}</label>
						<label :for="faq.question" class="faq__list__icon"> </label>
						<p class="faq__list__text">{{ faq.answer }}</p>
					</li>
				</TransitionGroup>
				<button class="faq__more" @click="increaseFaqs">more</button>
			</div>
			<img class="faq__banner" src="../assets/faq-banner.avif" alt="banner" />
		</section>
		<DownloadCatalog data-animate />
		<section class="connect" data-animate>
			<img src="../assets/faq-banner.avif" alt="banner" />
			<div class="connect__content">
				<h2 class="heading">{{ i18n.global.t('connect-title') }}</h2>
				<p class="body-l">
					{{ i18n.global.t('connect-subtitle') }}
				</p>
				<form class="connect__form" @submit.prevent="submitTel">
					<input
						@focus="setInitialValue"
						@input="checkInput"
						required
						minlength="17"
						maxlength="17"
						type="tel"
						class="connect__input"
						placeholder="+998 __ ___  __ __"
						v-model="tel" />
					<button class="connect__btn">
						<svg
							width="8"
							height="14"
							viewBox="0 0 8 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1 0.999999L7 7L1 13"
								stroke="#AE1F16"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
					</button>
				</form>
			</div>
		</section>
		<Footer data-animate />
		<Copyright data-animate />
	</main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { animateSections } from '@/js/helpers';
import { avenues, questions, reasons } from '@/content/data';
import Background from '@/layout/Background.vue';
import DownloadCatalog from '@/layout/DownloadCatalog.vue';
import Copyright from '@/layout/Copyright.vue';
import Footer from '@/layout/Footer.vue';
import i18n from '@/locales';

const tel = ref('');
const reasonsContainer = ref();
const avenuesContainer = ref();

const submitTel = () => {
	const trimmedTel = tel.value.replaceAll(' ', '');
	console.log('submitting');
	console.log(trimmedTel);
	tel.value = '';
};
const handleObserver = entries => {
	entries.forEach(
		entry => entry.isIntersecting && entry.target.classList.remove(entry.target.classList[1])
	);
};

const observer = new IntersectionObserver(handleObserver, { threshold: 0.3 });
onMounted(() => {
	animateSections(document.querySelectorAll('[data-animate]'));
	observer.observe(avenuesContainer.value);
	observer.observe(reasonsContainer.value);
});

const setInitialValue = () => (tel.value = '+998 ');
const checkInput = () => {
	tel.value = tel.value.length < 5 ? '+998 ' : tel.value;
	formatValue();
};
const lastIndexOfLastNumber = str => {
	for (let i = str.length - 1; i >= 0; i--) {
		if (!isNaN(parseInt(str[i]))) {
			return i;
		}
	}
	return -1;
};
const formatValue = () => {
	const inputMatched = tel.value
		.replace(/[^\d+]/g, '')
		.match(/(\+\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/); // Match the desired format	console.log(inputMatched);

	const formatted = !inputMatched[2]
		? inputMatched[1]
		: '' +
		  inputMatched[1] +
		  ' ' +
		  inputMatched[2] +
		  ' ' +
		  inputMatched[3] +
		  ' ' +
		  inputMatched[4] +
		  ' ' +
		  inputMatched[5];

	tel.value = formatted;

	const lastIndex = lastIndexOfLastNumber(formatted);

	event.target.selectionStart = lastIndex + 1;
	event.target.selectionEnd = lastIndex + 1;
};
</script>

<style lang="scss" scoped>
.main {
	font-family: $font-poppins;
	color: $color-intermediate-primary;
}
.hero {
	$height: calc(100dvh - 7.7rem);
	@include grid-center;
	margin: 0;
	height: $height;

	position: relative;
	&::before {
		content: '';
		width: 100%;
		height: $height;
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		inset: 0;
		z-index: -1;
		@include media($tab-port) {
			display: none;
		}
	}
	button {
		margin-top: 10%;
	}
	&__img {
		height: $height;
		width: 100%;
		object-fit: cover;
		object-position: center;
		position: absolute;
		z-index: -2;
		transition: filter 0.7s;
		@include media($tab-port) {
			display: none;
		}
	}
	&__content {
		@include responsive-width(65rem);
		@include grid-row-gap(2rem);
		color: #fff;
		justify-items: center;
		text-align: center;
		button {
			animation: slide-bottom 1s;
		}
		p {
			@include responsive-width(50rem);
			font-weight: 300;
			animation: slide-right 1s ease-out;
		}
	}
	&__heading {
		@include text(7.2rem, 600, 8rem, none);
		animation: slide-left 1s ease-out;
		text-transform: capitalize;
		@include media($tab-port) {
			font-size: 5.5rem;
		}
	}
	p {
		font-size: inherit;
	}
}
.reasons {
	@include grid-row-gap(5rem);
	overflow: hidden;
	&-animate &__box {
		transform: translateX(-100%);
		opacity: 0;
	}
	h2 {
		justify-self: center;
		text-align: center;
	}
	&__container {
		@include grid-responsive-cols(320px, 10rem);
		@include media($tab-port) {
			gap: 5rem;
			justify-items: center;
		}
	}
	&__box {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		@include media($tab-port) {
			align-items: center;
			text-align: center;
			width: 300px;
		}
		@include transition-appear-transform(1s);
		$transition-delays: 100ms 200ms 300ms;
		@each $delay in $transition-delays {
			$index: index($transition-delays, $delay);
			&:nth-child(#{$index}) {
				transition-delay: $delay * 5;
			}
		}
	}
	&__icon {
		@include dimensions(6.2rem);
		@include grid-center;
		border-radius: 50%;
		background-color: $color-beige;
	}
	&__heading {
		@extend .heading;
		font-size: 18px !important;
	}
}
.avenues {
	@include grid-row-gap(3rem);
	&-animate &__box {
		transform: translateY(-50%);
		opacity: 0;
	}
	h2#{&}__heading {
		text-align: center;
		line-height: normal;
		font-size: 4.2rem;
	}
	p {
		@include responsive-width(60rem);
		color: rgba(#151439, 0.4);
		justify-self: center;
		text-align: center;
	}
	&__content {
		display: flex;
		align-items: center;
		gap: 6rem;
		button {
			@include media($tab-port) {
				display: none;
			}
		}
	}
	&__container {
		@include grid-repeated-cols(3, 5rem);
		@include media($large-desktop, min) {
			gap: 8rem;
		}
		@include media($tab-port) {
			@include grid-auto(column, 2rem, 250px);
			grid-template-columns: none;
			overflow-x: auto;
			width: calc(100vw - 10rem);
		}
	}
	&__buttons {
		justify-self: end;
		display: flex;
		gap: 1.1rem;
		button {
			@include dimensions(50px);
			padding: 0;
		}
		@include media($large-desktop, min) {
			display: none;
		}
	}
	&__left,
	&__right {
		@include grid-center;
		padding: 15px 20px;
		border-radius: 50%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
	}
	&__banner {
		@include rounded-border;
		overflow: hidden;
	}
	&__box {
		cursor: pointer;
		@include transition-appear-transform(1s);
		$transition-delays: 100ms 200ms 300ms 400ms 500ms 600ms 700ms 800ms 900ms;
		@each $delay in $transition-delays {
			$index: index($transition-delays, $delay);
			&:nth-child(#{$index}) {
				transition-delay: $delay * 4;
			}
		}
		&:hover img {
			transform: scale(1.4);
		}
		& img {
			@include cover-img;
			transition: transform 0.7s ease-out;
		}
		h3 {
			@include text(14px, bold, null, uppercase, 2px);
			font-family: inherit;
			color: $color-dark-blue;
		}
	}
}

.faq {
	@include grid-auto(column, 5rem);
	@include media($tab-land) {
		grid-auto-flow: row;
		margin: 0;
	}
	&__left {
		@include grid-row-gap(1.5rem);
		@include media($tab-land) {
			margin: var(--page-margin-y) var(--page-margin-x);
		}
	}
	&__more {
		@include text(16px, 500, null, lowercase, normal);
		font-family: inherit;
		color: $color-secondary;
		justify-self: start;
	}
	&__banner {
		@include cover-img(100%, 80%);
		@include rounded-border;
		@include media($tab-land) {
			grid-row: 1 / span 1;
			border-radius: 0;
		}
		align-self: center;
		justify-self: center;
	}
}

.connect {
	@include grid-auto(column, 15rem);
	img {
		@include cover-img;
		@include rounded-border;
		align-self: end;
		@include media($tab-land) {
			display: none;
		}
	}
	&__form {
		@include flex(space-between, center);
		@include responsive-width(400px);
		background-color: #fefcfb;
		border: 1px solid $color-tertiary;
		padding: 1rem 2rem;
		border-radius: 20px;
		justify-self: start;
	}
	&__input {
		@include text(14px, 400, 2em);
		background-color: transparent;
		border: none;
		color: $color-secondary;
		font-family: inherit;
		&:focus {
			outline: none;
		}
		&::placeholder {
			color: rgba($color-secondary, 0.7);
		}
	}
	&__content {
		@include grid-row-gap(2rem);
	}
	&__btn {
		@include dimensions(44px);
		@include grid-center;
		border-radius: 50%;
		background-color: $color-tertiary;
	}
	h2 {
		text-transform: uppercase;
	}
}

.faq__list {
	max-height: 350px;
	overflow-y: auto;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-track {
		background-color: $color-tertiary;
	}
	&::-webkit-scrollbar-thumb {
		@include rounded-border;
		background-color: $color-secondary;
	}
	&__item {
		@include grid-area('label checkbox' 'text text', 1fr max-content);
		align-items: center;
		row-gap: 1rem;
		padding-bottom: 1rem;
	}
	&__label {
		cursor: pointer;
		font-weight: 600;
		transition: font-weight 0.5s, color 0.5s;
	}
	&__text {
		padding-left: 1rem;
		font-weight: 300;
		grid-area: text;
		transition: max-height 1s;
		max-height: 0;
		overflow: hidden;
	}
	&__icon {
		@include grid-area('area');
		@include dimensions(11px, 1px);
		background-color: $color-secondary;
		cursor: pointer;
		&::before {
			content: '';
			@include dimensions(100%);
			grid-area: area;
			display: block;
			background-color: inherit;
			transform: rotate(90deg);
			transition: scale 0.5s;
		}
	}
	&__checkbox {
		display: none;
		&:checked {
			& ~ .faq__list__label {
				font-weight: bold;
				color: #000;
			}
			& ~ .faq__list__text {
				max-height: 30rem;
			}
			& ~ .faq__list__icon::before {
				scale: 0;
			}
		}
	}
}

.list-move,
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
.list-leave-active {
	position: absolute;
}

.heading {
	font-family: inherit;
	font-size: 3.6rem;
	font-weight: 500;
	line-height: 2em;
}
h1,
h2,
h3 {
	text-transform: none;
}
</style>
