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
        return average.toFixed(2);
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

let alex = new Student()

alex.firstName = "Alessandro";
alex.lastName = "Silvestri";
alex.address = "Huddersfield - 1 Western Road";
alex.postcode = "HD45TH";
alex.country = "United Kingdom";
alex.remoteLessons = true;
alex.addScore(4);
alex.addScore(5);
alex.addScore(11);
alex.addScore(5);
alex.addScore(0);
alex.addScore(1);
alex.addScore(9);
alex.addScore(9);
alex.addScore(9);



alex.getStudentInfo();
