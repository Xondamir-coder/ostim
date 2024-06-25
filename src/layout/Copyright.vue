<template>
	<section class="copyright">
		<div class="copyright__content">
			<div class="copyright__container">
				<div class="copyright__partners">
					<p>{{ i18n.global.t('partners') }}</p>
					<img class="copyright__img" src="@/assets/icons/partner-1.svg" alt="" />
					<img class="copyright__img" src="@/assets/icons/partner-2.svg" alt="" />
					<img class="copyright__img" src="@/assets/icons/partner-3.svg" alt="" />
					<img class="copyright__img" src="@/assets/icons/partner-4.svg" alt="" />
					<img class="copyright__img" src="@/assets/icons/partner-5.svg" alt="" />
				</div>
			</div>
			<p>&copy; {{ i18n.global.t('copyright') }} {{ new Date().getFullYear() }}</p>
		</div>
	</section>
</template>

<script setup>
import i18n from '@/locales';
</script>

<style lang="scss" scoped>
.copyright {
	margin: 0;
	border-top: 1px solid #d0d0d0;
	&__img {
		width: 7rem;
		height: 7rem;
	}
	&__content {
		margin: var(--page-margin-y) var(--page-margin-x);
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
	}
	&__container {
		@include responsive-width(55rem);
		@include flex(space-between, center, null, wrap);
	}
	&__partners,
	&__payment {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}
}
</style>
