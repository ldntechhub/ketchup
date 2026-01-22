// Array to store quiz questions, answers, and other relevant details

// Code adapted from YouTube - 'How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript' by GreatStack (https://www.youtube.com/watch?v=PBcqGxrr9g8)

let questions = [
  {
    question:
      "In which movie do Satsuki and Mei discover magical creatures in the countryside?",
    answers: [
      { text: "Spirited Away", correct: false },
      { text: "My Neighbor Totoro", correct: true }, // Correct answer
      { text: "Ponyo", correct: false },
      { text: "Howl's Moving Castle", correct: false },
    ],
  },
  {
    question:
      "In 'Kiki's Delivery Service,' a young witch starts a delivery business in a fictional European city.",
    answers: [
      { text: "True", correct: true }, // Correct answer
      { text: "False", correct: false },
    ],
  },
  {
    question: "What is the primary setting of the film 'Castle in the Sky'?",
    answers: [
      { text: "A bustling metropolis", correct: false },
      { text: "A magical forest", correct: false },
      { text: "An underwater kingdom", correct: false },
      { text: "A floating island called Laputa", correct: true }, // Correct answer
    ],
  },
  {
    question: "Which movie features this robot statue?",
    image: "assets/images/question-images/quiz-img-robot.webp", // Image associated with the question
    alt: "An image of robot with Pazu and Sheeta.", // Alt text for image accessibility
    answers: [
      { text: "Castle in the Sky", correct: true }, // Correct answer
      { text: "Porco Rosso", correct: false },
      { text: "The Cat Returns", correct: false },
      { text: "Ponyo", correct: false },
    ],
  },
  {
    question: "In 'Princess Mononoke,' who is the leader of the boar tribe?",
    answers: [
      { text: "San", correct: false },
      { text: "Jigo", correct: false },
      { text: "Ashitaka", correct: false },
      { text: "Okkoto", correct: true }, // Correct answer
    ],
  },
  {
    question:
      "The protagonist of 'The Wind Rises,' Jiro Horikoshi, is based on a real historical figure.",
    answers: [
      { text: "True", correct: true }, // Correct answer
      { text: "False", correct: false },
    ],
  },
  {
    question:
      "What is the name of the toxic jungle in 'Nausicaä of the Valley of the Wind'?",
    answers: [
      { text: "Toxic Jungle", correct: false },
      { text: "Forest of Doom", correct: false },
      { text: "Sea of Decay", correct: true }, // Correct answer
      { text: "Fungus Kingdom", correct: false },
    ],
  },
  {
    question: "What is the name of this character?",
    image: "assets/images/question-images/quiz-img-baron.webp", // Image associated with the question
    alt: "An image of (living) statue of a cat from Whisper of the Heaart and The Cat Returns.", // Alt text for image accessibility
    answers: [
      { text: "Luna", correct: false },
      { text: "Muta", correct: false },
      { text: "Jiji", correct: false },
      { text: "Baron", correct: true }, // Correct answer
    ],
  },
  {
    question: "What is the name of the antique shop in 'Whisper of the Heart'?",
    answers: [
      { text: "The Cat's Store", correct: false },
      { text: "The Antique Shop of Dreams", correct: false },
      { text: "The Baron's Shop", correct: true }, // Correct answer
      { text: "The Moonlight Shop", correct: false },
    ],
  },
  {
    question:
      "'The Tale of the Princess Kaguya' was created using CGI animation.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }, // Correct answer
    ],
  },
];
