<template>
	<ul class="list">
		<li class="item" v-for="link in links" :key="link.to">
			<RouterLink
				class="link router__link"
				active-class="router__link--active"
				:to="`/${link.to}`"
				>{{ link.name }}</RouterLink
			>
		</li>
	</ul>
</template>

<script setup>
const props = defineProps({
	links: Array
});
</script>

<style lang="scss" scoped>
@import '../sass/abstracts/index';

.list {
	text-align: center;
	@include flex-align(center);
}
.link {
	position: relative;
	color: $color-primary;
	@include text(14px, 500, null, uppercase, 0.1em);
	transition: color ease-out 300ms;
	&:hover::before {
		width: 100%;
	}
	&::before {
		content: '';
		@include pseudo('', calc(100% + 2px));
		@include dimensions(0, 1px);
		background-color: red;
		transition: width 0.5s;
	}
}
</style>
