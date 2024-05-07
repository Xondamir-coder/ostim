<template>
	<div ref="genplan" class="container" @click="closeModal">
		<Genplan @show="showAvenue" />
	</div>
	<div ref="modal" class="modal modal--hidden">
		<img :src="avenueImg" alt="avenue" />
		<div class="modal__content">
			<h1 class="modal__title">Mehmonxona</h1>
			<p class="modal__text">
				Lorem ipsum dolor sitdolor id vulputate orci risus. Pharetra tincidunt feugiat
				tempus neque ac aliquam egestas blandit aliquam. Nibh nulla mauris mi vitae sit
				fames. 2000kv2
			</p>
			<div class="modal__btns">
				<button class="modal__button">Next</button>
				<button class="modal__button">contact us</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import Genplan from '@/components/Genplan.vue';
import adminAvenue from '@/assets/admin.avif';
import hotelAvenue from '@/assets/hotel.avif';

const genplan = ref();
const modal = ref();
const avenueImg = ref('');
const st = 300;
const avenuesMap = {
	admin: adminAvenue,
	hotel: hotelAvenue
};

const handleMouseMove = e => {
	const x = (e.clientX / window.innerWidth) * st - st * 0.5;
	const y = (e.clientY / window.innerHeight) * st - st * 0.5;

	gsap.to(genplan.value.firstElementChild, {
		x: -x,
		y: -y,
		duration: 0.5
	});
};
const showAvenue = avenueName => {
	avenueImg.value = avenuesMap[avenueName];
	console.log(avenueImg.value);
	modal.value.classList.toggle('modal--hidden');
};
const closeModal = () => {
	const target = event.target.closest('.avenue');
	!target && modal.value.classList.add('modal--hidden');
};

onMounted(() => {
	// Mobile
	if (window.matchMedia('(pointer:coarse)')) return;

	// Desktop
	window.addEventListener('mousemove', handleMouseMove);
});
onUnmounted(() => {
	// Mobile
	if (window.matchMedia('(pointer:coarse)')) return;

	// Desktop
	window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped lang="scss">
.container {
	overflow: hidden;
	height: 100%;
	@include media($tab-port) {
		overflow-x: auto;
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
	border-top-left-radius: 2.5rem;
	border-top-right-radius: 2.5rem;
	transition: translate 500ms;
	@include media($tab-port) {
		left: 50%;
		transform: translateX(-50%);
	}
	&--hidden {
		translate: 0 100%;
	}
	&__content {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-left: 1rem;
	}
	&__title {
		color: #393939;
		font-size: 18px;
		font-weight: 700;
		text-transform: capitalize;
		font-family: inherit;
	}
	&__text {
		font-size: 12px;
		font-weight: 400;
	}
	&__button {
		font-family: inherit;
		font-size: 14px;
		font-weight: 500;
		line-height: 21px;
		padding: 1rem 2.5rem;
		transition: {
			property: color, background-color, transform;
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
				color: $color-secondary;
			}
		}
		&:last-child {
			color: $color-secondary;
			border: 1px solid $color-secondary;

			&:hover {
				background-color: $color-secondary;
				color: #fff;
			}
		}
	}
	&__btns {
		display: flex;
		gap: 10px;
	}
	img {
		@include cover-img;
		padding: 10px;
		border-radius: 2.5rem;
	}
}
</style>
