let currentQuestion = 1;

function checkAnswer(questionNumber, answer) {
    const correctAnswers = {
        1: 'a',
        2: 'c',
        3: 'a',
        4: 'a'
    };

    let buttons = document.querySelectorAll(`#question${questionNumber} button`);
    buttons.forEach(button => {
        button.classList.remove('shake', 'highlight');
    });

    if (answer === correctAnswers[questionNumber]) {
        alert('Đúng rồi!');
        if (questionNumber < 4) {
            document.getElementById('question' + questionNumber).classList.add('slide-out');
            setTimeout(function() {
                document.getElementById('question' + questionNumber).style.display = 'none';
                currentQuestion++;
                document.getElementById('question' + currentQuestion).style.display = 'block';
                document.getElementById('question' + currentQuestion).classList.add('slide-in');
            }, 1000);
        } else {
            document.getElementById('question4').classList.add('slide-out');
            setTimeout(function() {
                document.getElementById('question4').style.display = 'none';
                document.getElementById('message').style.display = 'block';
                document.getElementById('message').classList.add('slide-in');
                document.getElementById('image').style.display = 'block';
            }, 1000);
        }
    } else {
        document.querySelector(`#question${questionNumber} button[onclick*="${answer}"]`).classList.add('shake');
    }
}

document.getElementById('question1').style.display = 'block';
