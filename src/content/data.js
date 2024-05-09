import iconCheck from '@/assets/icons/check.svg';
import workflowIcon from '@/assets/icons/workflow.svg';
import trustedIcon from '@/assets/icons/trusted.svg';
import korzinka from '@/assets/icons/korzinka.svg';
import quality from '@/assets/icons/quality.svg';
import new_zone from '@/assets/icons/new zone.svg';
import adminAvenue from '@/assets/admin.avif';
import hotelAvenue from '@/assets/hotel.avif';
import sportAvenue from '@/assets/sport.avif';
import collegeAvenue from '@/assets/college.avif';
import clinicAvenue from '@/assets/clinic.avif';
import kindergartenAvenue from '@/assets/kindergarten.avif';
import tradeAvenue from '@/assets/trade.avif';
import businessAvenue from '@/assets/business.avif';
import exibitionAvenue from '@/assets/korgazmalar.avif';
import { computed } from 'vue';
import i18n from '@/locales';

// Home content
export const questions = computed(() => [
	{
		question: i18n.global.t('faq-1-question'),
		answer: i18n.global.t('faq-1-answer')
	},
	{
		question: i18n.global.t('faq-2-question'),
		answer: i18n.global.t('faq-2-answer')
	},
	{
		question: i18n.global.t('faq-3-question'),
		answer: i18n.global.t('faq-3-answer')
	},
	{
		question: i18n.global.t('faq-4-question'),
		answer: i18n.global.t('faq-4-answer')
	}
]);
export const reasons = computed(() => [
	{
		icon: iconCheck,
		title: i18n.global.t('reasons-1-title'),
		text: i18n.global.t('reasons-1-subtitle')
	},
	{
		icon: workflowIcon,
		title: i18n.global.t('reasons-2-title'),
		text: i18n.global.t('reasons-2-subtitle')
	},
	{
		icon: trustedIcon,
		title: i18n.global.t('reasons-3-title'),
		text: i18n.global.t('reasons-3-subtitle')
	}
]);
export const avenues = computed(() => [
	{
		banner: adminAvenue,
		title: i18n.global.t('avenue-admin'),
		to: 'admin'
	},
	{
		banner: sportAvenue,
		title: i18n.global.t('avenue-sport'),
		to: 'sport'
	},
	{
		banner: collegeAvenue,
		title: i18n.global.t('avenue-school'),
		to: 'school'
	},
	{
		banner: hotelAvenue,
		title: i18n.global.t('avenue-hotel'),
		to: 'hotel'
	},
	{
		banner: clinicAvenue,
		title: i18n.global.t('avenue-clinic'),
		to: 'clinic'
	},
	{
		banner: kindergartenAvenue,
		title: i18n.global.t('avenue-kindergarten'),
		to: 'kindergarten'
	},
	{
		banner: collegeAvenue,
		title: i18n.global.t('avenue-college'),
		to: 'college'
	},
	{
		banner: tradeAvenue,
		title: i18n.global.t('avenue-trade'),
		to: 'trade'
	},
	{
		banner: businessAvenue,
		title: i18n.global.t('avenue-business'),
		to: 'business'
	},
	{
		banner: exibitionAvenue,
		title: i18n.global.t('avenue-exibition'),
		to: 'exibition'
	}
]);

// About content
export const features = [
	{
		title: 'Qulay joylashuv',
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: korzinka
	},
	{
		title: 'Sifat kafolati',
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: quality
	},
	{
		title: 'Yangi zonalar',
		text: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
		img: new_zone
	}
];

// Routing links
export const routingLinks = computed(() => [
	{
		to: '',
		name: i18n.global.t('link-main')
	},
	{
		to: 'project',
		name: i18n.global.t('link-project')
	},
	{
		to: 'about',
		name: i18n.global.t('link-about')
	},
	{
		to: 'contact',
		name: i18n.global.t('link-contact')
	}
]);
