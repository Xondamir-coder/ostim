<template>
	<div class="error">
		<div class="container">
			<img class="container__img" src="../assets/logo.svg" alt="logo" />
			<div class="content">
				<img class="content__img" src="../assets/404.jpg" alt="404" />
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
		<img class="error__img" src="../assets/404-2.jpg" alt="404-2" />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/sass/abstracts/index';
.error {
	display: grid;
	place-items: center;
	height: 100vh;
	width: 100vw;
	@include media($large-desktop, min) {
		grid-auto-flow: column;
	}
	&__img {
		object-fit: cover;
		width: 902.74px;
		height: 820.77px;
		@include media($large-desktop) {
			display: none;
		}
	}
}
.container {
	width: 100%;
	max-width: 44rem;
	display: grid;
	row-gap: 40px;
	justify-items: center;
	a {
		color: #fff;
	}
}
.content {
	display: grid;
	row-gap: 20px;
	&__heading {
		justify-self: center;
		text-transform: none;
		font-size: 24px;
		font-weight: 600;
		line-height: 28px;
	}
	&__text {
		font-size: 20px;
		font-weight: 600;
		line-height: 23.44px;
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
			font-size: 12px;
			font-weight: 400;
			line-height: 14.06px;
		}
	}
}
</style>
