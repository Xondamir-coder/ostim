<template>
	<ul class="investors__nav">
		<li
			@click="changeSlide(0)"
			class="investors__btn"
			:class="{ 'investors__btn-active': curSlide === 0 }">
			<span class="investors__btn-span">START</span>
		</li>
		<li
			class="investors__btn"
			v-for="entry in [1, 2, 3, 4, 5]"
			@click="changeSlide(entry)"
			:key="entry"
			:class="{ 'investors__btn-active': curSlide === entry }"></li>
		<li
			@click="changeSlide(6)"
			class="investors__btn"
			:class="{ 'investors__btn-active': curSlide === 6 }">
			<span class="investors__btn-span">STOP</span>
		</li>
	</ul>
	<!-- 1 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 0 }">
		<div class="investors__content investors__content--1">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-1') }}</p>
			<h1 class="investors__title">{{ i18n.global.t('investors-title-1') }}</h1>
			<h2 class="investors__subtitle">{{ i18n.global.t('investors-subtitle-1') }}</h2>
			<button class="secondary-button">{{ i18n.global.t('who-btn') }}</button>
		</div>
		<div class="investors__right">
			<img class="investors__img" src="@/assets/investors-1.avif" alt="first" />
		</div>
	</div>
	<!-- 2 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 1 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-2') }}</p>
			<h1 class="investors__title">OSTIM GLOBAL</h1>
			<ul class="investors__list">
				<li class="investors__item" v-for="i in [1, 2, 3]" :key="i">
					<img src="@/assets/icons/investors-red-check.svg" alt="check" />
					<span>{{ i18n.global.t(`reasons-${i}-title`) }}</span>
				</li>
			</ul>
			<ul class="investors__areas">
				<li class="investors__area" v-for="i in [1, 2, 3]" :key="i">
					<span class="investors__area-big">100</span>
					<span class="investors__area-small">га</span>
					<span class="investors__area-title">
						{{ i18n.global.t('investors-total-area') }}
					</span>
				</li>
			</ul>
			<button class="secondary-button">{{ i18n.global.t('who-btn') }}</button>
		</div>
		<div class="investors__right">
			<img class="investors__img" src="@/assets/investors-2.avif" alt="first" />
			<button class="investors__right-btn">
				<svg
					width="80"
					height="84"
					viewBox="0 0 80 84"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M73.204 30.9708C75.2052 32.035 76.8792 33.6237 78.0465 35.5666C79.2139 37.5095 79.8306 39.7334 79.8306 42C79.8306 44.2666 79.2139 46.4905 78.0465 48.4334C76.8792 50.3763 75.2052 51.9649 73.204 53.0291L19.8207 82.0583C11.2248 86.7375 0.666504 80.6542 0.666504 71.0333V12.9708C0.666504 3.34581 11.2248 -2.73335 19.8207 1.93748L73.204 30.9708Z"
						fill="white" />
				</svg>
			</button>
		</div>
	</div>
	<!-- 3 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 2 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-3') }}</p>
			<h1 class="investors__title">{{ i18n.global.t('investors-title-3') }}</h1>
			<p class="investors__subtitle">{{ i18n.global.t('investors-subtitle-3') }}</p>
			<ul class="investors__list">
				<li class="investors__item" v-for="i in [1, 2, 3, 4]" :key="i">
					<span class="investors__item-count">{{ i }}</span>
					<span>{{ i18n.global.t(`investors-item-${i}`) }}</span>
				</li>
			</ul>
			<button class="secondary-button">{{ i18n.global.t('contact-us') }}</button>
		</div>
		<div class="investors__right investors__carousel-img">
			<img v-for="img in imgs" :key="img" class="investors__img" :src="img" alt="avenue" />
		</div>
	</div>
	<!-- 4 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 3 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-4') }}</p>
			<h1 class="investors__title">OSTIM GLOBAL</h1>
			<p class="investors__subtitle">{{ i18n.global.t('investors-subtitle-4') }}</p>
			<ul class="investors__areas">
				<li
					class="investors__area"
					v-for="item in [
						['100', i18n.global.t('modules')],
						['150-200', i18n.global.t('modules')],
						['10 000', i18n.global.t('investors-total-area')]
					]"
					:key="item">
					<span class="investors__area-big">{{ item[0] }}</span>
					<span class="investors__area-small">м2</span>
					<span class="investors__area-title">
						{{ item[1] }}
					</span>
				</li>
			</ul>
			<button class="secondary-button">{{ i18n.global.t('who-btn') }}</button>
		</div>
		<div class="investors__right">
			<img class="investors__img" src="@/assets/investors-4.avif" alt="first" />
		</div>
	</div>
	<!-- 5 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 4 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-5') }}</p>
			<h1 class="investors__title">{{ i18n.global.t('investors-title-5') }}</h1>
			<p class="investors__subtitle">{{ i18n.global.t('investors-subtitle-5') }}</p>
			<ul class="investors__areas">
				<li
					class="investors__area"
					v-for="item in [
						['240', i18n.global.t('kindergarten')],
						['660', i18n.global.t('school')],
						['840', i18n.global.t('college')]
					]"
					:key="item">
					<span class="investors__area-big">{{ item[0] }}</span>
					<span class="investors__area-small">{{
						i18n.global.t('investors-place')
					}}</span>
					<span class="investors__area-title">
						{{ item[1] }}
					</span>
				</li>
			</ul>
			<button class="secondary-button">{{ i18n.global.t('who-btn') }}</button>
		</div>
		<div class="investors__right">
			<div class="investors__right-gradient"></div>
			<ul class="investors__right-carousel">
				<li
					class="investors__right-carousel_item"
					v-for="childrenAvenue in childrenAvenues"
					:key="childrenAvenue"
					:class="{
						'investors__right-carousel_item--active':
							childrenAvenue === currentChildrenAvenue
					}"
					@click="changeCurrentChildrenAvenue(childrenAvenue)">
					<img :src="childrenAvenue" alt="child avenue" />
				</li>
			</ul>
			<img class="investors__img" :src="currentChildrenAvenue" alt="child avenue" />
		</div>
	</div>
	<!-- 6 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 5 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-6') }}</p>
			<h1 class="investors__title">{{ i18n.global.t('investors-title-6') }}</h1>
			<ul class="investors__list">
				<li
					class="investors__item investors__item--6"
					v-for="i in [1, 2, 3, 4, 5]"
					:key="i">
					<span class="investors__item-count">{{ i }}</span>
					<span>{{ i18n.global.t(`investors-step-${i}`) }}</span>
					<div class="investors__item-sub" v-if="i === 2">
						<svg
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M15 30C16.9698 30 18.9204 29.612 20.7403 28.8582C22.5601 28.1044 24.2137 26.9995 25.6066 25.6066C26.9995 24.2137 28.1044 22.5601 28.8582 20.7403C29.612 18.9204 30 16.9698 30 15C30 13.0302 29.612 11.0796 28.8582 9.25975C28.1044 7.43986 26.9995 5.78628 25.6066 4.3934C24.2137 3.00052 22.5601 1.89563 20.7403 1.14181C18.9204 0.387986 16.9698 -2.93527e-08 15 0C11.0218 5.92805e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30ZM14.6133 21.0667L22.9467 11.0667L20.3867 8.93333L13.22 17.5317L9.51167 13.8217L7.155 16.1783L12.155 21.1783L13.445 22.4683L14.6133 21.0667Z"
								fill="#018757" />
						</svg>
						{{ i18n.global.t('investors-step-2-subtitle') }}
					</div>
				</li>
			</ul>
			<div class="investors__see">
				<span>{{ i18n.global.t('see-instruction') }}</span>
				<svg
					width="400"
					height="8"
					viewBox="0 0 400 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M399.354 4.35355C399.549 4.15829 399.549 3.84171 399.354 3.64645L396.172 0.464466C395.976 0.269204 395.66 0.269204 395.464 0.464466C395.269 0.659728 395.269 0.976311 395.464 1.17157L398.293 4L395.464 6.82843C395.269 7.02369 395.269 7.34027 395.464 7.53553C395.66 7.7308 395.976 7.7308 396.172 7.53553L399.354 4.35355ZM0 4.5H399V3.5H0L0 4.5Z"
						fill="black" />
				</svg>
			</div>
			<button class="secondary-button">{{ i18n.global.t('who-btn') }}</button>
		</div>
		<div class="investors__right">
			<img class="investors__img" src="@/assets/investors-6.avif" alt="first" />
		</div>
	</div>
	<!-- 7 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 6 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-7') }}</p>
			<h1 class="investors__title">{{ i18n.global.t('investors-title-7') }}</h1>
			<h1 class="investors__subtitle investors__subtitle--4">
				{{ i18n.global.t('investors-subtitle-7') }}
			</h1>
			<form class="investors__form" @submit.prevent="submitForm">
				<input
					v-model="data.name"
					type="text"
					name="name"
					id="name"
					required
					:placeholder="`${i18n.global.t('investors-input-name')} *`" />
				<input
					v-model="data.area"
					type="text"
					name="area"
					id="area"
					:placeholder="i18n.global.t('investors-input-area')" />
				<input
					v-model="data.tel"
					type="tel"
					name="tel"
					id="tel"
					required
					:placeholder="`${i18n.global.t('investors-input-tel')} *`" />
				<input
					v-model="data.source"
					type="text"
					name="source"
					id="source"
					:placeholder="i18n.global.t('investors-input-source')" />
				<input
					v-model="data.wish"
					class="investors__input-wish"
					type="text"
					name="wish"
					id="wish"
					:placeholder="i18n.global.t('investors-input-wish')" />
				<input
					v-model="data.gas"
					type="text"
					name="gas"
					id="gas"
					:placeholder="i18n.global.t('investors-input-gas')" />
				<input
					v-model="data.purpose"
					type="text"
					name="purpose"
					id="purpose"
					:placeholder="i18n.global.t('investors-input-purpose')" />
				<button type="submit" class="secondary-button">
					{{ i18n.global.t('submit') }}
				</button>
			</form>
		</div>
		<div class="investors__right investors__right--2">
			<Footer class="investors__footer" />
			<Copyright />
		</div>
	</div>
</template>

<script setup>
import { avenues } from '@/content/data';
import { Copyright, Footer } from '@/layout';
import i18n from '@/locales';
import { computed, onUnmounted, ref } from 'vue';
import schoolImg from '@/assets/investors-school.avif';
import collegeImg from '@/assets/investors-college.avif';
import kindergartenImg from '@/assets/investors-5.avif';

const curSlide = ref(0);
const data = ref({
	name: '',
	tel: '',
	area: '',
	source: '',
	wish: '',
	gas: '',
	purpose: ''
});
const imgs = computed(() => avenues.value.map(e => e.banner));
const childrenAvenues = computed(() => [kindergartenImg, collegeImg, schoolImg]);
const currentChildrenAvenue = ref(childrenAvenues.value[0]);

const changeSlide = slide => (curSlide.value = slide);
const handleKeyup = e => {
	if (e.key === 'ArrowRight')
		curSlide.value === 6 ? changeSlide(0) : changeSlide(curSlide.value + 1);
	if (e.key === 'ArrowLeft')
		curSlide.value === 0 ? changeSlide(6) : changeSlide(curSlide.value - 1);
};
const submitForm = () => {
	console.log(data.value);
};
const changeCurrentChildrenAvenue = newChildAvenue =>
	(currentChildrenAvenue.value = newChildAvenue);

document.addEventListener('keyup', handleKeyup);
onUnmounted(() => document.removeEventListener('keyup', handleKeyup));
</script>

<style lang="scss">
.investors {
	$transition-duration: 800ms;
	color: #000;
	font-family: $font-jost;
	display: flex;
	position: absolute;
	top: 10rem;
	right: 0;
	left: 0;
	opacity: 0;
	transition: opacity $transition-duration;
	overflow: hidden;
	height: 100vh;
	justify-content: space-between;
	// &:last-child {
	// 	position: fixed;
	// }

	&--active {
		// position: absolute !important;
		opacity: 1;
		z-index: 1;
		.investors__right,
		.investors__content {
			transform: translateX(0);
		}
	}
	& > * {
		flex-basis: 50%;
		transition: transform $transition-duration;
	}
	&:last-child {
		.investors__right {
			overflow-y: auto;
		}
	}
	&__carousel {
		&-img {
			gap: 2rem;
			overflow-y: hidden;
			@include carousel;
			@include pretty-scrollbar;
			& > * {
				scroll-snap-align: center;
			}
		}
	}
	&__footer {
		.footer__content {
			flex-direction: column;
			align-items: flex-start;
			gap: 4rem;
			.footer__social {
				align-self: center;
				&-links {
					justify-content: center;
				}
				a img {
					display: block;
					margin: 0 auto;
				}
			}
			.list {
				align-self: flex-start;
			}
		}
	}
	&__input-wish {
		grid-row: span 2;
	}
	&__form {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		input {
			font-size: 14px;
			font-weight: 300;
			line-height: 2.2rem;
			text-transform: 0.03em;
			letter-spacing: initial;
			border: 1px solid #d9d9d9;
			padding: 1.5rem;
			transition: border 0.3s;
		}
	}
	&__areas {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}
	&__area {
		font-family: $font-carter;
		letter-spacing: 0.1em;
		line-height: 3.6rem;
		font-weight: 400;
		color: $color-secondary;
		&-big {
			font-size: 3.8rem;
		}
		&-small {
			margin-left: 5px;
			font-size: 1.6rem;
		}
		&-title {
			line-height: 1.8rem;
			display: block;
			font-family: $font-jost;
			font-size: 1.8rem;
			color: #000;
			text-transform: uppercase;
			@include media($large-desktop, min) {
				font-size: 2rem;
			}
		}
	}
	&__list {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
	}
	&__item {
		display: flex;
		gap: 1rem;
		align-items: center;
		text-transform: uppercase;
		font-size: 1.8rem;
		font-weight: 400;
		line-height: 3.6rem;
		letter-spacing: 0.1em;
		@include media($large-desktop, min) {
			font-size: 2rem;
		}
		&--6 {
			display: block;
			& span:nth-child(2) {
				margin-left: 1rem;
			}
			.investors__item-sub {
				margin-left: 4rem;
				margin-top: 1rem;
			}
		}
		&-sub {
			display: flex;
			gap: 1rem;
		}
		&-count {
			text-align: center;
			width: 2rem;
			font-family: $font-carter;
			color: $color-secondary;
			font-size: 2.5rem;
			margin-right: 1rem;
		}
	}
	&__right {
		transform: translateX(100%);
		position: relative;
		&--2 {
			background-color: $color-primary;
			color: #fff;
			padding: 5rem;
		}
		&-gradient {
			position: absolute;
			height: 100%;
			width: 100%;
			background: linear-gradient(to bottom, #00000000 10%, #00000069 100%);
		}
		&-btn {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&-carousel {
			z-index: 10;
			position: absolute;
			bottom: 1rem;
			left: 50%;
			transform: translateX(-50%);
			color: #fff;
			display: flex;
			gap: 3rem;
			&_item {
				height: 9rem;
				width: 16rem;
				border-radius: 1.2rem;
				border: 2px solid transparent;
				transition-property: transform, border-color;
				transition-duration: 400ms;
				transform-origin: bottom;
				cursor: pointer;
				&:hover {
					transform: scale(1.2);
					border-color: $color-secondary;
				}
				img {
					@include cover-img;
					border-radius: inherit;
				}
				&--active {
					transform: scale(1.2);
					border-color: $color-secondary;
				}
			}
		}
	}
	&__content {
		transform: translateX(-100%);
		margin-left: calc($header-margin + 0.9rem);
		max-width: 50rem;
		align-self: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		&--1 {
			& + .investors__right {
				animation: slide-left 800ms;
			}
			& > * {
				animation: slide-up 800ms forwards;
			}
			.investors__title {
				opacity: 0;
				animation-delay: 300ms;
			}
			.investors__subtitle {
				opacity: 0;
				animation-delay: 600ms;
			}
			button {
				opacity: 0;
				animation-delay: 900ms;
			}
		}
	}
	&__nav {
		z-index: 100;
		position: fixed;
		bottom: 5rem;
		left: 50%;
		transform: translateX(-50%);
		background-color: #fff;
		padding: 1.5rem 3rem;
		display: flex;
		gap: 1.6rem;
		border-radius: 10rem;
		box-shadow: 0px 0px 8px 0px #0000001a;
	}
	&__btn {
		cursor: pointer;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #cccccc;
		transition-property: transform, background-color;
		transition-duration: 300ms;
		@include grid-center;
		&-active {
			background-color: $color-secondary;
			transform: scale(2);
		}
		&:first-child.investors__btn-active span,
		&:last-child.investors__btn-active span {
			opacity: 1;
		}

		&-span {
			opacity: 0;
			font-size: 3px;
			color: #fff;
			line-height: 0;
			transition: opacity 300ms;
		}
	}
	&__img {
		@include cover-img;
	}
	&__see {
		display: flex;
		gap: 3rem;
		align-items: center;
		margin-top: 3rem;
		text-transform: uppercase;
		font-family: $font-bad;
		font-size: 14px;
		font-style: italic;
		font-weight: 400;
		line-height: 27.59px;
		letter-spacing: 0.1em;
		color: #ff0000;
	}

	button {
		padding: 2rem 3rem;
		align-self: flex-start;
		font-size: 11px;
		font-weight: 500;
		line-height: 16.28px;
		letter-spacing: 0.1em;
		color: #fff;
		margin-top: 3rem;
		box-shadow: none;
	}
	&__mark {
		text-transform: uppercase;
		color: #ff0000;
		font-size: 12px;
		font-weight: 600;
		line-height: 17.34px;
		letter-spacing: 0.1em;
		text-align: left;
		text-decoration: underline;
		margin-bottom: 3rem;
	}
	&__title {
		font-weight: 600;
		line-height: 6.9rem;
		letter-spacing: 0.1em;
		font-size: 4rem;
		@include media($large-desktop, min) {
			font-size: 4.8rem;
		}
	}
	&__subtitle {
		font-size: 1.7rem;
		font-weight: 400;
		line-height: 3.6rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		@include media($large-desktop, min) {
			font-size: 2rem;
		}
		&--4 {
			font-size: 16px;
			text-transform: none;
			letter-spacing: normal;
		}
	}
}

@keyframes slide-up {
	from {
		opacity: 0;
		transform: translateY(5rem);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes slide-left {
	from {
		opacity: 0;
		transform: translateX(40%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
</style>
