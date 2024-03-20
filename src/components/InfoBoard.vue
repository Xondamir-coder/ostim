<template>
	<div class="info__content">
		<div class="info__content-head">
			<h1 class="heading-m">{{ data.title }}</h1>
			<p>{{ data.text }}</p>
		</div>
		<div v-for="col in data.columns" :key="col">
			<h2 class="heading-s">{{ col.title }}</h2>
			<p v-for="text in col.texts" :key="text">{{ text }}</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	data: Object
});
</script>

<style lang="scss" scoped>
@import '@/sass/abstracts/index';

.info__content {
	$gaps: (
		row: 3rem,
		column: 2rem
	);
	@include grid-area('head head' 'office management');
	@include grid-gaps($gaps);
	@include media($tab-port) {
		@include grid-area('head' 'office' 'management');
	}
	animation: appear-left 1s;
	grid-auto-rows: max-content;
	&-head {
		grid-area: head;
	}
	& > *:not(.info__content-head) {
		@include grid-row-gap(0.5rem);
		p {
			font-weight: 400;
		}
	}

	h2 {
		@include underline(2px);
		margin-bottom: 1rem;
	}
}
</style>
