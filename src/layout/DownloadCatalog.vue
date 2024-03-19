<template>
	<section class="download">
		<h1 class="heading-m">Katalogni to’liq yuklab oling</h1>
		<p>eng yangi va to’liq ma’lumotlar katalogimizda*</p>
		<button class="button blue-button">Yuklab olish</button>
	</section>
</template>

<style lang="scss" scoped>
@import '@/sass/abstracts/variables', '@/sass/abstracts/mixins';
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
	h1 {
		@include media($tab-port) {
			font-size: 2.4rem;
		}
	}
}
</style>
