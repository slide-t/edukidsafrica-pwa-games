const questions = [
  { question: "Which word is the opposite of 'tall'?", options: ["High", "Short", "Big", "Small"], correct: "Short" },
  { question: "What is the plural of 'cat'?", options: ["Cats", "Cat's", "Cates", "Catt"], correct: "Cats" },
  { question: "Choose the correct vowel in 'c_p':", options: ["a", "e", "i", "u"], correct: "a" },
  { question: "Which is a noun?", options: ["Run", "Jump", "Chair", "Quick"], correct: "Chair" },
  { question: "Which one is a verb?", options: ["Eat", "Food", "Beautiful", "Chair"], correct: "Eat" },
  { question: "What is the opposite of 'cold'?", options: ["Cool", "Ice", "Hot", "Snow"], correct: "Hot" },
  { question: "Which sentence is correct?", options: ["She go to school", "She goes to school", "She going school", "She gone school"], correct: "She goes to school" },
  { question: "Which is a pronoun?", options: ["Book", "He", "Read", "Fast"], correct: "He" },
  { question: "Which word is a describing word?", options: ["Quick", "Apple", "Swim", "Jump"], correct: "Quick" },
  { question: "Which animal makes the sound 'moo'?", options: ["Goat", "Dog", "Cow", "Cat"], correct: "Cow" },

  { question: "Choose the correct spelling:", options: ["Skool", "School", "Scool", "Skul"], correct: "School" },
  { question: "What is the opposite of 'day'?", options: ["Morning", "Evening", "Night", "Sun"], correct: "Night" },
  { question: "How many letters in the word 'pencil'?", options: ["5", "6", "7", "4"], correct: "6" },
  { question: "Which word is a place?", options: ["Chair", "Run", "Lagos", "Blue"], correct: "Lagos" },
  { question: "Which is a question word?", options: ["What", "Walk", "Food", "Toy"], correct: "What" },
  { question: "Choose the correct capital letter:", options: ["a", "b", "A", "g"], correct: "A" },
  { question: "Choose the word that rhymes with 'ball':", options: ["Tall", "Book", "Bird", "Pen"], correct: "Tall" },
  { question: "Fill in the blank: The boy ___ playing.", options: ["is", "are", "am", "were"], correct: "is" },
  { question: "Which one is a fruit?", options: ["Apple", "Chair", "Spoon", "Table"], correct: "Apple" },
  { question: "Which animal says 'meow'?", options: ["Cow", "Goat", "Cat", "Horse"], correct: "Cat" },

  { question: "What is the first letter of the alphabet?", options: ["Z", "A", "B", "D"], correct: "A" },
  { question: "Which word means 'happy'?", options: ["Sad", "Angry", "Joyful", "Cry"], correct: "Joyful" },
  { question: "Choose the correct article: ___ apple", options: ["A", "An", "The", "It"], correct: "An" },
  { question: "Which is a colour?", options: ["Red", "Fast", "Run", "Ball"], correct: "Red" },
  { question: "What is the opposite of 'fast'?", options: ["Run", "Slow", "Quick", "Jump"], correct: "Slow" },
  { question: "Which sentence is a command?", options: ["Go to bed.", "Is this yours?", "She is kind.", "The sky is blue."], correct: "Go to bed." },
  { question: "Which one is a pet?", options: ["Cat", "Tiger", "Lion", "Crocodile"], correct: "Cat" },
  { question: "What sound does 'sh' make?", options: ["sss", "shhh", "ch", "t"], correct: "shhh" },
  { question: "Which is a proper noun?", options: ["city", "boy", "David", "car"], correct: "David" },
  { question: "How many vowels in the word 'elephant'?", options: ["2", "3", "4", "5"], correct: "3" },

  { question: "What is the opposite of 'in'?", options: ["Into", "Inside", "Out", "On"], correct: "Out" },
  { question: "Choose the correct punctuation: What is this", options: ["!", ".", "?", ","], correct: "?" },
  { question: "Which is a family member?", options: ["Brother", "Pen", "Box", "Dog"], correct: "Brother" },
  { question: "Choose the correct tense: I ___ to school every day.", options: ["go", "goes", "going", "went"], correct: "go" },
  { question: "Which one is used to see?", options: ["Nose", "Eyes", "Legs", "Hands"], correct: "Eyes" },
  { question: "Choose a pair of rhyming words:", options: ["Ball - Tall", "Red - Book", "Run - Sit", "Chair - Spoon"], correct: "Ball - Tall" },
  { question: "Which of these is a singular noun?", options: ["Apples", "Boys", "Girl", "Trees"], correct: "Girl" },
  { question: "What is the opposite of 'up'?", options: ["High", "Down", "Side", "Left"], correct: "Down" },
  { question: "Choose the correct sentence:", options: ["i like cake", "I like cake.", "I Like Cake.", "I Like cake"], correct: "I like cake." },
  { question: "Which part of speech is 'quickly'?", options: ["Noun", "Verb", "Adverb", "Adjective"], correct: "Adverb" },

  { question: "Which one is a question?", options: ["Come here!", "Is she at home?", "Go now.", "Sit down."], correct: "Is she at home?" },
  { question: "Choose the synonym of 'big':", options: ["Small", "Huge", "Tiny", "Little"], correct: "Huge" },
  { question: "What is the opposite of 'begin'?", options: ["End", "Go", "Stop", "Come"], correct: "End" },
  { question: "Choose the correct spelling:", options: ["Frend", "Friend", "Freind", "Frind"], correct: "Friend" },
  { question: "Fill in the blank: We ___ happy.", options: ["is", "are", "am", "was"], correct: "are" },
  { question: "Which is a sound word?", options: ["Bang", "Run", "Fast", "Blue"], correct: "Bang" },
  { question: "How many letters in the word 'school'?", options: ["5", "6", "7", "8"], correct: "6" },
  { question: "Which word rhymes with 'cake'?", options: ["Make", "Duck", "Cup", "Map"], correct: "Make" },
  { question: "Which is an action word?", options: ["Run", "House", "Book", "Red"], correct: "Run" },
  { question: "Which one is a question word?", options: ["Who", "This", "It", "Here"], correct: "Who" }
];


let current=0,score=0,mistakes=0,timer;function shuffleArray(a){return a.sort(()=>Math.random()-.5)}function startTimer(){let t=10;document.getElementById("time").innerText=t,timer=setInterval(()=>{t--,document.getElementById("time").innerText=t,0===t&&(clearInterval(timer),showCorrect(),setTimeout(nextQuestion,1e3))},1e3)}function renderQuestion(){const q=questions[current];document.getElementById("question").innerText=q.question;const btns=document.querySelectorAll(".options button"),opts=shuffleArray([...q.options]);btns.forEach((b,i)=>{b.innerText=opts[i],b.className="",b.disabled=!1}),startTimer()
    
}
function checkAnswer(b){clearInterval(timer);const s=b.innerText,c=questions[current].correct;document.querySelectorAll(".options button").forEach(btn=>{btn.disabled=!0,btn.innerText===c?btn.classList.add("correct"):btn.innerText===s&&btn.classList.add("wrong")}),s===c?(score++,document.getElementById("score").innerText=score):(mistakes++,document.getElementById("mistakes").innerText=mistakes),setTimeout(nextQuestion,1e3)}function showCorrect(){const c=questions[current].correct;document.querySelectorAll(".options button").forEach(btn=>{btn.innerText===c&&btn.classList.add("correct"),btn.disabled=!0})}function nextQuestion(){++current<questions.length?renderQuestion():showResult()}function showResult(){document.getElementById("question-box").innerHTML=`<h2>Your Score: ${score}/${questions.length}</h2><p>${score>=45?"🎉 Well done!":"Try again to score 45 and above!"}</p>`,score>=45&&(document.getElementById("next-level").style.display="inline-block")
    
}
function goToNextLevel() {
  window.location.href = "math-level2.html";
}
