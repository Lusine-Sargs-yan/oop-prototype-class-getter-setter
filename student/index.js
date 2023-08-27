class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (typeof value !== 'string') throw TypeError('Please, enter correct type, it should be letters.');
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (typeof value !== 'string') throw TypeError('Please, enter correct type, it should be letters.');
        this._lastName = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        if (typeof value !== 'string') throw TypeError('Please, enter correct type, it should be letters.');
        this._gender = value;

    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (typeof value !== 'number') throw TypeError('Please, enter correct type, it should be a number.');
        this._age = value;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, gender, age, programs, year, fee) {
        super(firstName, lastName, gender, age);
        this.programs = programs;
        this.year = year;
        this.fee = fee;
    }

    get programs() {
        return this._programs;
    }

    set programs(value) {
        if(!Array.isArray(value)) throw TypeError('Please, enter correct type, it should be a array.');
        this._programs = value;
    }

    get year() {
        return this._year;
    }
    set year(value) {
        if (typeof value !== 'number') throw TypeError('Please, enter correct type, it should be a number.');
        this._year = value;
    }

    get fee() {
        return this._fee;
    }

    set fee(value) {
        if (typeof value !== 'number') throw TypeError('Please, enter correct type, it should be a number.');
        this._fee = value;
    }

    passExam(programName, grade) {
        const updatedData = this.programs.map((program) => programName === program.programName ? ({...program, grade}) : program);
        const checkPassedAllExams = updatedData.every((program) => program.grade >= 50);

        if (checkPassedAllExams) this.year += 1;

        return checkPassedAllExams;
    }

    toString() {
        return this.firstName;
    }
}

const studentOne = new Student('Liz', 'Brown', 'female', 25,[{programName: 'Math', grade: 90}, {programName: 'Computer science', grade: 85}], 2022, 1000);
console.log(studentOne.passExam('Math', 100));
console.log(studentOne.year);
console.log(studentOne.toString());
console.log(studentOne.getFullName());
const studentTwo = new Student('John', 'Smith', 'male', 25, [{programName: 'Math', grade: 40}, {programName: 'Computer science', grade: 25}], 2022, 1000);
console.log(studentTwo.passExam('Computer science', 80));
console.log(studentTwo.year);
const studentThree = new Student('Ann', 'Smith', 'female', 25, [{programName: 'Math', grade: 45}, {programName: 'English', grade: 90}], 2022, 1000);
console.log(studentThree.passExam('Math', 90));
console.log(studentThree.year);

