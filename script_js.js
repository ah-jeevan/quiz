// Questions Array
const questions = [
    ["1. Resilience means:", ["Avoiding problems","Ability to bounce back","Being perfect","Always being happy"], "B"],
    ["2. More ‘Yes’ answers indicate:", ["Strong mental health","Normal behavior","Need for healing","Overthinking"], "C"],
    ["3. Acceptance means:", ["Giving up","Ignoring problems","Facing reality","Being quiet"], "C"],
    ["4. Belief principle is:", ["Action principle","Faith principle","Reality principle","Discovery principle"], "B"],
    ["5. Commitment means:", ["Acting only when motivated","Avoiding work","Taking action regardless of feelings","Waiting for others"], "C"],
    ["6. Discovery teaches:", ["Finding weaknesses","Finding hidden strength","Avoiding new things","Depending on others"], "B"],
    ["7. Evaluation means:", ["Never changing","Adjusting actions","Being careless","Ignoring mistakes"], "B"],
    ["8. Higher well-being score:", ["Weakness","Better well-being","More stress","Anxiety"], "B"],
    ["9. Non-acceptance opposite:", ["Gratitude","Complaints","Self-acceptance","Ignoring"], "C"],
    ["10. Hopeless opposite:", ["Complaining","Hopeful","Holding on","Negative"], "B"],
    ["11. Self-centeredness opposite:", ["Laziness","Self-transcendence","Complaining","Ignoring"], "B"],
    ["12. Complaints replaced with:", ["Anger","Fear","Sadness","Gratitude"], "D"],
    ["13. Holding on opposite:", ["Letting go","Complaining","Accepting","Ignoring"], "A"],
    ["14. External control opposite:", ["Internal control","Letting go","Complaints","Fear"], "A"],
    ["15. Complaints indicate:", ["Gratitude","Anger","Negative attitude","Joy"], "C"],
    ["16. Purposeful life opposite:", ["Happiness","Ageing","Purposeless life","Gratitude"], "C"],
    ["17. Gratitude brings:", ["Joy","Anger","Stress","Sadness"], "A"],
    ["18. Faith brings:", ["Problems","Unexpected blessings","Anger","Confusion"], "B"],
    ["19. Right perspective:", ["Makes worse","Makes all the difference","Stops growth","Creates fear"], "B"],
    ["20. Contentment:", ["Being satisfied","Complaining","Anger","Stress"], "A"],
    ["21. Values help:", ["Waste time","Focus on what matters","Complain","Feel angry"], "B"],
    ["22. Active engagement opposite:", ["Joy","Happiness","Non-engagement","Growth"], "C"],
    ["23. 'Aha!' principle:", ["Acceptance","Belief","Discovery","Evaluation"], "C"],
    ["24. Self-efficacy:", ["I can't do it","Unsure","I can do it","I give up"], "C"],
    ["25. Responsibility belongs to:", ["Commitment","Discovery","Gratitude","Acceptance"], "A"],
];

// Inject questions into form
const form = document.getElementById("quizForm");
form.innerHTML = questions
    .map((q, i) => `
        <div class="question-box" id="q${i+1}_box">
            <b>${q[0]}</b><br>
            ${q[1]
                .map((opt, idx) => `
                    <label><input type="radio" name="q${i+1}" value="${String.fromCharCode(65 + idx)}"> ${opt}</label><br>`)
                .join("")}
        </div>`)
    .join("") +
    `<button type="button" onclick="checkAnswers()">Submit Quiz</button>`;

// Check answers
function checkAnswers() {
    let score = 0;

    questions.forEach((q, index) => {
        let qNum = index + 1;
        let box = document.getElementById(`q${qNum}_box`);
        let correct = q[2];
        let user = document.querySelector(`input[name="q${qNum}"]:checked`);

        if (!user) {
            box.classList.add("wrong");
            return;
        }

        if (user.value === correct) {
            score++;
            box.classList.add("correct");
        } else {
            box.classList.add("wrong");
        }
    });

    document.getElementById("result").innerHTML = `Your Score: ${score} / 25`;
}
