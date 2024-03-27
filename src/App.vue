<template>
	<Header />
	<RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from '@/layout/Header.vue';
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis();

lenis.on('scroll', e => {});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
</script>
