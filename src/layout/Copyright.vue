<template>
	<section class="copyright">
		<div class="copyright__content">
			<div class="copyright__container">
				<div class="copyright__partners">
					<p>We ship with:</p>
					<img src="../assets/icons/dhl.svg" alt="dhl" />
					<img src="../assets/icons/ship-2.svg" alt="some" />
				</div>
				<div class="copyright__payment">
					<p>Payment options:</p>
					<img src="../assets/icons/visa.svg" alt="visa" />
					<img src="../assets/icons/mastercard.svg" alt="mastercard" />
					<img src="../assets/icons/paypal.svg" alt="paypal" />
				</div>
			</div>
			<p>&copy; Copyright {{ new Date().getFullYear() }}</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.copyright {
	margin: 0;
	border-top: 1px solid #d0d0d0;
	&__content {
		margin: var(--page-margin-y) var(--page-margin-x);
		@include flex-justify(space-between, null, wrap);
	}
	&__container {
		@include responsive-width(55rem);
		@include flex(space-between, center, null, wrap);
	}
	&__partners,
	&__payment {
		@include flex-align(center, 1rem);
	}
}
</style>
