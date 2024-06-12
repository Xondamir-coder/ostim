<template>
	<main class="main">
		<section class="hero">
			<img class="hero__img" src="@/assets/about-hero.avif" alt="banner" />
			<div class="hero__content">
				<h1 class="hero__heading">{{ i18n.global.t('hero-title') }}</h1>
				<p class="body-l">
					{{ i18n.global.t('hero-subtitle') }}
				</p>
				<RouterLink class="secondary-button" to="/project">{{
					i18n.global.t('hero-btn')
				}}</RouterLink>
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

			<div class="avenues__container avenues-animate" ref="avenuesContainer">
				<RouterLink
					class="avenues__box"
					v-for="avenue in avenues"
					:key="avenue"
					:to="`/project#${avenue.to}`">
					<div class="avenues__banner">
						<img loading="lazy" :src="avenue.banner" alt="banner" />
					</div>
					<h3>{{ avenue.title }}</h3>
				</RouterLink>
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
			<img src="@/assets/faq-banner.avif" alt="banner" />
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
					<Transition name="slide">
						<span
							class="connect__form-label"
							v-if="showTelLabel"
							:class="{ 'connect__form-label--error': telLabel.includes('❌') }">
							{{ telLabel }}
						</span>
					</Transition>
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
import DownloadCatalog from '@/layout/DownloadCatalog.vue';
import Copyright from '@/layout/Copyright.vue';
import Footer from '@/layout/Footer.vue';
import i18n from '@/locales';

const showTelLabel = ref(false);
const telLabel = ref('');
const tel = ref('');
const reasonsContainer = ref();
const avenuesContainer = ref();

const getDevice = () => (window.matchMedia('(pointer:coarse)').matches ? 'Mobile' : 'Desktop');
const submitTel = async () => {
	if (tel.value.length < 17) {
		showTelLabel.value = true;
		telLabel.value = `${i18n.global.t('submit-error')} ❌`;
		return;
	}

	console.log('submitting');

	const date = new Intl.DateTimeFormat('en-GB', {
		dateStyle: 'short',
		timeStyle: 'short'
	}).format(new Date());
	const device = getDevice();
	const text = `Phone number: ${tel.value}
Time: ${date}
From: ${device}`;
	const botToken = import.meta.env.VITE_BOT_TOKEN;
	const chat_id = '@ostim_global';
	const postData = { chat_id, text };
	const URL = `https://api.telegram.org/bot${botToken}/sendMessage`;

	try {
		const res = await fetch(URL, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(postData)
		});
		const data = await res.json();
		tel.value = '';
		showTelLabel.value = true;
		telLabel.value = `${i18n.global.t('submit-success')} ✅`;
		console.log(data);
	} catch (error) {
		console.error(error);
	}
};
const setInitialValue = () => (tel.value = '+998 ');
const checkInput = () => {
	tel.value = tel.value.length < 5 ? '+998 ' : tel.value;
	showTelLabel.value && (showTelLabel.value = false);
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
</script>

<style lang="scss" scoped>
.main {
	font-family: $font-poppins;
	color: $color-intermediate-primary;
}
.hero {
	$height: calc(100vh - 7.7rem);
	@include grid-center;
	margin: 0;
	height: $height;
	position: relative;

	@include media($tab-port) {
		height: 100vh;
	}
	&::before {
		content: '';
		width: 100%;
		height: $height;
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		inset: 0;
		z-index: -1;
		@include media($tab-port) {
			// display: none;
		}
	}
	a {
		text-decoration: none;
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
			height: 100%;
		}
	}
	&__content {
		@include responsive-width(65rem);
		@include grid-row-gap(2rem);
		color: #fff;
		justify-items: center;
		text-align: center;
		a {
			animation: slide-bottom 800ms;
		}
		p {
			@include responsive-width(50rem);
			font-weight: 300;
			animation: slide-right 800ms ease-out;
		}
	}
	&__heading {
		@include text(7.2rem, 600, 8rem, none);
		animation: slide-left 800ms ease-out;
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
		@include grid-center;
		height: 6.2rem;
		width: 6.2rem;
		border-radius: 50%;
		background-color: $color-beige;
		img {
			width: 60%;
			height: 60%;
		}
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
		width: 100%;
		gap: 5rem;
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;

		&::-webkit-scrollbar {
			height: 10px;
		}
		&::-webkit-scrollbar-track {
			background: #fff;
			box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		}
		&::-webkit-scrollbar-thumb {
			background: $color-secondary;
			border: none;
			border-radius: 10px;
		}
	}
	&__box {
		min-width: 260px;
		flex: 1 0 30.6%;
		scroll-snap-align: center;
		text-decoration: none;
		cursor: pointer;
		@include transition-appear-transform(1s);
		$transition-delays: 100ms 200ms 300ms 400ms 500ms 600ms 700ms 800ms 900ms 1000ms 1100ms;
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
		@include media($tab-land) {
			display: none;
		}
		align-self: end;
	}
	&__form {
		position: relative;
		@include flex(space-between, center);
		@include responsive-width(400px);
		background-color: #fefcfb;
		border: 1px solid $color-tertiary;
		padding: 1rem 2rem;
		border-radius: 20px;
		justify-self: start;
		@include media($tab-port) {
			padding: 1rem;
		}
		&-label {
			position: absolute;
			bottom: -25px;
			font-size: 12px;
			color: #00d26a;
			&--error {
				color: #f92f60;
			}
		}
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
		@include grid-center;
		@include dimensions(44px);
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

.slide-enter-active,
.slide-leave-active {
	transition-property: transform, opacity;
	transition-duration: 300ms;
}
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateX(-15px);
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
