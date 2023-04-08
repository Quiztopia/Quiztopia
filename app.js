const nextBtn = document.querySelector(".next");
const circles = document.querySelectorAll(".circle");

let currentCircle = 0;

nextBtn.addEventListener("click", () => {
  circles[currentCircle].classList.remove("active");
  currentCircle = (currentCircle + 1) % circles.length;
  circles[currentCircle].classList.add("active");
});


class Users {
    
    constructor (email, userName, password, examType) {
        this.email = email;
        this.userName  = userName;
        this.password = password;
        this.examType = examType;
    }
    
    checkUserName () {
        
    }
    
    checkUserEmail () {
        
    }
}

const formSignUp = document.getElementById('form');
formSignUp.addEventListener('submit', event => {
    
    event.preventDefault();

    let newUser = new Users (
        event.target.email.value,
        event.target.userName.value,
        event.target.password.value,
        event.target.examType.value,
    )

    formSignUp.reset();
    createNewUser(newUser);
});

function usernameVerification (arrUsers, newUser, warningElement, Massage) {
    
    for (let index = 0; index < arrUsers.length; index++) {

        if (arrUsers[index].userName === newUser.userName || arrUsers[index].email === newUser.email) {
            let warning = document.getElementById(warningElement);

            warning.textContent = Massage;
            return false;
        }
    }
    return true;
} 

function inputsRules (newUser) {

    const patternUesrName = /^[a-z0-9]+$/;
    const patternPassword = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/;
    const patternEmail= /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,}$/;
    
    if(!patternEmail.test(newUser.email)) {

        let warning = document.getElementById('warningEmail');
        warning.textContent = 'Mistake Email';

        return false;
    }
    else if(!patternUesrName.test(newUser.userName)) {

        let warning = document.getElementById('warningUserName');
        warning.textContent = 'Mistake UesrName, UesrName it should be without spaces';

        return false;
    }
    else if(!patternPhone.test(newUser.examType)) {

        let warning = document.getElementById('warningExam');
        warning.textContent = 'Mistake Exam Type';

        return false;
    }
    else if(!patternPassword.test(newUser.password)) {

        let warning = document.getElementById('warningPassword');
        warning.textContent = 'Mistake Password, UesrName it should be more than 8 characters, with at least 1 number, uppercase, and special characters';
        
        return false;
    }
    return true;
}

function createNewUser(newUser) {

    let arrUsers = [];
    const resultUserName = true;
    
    const resultInputRulse = inputsRules(newUser);

    try {
        arrUsers = JSON.parse(localStorage.arrUser);
        resultUserName = usernameVerification(arrUsers, newUser, 'warningUserName', 'UserName it already exists');
    }
    catch (errMsg){
        console.log('No Users in database');
    }

    if (resultUserName && resultInputRulse) {
        arrUsers.push(newUser);
        localStorage.setItem('arrUsers', JSON.stringify(arrUsers));
        formSignUp.reset();
        window.location.href = "/Pages/WelcomePage.html";
    }
}


