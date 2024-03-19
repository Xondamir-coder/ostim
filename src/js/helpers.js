export const animateSections = sections => {
	const observeSections = entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const { target } = entry;
				target.classList.remove('section--hidden');
			}
		});
	};
	const observer = new IntersectionObserver(observeSections, { threshold: 0.5 });
	sections.forEach(section => {
		section.classList.add('section--hidden');
		observer.observe(section);
	});
};
