import { createI18n } from 'vue-i18n';
import ru from './ru.json';
import uz from './uz.json';
import tr from './tr.json';
import en from './en.json';

export const changeLanguage = newLang => {
	i18n.global.locale = newLang;
	localStorage.setItem('lang', i18n.global.locale);
};
const i18n = createI18n({
	locale: localStorage.getItem('lang') || 'en',
	messages: {
		uz,
		ru,
		en,
		tr
	}
});

export default i18n;
