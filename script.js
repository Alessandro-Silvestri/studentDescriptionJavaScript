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
        console.log(`First name: ${this.firstName}`);
        console.log(`Last name: ${this.lastName}`);
        console.log(`Address: ${this.address}`);
        console.log(`Postcode: ${this.postcode}`);
        console.log(`Country: ${this.country}`);
        console.log(`RemoteLessons: ${this.remoteLessons}`);
        console.log(`Score: ${this.score}`);
        console.log(`Average score: ${this.calculateAverage()} - ${this.percentConverter(this.calculateAverage())}`);
    }
}

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

// button to create and add a student object to the 'students' list
buttonInput.addEventListener("click", () => {
    let studentObj = new Student()
    studentObj.firstName = nameInput.value;
    studentObj.lastName = lastNameInput.value;
    studentObj.address = addressInput.value;
    studentObj.postcode = postCodeInput.value;
    studentObj.country = countryInput.value;
    studentObj.remoteLessons = remote1Input.checked;

    for (let i = 1; i <= gradesInput.value; i++) {
        let grade = +prompt(`Insert grade ${i} of ${gradesInput.value}`);
        studentObj.addScore(grade);
    }

    students.push(studentObj);


    // show the added student in the text area
    let outputAddedStudent = "";
    for (let i = 0; i < students.length; i++){
        outputAddedStudent += `id ${i} : ${students[i].firstName} ${students[i].lastName}\n`    
    }
    debugger;
    studentsAddedTextArea.value = outputAddedStudent

})