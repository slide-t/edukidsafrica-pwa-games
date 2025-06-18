const questions = [
  {
    question: "Which word is the opposite of 'tall'?",
    options: ["High", "Short", "Big", "Small"],
    correct: "Short"
  },
  {
    question: "Which word rhymes with 'cat'?",
    options: ["Car", "Mat", "Cut", "Can"],
    correct: "Mat"
  },
  {
    question: "Pick the noun in the sentence: 'The boy ran fast.'",
    options: ["ran", "fast", "boy", "the"],
    correct: "boy"
  },
  {
    question: "Choose the correct article: '___ apple a day keeps the doctor away.'",
    options: ["A", "The", "An", "Some"],
    correct: "An"
  },
  {
    question: "What is the plural of 'child'?",
    options: ["Childs", "Children", "Childes", "Childer"],
    correct: "Children"
  },
  {
    question: "Which one is a verb?",
    options: ["Book", "Table", "Run", "Ball"],
    correct: "Run"
  },
  {
    question: "Which is a question word?",
    options: ["Apple", "Where", "Nice", "Strong"],
    correct: "Where"
  },
  {
    question: "Fill in the blank: 'She ___ playing.'",
    options: ["is", "are", "were", "am"],
    correct: "is"
  },
  {
    question: "Choose the correct sentence.",
    options: ["He going school.", "He is going to school.", "He to go school.", "He go to school."],
    correct: "He is going to school."
  },
  {
    question: "What is the opposite of 'cold'?",
    options: ["Cool", "Hot", "Warm", "Freeze"],
    correct: "Hot"
  },
  // ... add 40 more to reach 50
];

let current = 0, score = 0, mistakes = 0, timer;

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
  let timeLeft = 10;
  document.getElementById("time").innerText = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      showCorrect(null);
      setTimeout(nextQuestion, 1000);
    }
  }, 1000);
}

function renderQuestion() {
  const q = questions[current];
  document.getElementById("question-box").classList.add("flip-in");
  document.getElementById("question").innerText = q.question;

  const btns = document.querySelectorAll(".options button");
  const shuffled = shuffleArray([...q.options]);
  btns.forEach((btn, i) => {
    btn.innerText = shuffled[i];
    btn.className = "";
    btn.disabled = false;
  });

  setTimeout(() => {
    document.getElementById("question-box").classList.remove("flip-in");
  }, 500);

  startTimer();
}

function checkAnswer(btn) {
  clearInterval(timer);
  const selected = btn.innerText;
  const correct = questions[current].correct;
  document.querySelectorAll(".options button").forEach(b => {
    b.disabled = true;
    if (b.innerText === correct) {
      b.classList.add("correct");
    } else if (b.innerText === selected) {
      b.classList.add("wrong");
    }
  });

  if (selected === correct) {
    score++;
    document.getElementById("score").innerText = score;
  } else {
    mistakes++;
    document.getElementById("mistakes").innerText = mistakes;
  }

  setTimeout(nextQuestion, 1000);
}

function showCorrect() {
  const correct = questions[current].correct;
  document.querySelectorAll(".options button").forEach(btn => {
    if (btn.innerText === correct) {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const box = document.getElementById("question-box");
  box.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>
    <p>${score >= 45 ? "🎉 Well done!" : "Try again to score 45 and above!"}</p>`;
  if (score >= 45) {
    document.getElementById("next-level").style.display = "inline-block";
  }
}

function goToNextLevel() {
  alert("Next level would load here.");
}

// Init
questions.splice(0, questions.length, ...shuffleArray(questions));
renderQuestion();

// Popup
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("quizPopup").style.display = "flex";
  }, 3000);
});
