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
const st = 300;

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
	console.log(avenueName);
};

onMounted(() => {
	// Desktop
	window.addEventListener('mousemove', handleMouseMove);
});
onUnmounted(() => {
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
</style>
