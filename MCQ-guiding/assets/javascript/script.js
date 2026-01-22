// Modal functionality script

// Code adapted from W3Schools - How TO - CSS/JS Modal (https://www.w3schools.com/howto/howto_css_modals.asp)

// Get the modals
var aboutModal = document.getElementById("about-modal");
var instructionsModal = document.getElementById("instructions-modal");
var contactModal = document.getElementById("contact-modal");

// Get the navigation links
var aboutLink = document.getElementById("about-link");
var instructionsLink = document.getElementById("instructions-link");
var contactLink = document.getElementById("contact-link");

// Get the close buttons
var closeButtons = document.querySelectorAll(".close-button");

// When the user clicks on a link, open the corresponding modal
aboutLink.onclick = function () {
  aboutModal.style.display = "block"; // Show the about modal
};

instructionsLink.onclick = function () {
  instructionsModal.style.display = "block"; // Show the instructions modal
};

contactLink.onclick = function () {
  contactModal.style.display = "block"; // Show the contact modal
};

// When the user clicks on a close button, close the modal
closeButtons.forEach(function (button) {
  button.onclick = function () {
    button.parentElement.parentElement.style.display = "none"; // Hide the modal
  };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none"; // Hide the modal if clicked outside
  }
};
// End of modal functionality script -------------------------------------------------------- //

// Responsive navigation bar

// Code adapted from Medium - Building a Responsive Navigation Bar with CSS (https://volodymyrzh.medium.com/building-a-responsive-navigation-bar-with-css-593ffdb26887)

// DOM elements for the burger icon and navigation links
const burger = document.querySelector(".burger"); // Burger icon for toggling menu
const navLinks = document.querySelector(".nav-links"); // Navigation links container
const body = document.querySelector("body"); // Body element
const backdrop = document.createElement("div"); // Create a backdrop for menu overlay
backdrop.classList.add("menu-backdrop"); // Add class for styling the backdrop

// Append backdrop to the body
body.appendChild(backdrop);

// Add click event listener to the burger icon
burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active"); // Toggle visibility of navigation links
  backdrop.classList.toggle("display"); // Show or hide the backdrop

  // Toggle body scrolling
  body.classList.toggle("fixed-position"); // Prevent body scrolling when menu is open

  // Burger Animation
  burger.classList.toggle("toggle");
});

// Add click event listener to the backdrop
backdrop.addEventListener("click", function () {
  navLinks.classList.remove("nav-active"); // Hide navigation links
  this.classList.remove("display"); // Hide the backdrop when clicked
  body.classList.remove("fixed-position"); // Restore body scrolling
  burger.classList.remove("toggle"); // Reset burger animation
});

// End of responsive navigation bar -------------------------------------------------------- //

// Quiz logic

// Code adapted from YouTube - 'How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript' by GreatStack (https://www.youtube.com/watch?v=PBcqGxrr9g8)

// DOM elements for quiz functionality
const homeContent = document.getElementById("home-content"); // Home content
const footerElement = document.getElementById("footer"); // Footer element
const startButton = document.getElementById("start-btn"); // Start quiz button
const questionContainer = document.getElementById("question-container"); // Container for questions
const questionElement = document.getElementById("question"); // Element for displaying questions
const questionTotal = document.getElementById("question-total"); // Element to show total questions
const answerElement = document.getElementById("answer-buttons"); // Element for displaying answer buttons
const nextButton = document.getElementById("next-btn"); // Next question button
const quizResults = document.getElementById("quiz-results"); // Element for displaying quiz results
const playAgainBtn = document.getElementById("playAgain-btn"); // Button to play again

let shuffledQuestions; // Array to hold shuffled questions
let currentQuestionIndex = 0; // Index of the current question
let score = 0; // User's score

// Event listener for start button
startButton.addEventListener("click", startQuiz); // Start the quiz when clicked

// Function to start quiz
function startQuiz() {
  currentQuestionIndex = 0; // Reset current question index
  score = 0; // Reset score

  nextButton.innerHTML = "Next";
  homeContent.classList.add("hide"); // Hide home content
  footerElement.classList.add("hide"); // Hide footer when quiz starts

  // Shuffle questions randomly
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  // Show question container
  questionContainer.classList.remove("hide");
  showQuestion(); // Call function to display the first question
}

// Function to display the current question and answers
function showQuestion() {
  resetState(); // Reset previous state

  let currentQuestion = questions[currentQuestionIndex]; // Get the current question
  let questionNo = currentQuestionIndex + 1; // Calculate question number
  questionTotal.innerHTML = questionNo + " / 10 Questions"; // Display current question number

  // Clear previous question and answers
  questionElement.innerHTML = "";
  answerElement.innerHTML = "";

  // Create question
  const questionText = document.createElement("h1");
  questionText.innerText = currentQuestion.question; // Set question text
  questionText.classList.add("question");
  questionElement.appendChild(questionText); // Append question text to the question element

  // If the question has an image, display it
  if (currentQuestion.image) {
    const image = document.createElement("img");
    image.src = currentQuestion.image; // Set image source
    image.alt = currentQuestion.alt; // Set image alt text
    questionElement.appendChild(image); // Append image to the question element
  }

  // Create answer buttons
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerElement.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct; // Mark button as correct if applicable
    }
    button.addEventListener("click", selectAnswer); // Add click event to select answer
  });

  // Disable Next button initially
  // Code adapted from W3Schools - Button disabled Property (https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp)
  nextButton.disabled = true;
}

// Function to reset the state of answer buttons
function resetState() {
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

// Function to handle answer selection
function selectAnswer(e) {
  const selectedButton = e.target; // Get the button that was clicked
  const isCorrect = selectedButton.dataset.correct === "true"; // Check if the answer is correct
  // Colour feedback
  if (isCorrect) {
    selectedButton.classList.add("correct"); // Highlight correct answer
    score++; // If answer is correct, score increases
  } else {
    selectedButton.classList.add("incorrect"); // Highlight incorrect answer
  }
  Array.from(answerElement.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); // Highlight the correct answer
    }
    button.disabled = true; // Disable all answer buttons after selection
  });

  // Enable the Next button after an answer is selected
  nextButton.disabled = false;
}

// Function to handle the Next button
function handleNextButton() {
  currentQuestionIndex++; // Move to the next question
  if (currentQuestionIndex < questions.length) {
    showQuestion(); // Show the next question if available
  } else {
    showScore(); // Show the final score if no more questions remain
  }
}

// Event listener for next button
nextButton.addEventListener("click", handleNextButton);

// Function to show final score
function showScore() {
  resetState();
  questionContainer.classList.add("hide");
  quizResults.classList.remove("hide");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `You scored ${score} out of ${questions.length} questions`; // Display final score

  // Circular progress bar logic
  const circularProgress = document.querySelector(".circular-progress"); // Circular progress element
  const progressValue = document.querySelector(".progress-value"); // Element to show progress percentage
  let progressStartValue = -1; // Initial progress value
  let progressEndValue = (score / questions.length) * 100; // Calculate end value based on score
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++; // Increment progress value

    progressValue.textContent = `${progressStartValue}%`; // Update displayed percentage
    circularProgress.style.background = `conic-gradient(var(--golden-yellow), ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, .1) 0deg)`; // Set the progress bar background with a conic-gradient to represent the score visually

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

  // Event listener for the Play Again button
  playAgainBtn.onclick = () => {
    startQuiz(); // Restart the quiz
    quizResults.classList.add("hide"); // Hide the results screen
  };
}

// Display the first question when the quiz starts
showQuestion();

// End of quiz logic -------------------------------------------------------- //
