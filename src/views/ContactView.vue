<template>
	<Background class="bg-small" />
	<main class="contact" ref="container">
		<Hero />
		<section class="info">
			<InfoBoard :data="infoData" />
			<div class="info__contact">
				<div class="info__contact-head">
					<h1 class="heading-m">savollaringiz bormi?</h1>
					<p>Use the form below to get in touch with us.</p>
				</div>
				<form class="info__form" @submit.prevent="submitForm">
					<input
						v-model="submitData.name"
						required
						type="text"
						name="name"
						id="name"
						placeholder="Your full name *" />
					<input
						v-model="submitData.email"
						required
						type="email"
						name="email"
						id="email"
						placeholder="Write your email here *" />
					<input
						v-model="submitData.tel"
						type="tel"
						name="tel"
						id="tel"
						placeholder="Phone number" />
					<input
						v-model="submitData.subject"
						type="text"
						name="subject"
						id="subject"
						placeholder="Write your subject here" />
					<input
						v-model="submitData.message"
						required
						type="text"
						name="message"
						id="message"
						placeholder="Write your message here *" />
					<button type="submit" class="primary-button">submit</button>
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
import { onMounted, reactive, ref } from 'vue';
import InfoBoard from '@/components/InfoBoard.vue';
import Hero from '@/layout/Hero.vue';
import DownloadCatalog from '@/layout/DownloadCatalog.vue';
import Instagram from '@/layout/Instagram.vue';
import Footer from '@/layout/Footer.vue';
import Copyright from '@/layout/Copyright.vue';
import { animateSections } from '@/js/helpers';
import Background from '@/layout/Background.vue';

const container = ref();
const infoData = {
	title: 'Contact info',
	text: 'Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.',
	columns: [
		{
			title: 'office',
			texts: [
				'730 Glenstone Ave 65802, Springfield, US',
				'+123 222 333 44',
				'+123 666 777 88',
				'logo@yourinfo.com'
			]
		},
		{
			title: 'office',
			texts: [
				'730 Glenstone Ave 65802, Springfield, US',
				'+123 222 333 44',
				'+123 666 777 88',
				'logo@yourinfo.com'
			]
		}
	]
};
const officeData = {
	title: 'Bizning ofislarimiz',
	text: 'You can also directly buy products from our stores.',
	columns: [
		{
			title: 'Toshkent',
			texts: [
				'730 Glenstone Ave 65802, Springfield, US',
				'+123 222 333 44',
				'+123 666 777 88',
				'logo@yourinfo.com'
			]
		},
		{
			title: 'Turkiya',
			texts: [
				'730 Glenstone Ave 65802, Springfield, US',
				'+123 222 333 44',
				'+123 666 777 88',
				'logo@yourinfo.com'
			]
		}
	]
};

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
@import '@/sass/abstracts/index';

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
