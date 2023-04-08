

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

let arrUser = [];

try {
    arrUser = JSON.parse(localStorage.arrUser)
}
catch (err){
    console.log('No Users in database')
}

let form = document.getElementById('form');

form.addEventListener('submit', event => {
    
    event.preventDefault();

    let newUser = new Users (
        event.target.email.value,
        event.target.userName.value,
        event.target.password.value,
        event.target.examType.value,
    )

    arrUser.push(newUser);
    localStorage.setItem('arrUser', JSON.stringify(arrUser));
    form.reset();
})
function createNewUser () {

}



const nextBtn = document.querySelector(".next");
const circles = document.querySelectorAll(".circle");

let currentCircle = 0;

nextBtn.addEventListener("click", () => {
  circles[currentCircle].classList.remove("active");
  currentCircle = (currentCircle + 1) % circles.length;
  circles[currentCircle].classList.add("active");
});