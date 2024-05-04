<template>
	<div class="container" ref="container">&blank;</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const container = ref();

const toggleBodyClass = () => document.body.classList.toggle('view-project');
const st = 125; // strength of mouse movement
const handleMouseMove = e => {
	cursor.x = -((e.clientX / window.innerWidth) * st - st / 2);
	cursor.y = -((e.clientY / window.innerHeight) * st - st / 2);
	container.value.style.setProperty('--x', `calc(${cursor.x}px + 80%)`);
	container.value.style.setProperty('--y', `calc(${cursor.y}px + 90%)`);
};

const cursor = { x: 0, y: 0 };
window.addEventListener('mousemove', handleMouseMove);

onMounted(toggleBodyClass);
onUnmounted(() => {
	toggleBodyClass();
	window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped lang="scss">
svg {
	position: absolute;
	width: 140px;
	height: 140px;
	top: 70%;
	left: 32.5%;
	transform: translate(-50%, -50%);
}
/* 
top: 48%;
left: 34%;
	*/
.container {
	--x: 80%;
	--y: 90%;
	flex-grow: 1;
	background-image: url(@/assets/loyiha.avif);
	background-size: 150%;
	background-position: var(--x) var(--y);
	background-repeat: no-repeat;
	transition: all 400ms ease-out;
}
</style>
