const FAQs = [
	{
		title: "Who am I?",
		answer: "I am Oyinade.",
	},
	{
		title: "What school did you attend / are you attending?",
		answer: "I am currently attending FUTA (Federal University of Technology, Akure).",
	},
	{
		title: "What inspired you to learn coding / your field?",
		answer: "I was inspired because I love solving problems for people and coding is something I truly enjoy doing.",
	},
	{
		title: "What hobbies do you enjoy outside tech?",
		answer: "Right now, most of my focus is on learning and growing in tech. I don’t have a fixed hobby outside tech yet, but I enjoy exploring new things when I can.",
	},
	{
		title: "What is your favorite food?",
		answer: "I don’t have a specific favourite food. I just enjoy eating whatever feels right at the moment.",
	},
	{
		title: "What music do you listen to while working?",
		answer: "Most times, I prefer silence when I work. I love pacing around while thinking, and sometimes that feels better than music.",
	},
	{
		title: "Do you prefer working alone or in a team?",
		answer: "I enjoy teamwork because it allows me to learn from others, but I also like working alone when I need to stay deeply focused on coding.",
	},
	{
		title: "How do you spend your weekends?",
		answer: "I spend most of my weekends coding and reading. It’s part of my learning journey and helps me keep improving step by step.",
	},
];
const faqElement = document.getElementById("FAQ");

const createFaqCointainer = (item) => {
	const accordionContainer = document.createElement("div");
	accordionContainer.classList.add("accordion-container");

	const accordionHeader = document.createElement("div");
	accordionContainer.appendChild(accordionHeader);
	accordionHeader.innerHTML = `<span>${item.title}</span>
			<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m280-400 200-200 200 200H280Z"/></svg></span>
`;
	accordionHeader.classList.add("header");

	accordionHeader.onclick = () => {
		const isOpen = accordionAnswer.classList.contains("hidden");
		document.querySelectorAll(".answer").forEach((ans) => {
			ans.classList.add("hidden");
		});

		document.querySelectorAll(".icon").forEach((ic) => {
			ic.classList.remove("active");
		});
		if (isOpen) {
			accordionAnswer.classList.remove("hidden");
			const icon = accordionHeader.querySelector(".icon");
			icon.classList.add("active");
		}
	};

	const accordionAnswer = document.createElement("div");
	accordionContainer.appendChild(accordionAnswer);
	accordionAnswer.innerHTML = `<p>${item.answer}</p>
`;
	accordionAnswer.classList.add("answer");
	accordionAnswer.classList.add("hidden");

	return accordionContainer;
};

FAQs.forEach((item) => {
	faqElement.appendChild(createFaqCointainer(item));
});
