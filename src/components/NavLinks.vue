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
	links: Array,
});
</script>

<style lang="scss" scoped>
@import '../sass/abstracts/index';

.list {
	text-align: center;
	display: flex;
	align-items: center;
}
.link {
	color: $color-primary;
	font-weight: 500;
	font-size: 14px;
	transition: color ease-out 300ms;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	position: relative;
	&:hover::before {
		width: 100%;
	}
	&::before {
		content: '';
		position: absolute;
		bottom: -5px;
		width: 0;
		height: 1px;
		background-color: red;
		transition: width 0.5s;
	}
}
</style>
