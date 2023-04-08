// 2. Create a Function to set the correct answers and their questions in the local storage as array of object . obj = [{q, ans}]

let userPosition = "";



function setAnswersInLocalStorage() {
    const answers;
    if (userPosition == "html") {  // If statement used here because we have 3 conditions that we need to pass through it. This one if the user chose html

        answers = [
            { question: 'What is the meaning of UI UX Design ?', answer: 'User Interfoce and User Experience' },
            { question: 'What does HTML stand for?', answer: 'Jupiter' },
            { question: 'Who is making the Web standards?', answer: 'Giraffe' },
            { question: 'What is the correct HTML element for inserting a line break?', answer: 'Vatican City' },
            { question: 'What is the correct HTML for adding a background color?', answer: 'Yen' }
        ];

    }
    else if (userPosition == "css") { // THis one if the user chose css

        answers = [
            { question: 'What is the meaning of UI UX Design ?', answer: 'User Interfoce and User Experience' },
            { question: 'What does HTML stand for?', answer: 'Jupiter' },
            { question: 'Who is making the Web standards?', answer: 'Giraffe' },
            { question: 'What is the correct HTML element for inserting a line break?', answer: 'Vatican City' },
            { question: 'What is the correct HTML for adding a background color?', answer: 'Yen' }
        ];
    }

    else if (userPosition == "javascript") { // This one if the user chose js and we used else if not else because the conditional is obligatory to pass through js

        answers = [
            { question: 'What is the meaning of UI UX Design ?', answer: 'User Interfoce and User Experience' },
            { question: 'What does HTML stand for?', answer: 'Jupiter' },
            { question: 'Who is making the Web standards?', answer: 'Giraffe' },
            { question: 'What is the correct HTML element for inserting a line break?', answer: 'Vatican City' },
            { question: 'What is the correct HTML for adding a background color?', answer: 'Yen' }
        ];
    }


    localStorage.setItem('correctAnswers', JSON.stringify(answers));
}


const storedAnswers = JSON.parse(localStorage.getItem('answers'));
console.log(storedAnswers);