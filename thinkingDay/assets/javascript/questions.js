// Array to store quiz questions, answers, and other relevant details

// Code adapted from YouTube - 'How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript' by GreatStack (https://www.youtube.com/watch?v=PBcqGxrr9g8)

// {
//   question:
//     "question text here",
// 		image: "assets/images/question-images/quiz-img-baron.webp",
//		alt: "alt text .",
//    answers: [
//     { text: "choice 1", correct: true },
//     { text: "choice 2", correct: false },
//     { text: "choice 3", correct: false },
//     { text: "choice 4", correct: false },
//   ],
// },

let questions = [
	{
		question: "How many Guiding members are there worldwide?",
		answers: [
			{ text: "5.5 million", correct: false },
			{ text: "7.3 million", correct: false },
			{ text: "11.2 million", correct: true },
			{ text: "15.6 million", correct: false },
		],
	},
	{
		question: "Of the 195 countries world wide how may have Girlguiding?",
		answers: [
			{ text: "120 countries", correct: false },
			{ text: "131 countries", correct: false },
			{ text: "142 countries", correct: false },
			{ text: "153 countries", correct: true },
		],
	},

	{
		question: "You could going skiing if you stayed at this World Centre.",
		image: "assets/images/question-images/OurChalet.jpg",

		answers: [
			{ text: "Pax Lodge", correct: false },
			{ text: "Sangam", correct: false },
			{ text: "Nuestra Cabana", correct: false },
			{ text: "Our Chalet", correct: true },
		],
	},

	{
		question: "At this World Centre you could try on the a traditional sari.",
		image: "assets/images/question-images/sangam.jpg",

		answers: [
			{ text: "Pax Lodge", correct: false },
			{ text: "Sangam", correct: true },
			{ text: "Nuestra Cabana", correct: false },
			{ text: "Our Chalet", correct: false },
		],
	},

	{
		question: "You might stay here and visit Big Ben.",
		image: "assets/images/question-images/PaxLodge.jpg",

		answers: [
			{ text: "Pax Lodge", correct: true },
			{ text: "Sangam", correct: false },
			{ text: "Nuestra Cabana", correct: false },
			{ text: "Our Chalet", correct: false },
		],
	},

	{
		question: "Set up in 2010 this is the 5th World Centre.",
		image: "assets/images/question-images/kusafiri.png",

		answers: [
			{ text: "Pax Lodge", correct: false },
			{ text: "Kusafiri", correct: true },
			{ text: "Nuestra Cabana", correct: false },
			{ text: "Our Chalet", correct: false },
		],
	},
];
