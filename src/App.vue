<template>
	<Header />
	<RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './layout/Header.vue';
</script>
