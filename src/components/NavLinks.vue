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
		<li class="item">
			<a class="link router__link" href="https://www.ostim.org.tr/" target="_blank">{{
				i18n.global.t('link-about-ostim')
			}}</a>
		</li>
	</ul>
</template>

<script setup>
import i18n from '@/locales';
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
