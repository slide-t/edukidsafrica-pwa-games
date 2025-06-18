const questions = [
{question: "Which word is the opposite of 'tall'?",
    options: ["High", "Short", "Big", "Small"],
    correct: "Short"
    
},
{
    question: "Which word rhymes with 'cat'?",
    options: ["Car", "Mat", "Cut", "Can"],
    correct: "Mat"
}];let current=0,score=0,mistakes=0,timer;function shuffleArray(a){return a.sort(()=>Math.random()-.5)}function startTimer(){let t=10;document.getElementById("time").innerText=t,timer=setInterval(()=>{t--,document.getElementById("time").innerText=t,0===t&&(clearInterval(timer),showCorrect(),setTimeout(nextQuestion,1e3))},1e3)}function renderQuestion(){const q=questions[current];document.getElementById("question").innerText=q.question;const btns=document.querySelectorAll(".options button"),opts=shuffleArray([...q.options]);btns.forEach((b,i)=>{b.innerText=opts[i],b.className="",b.disabled=!1}),startTimer()
    
}
function checkAnswer(b){clearInterval(timer);const s=b.innerText,c=questions[current].correct;document.querySelectorAll(".options button").forEach(btn=>{btn.disabled=!0,btn.innerText===c?btn.classList.add("correct"):btn.innerText===s&&btn.classList.add("wrong")}),s===c?(score++,document.getElementById("score").innerText=score):(mistakes++,document.getElementById("mistakes").innerText=mistakes),setTimeout(nextQuestion,1e3)}function showCorrect(){const c=questions[current].correct;document.querySelectorAll(".options button").forEach(btn=>{btn.innerText===c&&btn.classList.add("correct"),btn.disabled=!0})}function nextQuestion(){++current<questions.length?renderQuestion():showResult()}function showResult(){document.getElementById("question-box").innerHTML=`<h2>Your Score: ${score}/${questions.length}</h2><p>${score>=45?"🎉 Well done!":"Try again to score 45 and above!"}</p>`,score>=45&&(document.getElementById("next-level").style.display="inline-block")
    
}
function goToNextLevel() {
  window.location.href = "math-level2.html";
}