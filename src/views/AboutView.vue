<template>
	<main class="about" ref="container">
		<section class="hero section--hidden">
			<div class="hero__content">
				<h1 class="hero__heading heading-xl">biz haqimizda</h1>
				<p class="hero__text">
					<RouterLink
						class="hero__link router__link"
						active-class="router__link--active"
						to="/main"
						>Asosiy</RouterLink
					>
					>
					<RouterLink
						class="hero__link router__link"
						active-class="router__link--active"
						to="/about"
						>Biz Haqimizda</RouterLink
					>
				</p>
			</div>
		</section>
		<section class="features section--hidden">
			<ul class="features__list">
				<li class="features__item" v-for="feature in features" :key="feature.title">
					<img class="features__item-icon" :src="feature.img" :alt="feature.title" />
					<h4 class="heading-s">{{ feature.title }}</h4>
					<p class="body-m">{{ feature.text }}</p>
				</li>
			</ul>
		</section>
		<section class="us section--hidden">
			<img
				class="us__video"
				src="https://s3-alpha-sig.figma.com/img/268a/9033/6a93a2ae31f86ef29125bee0546725ec?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0WOEGSj5JvgqeX9-k9c0xR-pWS~lfhyKPdjRR1AemnnEBF9sXXzr5UF3d2wp6kZFQi6BdrPLSHsRHl2GzbECR79aoNOxuiKFyMlHoSAvDpAzEoTmVj89MlKTqE0Aoj6j7R4egtBhgpM8Fooo5UXSAYFg0WsVJb6Wyc97UsLPWsZ7dDOW6VeAzhUzCEFEUQo8Wtv8fxcuRO4BbFBM2Vsb9Yyw7R15nf~Eh8gLuXiRkIuZGptH814cymRTuZdrlwj2mneLPzlFYgM4K2ZbTpaoBWS60dJA1HTq7sDFAVqt4zC6Ut3oAPK7i~5h7YTbU-4~VZrdvRar6PGmtpIWBztcA__"
				alt="video" />
			<div class="us__content">
				<h1 class="heading-m">biz kimmiz?</h1>
				<p class="body-m">
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
				<button type="button" class="button us__btn">Batafsil</button>
			</div>
		</section>
		<section class="feedback section--hidden">
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
		<section class="download section--hidden">
			<h1 class="heading-m">Katalogni to’liq yuklab oling</h1>
			<p class="body-m">eng yangi va to’liq ma’lumotlar katalogimizda*</p>
			<button class="button download__button">Yuklab olish</button>
		</section>
		<section class="instagram section--hidden">
			<h1 class="heading-m">instagram sahifamizada</h1>
			<ul class="instagram__list">
				<li class="instagram__item" v-for="_ in [1, 2, 3, 4, 5]">
					<a href="#">
						<img
							class="instagram__banner"
							src="../assets/about-insta.jpg"
							alt="some photo" />
						<img
							class="instagram__icon"
							src="../assets/icons/instagram.svg"
							alt="instagram icon" />
					</a>
				</li>
			</ul>
		</section>
		<footer class="footer section--hidden">
			<div class="footer__content">
				<div class="footer__social">
					<RouterLink to="/">
						<img src="../assets/logo.svg" alt="logo" />
					</RouterLink>
					<p class="body-m">
						Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida
						massa volutpat aenean odio erat nullam fringilla.
					</p>
					<nav class="footer__social-nav">
						<ul class="footer__social-links">
							<li class="footer__social-icon">
								<a href="#">
									<svg
										width="12"
										height="21"
										viewBox="0 0 12 21"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M9.0032 0C5.8496 0 4 1.5615 4 5.1195V8.25H0V12H4V21H8V12H11.2L12 8.25H8V5.754C8 4.41375 8.4664 3.75 9.808 3.75H12V0.15375C11.6208 0.10575 10.516 0 9.0032 0Z"
											fill="#D7DDDF" />
									</svg>
								</a>
							</li>
							<li class="footer__social-icon">
								<a href="#">
									<svg
										width="18"
										height="19"
										viewBox="0 0 18 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M5.29282 0C2.38745 0 0 2.51664 0 5.58686V13.4131C0 16.4799 2.38418 19 5.29282 19H12.7072C15.6125 19 18 16.4834 18 13.4131V5.58773C18 2.52009 15.6158 0 12.7072 0H5.29282ZM5.29282 1.72727H12.7072C13.1875 1.72659 13.6633 1.82596 14.1072 2.01968C14.5511 2.2134 14.9545 2.49767 15.2941 2.8562C15.6338 3.21473 15.9031 3.64048 16.0866 4.10906C16.2701 4.57763 16.3643 5.07982 16.3636 5.58686V13.4131C16.3643 13.9202 16.2701 14.4224 16.0866 14.8909C15.9031 15.3595 15.6338 15.7853 15.2941 16.1438C14.9545 16.5023 14.5511 16.7866 14.1072 16.9803C13.6633 17.174 13.1875 17.2734 12.7072 17.2727H5.29364C4.81321 17.2735 4.33736 17.1742 3.89336 16.9806C3.44935 16.7869 3.04591 16.5027 2.70616 16.1441C2.36641 15.7856 2.09703 15.3598 1.91346 14.8911C1.72988 14.4225 1.63572 13.9202 1.63636 13.4131V5.58773C1.63561 5.08061 1.72967 4.57833 1.91314 4.10965C2.09662 3.64098 2.36591 3.21513 2.70558 2.8565C3.04526 2.49788 3.44863 2.21353 3.8926 2.01976C4.33657 1.82598 4.8124 1.72659 5.29282 1.72727ZM13.8322 3.61691C13.7347 3.61645 13.6381 3.63638 13.548 3.67554C13.4579 3.7147 13.376 3.77232 13.3071 3.84507C13.2381 3.91781 13.1836 4.00425 13.1465 4.09939C13.1094 4.19453 13.0905 4.29648 13.0909 4.39936C13.0909 4.83464 13.4198 5.18182 13.8322 5.18182C13.9297 5.18239 14.0264 5.16255 14.1166 5.12344C14.2068 5.08433 14.2888 5.02673 14.3578 4.95397C14.4268 4.88121 14.4815 4.79473 14.5187 4.69954C14.5558 4.60434 14.5747 4.50232 14.5743 4.39936C14.5747 4.29641 14.5558 4.19439 14.5187 4.09919C14.4815 4.00399 14.4268 3.91752 14.3578 3.84476C14.2888 3.772 14.2068 3.7144 14.1166 3.67529C14.0264 3.63618 13.9297 3.61634 13.8322 3.61691ZM9 4.31818C6.3 4.31818 4.09091 6.65 4.09091 9.5C4.09091 12.35 6.3 14.6818 9 14.6818C11.7 14.6818 13.9091 12.35 13.9091 9.5C13.9091 6.65 11.7 4.31818 9 4.31818ZM9 6.04545C10.8188 6.04545 12.2727 7.58014 12.2727 9.5C12.2727 11.4199 10.8188 12.9545 9 12.9545C7.18118 12.9545 5.72727 11.4199 5.72727 9.5C5.72727 7.58014 7.18118 6.04545 9 6.04545Z"
											fill="#D7DDDF" />
									</svg>
								</a>
							</li>
							<li class="footer__social-icon">
								<a href="#">
									<svg
										width="18"
										height="15"
										viewBox="0 0 18 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M18 1.77938C17.326 2.08525 16.611 2.28559 15.879 2.37371C16.6497 1.90061 17.2265 1.15659 17.502 0.28009C16.7772 0.720447 15.9847 1.03139 15.1583 1.19965C14.652 0.644802 13.9946 0.258944 13.2715 0.0922494C12.5485 -0.0744452 11.7932 -0.0142636 11.104 0.264968C10.4147 0.5442 9.82337 1.02956 9.40681 1.65795C8.99025 2.28633 8.76775 3.02866 8.76825 3.78842C8.76825 4.08597 8.8005 4.37429 8.86575 4.65031C7.39688 4.5762 5.95974 4.18562 4.64796 3.50403C3.33619 2.82244 2.17924 1.86513 1.2525 0.694508C0.923233 1.27231 0.750528 1.92981 0.75225 2.59898C0.75225 3.91144 1.4025 5.07088 2.3955 5.74979C1.80897 5.73071 1.23544 5.56777 0.723 5.27463V5.32307C0.722492 6.1974 1.01732 7.04494 1.55738 7.72165C2.09744 8.39836 2.84942 8.86248 3.6855 9.03515C3.1418 9.188 2.57109 9.21063 2.0175 9.10127C2.25331 9.85345 2.7124 10.5113 3.33066 10.9831C3.94892 11.4548 4.69546 11.7167 5.466 11.7323C4.69998 12.3487 3.82291 12.8042 2.88499 13.0726C1.94706 13.3411 0.966695 13.4174 0 13.297C1.68789 14.4105 3.65306 15.0018 5.66025 15C12.4537 15 16.1693 9.23044 16.1693 4.22667C16.1693 4.06521 16.1632 3.89913 16.1572 3.7369C16.8792 3.20105 17.503 2.53861 18 1.78014V1.77938Z"
											fill="#D7DDDF" />
									</svg>
								</a>
							</li>
							<li class="footer__social-icon">
								<a href="#">
									<svg
										width="18"
										height="19"
										viewBox="0 0 18 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2.26543 6.54207e-07C1.96808 -0.000226251 1.6736 0.0585739 1.39881 0.173042C1.12403 0.287511 0.874311 0.455405 0.663936 0.667134C0.45356 0.878863 0.286645 1.13028 0.172725 1.40702C0.058805 1.68376 0.000112504 1.9804 0 2.28C0 3.54091 1.014 4.58591 2.26286 4.58591C3.51343 4.58591 4.52829 3.54091 4.52829 2.28173C4.52851 1.98217 4.47015 1.6855 4.35653 1.40868C4.24291 1.13186 4.07626 0.880308 3.86612 0.668408C3.65597 0.456507 3.40644 0.288409 3.13178 0.17372C2.85713 0.0590315 2.56274 5.68245e-07 2.26543 6.54207e-07ZM13.3157 6.04546C11.4137 6.04546 10.326 7.04727 9.80314 8.04391H9.74829V6.31405H6V19H9.906V12.7205C9.906 11.0658 10.0294 9.46632 12.0617 9.46632C14.0649 9.46632 14.094 11.3534 14.094 12.825V19H18V12.0322C18 8.62255 17.2723 6.04546 13.3157 6.04546ZM0.311143 6.31318V19H4.21971V6.31318H0.311143Z"
											fill="#D7DDDF" />
									</svg>
								</a>
							</li>
							<li class="footer__social-icon">
								<a href="#">
									<svg
										width="22"
										height="15"
										viewBox="0 0 22 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M21.5359 2.34184C21.4107 1.88881 21.1655 1.47575 20.825 1.14401C20.4844 0.812264 20.0603 0.573472 19.5953 0.451531C17.8825 1.36847e-07 11 0 11 0C11 0 4.11751 1.36847e-07 2.40475 0.451531C1.93966 0.573472 1.51561 0.812264 1.17504 1.14401C0.83447 1.47575 0.589324 1.88881 0.464138 2.34184C0.144326 4.04332 -0.0108694 5.77027 0.000591168 7.5C-0.0108694 9.22973 0.144326 10.9567 0.464138 12.6582C0.589324 13.1112 0.83447 13.5243 1.17504 13.856C1.51561 14.1877 1.93966 14.4265 2.40475 14.5485C4.11751 15 11 15 11 15C11 15 17.8825 15 19.5953 14.5485C20.0603 14.4265 20.4844 14.1877 20.825 13.856C21.1655 13.5243 21.4107 13.1112 21.5359 12.6582C21.8557 10.9567 22.0109 9.22973 21.9994 7.5C22.0109 5.77027 21.8557 4.04332 21.5359 2.34184ZM8.80012 10.7143V4.28572L14.512 7.5L8.80012 10.7143Z"
											fill="#D7DDDF" />
									</svg>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<NavLinks :links="main__links" class="footer__list" />
				<div class="footer__faq">
					<h1 class="heading-s">yordam & savollar</h1>
					<NavLinks :links="secondary__links" class="footer__list" />
				</div>
				<div class="footer__contact">
					<h1 class="heading-s">aloqa</h1>
					<p class="body-m">Do you have any queries or suggestions?</p>
					<a class="footer__contact-mail" href="mailto:yourinfo@gmail.com">
						If you need support? Just give us a call.
					</a>
					<p class="body-m">Do you have any queries or suggestions?</p>
					<a class="footer__contact-tel" href="tel:+998992000101">+998 99 200 01 01</a>
				</div>
			</div>
		</footer>
		<section class="footer__copyright section--hidden">
			<div class="footer__copyright-content">
				<div class="footer__copyright-container">
					<div class="footer__copyright-partners">
						<p class="body-m">We ship with:</p>
						<img src="../assets/icons/dhl.svg" alt="dhl" />
						<img src="../assets/icons/ship-2.svg" alt="some" />
					</div>
					<div class="footer__copyright-payment">
						<p class="body-m">Payment options:</p>
						<img src="../assets/icons/visa.svg" alt="visa" />
						<img src="../assets/icons/mastercard.svg" alt="mastercard" />
						<img src="../assets/icons/paypal.svg" alt="paypal" />
					</div>
				</div>
				<p class="body-m">&copy; Copyright 2024</p>
			</div>
		</section>
	</main>
</template>

<script setup>
import korzinka from '@/assets/icons/korzinka.svg';
import quality from '@/assets/icons/quality.svg';
import new_zone from '@/assets/icons/new zone.svg';
import safe from '@/assets/icons/safe.svg';
import NavLinks from '@/components/NavLinks.vue';
import { onMounted, ref } from 'vue';

const container = ref();

const features = [
	{
		title: 'Qulay joylashuv',
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: korzinka,
	},
	{
		title: 'Sifat kafolati',
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: quality,
	},
	{
		title: 'Yangi zonalar',
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: new_zone,
	},
	{
		title: "100% xavfsiz to'lov",
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: safe,
	},
];
const main__links = [
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
const secondary__links = [
	{
		to: 'order',
		name: 'track your order',
	},
	{
		to: 'policy',
		name: 'return policies',
	},
	{
		to: 'delivery',
		name: 'shipping + delivery',
	},
	{
		to: 'contact',
		name: 'contact us',
	},
	{
		to: 'faq',
		name: 'faqs',
	},
];

const observeSections = entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const { target } = entry;
			target.classList.remove('section--hidden');
		}
	});
};
const observer = new IntersectionObserver(observeSections, { threshold: 0.5 });

onMounted(() => {
	Array.from(container.value.children).forEach(child => observer.observe(child));
});
</script>

<style lang="scss" scoped>
@import '../sass/abstracts/mixins';
@import '../sass/abstracts/variables';

.about {
	--page-margin-x: 15rem;
	--page-margin-y: 3rem;

	display: grid;
	row-gap: 8rem;
	@include media($tab-port) {
		row-gap: 5rem;
	}

	& > * {
		margin: var(--page-margin-y) var(--page-margin-x);
		transition: {
			property: opacity, transform;
			duration: 1s;
		}
		@include media($large-desktop, min) {
			--page-margin-x: 20rem;
		}
		@include media($tab-port) {
			--page-margin-x: 5rem;
		}
		@include media($mobile) {
			--page-margin-x: 2.5rem;
		}
	}
}

.hero {
	margin: 0;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(../assets/about-hero.jpg);
	background-position-y: top;
	background-size: cover;
	height: 30rem;
	color: #fff;
	display: grid;
	place-items: center;
	text-align: center;
	font-weight: 300;
	&__heading {
		@include media($tab-port) {
			font-size: 10vw;
		}
		animation: slide-left 1s ease-out;
	}
	&__link {
		&:last-child {
			text-decoration: underline;
			text-decoration-thickness: 1px;
			text-underline-offset: 5px;
		}
	}
	&__text {
		color: #fff;
	}
}

.features {
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
		gap: 2rem;
	}
	&__item {
		display: grid;
		column-gap: 1.4rem;
		grid-template-columns: 3rem;
		grid-template-areas:
			'icon title'
			'icon text';
		opacity: 0;
		&-icon {
			grid-area: icon;
		}
	}
	@for $i from 1 through 4 {
		&__item:nth-child(#{$i}) {
			animation: slide-left 1s #{$i * 500ms} forwards;
		}
	}
}

.us {
	display: grid;
	grid-auto-flow: column;
	gap: 7rem;
	@include media($tab-land) {
		grid-auto-flow: row;
	}
	&__content {
		display: grid;
		justify-items: start;
		row-gap: 3rem;
	}
	&__video {
		border-radius: 1rem;
		width: 100%;
		height: 100%;
	}
	&__btn {
		background-color: $color-primary;
		&:hover {
			color: $color-primary;
			background-color: rgba($color-primary, 0.2);
			box-shadow: 0px 0px 15px 3px rgba($color-primary, 0.2);
		}
	}
}

.feedback {
	position: relative;
	display: flex;
	align-items: center;
	padding-top: 7rem;
	justify-content: space-between;
	@include media($tab-port) {
		gap: 1rem;
	}
	&::before {
		content: url(../assets/icons/quotes.svg);
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
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
		text-align: center;
		flex-basis: 80%;
		display: grid;
		row-gap: 3rem;
		@include media($tab-port) {
			flex-basis: 100%;
		}
		&-author {
			text-transform: uppercase;
			font-weight: 500;
			letter-spacing: 0.1em;
			display: grid;
			row-gap: 1rem;
		}
	}
}

.download {
	background: $color-primary;
	color: #fff;
	display: grid;
	justify-items: start;
	row-gap: 1.8rem;
	padding: 8rem 11rem;
	@include media($tab-port) {
		padding: 4rem;
	}
	h1 {
		@include media($tab-port) {
			font-size: 2.4rem;
		}
	}
	&__button {
		background-color: $color-blue;
		&:hover {
			color: $color-blue;
			background-color: rgba($color-blue, 0.2);
			box-shadow: 0px 0px 15px 3px rgba($color-blue, 0.2);
		}
	}
}

.instagram {
	text-align: center;
	display: grid;
	row-gap: 2.5rem;
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 2rem;
	}
	&__item {
		a {
			display: grid;
			place-items: center;
			grid-template-areas: 'area';
			&:hover {
				&::before {
					opacity: 1;
				}
				& .instagram__icon {
					opacity: 1;
					transform: translateY(0);
				}
			}
			&::before {
				content: '';
				position: relative;
				z-index: 1;
				grid-area: area;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.4);
				opacity: 0;
				transition: opacity 0.5s;
			}
		}
	}
	&__banner {
		grid-area: area;
		width: 100%;
		height: 100%;
		aspect-ratio: 3/2;
		object-fit: cover;
		object-position: center;
	}
	&__icon {
		grid-area: area;
		z-index: 2;
		opacity: 0;
		transform: translateY(1rem);
		transition: {
			property: opacity, transform;
			duration: 0.5s;
		}
	}
}

.footer {
	&__social {
		flex-basis: 30%;
		display: grid;
		row-gap: 1rem;
		&-links {
			display: flex;
			align-items: center;
			gap: 3rem;
		}
		&-icon svg path {
			transition: fill 0.5s;
		}
		&-icon:hover svg path {
			fill: $color-blue;
		}
	}
	&__content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 2rem;
		@include media($tab-port) {
			flex-direction: column;
		}
	}
	&__list {
		align-self: flex-end;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-start;
		@include media($tab-port) {
			align-self: auto;
		}
	}
	&__faq h1 {
		margin-bottom: 1rem;
	}
	&__contact {
		p {
			margin-top: 1rem;
		}
		&-mail {
			color: $color-primary;
		}
		&-tel {
			color: $color-secondary;
			font-weight: 800;
			text-underline-offset: 5px;
		}
	}
	&__copyright {
		margin: 0;
		border-top: 1px solid #d0d0d0;
		&-content {
			margin: var(--page-margin-y) var(--page-margin-x);
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		&-container {
			width: 100%;
			max-width: 55rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
		}
		&-partners,
		&-payment {
			display: flex;
			align-items: center;
			gap: 1rem;
		}
	}
}

@keyframes slide-left {
	0% {
		opacity: 0;
		transform: translateX(-10rem);
	}
	80% {
		transform: translateX(3rem);
	}
	100% {
		opacity: 1;
		transform: translate(0);
	}
}
.section--hidden {
	opacity: 0;
	transform: translateY(-10rem);
}
</style>
