### Create classes: Person, Student.
#### Person should have: firstName, lastName, gender, age.
- It should have appropriate getters and setters which validates its types.
- It should have a method: getFullName(). 
#### Student is inherited from Person. It should have programs(array of { programName, grade}), year, fee.
- It should have appropriate getters and setters which validates its types.
- It should have method: passExam(programName, grade). Student should contain the
data about its programs and exams. passExam will update that data, so if student
passed all the exams(grade is great or equal to 50), its year should be increased by one.
- It should have a toString method.

const studentOne = new Student('Liz', 'Brown', 'female', 25,[{programName: 'Math', grade: 90}, {programName: 'Computer science', grade: 85}], 2022, 1000); <br>
studentOne.passExam('Math', 100);// -> true <br>
studentOne.year;// -> 2023 <br>
studentOne.toString(); //  -> Liz <br>
studentOne.getFullName();// -> Liz Brown <br>
const studentTwo = new Student('John', 'Smith', 'male', 25, [{programName: 'Math', grade: 40}, {programName: 'Computer science', grade: 25}], 2022, 1000);<br>
studentTwo.passExam('Computer science', 80);// -> false <br>
studentTwo.year;// -> 2022 <br>
const studentThree = new Student('Ann', 'Smith', 'female', 25, [{programName: 'Math', grade: 45}, {programName: 'English', grade: 90}], 2022, 1000); <br>
studentThree.passExam('Math', 90); // -> true <br>
studentThree.year;// -> 2023 <br>