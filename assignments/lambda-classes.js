// CODE here for your Lambda Classes

/*
- We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of people.
    - Instructors - extensions of Person
    - Students - extensions of Person
    - Project Managers - extensions of Instructors
IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

*/

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
class Person {
    constructor(_att){
        this.name = _att.name
        this.age = _att.age 
        this.location = _att.location
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}


// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
    constructor(_att){
        super(_att);
        this.specialty = _att.specialty
        this.favLanguage = _att.favLanguage
        this.catchPhrase = _att.catchPhrase
    }
    demo(){
        return `Today we are learning about ${this.favLanguage}.`;
    }
    grade(){
        return `${this.name} receives a perfect score on ${this.favLanguage}.`;
    }
}

// * If the student's grade is above a 70% let them graduate! 
//   * Otherwise go back to grading their assignments to increase their score.


// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
class Student extends Instructor {
    constructor(_att){
        super(_att);
        this.previousBackground = _att.previousBackground
        this.className = _att.className
        this.favSubjects = _att.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(_subject){
        return `${this.name} has submitted a PR for ${_subject}.`;
    }
    sprintChallenge(_subject2){
        return `${this.name} has begun sprint challenge on ${_subject2}`;
    }
}





// * ProjectManagers are extensions of Instructors
// * Project Manger has the following unique props:
// * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
class ProjectManager extends Student {
    constructor(_att){
        super(_att);
        this.gradClassName = _att.gradClassName
        this.favInstructor = _att.favInstructor
    }
    standUp(_channel){
        return `${this.name} announces to ${_channel}, @channel standup times!`;
    }
    debugsCode(student, sub){
        return `${this.name} debugs ${student}'s code on ${sub}.`;
    }
}






const ev = new Person({
    name: "Evan",
    age: 30,
    location: "Okc"
});

const zo = new Person({
    name: "Zoey",
    age: 26,
    location: "bakery supply store"
});




const za = new Instructor({
    name: "Zach",
    age: 31,
    location: "Whole Foods",
    specialty: "Guitar",
    favLanguage: "Elvish",
    catchPhrase: "rad"

});

const nov = new Instructor({
    name: "Nova",
    age: 5,
    location: "blanket fort",
    specialty: "snoring",
    favLanguage: "panting",
    catchPhrase: "woof"
});






const la = new Student({
    name: "Lady",
    age: 4,
    location: "cat tower",
    specialty: "sneezing",
    favLanguage: "love",
    catchPhrase: "pet me",
    previousBackground: "dumpster cat",
    className: "tinycat studies 23",
    favSubjects: "eating chips"
});

const ro = new Student({
    name: "Robot",
    age: 1000,
    location: "everywhere",
    specialty: "binary",
    favLanguage: "also binary",
    catchPhrase: "I understand",
    previousBackground: "toaster",
    className: "advanced robotics 23",
    favSubjects: "powering on and off"
});





const qua = new ProjectManager({
    name: "Quasar",
    age: 4,
    location: "near food bowl",
    specialty: "getting pets",
    favLanguage: "yapping and howling",
    catchPhrase: "clicking teeth together in rapid succession",
    previousBackground: "pound puppy",
    className: "bark bark 23",
    favSubjects: "eating food",
    gradClassName: "woof23",
    favInstructor: "Nova"
});

const be = new ProjectManager({
    name: "Bear",
    age: 7,
    location: "dresser drawer",
    specialty: "scratching walls",
    favLanguage: "squeeks",
    catchPhrase: "give me food",
    previousBackground: "shadow kitten",
    className: "giant cat 23",
    favSubjects:"how to meow for attention",
    gradClassName: "meow23",
    favInstructor: "Zach"
});


console.log(ev);
console.log(ev.speak());

console.log(zo);
console.log(zo.speak());

console.log(za);
console.log(za.demo());
console.log(za.grade());

console.log(nov);
console.log(nov.demo());
console.log(nov.grade());

console.log(la);
console.log(la.listsSubjects());
console.log(la.PRAssignment("eating pizza"));
console.log(la.sprintChallenge("getting pets"));

console.log(ro);
console.log(ro.listsSubjects());
console.log(ro.PRAssignment("whirring"));
console.log(ro.sprintChallenge("emotional display"));


console.log(qua);
console.log(qua.standUp("Web31"));
console.log(qua.debugsCode("Robot", "powering on and off"));

console.log(be);
console.log(be.standUp("Web31"));
console.log(be.debugsCode("Lady", "Eating chips"));




/*
Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/