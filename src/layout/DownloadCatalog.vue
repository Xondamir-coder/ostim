<template>
	<section class="download">
		<div class="download__content">
			<h1 class="heading-m">{{ i18n.global.t('download-title') }}</h1>
			<p>{{ i18n.global.t('download-subtitle') }}</p>
			<a
				class="secondary-button"
				href="/catalog.pdf"
				download="Турк_Узбек_Кластери_01.02.2024.pdf">
				{{ i18n.global.t('download-btn') }}
			</a>
		</div>
		<img src="@/assets/icons/logo-big.svg" alt="logo" />
	</section>
</template>

<script setup>
import i18n from '@/locales';
</script>

<style lang="scss" scoped>
.download {
	@include flex(space-between, center);
	margin: 0;
	background: $color-primary;
	padding: var(--page-margin-y) var(--page-margin-x);
	color: #fff;
	@include media($tab-land) {
		justify-content: center;
	}
	a {
		color: currentColor;
		text-decoration: none;
	}
	img {
		width: 436px;
		height: 254px;
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
