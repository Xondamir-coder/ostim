<template>
	<Header />
	<RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import { Header } from '@/layout';
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis();
const raf = time => {
	lenis.raf(time);
	requestAnimationFrame(raf);
};
requestAnimationFrame(raf);
</script>
