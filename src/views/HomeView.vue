<template>
	<Background />
	<main class="main" ref="container">
		<section class="hero">
			<div class="hero__content">
				<h1 class="hero__heading">Ishlab chiqarishning yangi bosqichi</h1>
				<p class="body-l">
					Bringing interiors to life, understanding the person or people living in a home
					is far greater need in design.
				</p>
				<button class="secondary-button">joy tanlash</button>
			</div>
		</section>
		<section class="choose">
			<h2 class="heading">Nega aynan Ostim texnoparki</h2>
			<div class="choose__container choose-animate" ref="chooseContainer">
				<div class="choose__box body-l" v-for="content in chooseContent" :key="content">
					<div class="choose__icon">
						<img :src="content.icon" :alt="content.title" />
					</div>
					<h3 class="choose__heading">{{ content.title }}</h3>
					<p>{{ content.text }}</p>
				</div>
			</div>
		</section>
		<section class="avenues">
			<h2 class="heading avenues__heading">Loyihamizda joylashgan</h2>
			<p class="body-l">
				So don’t fall for the amplification level only. Carefully evaluate the lens size so
				you have the right fit for what you want to do.
			</p>
			<div class="avenues__content">
				<button class="avenues__left">
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
				</button>
				<div class="avenues__container avenues-animate" ref="avenuesContainer">
					<div class="avenues__box" v-for="avenue in avenueContent" :key="avenue">
						<div class="avenues__banner">
							<img :src="avenue.banner" alt="banner" />
						</div>
						<h3>{{ avenue.title }}</h3>
					</div>
				</div>
				<button class="avenues__right">
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
				</button>
			</div>
			<div class="avenues__buttons">
				<button class="avenues__left">
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
				</button>
				<button class="avenues__right">
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
				</button>
			</div>
		</section>
		<section class="faq">
			<div class="faq__left">
				<h2 class="heading">Ko’p beriladigan savollar:</h2>
				<p class="body-l">
					We are ready to help you build and also realize the room design that you dream
					of dream
				</p>
				<TransitionGroup tag="ul" name="list" class="list">
					<li class="list__item body-l" v-for="faq in faqs" :key="faq">
						<input type="checkbox" class="list__checkbox" :id="faq.question" />
						<label :for="faq.question" class="list__label">{{ faq.question }}</label>
						<label :for="faq.question" class="list__icon"> </label>
						<p class="list__text">{{ faq.answer }}</p>
					</li>
				</TransitionGroup>
				<button class="faq__more" @click="increaseFaqs">more</button>
			</div>
			<img class="faq__banner" src="../assets/faq-banner.avif" alt="banner" />
		</section>
		<DownloadCatalog />
		<section class="connect">
			<img src="../assets/faq-banner.avif" alt="banner" />
			<div class="connect__content">
				<h2 class="heading">BIZ BILAN BOG’LANING</h2>
				<p class="body-l">
					We help people not only to make the room at home better, but we help people to
					feel a more homey and comfortable room, you don’t have to worry about the result
					because of these interiors are made by people who are professionals in their
					dields with an elegant and lucuriois style and with premium quality materials
				</p>
				<p class="body-l">Contact us if you are interested in working with us</p>
				<form class="connect__form" @submit.prevent="submitTel">
					<input
						@focus="initInput"
						@input="validateInput"
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
		<Instagram />
		<Footer />
		<Copyright />
	</main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import iconCheck from '@/assets/icons/check.svg';
import workflowIcon from '@/assets/icons/workflow.svg';
import trustedIcon from '@/assets/icons/trusted.svg';
import adminAvenue from '@/assets/admin.avif';
import sportAvenue from '@/assets/sport.avif';
import hotelAvenue from '@/assets/hotel.avif';
import businessAvenue from '@/assets/business.avif';
import kindergardenAvenue from '@/assets/kindergarden.avif';
import schoolAvenue from '@/assets/school.avif';
import Background from '@/layout/Background.vue';
import DownloadCatalog from '@/layout/DownloadCatalog.vue';
import Instagram from '@/layout/Instagram.vue';
import Copyright from '@/layout/Copyright.vue';
import Footer from '@/layout/Footer.vue';
import { animateSections } from '@/js/helpers';

const chooseContent = [
	{
		icon: iconCheck,
		title: 'Qulay joylashuv',
		text: 'We deliver the final work with great professional way.'
	},
	{
		icon: workflowIcon,
		title: 'Zamonaviy texnopark',
		text: 'We provide the most easy smoth workflow of interior design.'
	},
	{
		icon: trustedIcon,
		title: 'Xalqaro industrial park',
		text: 'People trust us since we opened the company'
	}
];
const avenueContent = [
	{
		banner: adminAvenue,
		title: 'adminstration'
	},
	{
		banner: sportAvenue,
		title: 'Sport complex'
	},
	{
		banner: schoolAvenue,
		title: 'School'
	},
	{
		banner: hotelAvenue,
		title: 'Hotel'
	},
	{
		banner: businessAvenue,
		title: 'Business centre'
	},
	{
		banner: kindergardenAvenue,
		title: 'kindergarden'
	}
];
const faqsArr = [
	{
		question: 'Texnopark qayerda joylashgan?',
		answer: 'Modern design is a term in the design world that refers to a house with a clean design, sim'
	},
	{
		question: 'Texnoparkda suv ta’minoti qanday?',
		answer: 'Modern design is a term in the design world that refers to a house with a clean design, sim'
	},
	{
		question: 'Umumiy maydon qancha?',
		answer: 'Modern design is a term in the design world that refers to a house with a clean design, sim'
	},
	{
		question: 'Qurib bitkazilish muddati',
		answer: 'Modern design is a term in the design world that refers to a house with a clean design, sim'
	},
	{
		question: 'Custom question',
		answer: 'Modern design is a term in the design world that refers to a house with a clean design, sim'
	},
	{
		question: 'Another question',
		answer: 'Modern design is a term in the design world that refers to a house with a clean design, sim'
	},
	{
		question: 'New question',
		answer: 'Modern design is a term in the design world that refers to a house with a clean design, sim'
	},
	{
		question: 'Old question',
		answer: 'Modern design is a term in the design world that refers to a house with a clean design, sim'
	}
];

const faqs = ref(faqsArr.slice(0, 4));
const tel = ref('');
const container = ref(null);
const chooseContainer = ref(null);
const avenuesContainer = ref(null);

const submitTel = () => {
	const trimmedTel = tel.value.replaceAll(' ', '');
	console.log('submitting');
	console.log(trimmedTel);
	tel.value = '';
};
const increaseFaqs = () => (faqs.value = faqsArr.slice(0, faqs.value.length + 2));
const validateInput = () => {
	const spaces = [7, 11, 14];
	if (tel.value.length <= 5) tel.value = '+998 ';
	if (spaces.includes(tel.value.length)) tel.value = `${tel.value} `;
};
const initInput = () => !tel.value && (tel.value = '+998 ');

const handleObserver = entries =>
	entries.forEach(
		entry => entry.isIntersecting && entry.target.classList.remove(entry.target.classList[1])
	);

const observer = new IntersectionObserver(handleObserver, { threshold: 0.3 });
onMounted(() => {
	animateSections(Array.from(container.value.children));
	observer.observe(avenuesContainer.value);
	observer.observe(chooseContainer.value);
});
</script>

<style lang="scss" scoped>
@import '@/sass/abstracts/index';

.main {
	font-family: $font-poppins;
	color: $color-intermediate-primary;
}
.hero {
	@include grid-center;
	margin: 0;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(../assets/about-hero.avif);
	background-position: center;
	background-size: cover;
	height: calc(100dvh - 7.7rem);
	@include media($tab-port) {
		background: none;
	}
	&__content {
		@include responsive-width(80rem);
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
	}
	p {
		font-size: inherit;
	}
}
.choose {
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
		@include grid-row-gap(0.7rem);
		@include media($tab-port) {
			justify-items: center;
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
			@include media($large-desktop) {
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
		$transition-delays: 100ms 200ms 300ms 400ms 500ms 600ms;
		@each $delay in $transition-delays {
			$index: index($transition-delays, $delay);
			&:nth-child(#{$index}) {
				transition-delay: $delay * 4;
			}
		}
		&:hover img {
			transform: scale(1.5);
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
		@include cover-img(100%, 80%);
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
			color: inherit;
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
}

.list {
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
			& ~ .list__label {
				font-weight: bold;
				color: #000;
			}
			& ~ .list__text {
				max-height: 30rem;
			}
			& ~ .list__icon::before {
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
