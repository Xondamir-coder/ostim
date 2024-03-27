<template>
	<div class="background"></div>
</template>
<style lang="scss" scoped>
@import '@/sass/abstracts/index';
.background {
	@include full-viewport;
	@include media($tab-port, min) {
		display: none;
	}
	margin: 0;
	position: absolute;
	inset: 0;
	background: linear-gradient(to right, rgba(#000, 0.4), rgba(#000, 0.4)),
		url(../assets/about-hero.avif);
	background-size: cover;
	background-position: 23%;
	z-index: -1;
}
</style>
