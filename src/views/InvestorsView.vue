<template>
	<ul class="investors__nav">
		<li
			@click="changeSlide(0)"
			class="investors__btn"
			:class="{ 'investors__btn-active': curSlide === 0 }">
			<span class="investors__btn-span">START</span>
		</li>
		<li
			class="investors__btn"
			v-for="entry in [1, 2, 3, 4, 5]"
			@click="changeSlide(entry)"
			:key="entry"
			:class="{ 'investors__btn-active': curSlide === entry }"></li>
		<li
			@click="changeSlide(6)"
			class="investors__btn"
			:class="{ 'investors__btn-active': curSlide === 6 }">
			<span class="investors__btn-span">STOP</span>
		</li>
	</ul>
	<!-- 1 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 0 }">
		<div class="investors__content investors__content--1">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-1') }}</p>
			<h1 class="investors__title">{{ i18n.global.t('investors-title-1') }}</h1>
			<h2 class="investors__subtitle">{{ i18n.global.t('investors-subtitle-1') }}</h2>
			<RouterLink to="/about" class="secondary-button">
				{{ i18n.global.t('who-btn') }}
			</RouterLink>
		</div>
		<div class="investors__right">
			<img class="investors__img" src="@/assets/investors-1.avif" alt="first" />
		</div>
	</div>
	<!-- 2 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 1 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-2') }}</p>
			<h1 class="investors__title">OSTIM GLOBAL</h1>
			<ul class="investors__list">
				<li class="investors__item" v-for="i in [1, 2, 3]" :key="i">
					<img src="@/assets/icons/investors-red-check.svg" alt="check" />
					<span>{{ i18n.global.t(`reasons-${i}-title`) }}</span>
				</li>
			</ul>
			<ul class="investors__areas">
				<li class="investors__area" v-for="i in [1, 2, 3]" :key="i">
					<span class="investors__area-big">100</span>
					<span class="investors__area-small">га</span>
					<span class="investors__area-title">
						{{ i18n.global.t('investors-total-area') }}
					</span>
				</li>
			</ul>
			<RouterLink to="/project" class="secondary-button">{{
				i18n.global.t('who-btn')
			}}</RouterLink>
		</div>
		<div class="investors__right">
			<img class="investors__img" src="@/assets/investors-2.avif" alt="first" />
			<button class="investors__right-btn">
				<svg
					width="80"
					height="84"
					viewBox="0 0 80 84"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M73.204 30.9708C75.2052 32.035 76.8792 33.6237 78.0465 35.5666C79.2139 37.5095 79.8306 39.7334 79.8306 42C79.8306 44.2666 79.2139 46.4905 78.0465 48.4334C76.8792 50.3763 75.2052 51.9649 73.204 53.0291L19.8207 82.0583C11.2248 86.7375 0.666504 80.6542 0.666504 71.0333V12.9708C0.666504 3.34581 11.2248 -2.73335 19.8207 1.93748L73.204 30.9708Z"
						fill="white" />
				</svg>
			</button>
		</div>
	</div>
	<!-- 3 -->
	<div ref="carousel" class="investors" :class="{ 'investors--active': curSlide === 2 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-3') }}</p>
			<h1 class="investors__title">{{ i18n.global.t('investors-title-3') }}</h1>
			<p class="investors__subtitle">{{ i18n.global.t('investors-subtitle-3') }}</p>
			<ul class="investors__list">
				<li class="investors__item" v-for="i in [1, 2, 3, 4]" :key="i">
					<span class="investors__item-count">{{ i }}</span>
					<span>{{ i18n.global.t(`investors-item-${i}`) }}</span>
				</li>
			</ul>
			<button class="secondary-button">{{ i18n.global.t('contact-us') }}</button>
		</div>
		<div class="investors__right investors__carousel-img" ref="container">
			<div class="investors__carousel-bar">
				<div class="investors__carousel-bar--inner"></div>
			</div>
			<img v-for="img in imgs" :key="img" class="investors__img" :src="img" alt="avenue" />
		</div>
	</div>
	<!-- 4 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 3 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-4') }}</p>
			<h1 class="investors__title">OSTIM GLOBAL</h1>
			<p class="investors__subtitle">{{ i18n.global.t('investors-subtitle-4') }}</p>
			<ul class="investors__areas">
				<li
					class="investors__area"
					v-for="item in [
						['100', i18n.global.t('modules')],
						['150-200', i18n.global.t('modules')],
						['10 000', i18n.global.t('investors-total-area')]
					]"
					:key="item">
					<span class="investors__area-big">{{ item[0] }}</span>
					<span class="investors__area-small">м2</span>
					<span class="investors__area-title">
						{{ item[1] }}
					</span>
				</li>
			</ul>
			<button class="secondary-button">{{ i18n.global.t('who-btn') }}</button>
		</div>
		<div class="investors__right">
			<img class="investors__img" src="@/assets/investors-4.avif" alt="first" />
		</div>
	</div>
	<!-- 5 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 4 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-5') }}</p>
			<h1 class="investors__title">{{ i18n.global.t('investors-title-5') }}</h1>
			<p class="investors__subtitle">{{ i18n.global.t('investors-subtitle-5') }}</p>
			<ul class="investors__areas">
				<li
					class="investors__area"
					v-for="item in [
						['240', i18n.global.t('kindergarten')],
						['660', i18n.global.t('school')],
						['840', i18n.global.t('college')]
					]"
					:key="item">
					<span class="investors__area-big">{{ item[0] }}</span>
					<span class="investors__area-small">{{
						i18n.global.t('investors-place')
					}}</span>
					<span class="investors__area-title">
						{{ item[1] }}
					</span>
				</li>
			</ul>
			<button class="secondary-button">{{ i18n.global.t('who-btn') }}</button>
		</div>
		<div class="investors__right investors__right--5">
			<div class="investors__right-gradient"></div>
			<ul class="investors__right-carousel">
				<li
					class="investors__right-carousel_item"
					v-for="avenue in childrenAvenues"
					:key="avenue"
					:class="{
						'investors__right-carousel_item--active': avenue.name === currentAvenue
					}"
					@click="changeCurrentAvenue(avenue.name)">
					<img :src="avenue.img" alt="child avenue" />
				</li>
			</ul>
			<img
				:class="{ 'investors__right-img--active': currentAvenue == 'kindergarten' }"
				class="investors__img investors__right-img"
				src="@/assets/investors-5.avif"
				alt="child avenue" />
			<img
				:class="{ 'investors__right-img--active': currentAvenue == 'school' }"
				class="investors__img investors__right-img"
				src="@/assets/investors-school.avif"
				alt="child avenue" />
			<img
				:class="{ 'investors__right-img--active': currentAvenue == 'college' }"
				class="investors__img investors__right-img"
				src="@/assets/investors-college.avif"
				alt="child avenue" />
		</div>
	</div>
	<!-- 6 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 5 }">
		<div class="investors__content">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-6') }}</p>
			<h1 class="investors__title">{{ i18n.global.t('investors-title-6') }}</h1>
			<ul class="investors__list">
				<li
					class="investors__item investors__item--6"
					v-for="i in [1, 2, 3, 4, 5]"
					:key="i">
					<span class="investors__item-count">{{ i }}</span>
					<span>{{ i18n.global.t(`investors-step-${i}`) }}</span>
					<div class="investors__item-sub" v-if="i === 2">
						<svg
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M15 30C16.9698 30 18.9204 29.612 20.7403 28.8582C22.5601 28.1044 24.2137 26.9995 25.6066 25.6066C26.9995 24.2137 28.1044 22.5601 28.8582 20.7403C29.612 18.9204 30 16.9698 30 15C30 13.0302 29.612 11.0796 28.8582 9.25975C28.1044 7.43986 26.9995 5.78628 25.6066 4.3934C24.2137 3.00052 22.5601 1.89563 20.7403 1.14181C18.9204 0.387986 16.9698 -2.93527e-08 15 0C11.0218 5.92805e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30ZM14.6133 21.0667L22.9467 11.0667L20.3867 8.93333L13.22 17.5317L9.51167 13.8217L7.155 16.1783L12.155 21.1783L13.445 22.4683L14.6133 21.0667Z"
								fill="#018757" />
						</svg>
						{{ i18n.global.t('investors-step-2-subtitle') }}
					</div>
				</li>
			</ul>
			<div class="investors__see">
				<span>{{ i18n.global.t('see-instruction') }}</span>
				<svg
					width="400"
					height="8"
					viewBox="0 0 400 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M399.354 4.35355C399.549 4.15829 399.549 3.84171 399.354 3.64645L396.172 0.464466C395.976 0.269204 395.66 0.269204 395.464 0.464466C395.269 0.659728 395.269 0.976311 395.464 1.17157L398.293 4L395.464 6.82843C395.269 7.02369 395.269 7.34027 395.464 7.53553C395.66 7.7308 395.976 7.7308 396.172 7.53553L399.354 4.35355ZM0 4.5H399V3.5H0L0 4.5Z"
						fill="black" />
				</svg>
			</div>
			<button class="secondary-button">{{ i18n.global.t('who-btn') }}</button>
		</div>
		<div class="investors__right">
			<img class="investors__img" src="@/assets/investors-6.avif" alt="first" />
		</div>
	</div>
	<!-- 7 -->
	<div class="investors" :class="{ 'investors--active': curSlide === 6 }">
		<div class="investors__content investors__content--2">
			<p class="investors__mark">{{ i18n.global.t('investors-mark-7') }}</p>
			<h1 class="investors__title">{{ i18n.global.t('investors-title-7') }}</h1>
			<h1 class="investors__subtitle investors__subtitle--4">
				{{ i18n.global.t('investors-subtitle-7') }}
			</h1>
			<form class="investors__form" @submit.prevent="submitForm">
				<input
					v-model="data.name"
					type="text"
					name="name"
					id="name"
					required
					:placeholder="`${i18n.global.t('investors-input-name')} *`" />

				<input
					v-model="data.tel"
					type="tel"
					name="tel"
					id="tel"
					required
					:placeholder="`${i18n.global.t('investors-input-tel')} *`" />
				<input
					v-model="data.wish"
					class="investors__input-wish"
					type="text"
					name="wish"
					id="wish"
					:placeholder="i18n.global.t('investors-input-wish')" />
				<SelectDropdown
					class="investors__form-item"
					:title="i18n.global.t('investors-input-area')"
					:content="areaContent"
					v-model="data.area" />
				<SelectDropdown
					class="investors__form-item dropdown--up"
					:title="i18n.global.t('investors-input-gas')"
					:content="gasContent"
					v-model="data.gas" />
				<SelectDropdown
					class="investors__form-item"
					:title="i18n.global.t('investors-input-source')"
					:content="sourceContent"
					v-model="data.source" />
				<SelectDropdown
					class="investors__form-item dropdown--up"
					:title="i18n.global.t('investors-input-purpose')"
					:content="purposeContent"
					v-model="data.purpose" />
				<button type="submit" class="secondary-button">
					{{ i18n.global.t('submit') }}
				</button>
			</form>
		</div>
		<div class="investors__right investors__right--2">
			<div class="investors__right--2_head">
				<img src="@/assets/icons/logo-old.svg" alt="old logo" />
				<p>{{ i18n.global.t('hero-subtitle') }}</p>
			</div>
			<div class="investors__right--2_partners">
				<p>{{ i18n.global.t('just-partners') }}</p>
				<div>
					<img src="@/assets/icons/partner-1.svg" alt="some hero" />
					<img src="@/assets/icons/partner-2.svg" alt="some hero" />
					<img src="@/assets/icons/partner-3.svg" alt="some hero" />
					<img src="@/assets/icons/partner-4.svg" alt="some hero" />
					<img src="@/assets/icons/partner-5.svg" alt="some hero" />
				</div>
			</div>
			<NavLinks :links="routingLinks" class="investors__right--2_links" />
			<div class="investors__right--2_contact">
				<h1>{{ i18n.global.t('link-contact') }}</h1>
				<p class="investors__right--2_contact-mail">{{ i18n.global.t('got-questions') }}</p>
				<a class="investors__right--2_contact-mail" href="mailto:ostim@ostim.org.tr">
					ostim@ostim.org.tr
				</a>
				<p class="investors__right--2_contact-tel">
					{{ i18n.global.t('footer-contact-tel') }}
				</p>
				<a class="investors__right--2_contact-tel red" href="tel:+998771241010">
					+998 77 124 10 10
				</a>
			</div>
			<ul class="investors__right--2_social">
				<li class="investors__right--2_social-icon">
					<a href="#">
						<svg
							width="12"
							height="21"
							viewBox="0 0 12 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.0032 0C5.8496 0 4 1.5615 4 5.1195V8.25H0V12H4V21H8V12H11.2L12 8.25H8V5.754C8 4.41375 8.4664 3.75 9.808 3.75H12V0.15375C11.6208 0.10575 10.516 0 9.0032 0Z"
								fill="#D7DDDF" />
						</svg>
					</a>
				</li>
				<li class="investors__right--2_social-icon">
					<a href="https://www.instagram.com/ostimglobal" target="_blank">
						<svg
							width="18"
							height="19"
							viewBox="0 0 18 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M5.29282 0C2.38745 0 0 2.51664 0 5.58686V13.4131C0 16.4799 2.38418 19 5.29282 19H12.7072C15.6125 19 18 16.4834 18 13.4131V5.58773C18 2.52009 15.6158 0 12.7072 0H5.29282ZM5.29282 1.72727H12.7072C13.1875 1.72659 13.6633 1.82596 14.1072 2.01968C14.5511 2.2134 14.9545 2.49767 15.2941 2.8562C15.6338 3.21473 15.9031 3.64048 16.0866 4.10906C16.2701 4.57763 16.3643 5.07982 16.3636 5.58686V13.4131C16.3643 13.9202 16.2701 14.4224 16.0866 14.8909C15.9031 15.3595 15.6338 15.7853 15.2941 16.1438C14.9545 16.5023 14.5511 16.7866 14.1072 16.9803C13.6633 17.174 13.1875 17.2734 12.7072 17.2727H5.29364C4.81321 17.2735 4.33736 17.1742 3.89336 16.9806C3.44935 16.7869 3.04591 16.5027 2.70616 16.1441C2.36641 15.7856 2.09703 15.3598 1.91346 14.8911C1.72988 14.4225 1.63572 13.9202 1.63636 13.4131V5.58773C1.63561 5.08061 1.72967 4.57833 1.91314 4.10965C2.09662 3.64098 2.36591 3.21513 2.70558 2.8565C3.04526 2.49788 3.44863 2.21353 3.8926 2.01976C4.33657 1.82598 4.8124 1.72659 5.29282 1.72727ZM13.8322 3.61691C13.7347 3.61645 13.6381 3.63638 13.548 3.67554C13.4579 3.7147 13.376 3.77232 13.3071 3.84507C13.2381 3.91781 13.1836 4.00425 13.1465 4.09939C13.1094 4.19453 13.0905 4.29648 13.0909 4.39936C13.0909 4.83464 13.4198 5.18182 13.8322 5.18182C13.9297 5.18239 14.0264 5.16255 14.1166 5.12344C14.2068 5.08433 14.2888 5.02673 14.3578 4.95397C14.4268 4.88121 14.4815 4.79473 14.5187 4.69954C14.5558 4.60434 14.5747 4.50232 14.5743 4.39936C14.5747 4.29641 14.5558 4.19439 14.5187 4.09919C14.4815 4.00399 14.4268 3.91752 14.3578 3.84476C14.2888 3.772 14.2068 3.7144 14.1166 3.67529C14.0264 3.63618 13.9297 3.61634 13.8322 3.61691ZM9 4.31818C6.3 4.31818 4.09091 6.65 4.09091 9.5C4.09091 12.35 6.3 14.6818 9 14.6818C11.7 14.6818 13.9091 12.35 13.9091 9.5C13.9091 6.65 11.7 4.31818 9 4.31818ZM9 6.04545C10.8188 6.04545 12.2727 7.58014 12.2727 9.5C12.2727 11.4199 10.8188 12.9545 9 12.9545C7.18118 12.9545 5.72727 11.4199 5.72727 9.5C5.72727 7.58014 7.18118 6.04545 9 6.04545Z"
								fill="#D7DDDF" />
						</svg>
					</a>
				</li>
				<li class="investors__right--2_social-icon">
					<a href="https://twitter.com/ostimglobal" target="_blank">
						<svg
							width="18"
							height="15"
							viewBox="0 0 18 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M18 1.77938C17.326 2.08525 16.611 2.28559 15.879 2.37371C16.6497 1.90061 17.2265 1.15659 17.502 0.28009C16.7772 0.720447 15.9847 1.03139 15.1583 1.19965C14.652 0.644802 13.9946 0.258944 13.2715 0.0922494C12.5485 -0.0744452 11.7932 -0.0142636 11.104 0.264968C10.4147 0.5442 9.82337 1.02956 9.40681 1.65795C8.99025 2.28633 8.76775 3.02866 8.76825 3.78842C8.76825 4.08597 8.8005 4.37429 8.86575 4.65031C7.39688 4.5762 5.95974 4.18562 4.64796 3.50403C3.33619 2.82244 2.17924 1.86513 1.2525 0.694508C0.923233 1.27231 0.750528 1.92981 0.75225 2.59898C0.75225 3.91144 1.4025 5.07088 2.3955 5.74979C1.80897 5.73071 1.23544 5.56777 0.723 5.27463V5.32307C0.722492 6.1974 1.01732 7.04494 1.55738 7.72165C2.09744 8.39836 2.84942 8.86248 3.6855 9.03515C3.1418 9.188 2.57109 9.21063 2.0175 9.10127C2.25331 9.85345 2.7124 10.5113 3.33066 10.9831C3.94892 11.4548 4.69546 11.7167 5.466 11.7323C4.69998 12.3487 3.82291 12.8042 2.88499 13.0726C1.94706 13.3411 0.966695 13.4174 0 13.297C1.68789 14.4105 3.65306 15.0018 5.66025 15C12.4537 15 16.1693 9.23044 16.1693 4.22667C16.1693 4.06521 16.1632 3.89913 16.1572 3.7369C16.8792 3.20105 17.503 2.53861 18 1.78014V1.77938Z"
								fill="#D7DDDF" />
						</svg>
					</a>
				</li>
				<li class="investors__right--2_social-icon">
					<a
						href="https://www.linkedin.com/onboarding/start/people-you-may-know/new/"
						target="_blank">
						<svg
							width="18"
							height="19"
							viewBox="0 0 18 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M2.26543 6.54207e-07C1.96808 -0.000226251 1.6736 0.0585739 1.39881 0.173042C1.12403 0.287511 0.874311 0.455405 0.663936 0.667134C0.45356 0.878863 0.286645 1.13028 0.172725 1.40702C0.058805 1.68376 0.000112504 1.9804 0 2.28C0 3.54091 1.014 4.58591 2.26286 4.58591C3.51343 4.58591 4.52829 3.54091 4.52829 2.28173C4.52851 1.98217 4.47015 1.6855 4.35653 1.40868C4.24291 1.13186 4.07626 0.880308 3.86612 0.668408C3.65597 0.456507 3.40644 0.288409 3.13178 0.17372C2.85713 0.0590315 2.56274 5.68245e-07 2.26543 6.54207e-07ZM13.3157 6.04546C11.4137 6.04546 10.326 7.04727 9.80314 8.04391H9.74829V6.31405H6V19H9.906V12.7205C9.906 11.0658 10.0294 9.46632 12.0617 9.46632C14.0649 9.46632 14.094 11.3534 14.094 12.825V19H18V12.0322C18 8.62255 17.2723 6.04546 13.3157 6.04546ZM0.311143 6.31318V19H4.21971V6.31318H0.311143Z"
								fill="#D7DDDF" />
						</svg>
					</a>
				</li>
				<li class="investors__right--2_social-icon">
					<a href="https://www.youtube.com/c/OST%C4%B0MOSB1967/videos" target="_blank">
						<svg
							width="22"
							height="15"
							viewBox="0 0 22 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M21.5359 2.34184C21.4107 1.88881 21.1655 1.47575 20.825 1.14401C20.4844 0.812264 20.0603 0.573472 19.5953 0.451531C17.8825 1.36847e-07 11 0 11 0C11 0 4.11751 1.36847e-07 2.40475 0.451531C1.93966 0.573472 1.51561 0.812264 1.17504 1.14401C0.83447 1.47575 0.589324 1.88881 0.464138 2.34184C0.144326 4.04332 -0.0108694 5.77027 0.000591168 7.5C-0.0108694 9.22973 0.144326 10.9567 0.464138 12.6582C0.589324 13.1112 0.83447 13.5243 1.17504 13.856C1.51561 14.1877 1.93966 14.4265 2.40475 14.5485C4.11751 15 11 15 11 15C11 15 17.8825 15 19.5953 14.5485C20.0603 14.4265 20.4844 14.1877 20.825 13.856C21.1655 13.5243 21.4107 13.1112 21.5359 12.6582C21.8557 10.9567 22.0109 9.22973 21.9994 7.5C22.0109 5.77027 21.8557 4.04332 21.5359 2.34184ZM8.80012 10.7143V4.28572L14.512 7.5L8.80012 10.7143Z"
								fill="#D7DDDF" />
						</svg>
					</a>
				</li>
			</ul>
			<div class="investors__right--2_copyright">
				<p>© Copyright {{ new Date().getFullYear() }}</p>
				<div>
					<p>{{ i18n.global.t('developed') }}</p>
					<img src="@/assets/icons/spacelabs.svg" alt="spacelabs" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import gsap from 'gsap';
import { avenues, routingLinks } from '@/content/data';
import i18n from '@/locales';
import schoolImg from '@/assets/investors-school.avif';
import collegeImg from '@/assets/investors-college.avif';
import kindergartenImg from '@/assets/investors-5.avif';
import SelectDropdown from '@/components/SelectDropdown.vue';
import NavLinks from '@/components/NavLinks.vue';

const curSlide = ref(0);
const data = ref({
	name: '',
	tel: '',
	area: '',
	source: '',
	wish: '',
	gas: '',
	purpose: ''
});
const container = ref();
const currentAvenue = ref('kindergarten');
const areaContent = [
	'400 — 2 000 м²',
	'2 000 — 5 000 м²',
	'5 000 — 10 000 м²',
	'10 000 — 30 000 м²',
	'>30 000 м²'
];
const sourceContent = computed(() => [
	`<0,5 ${i18n.global.t('mega-watt')}`,
	`0,5 — 2 ${i18n.global.t('mega-watt')}`,
	`2 — 5 ${i18n.global.t('mega-watt')}`,
	`>5 ${i18n.global.t('mega-watt')}`
]);
const purposeContent = computed(() => [
	i18n.global.t('production'),
	i18n.global.t('stock'),
	i18n.global.t('other')
]);
const gasContent = [
	`< 0,01 млн м³/${i18n.global.t('year')}`,
	`0,01 – 0,1 млн. м³/${i18n.global.t('year')}`,
	`0,1 – 1 млн. м³/${i18n.global.t('year')}`,
	`1 – 10 млн. м³/${i18n.global.t('year')}`,
	`10 – 100 млн. м³/${i18n.global.t('year')}`,
	`100 – 500 млн. м³/${i18n.global.t('year')}`,
	`> 500 млн. м³/${i18n.global.t('year')}`
];

const imgs = computed(() => avenues.value.map(e => e.banner));
const childrenAvenues = computed(() => [
	{ img: kindergartenImg, name: 'kindergarten' },
	{ img: collegeImg, name: 'college' },
	{ img: schoolImg, name: 'school' }
]);

let animation;
const carousel = ref();

const changeCurrentAvenue = avenue => (currentAvenue.value = avenue);
const changeSlide = slide => (curSlide.value = slide);
const handleKeyup = e => {
	if (e.key === 'ArrowRight') curSlide.value !== 6 && changeSlide(curSlide.value + 1);
	if (e.key === 'ArrowLeft') curSlide.value !== 0 && changeSlide(curSlide.value - 1);
};
const submitForm = () => {
	console.log(data.value);
};

const viewportWidth = window.innerWidth;

watch(curSlide, () => {
	if (curSlide.value == 2 && !animation) {
		let count = 0;
		animation = gsap.to(container.value.firstElementChild.firstElementChild, {
			width: '100%',
			duration: 3,
			repeat: -1,
			onRepeat: () => {
				const arr = Array.from(container.value.children).slice(1);
				if (count === arr.length - 1) {
					animation.kill();
					gsap.to(container.value.firstElementChild.firstElementChild, {
						width: '100%',
						duration: 3
					});
					return;
				}
				arr.forEach(e =>
					gsap.to(e, {
						duration: 1,
						x: `-=${e.scrollWidth + 20}`
					})
				);
				count++;
			}
		});
	}
	if (curSlide.value != 2 && animation) animation.pause();
	if (curSlide.value == 2 && animation) animation.play();
});
onMounted(() => {
	if (viewportWidth <= 768) {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !animation) {
						let count = 0;
						animation = gsap.to(container.value.firstElementChild.firstElementChild, {
							width: '100%',
							duration: 3,
							repeat: -1,
							onRepeat: () => {
								const arr = Array.from(container.value.children).slice(1);
								if (count === arr.length - 1) {
									animation.kill();
									gsap.to(container.value.firstElementChild.firstElementChild, {
										width: '100%',
										duration: 3
									});
									return;
								}
								arr.forEach(e =>
									gsap.to(e, {
										duration: 1,
										x: `-=${e.scrollWidth + 20}`
									})
								);
								count++;
							}
						});
					}
					if (!entry.isIntersecting && animation) {
						animation.pause();
					}
					if (entry.isIntersecting && animation) {
						animation.play();
					}
				});
			},
			{ threshold: 0.3 }
		);

		observer.observe(carousel.value.lastElementChild);
		return;
	}
	document.addEventListener('keyup', handleKeyup);
});
onUnmounted(() => viewportWidth >= 768 && document.removeEventListener('keyup', handleKeyup));
</script>

<style lang="scss">
@mixin p {
	font-size: 1.8rem;
	font-weight: 400;
	line-height: 3.3rem;
	letter-spacing: 0.03em;
	text-align: left;
	@include media($large-desktop, min) {
		font-size: 2.2rem;
	}
}

.investors {
	$transition-duration: 800ms;
	color: #000;
	font-family: $font-jost;
	display: flex;
	position: absolute;
	top: 10rem;
	right: 0;
	left: 0;
	opacity: 0;
	transition: opacity $transition-duration;
	overflow: hidden;
	height: calc(100vh - 100px);
	justify-content: space-between;
	// &:last-child {
	// 	position: fixed;
	// }
	@include media($tab-port) {
		flex-direction: column;
		position: static;
		opacity: 1;
		&:not(:last-child) {
			margin: 0 6.4rem;
			margin-bottom: 7rem;
		}
		gap: 10rem;
		height: auto;
	}
	@include media(500px) {
		&:not(:last-child) {
			margin: 0 3rem;
			margin-bottom: 7rem;
		}
	}
	@include media(350px) {
		&:not(:last-child) {
			margin: 0;
			margin-bottom: 7rem;
		}
		text-align: center;
		& * {
			justify-content: center;
			align-items: center;
			align-self: center !important;
		}
	}

	&--active {
		opacity: 1;
		z-index: 1;
		.investors__right,
		.investors__content {
			transform: translateX(0);
		}
	}
	& > * {
		flex-basis: 50%;
		transition: transform $transition-duration;
	}
	&:last-child {
		.investors__right {
			overflow-y: auto;

			@include media($tab-port) {
				overflow-y: visible;
			}
		}
	}
	&__carousel {
		&-bar {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 8px;
			z-index: 10;
			&--inner {
				width: 0%;
				height: 100%;
				background-color: red;
			}
		}
		&-img {
			position: relative;
			display: flex;
			gap: 20px;
			overflow-x: hidden;
		}
	}
	&__footer {
		.footer__content {
			flex-direction: column;
			align-items: flex-start;
			gap: 4rem;
			.investors__right--2_social {
				align-self: center;
				&-links {
					justify-content: center;
				}
				a img {
					display: block;
					margin: 0 auto;
				}
			}
			.list {
				align-self: flex-start;
			}
		}
	}
	&__input-wish {
		grid-row: span 2;
	}
	&__form {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		@include media(500px) {
			grid-template-columns: none;
		}
		&-item {
			grid-column: 2 / span 1;

			@include media(500px) {
				grid-column: auto;
			}
		}
		&-item:nth-child(4) {
			grid-row: 1 / span 1;
			@include media(500px) {
				grid-row: auto;
			}
		}
		&-item:nth-child(5) {
			grid-row: 3 / span 1;
			@include media(500px) {
				grid-row: auto;
			}
		}
		&-item:nth-child(6) {
			grid-row: 2 / span 1;
			@include media(500px) {
				grid-row: auto;
			}
		}
		input {
			font-family: $font-lato;
			font-size: 16px;
			font-weight: 300;
			line-height: 2.2rem;
			letter-spacing: initial;
			border: 1px solid #d9d9d9;
			padding: 1.5rem;
			transition: border 0.3s;
			color: #3a3a3a;
			@include media(500px) {
				padding-left: 3rem;
			}
		}
	}
	&__areas {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}
	&__area {
		font-family: $font-carter;
		letter-spacing: 0.1em;
		line-height: 3.6rem;
		font-weight: 400;
		color: $color-secondary;
		&-big {
			font-size: 3.8rem;
		}
		&-small {
			margin-left: 5px;
			font-size: 1.6rem;
		}
		&-title {
			line-height: 1.8rem;
			display: block;
			font-family: $font-jost;
			font-size: 1.8rem;
			color: #000;
			text-transform: uppercase;
			@include media($large-desktop, min) {
				font-size: 2rem;
			}
		}
	}
	&__list {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
	}
	&__item {
		display: flex;
		gap: 1rem;
		align-items: center;
		text-transform: uppercase;
		font-size: 1.8rem;
		font-weight: 400;
		line-height: 3.6rem;
		letter-spacing: 0.1em;
		@include media($large-desktop, min) {
			font-size: 2rem;
		}
		img {
			width: 3rem;
			height: 3rem;
		}
		&--6 {
			display: block;
			& span:nth-child(2) {
				margin-left: 1rem;
			}
			.investors__item-sub {
				margin-left: 4rem;
				margin-top: 1rem;
				svg {
					width: 3rem;
					height: 3rem;
				}
			}
		}
		&-sub {
			display: flex;
			gap: 1rem;
		}
		&-count {
			text-align: center;
			width: 2rem;
			font-family: $font-carter;
			color: $color-secondary;
			font-size: 2.5rem;
			margin-right: 1rem;
		}
	}
	&__right {
		transform: translateX(100%);
		position: relative;

		@include media($tab-port) {
			transform: translateX(0);
		}
		&--5 {
			flex-basis: initial;
			height: 640px;
		}
		&--2 {
			background-color: $color-primary;
			color: #fff;
			padding: 4rem 10rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 3rem;
			justify-content: space-between;

			@include media($tab-port) {
				padding: 5rem;
			}

			& > * {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			&_social {
				display: flex;
				align-self: flex-end;
				gap: 3rem;
				flex-direction: row;
				a {
					padding: 0 !important;
				}
			}
			&_copyright {
				border-top: 1px solid $color-secondary;
				padding-top: 2rem;
				align-self: stretch;
				justify-content: space-between;
				flex-direction: row;
				@include media(350px) {
					flex-direction: column;
					gap: 3rem;
					align-self: stretch !important;
				}
				div {
					display: flex;
					gap: 1.2rem;
				}
			}
			&_head {
				gap: 2rem;
				p {
					font-family: $font-poppins;
					@include p;
				}
				img {
					width: 20rem;
					height: 12rem;
				}
			}
			&_partners {
				p {
					font-family: $font-jost;
					@include p;
				}
				div {
					display: flex;
					gap: 1rem;
				}
				img {
					width: 8rem;
					height: 8rem;
				}
			}
			&_contact {
				align-self: flex-start;
				align-items: flex-start;
				gap: 1.5rem;
				&-mail,
				&-tel {
					font-family: $font-poppins;
					font-size: 1.6rem !important;
					font-weight: 300;
					letter-spacing: 0.03em;
					text-align: left;
				}
				a {
					margin-top: 0 !important;
					font-weight: 400 !important;
					padding: 0 !important;
					text-decoration: underline;
				}
				h1 {
					font-family: $font-jost;
					font-size: 2rem;
					font-weight: 400;
					letter-spacing: 0.06em;
				}
			}
			&_links {
				align-self: flex-start;
				gap: 8px !important;
				flex-direction: column !important;
				align-items: flex-start !important;
				font-size: 14px;
				font-weight: 400;
				a {
					text-decoration: none;
					padding: 0 !important;
				}
			}
		}
		&-gradient {
			position: absolute;
			height: 100%;
			width: 100%;
			background: linear-gradient(to bottom, #00000000 10%, #00000069 100%);
		}
		&-btn {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			svg {
				width: 8rem;
				height: 8.4rem;
			}
		}
		&-img {
			opacity: 0;
			transition: opacity 700ms;
			position: absolute;
			&--active {
				opacity: 1;
			}
		}
		&-carousel {
			z-index: 10;
			position: absolute;
			bottom: 1rem;
			left: 50%;
			transform: translateX(-50%);
			color: #fff;
			display: flex;
			gap: 3rem;

			&_item {
				height: 9rem;
				width: 16rem;
				border-radius: 1.2rem;
				border: 2px solid transparent;
				transition-property: transform, border-color;
				transition-duration: 400ms;
				transform-origin: bottom;
				cursor: pointer;

				@include media(500px) {
					width: 14rem;
					height: 8rem;
				}
				&:hover {
					transform: scale(1.2);
					border-color: $color-secondary;
				}
				img {
					@include cover-img;
					border-radius: inherit;
				}
				&--active {
					transform: scale(1.2);
					border-color: $color-secondary;
				}
			}
		}
	}
	&__content {
		transform: translateX(-100%);
		margin-left: calc($header-margin + 0.9rem);
		max-width: 50rem;
		align-self: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		@include media($desktop) {
			margin-left: calc($header-margin - 8rem + 0.9rem);
		}
		@include media($tab-port) {
			margin-left: 0;
			align-self: flex-start;
			transform: translateX(0);
			max-width: initial;
		}
		&--2 {
			@include media($tab-port) {
				margin: 0 6.4rem;
			}
			@include media(500px) {
				margin: 0 3rem;
			}
		}

		&--1 {
			& + .investors__right {
				animation: slide-left 800ms;
			}
			& > * {
				animation: slide-up 800ms forwards;
			}
			.investors__title {
				opacity: 0;
				animation-delay: 300ms;
			}
			.investors__subtitle {
				opacity: 0;
				animation-delay: 600ms;
			}
			a {
				text-decoration: none;
			}
			button,
			a {
				opacity: 0;
				animation-delay: 900ms;
			}
			@include media($tab-port) {
				margin-top: 20rem;
			}
		}
	}
	&__nav {
		z-index: 100;
		position: fixed;
		bottom: 5rem;
		left: 50%;
		transform: translateX(-50%);
		background-color: #fff;
		padding: 1.5rem 3rem;
		display: flex;
		gap: 1.6rem;
		border-radius: 10rem;
		box-shadow: 0px 0px 8px 0px #0000001a;
		@include media($tab-port) {
			display: none;
		}
	}
	&__btn {
		cursor: pointer;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #cccccc;
		transition-property: transform, background-color;
		transition-duration: 300ms;
		@include grid-center;
		&-active {
			background-color: $color-secondary;
			transform: scale(2);
		}
		&:first-child.investors__btn-active span,
		&:last-child.investors__btn-active span {
			opacity: 1;
		}

		&-span {
			opacity: 0;
			font-size: 3px;
			color: #fff;
			line-height: 0;
			transition: opacity 300ms;
		}
	}
	&__img {
		@include cover-img;
	}
	&__see {
		display: flex;
		gap: 3rem;
		align-items: center;
		margin-top: 3rem;
		text-transform: uppercase;
		font-family: $font-bad;
		font-size: 14px;
		font-style: italic;
		font-weight: 400;
		line-height: 27.59px;
		letter-spacing: 0.1em;
		color: #ff0000;
	}

	button,
	a {
		padding: 2rem 3rem;
		align-self: flex-start;
		font-size: 11px;
		font-weight: 500;
		line-height: 16.28px;
		letter-spacing: 0.1em;
		color: #fff;
		margin-top: 3rem;
		box-shadow: none;
	}
	&__mark {
		text-transform: uppercase;
		color: #ff0000;
		font-size: 12px;
		font-weight: 600;
		line-height: 17.34px;
		letter-spacing: 0.1em;
		text-align: left;
		text-decoration: underline;
		margin-bottom: 3rem;
	}
	&__title {
		font-weight: 600;
		line-height: normal;
		letter-spacing: 0.1em;
		font-size: 4rem;
		@include media($large-desktop, min) {
			font-size: 4.8rem;
		}
	}
	&__subtitle {
		font-size: 1.7rem;
		font-weight: 400;
		line-height: 3.6rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		@include media($large-desktop, min) {
			font-size: 2rem;
		}
		&--4 {
			font-size: 16px;
			text-transform: none;
			letter-spacing: normal;
		}
	}
}
a {
	text-decoration: none;
}
.red {
	color: $color-secondary !important;
}

@keyframes slide-up {
	from {
		opacity: 0;
		transform: translateY(5rem);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes slide-left {
	from {
		opacity: 0;
		transform: translateX(40%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
</style>
