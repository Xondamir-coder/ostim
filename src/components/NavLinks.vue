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
@import '@/sass/abstracts/variables';
@import '@/sass/abstracts/mixins';
.list {
	@include list;
}
</style>
