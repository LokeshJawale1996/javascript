const quizData = [
  {
    question: "How old is Lokesh?",
    a: "10",
    b: "25",
    c: "20",
    d: "18",
    correct: "b",
  },
  {
    question: "What is the most used programming language in 2022?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President Of India?",
    a: "Narendra Modi",
    b: "Amit Shah",
    c: "Rajnath singh",
    d: "Mamta Banarjee",
    correct: "a",
  },
  {
    question: "What does HTML stands for?",
    a: "HyperText markup Language",
    b: "Cascading Style Sheet",
    c: "Json Object Notation",
    d: "Helicopters Terminals Motorboats Lamboginis ",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "2019",
    b: "2018",
    c: "1995",
    d: "1994",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
  // currentQuestion++;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    //TODO:Show results
    alert("You Quiz finished! ");
  }
  loadQuiz();
});
