/*
Student description and score and calculator

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
        this.score.push(grade);
    }

    clearScore() {
        this.score = []
    }

    calculateAverage() {
        let sum = 0;
        this.score.forEach(grade => { sum += grade })
        let average = sum / this.score.length;
        if (isNaN(average)){
            return 0;
        }
        return average.toFixed(2);
    }

    getStudentInfo(){
        console.log(`First name: ${this.firstName}`);
        console.log(`Last name: ${this.lastName}`);
        console.log(`Address: ${this.address}`);
        console.log(`Postcode: ${this.postcode}`);
        console.log(`Country: ${this.country}`);
        console.log(`RemoteLessons: ${this.remoteLessons}`);
        console.log(`Score: ${this.score}`);
        console.log(`Average score: ${this.calculateAverage()}`);
    }
}

let alex = new Student()

alex.firstName = "Alessandro";
alex.lastName = "Silvestri";
alex.address = "Huddersfield - 1 Western Road";
alex.postcode = "HD45TH";
alex.country = "United Kingdom";
alex.remoteLessons = true;
alex.addScore(4);
alex.addScore(5);
alex.addScore(8);
// alex.clearScore();
console.log(alex.calculateAverage());
