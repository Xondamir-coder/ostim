<template>
	<section class="download">
		<div class="download__content">
			<h1 class="heading-m">Katalogni to’liq yuklab oling</h1>
			<p>eng yangi va to’liq ma’lumotlar katalogimizda*</p>
			<button class="secondary-button">Yuklab olish</button>
		</div>
		<img src="../assets/logo-big.svg" alt="logo" />
	</section>
</template>

<style lang="scss" scoped>
@import '@/sass/abstracts/index';
.download {
	@include flex(space-between, center);
	margin: 0;
	background: $color-primary;
	padding: var(--page-margin-y) var(--page-margin-x);
	color: #fff;
	@include media($tab-land) {
		justify-content: center;
	}
	img {
		@include media($tab-land) {
			display: none;
		}
	}
	&__content {
		@include grid-row-gap(18px);
		@include media($tab-land) {
			padding: 10rem 5rem;
			text-align: center;
			justify-items: center;
		}
		@include media($tab-port) {
			padding: 5rem 0;
			line-height: 1.5em;
		}
		justify-items: start;
	}
	@include media($tab-port) {
		padding: 4rem;
	}
}
</style>
