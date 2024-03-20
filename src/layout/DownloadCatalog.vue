<template>
	<section class="download">
		<h1 class="heading-m">Katalogni to’liq yuklab oling</h1>
		<p>eng yangi va to’liq ma’lumotlar katalogimizda*</p>
		<button class="blue-button">Yuklab olish</button>
	</section>
</template>

<style lang="scss" scoped>
@import '@/sass/abstracts/index';
.download {
	background: $color-primary;
	color: #fff;
	display: grid;
	justify-items: start;
	row-gap: 1.8rem;
	padding: 8rem 11rem;
	@include media($tab-port) {
		padding: 4rem;
	}
}
</style>
