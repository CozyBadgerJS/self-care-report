const form = document.querySelector("#quiz-form");
const result = document.querySelector("#result");

const correctAnswers = ["A", "B", "C", "C", "C", "B", "A", "A", "B", "C"];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let score = 0;

  correctAnswers.forEach(function (answer, index) {
    const questionNumber = index + 1;

    const selectedAnswer = document.querySelector(
      `input[name="q${questionNumber}"]:checked`,
    );

    if (selectedAnswer && selectedAnswer.value === answer) {
      score++;
    }
  });

  if (score === 10) {
    result.innerHTML = `
            <h2>ACCESS GRANTED</h2>

            <p>
                Good job! You have successfully completed
                the trial.
            </p>

            <p>
                PDF Password:
                <strong>dirtysneakysnake</strong>
            </p>

            <a href="SELF-CARE-REPORT..pdf" download>
                Download Confidential Report
            </a>
        `;
  } else {
    result.innerHTML = `
            <h2>ACCESS DENIED</h2>

            <p>
                Final Score: ${score}/10
            </p>

            <p>
                Sorry! Policy requires a perfect score
                to access the confidential documentation.
            </p>

            <p>
                Please review try again again.
            </p>
        `;
  }
});
