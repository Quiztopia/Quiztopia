let resultButton = document.getElementById("resultButton");
let resultTableArrat = [
{ id: 1, Question: "what's yore name", answer: "User Interface and User Experience", status: false },
{ id: 2, Question: "how old are you", answer: "User Interface and User Experience", status: true },
{ id: 3, Question: "Where do you live", answer: "User Interface and User Experience", status: false }
];

let headTable = document.getElementById("headTable");
let bodyTable = document.getElementById("bodyTable");

resultButton.addEventListener("click", function () {

let tableHeadRow = document.createElement("tr");

let tableHeadColumn1 = document.createElement("th");
tableHeadColumn1.textContent = "Question Number";
tableHeadRow.appendChild(tableHeadColumn1);

let tableHeadColumn2 = document.createElement("th");
tableHeadColumn2.textContent = "Question ";
tableHeadRow.appendChild(tableHeadColumn2);

let tableHeadColumn3 = document.createElement("th");
tableHeadColumn3.textContent = "Your Answer";
tableHeadRow.appendChild(tableHeadColumn3);

let tableHeadColumn4 = document.createElement("th");
tableHeadColumn4.textContent = "Status";
tableHeadRow.appendChild(tableHeadColumn4);

headTable.appendChild(tableHeadRow);


for (let i = 0; i < resultTableArrat.length; i++) {
    let butt = document.createElement("button");

    let tableBodyRow = document.createElement("tr");

    let tableBodyColumn1 = document.createElement("td");
    tableBodyColumn1.textContent = `# ${resultTableArrat[i].id}`;
    tableBodyRow.appendChild(tableBodyColumn1);

    let tableBodyColumn2 = document.createElement("td");
    tableBodyColumn2.textContent = `${resultTableArrat[i].Question}`;
    tableBodyRow.appendChild(tableBodyColumn2);

    let tableBodyColumn3 = document.createElement("td");
    tableBodyColumn3.textContent = `${resultTableArrat[i].answer}`;
    tableBodyRow.appendChild(tableBodyColumn3);

    let tableBodyColumn4 = document.createElement("td");
    if (resultTableArrat[i].status == false){
        resultTableArrat[i].status = "Incorrect"
        butt.textContent = resultTableArrat[i].status;
        butt.classList.add("resultStatusButtonInCorrect");
    }
    else{
        resultTableArrat[i].status = "correct"
        butt.textContent = resultTableArrat[i].status;
        butt.classList.add("resultStatusButtonCorrect");
    }
    tableBodyColumn4.appendChild(butt);
    tableBodyRow.appendChild(tableBodyColumn4);

    bodyTable.appendChild(tableBodyRow);
}
resultButton.disabled = true;

});





function changeResult(result, correctAnswer, incorrectAnswer){
    if(result === "pass"){
        document.getElementById("correctAns").textContent = correctAnswer + "/5";
        document.getElementById("incorrectAns").textContent = incorrectAnswer + "/5";

    }
    else if(result === "fail"){
        let result_hero = document.getElementById("res");
        let result_img = document.getElementById("res_img");
        let result_Answer = document.getElementById("result");
        let img = "../images/fail.png";

        let herotext = "Unfortunately! You have Failed the Quiz";
        let resultAns = "FAILED !";
        result_img.src = img;
        result_hero.textContent = herotext;
        result_Answer.textContent = resultAns;
        document.body.style.backgroundImage = "linear-gradient(to bottom, "+ "red" +", "+ "white" +")";
        document.getElementById("footerEdit").style.backgroundColor = "rgba(190, 6, 6, 0.4)";
        document.getElementById("resultButton").style.backgroundImage = "linear-gradient(to bottom, "+ "red" +", red, "+ "rgba(248, 90, 90, 1)" +")";
        document.getElementById("img-result1").src = "../images/fail_icon_q.png";
        document.getElementById("img-result2").src = "../images/fail_icon_timer.png";
        document.getElementById("img-result3").src = "../images/fail_icon_star.png";
        document.getElementById("img-result4").src = "../images/fail_icon_star_outline.png";
        document.getElementById("correctAns").textContent = correctAnswer + "/5";
        document.getElementById("incorrectAns").textContent = incorrectAnswer + "/5";


    }

    else{
        alert("Invaild Result!");
    }
}

