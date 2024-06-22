import i18n from '@/locales';

export const animateSections = sections => {
	const observeSections = entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const { target } = entry;
				target.classList.remove('section--hidden');
			}
		});
	};
	const observer = new IntersectionObserver(observeSections, { threshold: 0.3 });
	sections.forEach(section => {
		section.classList.add('section--hidden');
		observer.observe(section);
	});
};

export const sendDataToTelegram = async (text, type) => {
	console.log('submitting');

	const botToken = import.meta.env.VITE_BOT_TOKEN;
	const chat_id = '@ostim_global';

	const date = new Intl.DateTimeFormat('en-GB', {
		dateStyle: 'short',
		timeStyle: 'short'
	}).format(new Date());

	const headerText = type === 'call' ? 'Вызов' : type === 'question' ? 'Вопрос' : 'Инвестор';
	const body = `Тип запроса: ${headerText}
Время: ${date}
${text}
	`;
	try {
		const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ chat_id, text: body })
		});
		await res.json();
		return {
			success: true,
			message: `${i18n.global.t('submit-success')} ✅`
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: `${i18n.global.t('error')} ❌`
		};
	}
};
