<template>
	<div ref="genplan" class="container" @click="closeModal">
		<Genplan />
	</div>
	<div ref="modal" class="modal modal--hidden">
		<div class="modal__img-container">
			<img alt="avenue" :src="img" v-for="(img, i) in imgs" :key="i" />
		</div>
		<div class="modal__content">
			<h1 class="modal__title">{{ title }}</h1>
			<p class="modal__text" v-if="desc">
				{{ desc }}
			</p>
			<div class="modal__btns">
				<button class="modal__button">{{ i18n.global.t('next') }}</button>
				<button class="modal__button">{{ i18n.global.t('contact-us') }}</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import gsap from 'gsap';
import Genplan from '@/components/Genplan.vue';
import adminAvenue from '@/assets/admin.avif';
import hotelAvenue from '@/assets/hotel.avif';
import sportAvenue from '@/assets/sport.avif';
import collegeAvenue from '@/assets/college.avif';
import clinicAvenue from '@/assets/clinic.avif';
import kindergartenAvenue from '@/assets/kindergarten.avif';
import tradeAvenue from '@/assets/trade.avif';
import businessAvenue from '@/assets/business.avif';
import labAvenue from '@/assets/lab.avif';
import hotelZoomOut from '@/assets/hotel_zoomed-out.avif';
import sportAndHotel from '@/assets/sport_hotel.avif';
import logisticsFireStationAvenue from '@/assets/logistics_fire-station.avif';
import i18n from '@/locales';
import { useRoute } from 'vue-router';

// Elements
const genplan = ref();
const modal = ref();

// Reactive vars
const avenue = ref();

// Computed vars
const title = computed(() => avenue.value?.title);
const imgs = computed(() => avenue.value?.imgs);
const desc = computed(() => avenue.value?.desc);
const avenuesMap = computed(
	() =>
		new Map([
			[
				'hotel',
				{
					imgs: [hotelAvenue, hotelZoomOut, sportAndHotel],
					title: i18n.global.t('avenue-hotel'),
					desc: "Savdo va ko'ngilochar markaz - bu shahar aholisi va mehmonlari uchun turli xizmatlar va ko'ngilochar imkoniyatlarni taqdim etadigan katta obyekt. Markazda turli do'konlar, butiklarga tashrif buyurish, turli mahsulotlarni sotib olish imkoniyati mavjud."
				}
			],
			[
				'trade',
				{
					imgs: [tradeAvenue],
					title: i18n.global.t('avenue-trade')
				}
			],
			[
				'business',
				{
					imgs: [businessAvenue],
					title: i18n.global.t('avenue-business')
				}
			],
			[
				'sport',
				{
					imgs: [sportAvenue, sportAndHotel],
					title: i18n.global.t('avenue-sport')
				}
			],
			[
				'kindergarten',
				{
					imgs: [kindergartenAvenue],
					title: i18n.global.t('avenue-kindergarten')
				}
			],
			[
				'admin',
				{
					imgs: [adminAvenue],
					title: i18n.global.t('avenue-admin')
				}
			],
			[
				'college',
				{
					imgs: [collegeAvenue],
					title: i18n.global.t('avenue-college')
				}
			],
			[
				'clinic',
				{
					imgs: [clinicAvenue],
					title: i18n.global.t('avenue-clinic')
				}
			],
			[
				'school',
				{
					imgs: [collegeAvenue],
					title: i18n.global.t('avenue-school')
				}
			],
			[
				'logistics',
				{
					imgs: [logisticsFireStationAvenue],
					title: i18n.global.t('avenue-logistics')
				}
			],
			[
				'fire-station',
				{
					imgs: [logisticsFireStationAvenue],
					title: i18n.global.t('avenue-fire-station')
				}
			],
			[
				'lab',
				{
					imgs: [labAvenue],
					title: i18n.global.t('avenue-lab')
				}
			]
		])
);
const hash = computed(() => route.hash.slice(1));

// Vars
const route = useRoute();
const st = 300;
let avenueName, oldHash;
const isMobile = window.matchMedia('(pointer:coarse)').matches;
const animatingTime = 500;
const validHashes = Array.from(avenuesMap.value.entries()).map(entry => entry[0]);

const handleMouseMove = e => {
	const x = (e.clientX / window.innerWidth) * st - st * 0.5;
	const y = (e.clientY / window.innerHeight) * st - st * 0.5;

	gsap.to(genplan.value.firstElementChild, {
		x: -x,
		y: -y,
		duration: 0.5
	});
};
const handleMounted = mountType => {
	if (mountType === 'mount') {
		hash.value && showAvenue(hash.value);

		// Mobile
		if (isMobile) return (genplan.value.scrollLeft = Math.min(window.innerWidth * 2, 600));

		// Desktop
		window.addEventListener('mousemove', handleMouseMove);
	} else {
		// Mobile
		if (isMobile) return;

		// Desktop
		window.removeEventListener('mousemove', handleMouseMove);
	}
};
const showAvenue = name => {
	avenueName = name;
	// Hide and animate modal
	if (avenue.value) {
		if (oldHash) {
			modal.value.classList.add('modal--changing');
			setTimeout(() => {
				avenue.value = avenuesMap.value.get(avenueName);
				setTimeout(() => {
					modal.value.classList.remove('modal--changing');
				}, animatingTime - 200);
			}, animatingTime);
		} else {
			avenue.value = avenuesMap.value.get(avenueName);
		}
	}

	// Show modal
	!avenue.value && (avenue.value = avenuesMap.value.get(avenueName));
	setTimeout(() => {
		modal.value.classList.remove('modal--hidden');
	}, 10);
};
const closeModal = () => {
	const target = event.target.closest('.avenue');
	if (!target) {
		modal.value.classList.add('modal--hidden');
		setTimeout(() => {
			location.hash = '';
		}, animatingTime);
	}
};

watch(hash, (_, oldVal) => {
	oldHash = oldVal;
	validHashes.includes(hash.value) && showAvenue(hash.value);
});
watch(avenuesMap, () => (avenue.value = avenuesMap.value.get(avenueName)));
onMounted(() => handleMounted('mount'));
onUnmounted(() => handleMounted('unmount'));
</script>

<style scoped lang="scss">
.container {
	overflow: hidden;
	height: 100%;
	@include media($tab-land) {
		// overflow-x: auto;
		overflow: auto;
	}
}
.modal {
	position: fixed;
	bottom: 0;
	left: 6rem;
	max-width: 400px;
	width: 95%;
	font-family: $font-poppins;
	background-color: #fff;
	transition: translate 500ms;
	@include media($tab-port) {
		left: 50%;
		transform: translateX(-50%);
	}
	&--hidden {
		translate: 0 100%;
	}
	&--changing {
		.modal__img-container {
			opacity: 0;
			transform: translateX(-10rem);
		}
		.modal__title,
		.modal__text {
			opacity: 0;
			transform: translateX(-10rem);
		}
	}
	&__content {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-left: 10px;
	}
	&__title,
	&__text {
		transition-property: opacity, transform;
		transition-duration: 300ms;
	}
	&__title {
		transition-delay: 90ms;
		color: #393939;
		font-size: 18px;
		font-weight: 700;
		text-transform: capitalize;
		font-family: inherit;
	}
	&__text {
		transition-delay: 150ms;
		font-size: 12px;
		font-weight: 400;
	}
	&__button {
		font-family: inherit;
		font-size: 14px;
		font-weight: 500;
		line-height: 21px;
		padding: 10px 2.5rem;
		transition: {
			property: color, background-color, transform, box-shadow;
			duration: 0.5s;
		}
		&:hover {
			transform: translateY(-8px);
		}
		&:active {
			transform: translateY(-3px);
		}

		&:first-child {
			color: #fff;
			background-color: $color-secondary;
			&:hover {
				background-color: #fff;
				box-shadow: 0px 0px 15px 3px rgba($color-secondary, 0.2);
				color: $color-secondary;
			}
		}
		&:last-child {
			text-transform: lowercase;
			color: $color-secondary;
			border: 1px solid $color-secondary;

			&:hover {
				background-color: $color-secondary;
				box-shadow: 0px 0px 15px 3px rgba(#000, 0.4);
				color: #fff;
			}
		}
	}
	&__btns {
		display: flex;
		gap: 10px;
	}
	&__img-container {
		padding: 10px;
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		gap: 10px;
		transition-property: opacity, transform;
		transition-duration: 300ms;
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
		img {
			@include cover-img;
			scroll-snap-align: center;
		}
	}
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease-out;
}
.fade-enter-from,
.fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
</style>
