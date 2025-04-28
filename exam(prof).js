document.addEventListener("DOMContentLoaded", () => {
  const addQuestionButton = document.getElementById("add-question");
  const examForm = document.getElementById("exam-form");
  const examDurationInput = document.getElementById("exam-duration");
  const examCountdown = document.getElementById("exam-countdown");
  const countdownDisplay = document.getElementById("countdown");

  let questions = [];
  let examDuration = 0;
  let examInterval;

  // Ajouter une question
  addQuestionButton.addEventListener("click", () => {
    const questionText = document.getElementById("question").value;
    const answer1 = document.getElementById("answer1").value;
    const answer2 = document.getElementById("answer2").value;
    const answer3 = document.getElementById("answer3").value;
    const answer4 = document.getElementById("answer4").value;
    const correctAnswer = document.getElementById("correct-answer").value;

    if (!questionText || !answer1 || !answer2 || !answer3 || !answer4 || !correctAnswer) {
      alert("Veuillez remplir toutes les zones !");
      return;
    }

    questions.push({
      question: questionText,
      answers: [answer1, answer2, answer3, answer4],
      correctAnswer: parseInt(correctAnswer)
    });

    alert("✅ Question ajoutée !");
    examForm.reset();
  });

  // Démarrer l'examen
  examForm.addEventListener("submit", (e) => {
    e.preventDefault();

    examDuration = parseInt(examDurationInput.value);

    if (!examDuration || questions.length === 0) {
      alert("Veuillez ajouter des questions et définir la durée !");
      return;
    }

    startExamTimer(examDuration);
    examCountdown.classList.remove("hidden");
    examForm.classList.add("hidden");
  });

  // Compte à rebours
  function startExamTimer(duration) {
    let timeRemaining = duration * 60;

    examInterval = setInterval(() => {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;

      countdownDisplay.textContent = `${minutes}m : ${seconds < 10 ? '0' + seconds : seconds}s`;

      if (timeRemaining <= 0) {
        clearInterval(examInterval);
        alert("⌛ Temps écoulé ! Examen soumis automatiquement.");
      }

      timeRemaining--;
    }, 1000);
  }
});
