<template>
	<div class="error">
		<div class="container">
			<img class="container__img" src="@/assets/icons/logo.svg" alt="logo" />
			<div class="content">
				<img class="content__img" src="@/assets/404.avif" alt="404" />
				<h1 class="content__heading">Page not found</h1>
				<p class="content__text">The page you are looking for cannot be found</p>
				<p class="content__text">Possible reasons</p>
				<ul class="list">
					<li>The address may have been typed incorrectly</li>
					<li>It may be broken or outdated link</li>
				</ul>
			</div>
			<RouterLink class="router__link primary-button" to="/">go home page</RouterLink>
		</div>
		<img class="error__img" src="@/assets/404-2.avif" alt="404-2" />
	</div>
</template>

<style lang="scss" scoped>
.error {
	@include grid-center;
	@include full-viewport;
	@include media($large-desktop, min) {
		grid-auto-flow: column;
	}
	&__img {
		@include cover-img(902px, 820px);
		@include media($large-desktop) {
			display: none;
		}
	}
}
.container {
	@include grid-row-gap(40px);
	@include responsive-width(44rem);
	justify-items: center;
	a {
		color: #fff;
	}
}
.content {
	@include grid-row-gap(20px);
	&__heading {
		@include text(24px, 600, 28px, none);
		justify-self: center;
	}
	&__text {
		@include text(20px, 600, _, 23.44px);
	}
	&__img {
		justify-self: center;
		width: 29rem;
		height: 10.7rem;
	}
	ul {
		list-style: initial;
		@extend .content;
		li {
			@include text(12px, 400, 14px);
		}
	}
}
</style>
