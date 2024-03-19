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
	data: Object,
});
</script>

<style lang="scss" scoped>
@import '@/sass/abstracts/variables', '@/sass/abstracts/mixins';

.info__content {
	animation: appear-left 1s;
	display: grid;
	row-gap: 3rem;
	column-gap: 2rem;
	grid-auto-rows: max-content;
	grid-template-areas:
		'head head'
		'office management';
	@include media($tab-port) {
		grid-template-areas:
			'head'
			'office'
			'management';
	}
	&-head {
		grid-area: head;
	}
	& > *:not(.info__content-head) {
		display: grid;
		row-gap: 0.5rem;
		p {
			font-weight: 400;
		}
	}

	h2 {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 2px;
		margin-bottom: 1rem;
	}
}
</style>
