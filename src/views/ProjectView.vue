<template>
	<div class="container">
		<Genplan @show="showAvenue" />
	</div>
</template>

<script setup>
import Genplan from '@/components/Genplan.vue';

const showAvenue = avenueName => {
	console.log(avenueName);
};
</script>

<style scoped lang="scss">
.container {
	overflow: hidden;
}
</style>
