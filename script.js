/*
Student description and score average calculator

CLASS:
    properties:
        name
        surname
        address
        postcode
        country
        remote lesson (boolean)
        score [5, 6, 7, 8, 9]
    methods:
        add score
        remove score
        clear score
        retrieve information
        calculate average
*/

class Student {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.address = "";
        this.postcode = "";
        this.country = "";
        this.remoteLessons = false;
        this.score = [];
    }

    addScore(grade) {
        if (grade >= 1 && grade <= 9) {
            this.score.push(grade);
        }
    }

    removeLastScore() {
        this.score.pop();
    }

    clearScore() {
        this.score = []
    }

    calculateAverage() {
        let sum = 0;
        this.score.forEach(grade => { sum += grade })
        let average = sum / this.score.length;
        if (isNaN(average)) {
            return 0;
        }
        return `${average.toFixed(2)} - ${this.percentConverter(Math.floor(average))}`;
    }

    percentConverter(grade) {
        const percentages = {
            1: 98,
            2: 95,
            3: 85,
            4: 70,
            5: 55,
            6: 40,
            7: 25,
            8: 15,
            9: 5,
        }
        grade = Math.floor(grade);
        return `${percentages[grade]}%`;
    }

    getStudentInfo() {
        let listOutput = [];
        listOutput.push(`First name: ${this.firstName}`);
        listOutput.push(`Last name: ${this.lastName}`);
        listOutput.push(`Address: ${this.address}`);
        listOutput.push(`Postcode: ${this.postcode}`);
        listOutput.push(`Country: ${this.country}`);
        listOutput.push(`Remote Lessons: ${this.remoteLessons}`);
        listOutput.push(`score: ${this.score}`);
        listOutput.push(`Average score: ${this.calculateAverage()}`);
        return listOutput;
    }
}

// create all the list for containing all the Student objects
let students = [];

// create DOM objects
let nameInput = document.getElementById("nameInput");
let lastNameInput = document.getElementById("lastNameInput");
let addressInput = document.getElementById("addressInput");
let postCodeInput = document.getElementById("postCodeInput");
let countryInput = document.getElementById("countryInput");
let remote1Input = document.getElementById("remote1Input");
let gradesInput = document.getElementById("gradesInput");
let buttonInput = document.getElementById("buttonInput");
let studentsAddedTextArea = document.getElementById("studentsAddedTextArea");
let selectIdStudent = document.getElementById("selectIdStudent");
let studentsInfoList = document.getElementById("studentsInfoList");

// button to create and add a student object to the 'students' list
buttonInput.addEventListener("click", () => {
    let studentObj = new Student()
    studentObj.firstName = nameInput.value;
    studentObj.lastName = lastNameInput.value;
    studentObj.address = addressInput.value;
    studentObj.postcode = postCodeInput.value;
    studentObj.country = countryInput.value;
    studentObj.remoteLessons = remote1Input.checked;

    // grades loop
    for (let i = 1; i <= gradesInput.value; i++) {
        let grade = +prompt(`Insert grade ${i} of ${gradesInput.value}`);
        studentObj.addScore(grade);
    }

    students.push(studentObj);

    // show the added student in the text area and in the select id student
    let outputAddedStudent = "";

    for (let i = 0; i < students.length; i++) {
        outputAddedStudent += `id ${i} : ${students[i].firstName} ${students[i].lastName}\n`;
    }
    studentsAddedTextArea.value = outputAddedStudent

    // update the select tag for id student
    let newOption = document.createElement("option");
    newOption.text = `id: ${students.length - 1} - ${students[students.length - 1].firstName} ${students[students.length - 1].lastName}`;
    newOption.value = students.length - 1;
    selectIdStudent.appendChild(newOption);
})

// show the student details
selectIdStudent.addEventListener("change", () => {
    debugger;
    // delete all the 'li' tags if present
    while (studentsInfoList.firstChild){
        studentsInfoList.removeChild(studentsInfoList.firstChild);
    }

    let InfoList = students[selectIdStudent.value].getStudentInfo();
    for (let dataLine of InfoList){
        let liItem = document.createElement("li");
        liItem.className = "list-group-item";
        liItem.textContent = dataLine;
        studentsInfoList.appendChild(liItem);
        console.log(studentsInfoList);
    }
})