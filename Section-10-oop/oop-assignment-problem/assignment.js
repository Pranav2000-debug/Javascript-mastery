'use strict';
class Course {
    #price;
    constructor(title, length, coursePrice){
        this.title = title;
        this.length = length;
        this.price = coursePrice;
    }

    get price() {
        return '$' + this.#price;
    }

    set price(val) {
        if(val < 0){
            throw new Error("invalid Value!!");
        }
        this.#price = val;
    }

    calcVal() {
        return this.length/this.#price;
    }
    
    summary(){
        console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}, Length Alotted: ${this.calcVal()}`);
    }
}
const course1 = new Course('JAVA', 50, 29.99);
const course2 = new Course('PYTHON', 90, 29.99);

course1.summary(),
course2.summary();

class PracticalCourse extends Course {
    constructor(title, length, price, exercisesCount) {
        super(title, length, price);
        this.numOfExericises = exercisesCount;
    }
}

const course3 = new PracticalCourse('Rust', 40, 24.99, 10);
console.log(course3);
course3.summary();

class TheoritcalCourse extends Course {
    publish() {
        console.log(this.calcVal());
    }
}

const course4 = new TheoritcalCourse('Next.js', 20, 9.99);
course4.summary();
course4.publish();