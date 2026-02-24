const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const welcomeMsg = document.getElementById('welcome-message');
const questBox = document.getElementById('question-container');
const currentDiv = document.getElementById('current');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score-display');
const questionNumberDisplay = document.getElementById('question-number');
const quizHeader = document.getElementsByTagName('h1')[0];
const congMsg = document.getElementById('congMsg');
const controlButtons = document.getElementById('restart-control');
const score = document.getElementById('score');
const percentage = document.getElementById('percentage');
const restartBtn = document.getElementById('restart-btn');
nextButton.disabled = true;

// English Seerah Questions Example
const questions = [
  {
    question: "Who accompanied the Prophet ﷺ inside the cave of Thawr during the Hijrah?",
    choices: [
      "Umar ibn al-Khattab (ra)",
      "Ali ibn Abi Talib (ra)",
      "Abu Bakr al-Siddiq (ra)",
      "Zubayr ibn al-Awwam (ra)"
    ],
    answer: "Abu Bakr al-Siddiq (ra)"
  },
  {
    question: "Which companion slept in the Prophet’s ﷺ bed on the night of Hijrah?",
    choices: [
      "Uthman ibn Affan (ra)",
      "Ali ibn Abi Talib (ra)",
      "Talhah ibn Ubaydullah (ra)",
      "Sa’d ibn Abi Waqqas (ra)"
    ],
    answer: "Ali ibn Abi Talib (ra)"
  },
  {
    question: "Who was known as 'Dhul-Nurayn' (The Possessor of Two Lights)?",
    choices: [
      "Ali ibn Abi Talib (ra)",
      "Uthman ibn Affan (ra)",
      "Abu Bakr (ra)",
      "Abdur Rahman ibn Awf (ra)"
    ],
    answer: "Uthman ibn Affan (ra)"
  },
  {
    question: "Which companion compiled the Qur'an into a single book form during Abu Bakr’s caliphate?",
    choices: [
      "Zayd ibn Thabit (ra)",
      "Ibn Abbas (ra)",
      "Ubayy ibn Ka'b (ra)",
      "Muadh ibn Jabal (ra)"
    ],
    answer: "Zayd ibn Thabit (ra)"
  },
  {
    question: "Which battle was the first major military victory for the Muslims?",
    choices: [
      "Battle of Uhud",
      "Battle of Khandaq",
      "Battle of Badr",
      "Battle of Hunayn"
    ],
    answer: "Battle of Badr"
  },
  {
    question: "Which companion was titled 'Saifullah' (The Sword of Allah)?",
    choices: [
      "Ali ibn Abi Talib (ra)",
      "Khalid ibn al-Walid (ra)",
      "Hamzah ibn Abdul Muttalib (ra)",
      "Zubayr ibn al-Awwam (ra)"
    ],
    answer: "Khalid ibn al-Walid (ra)"
  },
  {
    question: "Who was the first martyr in Islam?",
    choices: [
      "Bilal ibn Rabah (ra)",
      "Sumayyah bint Khayyat (ra)",
      "Yasir ibn Amir (ra)",
      "Hamza ibn Abd al-Muttalib (ra)"
    ],
    answer: "Sumayyah bint Khayyat (ra)"
  },
  {
    question: "Which two companions were known as the Prophet’s ﷺ closest advisors and later became the first two Caliphs?",
    choices: [
      "Ali and Uthman",
      "Abu Bakr and Umar",
      "Talhah and Zubayr",
      "Sa’d and Muadh"
    ],
    answer: "Abu Bakr and Umar"
  },
  {
    question: "Which companion migrated twice — once to Abyssinia and later to Madinah?",
    choices: [
      "Ja'far ibn Abi Talib (ra)",
      "Umar ibn al-Khattab (ra)",
      "Bilal ibn Rabah (ra)",
      "Abu Ubaydah ibn al-Jarrah (ra)"
    ],
    answer: "Ja'far ibn Abi Talib (ra)"
  },
  {
    question: "Who led the Muslims in prayer during the Prophet’s ﷺ final illness?",
    choices: [
      "Umar ibn al-Khattab (ra)",
      "Ali ibn Abi Talib (ra)",
      "Abu Bakr al-Siddiq (ra)",
      "Uthman ibn Affan (ra)"
    ],
    answer: "Abu Bakr al-Siddiq (ra)"
  },
  {
    question: "Which companion was known for his immense modesty, even greater than the angels?",
    choices: [
      "Ali ibn Abi Talib (ra)",
      "Uthman ibn Affan (ra)",
      "Abu Darda (ra)",
      "Salman al-Farisi (ra)"
    ],
    answer: "Uthman ibn Affan (ra)"
  },
  {
    question: "Which companion suggested digging the trench during the Battle of Khandaq?",
    choices: [
      "Salman al-Farisi (ra)",
      "Bilal ibn Rabah (ra)",
      "Zayd ibn Harithah (ra)",
      "Abu Hurairah (ra)"
    ],
    answer: "Salman al-Farisi (ra)"
  },
  {
    question: "Who was known as 'Ameen al-Ummah' (The Trustworthy of the Nation)?",
    choices: [
      "Abu Ubaydah ibn al-Jarrah (ra)",
      "Talhah ibn Ubaydullah (ra)",
      "Sa’d ibn Abi Waqqas (ra)",
      "Abdur Rahman ibn Awf (ra)"
    ],
    answer: "Abu Ubaydah ibn al-Jarrah (ra)"
  },
  {
    question: "Which companion was promised Jannah and was the son-in-law of the Prophet ﷺ?",
    choices: [
      "Ali ibn Abi Talib (ra)",
      "Umar ibn al-Khattab (ra)",
      "Sa’d ibn Abi Waqqas (ra)",
      "Abu Hurairah (ra)"
    ],
    answer: "Ali ibn Abi Talib (ra)"
  },
  {
    question: "Which companion narrated the most hadith?",
    choices: [
      "Ibn Abbas (ra)",
      "Aisha (ra)",
      "Abu Hurairah (ra)",
      "Abdullah ibn Umar (ra)"
],
    answer: "Abu Hurairah (ra)"
  },
  {
    question: "The great grandfather of the Prophet ﷺ was?",
    choices: ["Hashim ibn Abd Manaf", "Abdul Muttalib", "Abdullah ibn Abdul Muttalib", "Abu Talib"],
    answer: "Hashim ibn Abd Manaf"
  },
  {
    question: "'Aam al-Fil (the Year of the Elephant) was named after an attack launched by which of the following:",
    choices: ["The Roman Empire", "The Byzantine Empire", "The Crusaders", "An Abyssinian Ruler of Yemen"],
    answer: "An Abyssinian Ruler of Yemen"
  },
  {
    question: "In which month did the attack during 'Aam al-Fil (Year of the Elephant) take place?",
    choices: ["Ramadan", "Muharram", "Dhul Hijjah", "Sha'ban"],
    answer: "Muharram"
  },
  {
    question: "What was the name of the maid who helped to look after the Prophet Muhammad ﷺ as a child?",
    choices: ["Barakah bint Tha'alaba (Umm Ayman)", "Maimoonah bint Harith", "Ruqayyah", "Zaynab"],
    answer: "Barakah bint Tha'alaba (Umm Ayman)"
  },
  {
    question: "What was the name of the bedouin wet nurse that looked after the Prophet ﷺ after he was sent away from Makkah?",
    choices: ["Halima al-Sa'diyah", "Juwayriyah bint Harith", "Umm Sulaim", "Amina bint Wahb"],
    answer: "Halima al-Sa'diyah"
  },
  {
    question: "What was the name of the servant that Khadijah (may Allah be pleased with her) sent with the Prophet ﷺ for business trade?",
    choices: ["Rabiah", "Nafisah", "Sumayyah", "Maysarah"],
    answer: "Maysarah"
  },
  {
    question: "What was the name of the first freed slave to embrace Islam?",
    choices: ["Zayd bin Harithah", "Bilal ibn Rabah al-Habashi", "Zayd ibn Thaabit", "Zayd ibn Arqam"],
    answer: "Zayd bin Harithah"
  },
  {
  question: "Who was a first cousin of Prophet Muhammad ﷺ?",
  choices: [
    "Abdullah ibn al-Abbas (ra)",
    "Abdullah ibn Umar (ra)",
    "Khalid ibn Waleed (ra)",
    "Abu Hurairah (ra)"
  ],
  answer: "Abdullah ibn al-Abbas (ra)"
},
{
  question: "Which Sahabi did Prophet Muhammad ﷺ help to become free from slavery by planting over 300 date palm trees?",
  choices: [
    "Bilal ibn Rabah (ra)",
    "Thawban ibn Bujdud (ra)",
    "Zayd ibn Harithah (ra)",
    "Salman al-Farisi (ra)"
  ],
  answer: "Salman al-Farisi (ra)"
},
{
  question: "Who was Umar bin Abdul Aziz (r)?",
  choices: [
    "A companion of the Prophet ﷺ",
    "A servant of the Prophet ﷺ",
    "Grandson of Umar ibn al-Khattab",
    "Great grandson of Umar ibn al-Khattab"
  ],
  answer: "Great grandson of Umar ibn al-Khattab"
},
{
  question: "Which companion was known as 'The Sword of Allah' after the Battle of Mu’tah?",
  choices: [
    "Abu Ubaydah ibn al-Jarrah (RA)",
    "Khalid ibn al-Walid (RA)",
    "Talhah ibn Ubaydillah (RA)",
    "Zubayr ibn al-Awwam (RA)"
  ],
  answer: "Khalid ibn al-Walid (RA)"
},
{
  question: "Which companion was known as 'The Sword of Allah' after the Battle of Mu’tah?",
  choices: [
    "Abu Ubaydah ibn al-Jarrah (RA)",
    "Khalid ibn al-Walid (RA)",
    "Talhah ibn Ubaydillah (RA)",
    "Zubayr ibn al-Awwam (RA)"
  ],
  answer: "Khalid ibn al-Walid (RA)"
},
{
  question: "Which companion was promised Paradise and was known for his generosity during the Expedition of Tabuk?",
  choices: [
    "Uthman ibn Affan (RA)",
    "Abdur Rahman ibn Awf (RA)",
    "Sa’d ibn Abi Waqqas (RA)",
    "Abu Darda (RA)"
  ],
  answer: "Uthman ibn Affan (RA)"
},
{
  question: "What did Abu Bakr (RA) and Uthman (RA) have in common?",
  choices: [
    "Both were martyred in battle",
    "Both were among the earliest converts and later became Caliphs",
    "Both migrated only once",
    "Both were Ansar"
  ],
  answer: "Both were among the earliest converts and later became Caliphs"
},
{
  question: "How many Muslims participated in the Battle of Badr?",
  choices: ["100", "313", "700", "1000"],
  answer: "313"
},
{
  question: "Which battle is also known as the Battle of the Trench?",
  choices: ["Badr", "Uhud", "Khandaq", "Hunayn"],
  answer: "Khandaq"
},
{
  question: "Which companion was the son-in-law of the Prophet ﷺ twice?",
  choices: ["Ali ibn Abi Talib (RA)", "Uthman ibn Affan (RA)", "Abu Bakr (RA)", "Zubayr ibn al-Awwam (RA)"],
  answer: "Uthman ibn Affan (RA)"
},
{
  question: "Which companion was known as the 'Interpreter of the Qur'an'?",
  choices: ["Abu Hurairah (RA)", "Ibn Abbas (RA)", "Zayd ibn Thabit (RA)", "Muadh ibn Jabal (RA)"],
  answer: "Ibn Abbas (RA)"
},
{
  question: "Who was appointed as the commander at the Battle of Mu’tah before being martyred?",
  choices: ["Khalid ibn al-Walid (RA)", "Ja’far ibn Abi Talib (RA)", "Zayd ibn Harithah (RA)", "Both Ja’far and Zayd (RA)"],
  answer: "Both Ja’far and Zayd (RA)"
},
{
  question: "Which companion was known for his beautiful recitation of the Qur’an and was told by the Prophet ﷺ to recite for him?",
  choices: ["Abdullah ibn Mas’ud (RA)", "Abu Darda (RA)", "Ubayy ibn Ka’b (RA)", "Salman al-Farisi (RA)"],
  answer: "Abdullah ibn Mas’ud (RA)"
},
{
  question: "Which companion was martyred alongside his mother Sumayyah (RA)?",
  choices: ["Bilal (RA)", "Ammar ibn Yasir (RA)", "Khabbab (RA)", "Suhaib (RA)"],
  answer: "Ammar ibn Yasir (RA)"
},
{
  question: "Who was the first martyr in Islam?",
  choices: ["Hamzah (RA)", "Mus'ab ibn Umayr (RA)", "Sumayyah bint Khayyat (RA)", "Yasir (RA)"],
  answer: "Sumayyah bint Khayyat (RA)"
},
{
  question: "Which companion hosted the Prophet ﷺ in Madinah after Hijrah?",
  choices: ["Sa’d ibn Muadh (RA)", "Abu Ayyub al-Ansari (RA)", "Ubayy ibn Ka’b (RA)", "Anas ibn Malik (RA)"],
  answer: "Abu Ayyub al-Ansari (RA)"
},
{
  question: "Which companion was chosen to call the Adhan in Makkah after its conquest?",
  choices: ["Abu Hurairah (RA)", "Bilal ibn Rabah (RA)", "Umar (RA)", "Ali (RA)"],
  answer: "Bilal ibn Rabah (RA)"
},
{
  question: "Which companion was known as the 'Ameen (Trustworthy) of this Ummah'?",
  choices: ["Abu Ubaydah ibn al-Jarrah (RA)", "Abu Bakr (RA)", "Umar (RA)", "Uthman (RA)"],
  answer: "Abu Ubaydah ibn al-Jarrah (RA)"
},
// {
//   question: "Which companion was sent as a teacher to Madinah before the Hijrah?",
//   choices: ["Muadh ibn Jabal (RA)", "Mus'ab ibn Umayr (RA)", "Abu Ubaydah (RA)", "Sa’d ibn Abi Waqqas (RA)"],
//   answer: "Mus'ab ibn Umayr (RA)"
// },
// {
//   question: "Which battle did the Prophet ﷺ personally participate in the most intensely?",
//   choices: ["Badr", "Uhud", "Hunayn", "Tabuk"],
//   answer: "Uhud"
// },
// {
//   question: "Which companion embraced Islam after initially opposing it and later became a great military leader?",
//   choices: ["Khalid ibn al-Walid (RA)", "Abu Jahl", "Abu Lahab", "Umayyah ibn Khalaf"],
//   answer: "Khalid ibn al-Walid (RA)"
// },
// {
//   question: "Which companion was known for his deep knowledge of halal and haram?",
//   choices: ["Muadh ibn Jabal (RA)", "Abu Hurairah (RA)", "Bilal (RA)", "Talhah (RA)"],
//   answer: "Muadh ibn Jabal (RA)"
// },
// {
//   question: "Which companion was the standard bearer at the Battle of Uhud and was martyred?",
//   choices: ["Hamzah (RA)", "Mus'ab ibn Umayr (RA)", "Ali (RA)", "Sa’d (RA)"],
//   answer: "Mus'ab ibn Umayr (RA)"
// },
// {
//   question: "Which companion was known for his courage and slept in the Prophet’s ﷺ bed during the Hijrah?",
//   choices: ["Ali ibn Abi Talib (RA)", "Umar (RA)", "Zubayr (RA)", "Abu Bakr (RA)"],
//   answer: "Ali ibn Abi Talib (RA)"
// },
// {
//   question: "Which companion was famous for making the dua that Allah strengthen Islam with one of the two Umars?",
//   choices: ["Abu Bakr (RA)", "The Prophet ﷺ", "Hamzah (RA)", "Ali (RA)"],
//   answer: "The Prophet ﷺ"
// }
];

const correctSound = new Audio('sounds/correct.wav');
const wrongSound = new Audio('sounds/wrong.wav');

function showQuiz() {
  welcomeMsg.classList.add('hide');
  questBox.classList.remove('hide');
  currentDiv.classList.remove('hide');
  startButton.classList.add('hide');
  scoreDisplay.textContent = `0 / ${questions.length}`;
  questionNumberDisplay.textContent = `1 of ${questions.length}`;
};

let currentIndex = 0;
let totalScore = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getQuestions() {
  nextButton.disabled = true;
  answerButtonsElement.innerHTML = "";
  questionElement.innerHTML = questions[currentIndex].question;
  shuffleArray(questions[currentIndex].choices);
  questions[currentIndex].choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.value = choice;
    button.classList.add('btn');
    answerButtonsElement.appendChild(button);
    button.addEventListener("click", () => {
      Array.from(answerButtonsElement.children).forEach(btn => btn.disabled = true);
      nextButton.disabled = false;
      Array.from(answerButtonsElement.children).forEach(btn => {
        btn.classList.add("disabled");
      });
      if (button.value === questions[currentIndex].answer) {
        button.classList.add('green');
        button.innerHTML = `${button.value} <span>&#10004;</span> `;
        correctSound.play();
        totalScore++;
        scoreDisplay.textContent = `${totalScore} / ${questions.length}`;
      } else {
        button.classList.add('red');
        button.innerHTML = `${button.value} <span>&#10008;</span> `;
        wrongSound.play();
        Array.from(answerButtonsElement.children).forEach(btn => {
          if (btn.value === questions[currentIndex].answer) {
            btn.classList.add('green');
            btn.innerHTML = `${btn.value} <span>&#10004;</span> `;
          }
        });
      }
      nextButton.classList.remove('hide');
      if (currentIndex === questions.length - 1) {
        nextButton.textContent = "Show Result";
      } else {
        nextButton.textContent = "Next Question";
      }
    });
  });
};

function getResult() {
  currentIndex++;
  if (currentIndex < questions.length) {
    questionNumberDisplay.textContent = `${currentIndex + 1} of ${questions.length}`;
    getQuestions();
  } else if (currentIndex === questions.length) {
    quizHeader.innerHTML = "Quiz Finished!";
    questBox.classList.add('hide');
    nextButton.classList.remove('hide');
    scoreContainer.classList.remove('hide');
    congMsg.classList.remove('hide');
    controlButtons.classList.remove('hide');
    nextButton.classList.add('hide');
    currentDiv.classList.add('hide');

    let percent = Math.floor((totalScore / questions.length) * 100);
    score.textContent = `${totalScore} / ${questions.length} Correct`;
    percentage.textContent = `${percent}% Score`;

    // Show/hide Arabic link based on score (always show for now)
    var arabicLink = document.getElementById('to-arabic-link');
    arabicLink.classList.remove('hide');

    if (percent >= 80) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>Congratulations!</span> &#127881 You are a genius!";
    } else if (percent >= 60) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>Good!</span> &#128293 You're doing well!";
    } else {
      congMsg.innerHTML = "Keep practicing! You'll get better!&#128170;";
    }
  }
};

function reset() {
  currentIndex = 0;
  totalScore = 0;
  scoreDisplay.textContent = `0 / ${questions.length}`;
  questionNumberDisplay.textContent = `1 of ${questions.length}`;
  scoreContainer.classList.add('hide');
  congMsg.classList.add('hide');
  controlButtons.classList.add('hide');
  quizHeader.innerHTML = 'Seerah Quiz ﷺ';
  shuffleArray(questions);
  showQuiz();
  getQuestions();
};

startButton.addEventListener('click', () => {
  shuffleArray(questions);
  showQuiz();
  getQuestions();
});
nextButton.addEventListener('click', getResult);
restartBtn.addEventListener('click', reset);
