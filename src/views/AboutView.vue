<template>
	<Background class="bg-small" />
	<main class="about" ref="container">
		<Hero />
		<section class="features">
			<ul class="features__list">
				<li class="features__item" v-for="feature in features" :key="feature.title">
					<img class="features__item-icon" :src="feature.img" :alt="feature.title" />
					<h4 class="heading-s">{{ feature.title }}</h4>
					<p>{{ feature.text }}</p>
				</li>
			</ul>
		</section>
		<section class="us">
			<img
				class="us__video"
				src="https://s3-alpha-sig.figma.com/img/268a/9033/6a93a2ae31f86ef29125bee0546725ec?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0WOEGSj5JvgqeX9-k9c0xR-pWS~lfhyKPdjRR1AemnnEBF9sXXzr5UF3d2wp6kZFQi6BdrPLSHsRHl2GzbECR79aoNOxuiKFyMlHoSAvDpAzEoTmVj89MlKTqE0Aoj6j7R4egtBhgpM8Fooo5UXSAYFg0WsVJb6Wyc97UsLPWsZ7dDOW6VeAzhUzCEFEUQo8Wtv8fxcuRO4BbFBM2Vsb9Yyw7R15nf~Eh8gLuXiRkIuZGptH814cymRTuZdrlwj2mneLPzlFYgM4K2ZbTpaoBWS60dJA1HTq7sDFAVqt4zC6Ut3oAPK7i~5h7YTbU-4~VZrdvRar6PGmtpIWBztcA__"
				alt="video" />
			<div class="us__content">
				<h1 class="heading-m">biz kimmiz?</h1>
				<p>
					Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit
					era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero
					vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era.
					Nulla adipiscing pharetra pellentesque maecenas odio eros at. Quam libero etiam
					et in ac at quis.<br />
					Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas
					odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam
					libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit
					et.
				</p>
				<button type="button" class="primary-button">Batafsil</button>
			</div>
		</section>
		<section class="feedback">
			<button type="button" class="feedback__btn feedback__btn-left">
				<svg
					width="27"
					height="49"
					viewBox="0 0 27 49"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M25.3203 47L3.00031 24.32L25.3203 2"
						stroke="#D7DDDF"
						stroke-width="4" />
				</svg>
			</button>
			<div class="feedback__content">
				<p class="body-xl">
					“Sifat, tezkorlik va hamyonbop narx bizning asosiy maqsadimiz. Xalqimizga shu
					qulayliklarni amalga oshirish uchun barcha xizmatlarni ado qilamiz”
				</p>
				<div class="feedback__content-author body-s">
					<div class="feedback__stars">
						<svg
							width="16"
							height="15"
							viewBox="0 0 16 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							v-for="_ in [1, 2, 3, 4, 5]">
							<path
								d="M12.5806 14.9375C12.4688 14.938 12.3597 14.9031 12.2689 14.8379L7.9986 11.7421L3.72835 14.8379C3.63712 14.9041 3.52721 14.9395 3.41451 14.9391C3.30181 14.9387 3.19216 14.9025 3.10141 14.8356C3.01066 14.7688 2.94352 14.6748 2.90969 14.5673C2.87586 14.4598 2.87709 14.3444 2.91321 14.2376L4.57868 9.30461L0.262276 6.34455C0.16878 6.28051 0.098214 6.18824 0.0608894 6.08123C0.0235648 5.97423 0.0214372 5.85809 0.0548176 5.74979C0.0881981 5.64149 0.155337 5.5467 0.246425 5.47927C0.337513 5.41185 0.447776 5.37532 0.561104 5.37502H5.88622L7.49325 0.429413C7.52787 0.322639 7.59542 0.229574 7.68621 0.163569C7.777 0.0975645 7.88636 0.0620117 7.9986 0.0620117C8.11085 0.0620117 8.22021 0.0975645 8.311 0.163569C8.40179 0.229574 8.46934 0.322639 8.50396 0.429413L10.111 5.37668H15.4361C15.5496 5.37662 15.6601 5.4129 15.7514 5.4802C15.8428 5.54749 15.9102 5.64227 15.9438 5.75066C15.9774 5.85904 15.9754 5.97533 15.9381 6.0825C15.9008 6.18967 15.8302 6.28208 15.7366 6.34621L11.4185 9.30461L13.083 14.2363C13.11 14.3161 13.1176 14.4012 13.1051 14.4846C13.0927 14.5679 13.0606 14.6471 13.0115 14.7157C12.9625 14.7842 12.8978 14.84 12.8229 14.8786C12.7479 14.9172 12.6649 14.9374 12.5806 14.9375Z"
								fill="#72AEC8" />
						</svg>
					</div>
					<p>PAlonchi palonchiev</p>
					<p>CEO</p>
				</div>
			</div>
			<button type="button" class="feedback__btn feedback__btn-right">
				<svg
					width="27"
					height="49"
					viewBox="0 0 27 49"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1.67969 47L23.9997 24.32L1.67969 2"
						stroke="#D7DDDF"
						stroke-width="4" />
				</svg>
			</button>
		</section>
		<DownloadCatalog />
		<Instagram />
		<Footer />
		<Copyright />
	</main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import korzinka from '@/assets/icons/korzinka.svg';
import quality from '@/assets/icons/quality.svg';
import new_zone from '@/assets/icons/new zone.svg';
import safe from '@/assets/icons/safe.svg';
import Hero from '@/layout/Hero.vue';
import DownloadCatalog from '@/layout/DownloadCatalog.vue';
import Instagram from '@/layout/Instagram.vue';
import Footer from '@/layout/Footer.vue';
import Copyright from '@/layout/Copyright.vue';
import { animateSections } from '@/js/helpers';
import Background from '@/layout/Background.vue';

const container = ref();

const features = [
	{
		title: 'Qulay joylashuv',
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: korzinka
	},
	{
		title: 'Sifat kafolati',
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: quality
	},
	{
		title: 'Yangi zonalar',
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: new_zone
	},
	{
		title: "100% xavfsiz to'lov",
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: safe
	}
];

onMounted(() => animateSections(Array.from(container.value.children)));
</script>

<style lang="scss" scoped>
@import '@/sass/abstracts/index';

.features {
	&__list {
		@include grid-responsive-cols(250px, 2rem);
	}
	&__item {
		@include grid-area('icon title' 'icon text');
		@include hidden;
		grid-template-columns: 3rem;
		column-gap: 1.4rem;
		&-icon {
			grid-area: icon;
			@include dimensions(2.5rem);
			img {
				@include dimensions(100%);
			}
		}
	}
	@for $i from 1 through 4 {
		&__item:nth-child(#{$i}) {
			animation: slide-left 1s #{$i * 500ms} forwards;
		}
	}
}

.us {
	@include grid-auto(column, 7rem);
	@include media($tab-land) {
		grid-auto-flow: row;
	}
	&__content {
		@include grid-row-gap(2rem);
		justify-items: start;
		align-content: center;
	}
	&__video {
		@include cover-img();
		@include rounded-border();
		aspect-ratio: 3/2;
	}
}

.feedback {
	@include flex(space-between, center);
	@include media($tab-port) {
		gap: 1rem;
	}
	position: relative;
	padding-top: 5rem;
	&::before {
		@include pseudo(url(../assets/icons/quotes.svg), -35px, 50%, -50%);
	}
	&__btn {
		svg path {
			transition: stroke 0.2s;
		}
		&:hover svg path {
			stroke: $color-blue;
		}
	}
	&__content {
		@include grid-row-gap(3rem);
		@include media($tab-port) {
			flex-basis: 100%;
		}
		text-align: center;
		flex-basis: 80%;
		&-author {
			@include grid-row-gap(1rem);
			@include text(_, 500, _, uppercase, 0.1em);
		}
	}
}
</style>
