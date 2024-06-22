<template>
	<div class="dropdown">
		<label :for="title" class="dropdown__label">
			<span
				:class="{ 'dropdown__placeholder--active': model }"
				class="dropdown__placeholder"
				>{{ title }}</span
			>
			<h1 class="dropdown__title">{{ model || title }}</h1>
			<svg
				:class="{ 'dropdown__icon--active': isChoosing }"
				class="dropdown__icon"
				width="18"
				height="10"
				viewBox="0 0 18 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L9 9L17 1" stroke="black" />
			</svg>
		</label>
		<input @change="toggleDropdown" class="dropdown__checkbox" type="checkbox" :id="title" />
		<div :class="{ 'dropdown__content--active': isChoosing }" class="dropdown__content">
			<label :for="title" v-for="item in content" :key="item" @click="chooseOption(item)">
				<p class="dropdown__option">
					{{ item }}
				</p>
			</label>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const model = defineModel();
const props = defineProps({
	title: String,
	content: Array
});

const isChoosing = ref(false);

const toggleDropdown = () => (isChoosing.value = !isChoosing.value);
const chooseOption = option => (model.value = option);
</script>

<style lang="scss" scoped>
@mixin text {
	font-family: $font-lato;
	font-size: 16px;
	font-weight: 300;
	line-height: 22.08px;
	letter-spacing: 0.03em;
	text-align: left;
	color: #3a3a3a;
	opacity: 0.8;
	text-transform: none;
}
.dropdown {
	$padding: 16px 20px 16px 20px;
	position: relative;
	&--up {
		.dropdown__content {
			bottom: 6.5rem;
			transform: translateY(5rem);
		}
	}
	&__placeholder {
		position: absolute;
		transition: transform 300ms, font-size 300ms;

		@include text;
		&--active {
			transform: translate(-1rem, -2rem);
			font-size: 11px;
		}
	}
	&__icon {
		transition: transform 500ms;
		&--active {
			transform: rotateX(180deg);
		}
	}
	&__label {
		padding: $padding;
		border: 1px solid #d9d9d9;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__title {
		@include text;
	}
	&__checkbox {
		display: none;
	}
	&__content {
		margin-top: 1rem;
		position: absolute;
		background-color: #fff;
		width: 100%;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-4rem);
		transition-property: opacity, transform, visibility;
		transition-duration: 200ms;
		display: flex;
		flex-direction: column;
		// gap: 1rem;
		z-index: 10;
		&--active {
			opacity: 1;
			visibility: visible;
			transform: translateY(0) !important;
		}
	}
	&__option {
		cursor: pointer;
		padding: 0.7rem 2rem;
		border: 1px solid #d9d9d9;
	}
}
</style>
