<template>
	<div ref="genplan" class="container">
		<Genplan @show="showAvenue" />
	</div>
</template>

<script setup>
import { gsap } from 'gsap';
import Genplan from '@/components/Genplan.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const genplan = ref();
const mouseSt = 300;
const touchSt = mouseSt;

const handleMouseMove = e => {
	const x = (e.clientX / window.innerWidth) * mouseSt - mouseSt * 0.5;
	const y = (e.clientY / window.innerHeight) * mouseSt - mouseSt * 0.5;

	gsap.to(genplan.value.firstElementChild, {
		x: -x,
		y: -y,
		duration: 0.5
	});
};
const handleTouchMove = e => {
	const x = (e.touches[0].clientX / window.innerWidth) * touchSt - touchSt * 0.5;
	const y = (e.touches[0].clientY / window.innerHeight) * touchSt - touchSt * 0.5;

	gsap.to(genplan.value.firstElementChild, {
		x: `+=${x}`
	});
};
const showAvenue = avenueName => {
	console.log(avenueName);
};

onMounted(() => {
	// Mobile
	if (window.matchMedia('(pointer: coarse)').matches)
		return window.addEventListener('touchmove', handleTouchMove);

	// Desktop
	window.addEventListener('mousemove', handleMouseMove);
});
onUnmounted(() => {
	// Mobile
	if (window.matchMedia('(pointer: coarse)').matches)
		return window.removeEventListener('touchmove', handleTouchMove);

	// Desktop
	window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped lang="scss">
.container {
	overflow: hidden;
	height: 100%;
}
</style>
