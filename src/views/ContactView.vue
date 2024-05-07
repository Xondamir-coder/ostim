<template>
	<main class="contact" ref="container">
		<Hero />
		<section class="info">
			<InfoBoard :data="infoData" />
			<div class="info__contact">
				<div class="info__contact-head">
					<h1 class="heading-m">{{ i18n.global.t('got-questions') }}</h1>
					<p>{{ i18n.global.t('use-form') }}</p>
				</div>
				<form class="info__form" @submit.prevent="submitForm">
					<input
						v-model="submitData.name"
						required
						type="text"
						name="name"
						id="name"
						:placeholder="`${i18n.global.t('input-name')} *`" />
					<input
						v-model="submitData.email"
						required
						type="email"
						name="email"
						id="email"
						:placeholder="`${i18n.global.t('input-mail')} *`" />
					<input
						v-model="submitData.tel"
						type="tel"
						name="tel"
						id="tel"
						:placeholder="i18n.global.t('input-tel')" />
					<input
						v-model="submitData.subject"
						type="text"
						name="subject"
						id="subject"
						:placeholder="i18n.global.t('input-subject')" />
					<input
						v-model="submitData.message"
						required
						type="text"
						name="message"
						id="message"
						:placeholder="`${i18n.global.t('input-msg')} *`" />
					<button type="submit" class="primary-button">
						{{ i18n.global.t('submit') }}
					</button>
				</form>
			</div>
		</section>
		<section class="office">
			<img src="../assets/contact-office.avif" alt="office" />
			<InfoBoard :data="officeData" />
		</section>
		<DownloadCatalog />
		<Instagram />
		<Footer />
		<Copyright />
	</main>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import InfoBoard from '@/components/InfoBoard.vue';
import Hero from '@/layout/Hero.vue';
import DownloadCatalog from '@/layout/DownloadCatalog.vue';
import Instagram from '@/layout/Instagram.vue';
import Footer from '@/layout/Footer.vue';
import Copyright from '@/layout/Copyright.vue';
import { animateSections } from '@/js/helpers';
import Background from '@/layout/Background.vue';
import i18n from '@/locales';

const container = ref();
const infoData = computed(() => ({
	title: i18n.global.t('contact-info'),
	text: 'Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.',
	columns: [
		{
			title: 'office',
			texts: [i18n.global.t('office-address'), '+998 77 124 10 10', 'logo@yourinfo.com']
		},
		{
			title: 'management',
			texts: [i18n.global.t('office-address'), , '+998 77 124 10 10', 'logo@yourinfo.com']
		}
	]
}));
const officeData = computed(() => ({
	title: i18n.global.t('our-offices'),
	text: i18n.global.t('buy-products'),
	columns: [
		{
			title: 'Toshkent',
			texts: [i18n.global.t('office-address'), '+998 77 124 10 10', 'logo@yourinfo.com']
		},
		{
			title: 'Turkiya',
			texts: [
				i18n.global.t('office-address-turkey'),
				'+90 (312) 385 50-90 ',
				'+90 (312) 354 58-98',
				'ostim@ostim.org.tr'
			]
		}
	]
}));

const submitData = reactive({
	name: '',
	email: '',
	tel: '',
	subject: '',
	message: ''
});

const submitForm = () => {
	console.log(submitData);
	Object.entries(submitData).forEach(([key]) => (submitData[key] = ''));
};

onMounted(() => animateSections(Array.from(container.value.children)));
</script>

<style lang="scss" scoped>
.info {
	@include grid-responsive-cols(300px, 2rem);
	overflow: hidden;
	&__contact {
		animation: appear-right 1s;
		@include grid-row-gap(3rem);
	}
	&__form {
		$gaps: (
			row: 3rem,
			column: 2rem
		);
		@include grid-repeated-cols(2);
		@include grid-gaps($gaps);
		@include media($tab-port) {
			grid-template-columns: 1fr;
		}
		input {
			@include text(14px, 300, 2.2rem, 0.03em);
			@include border(#d9d9d9);
			grid-column: 1/-1;
			padding: 1.5rem;
			transition: border 0.3s;
		}
		button {
			justify-self: start;
		}
		input:first-child,
		input:nth-child(2) {
			grid-column: span 1;
			@include media($tab-port) {
				grid-column: 1/-1;
			}
		}
	}
	h1 {
		margin-bottom: 1rem;
	}
}
.office {
	@include grid-auto(column, 2rem);
	align-items: center;
	@include media($tab-land) {
		grid-auto-flow: row;
	}
	img {
		@include cover-img();
		@include rounded-border();
		aspect-ratio: 3/2;
	}
}
</style>
