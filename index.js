console.log("test from Node");

const userOne = {
    firstName: "Bog",
    age: 27,
    admin: false
};

userOne.age = 30;

console.log(userOne);


const sports = ["tennis", "golf", "volleyball"];
sports.push("test");

const foundSport = sports.indexOf("superman")
console.log(foundSport);

const student = {
    name: "Marie",
    age: 20,
    courses:[]
};

student.age = 21;
student.grade = "A";
student.courses.push("Math", "Physics", "Chemistry");

const physicsIndex = student.courses.indexOf("Physics");
const firstTwoCourses = student.courses.slice(0, 2);

console.log(student);
console.log(physicsIndex);
console.log(firstTwoCourses);

class User {
    constructor(firstName, lastName, age, email, admin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.admin = admin;
    }

    getUserInfo() {
        return `Full Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }

    setAge(newAge) {
        this.age = newAge;
    }
}


const user = new User("Sam", "Sung", 25, "sam.sung@hotmail.com", false);
console.log(user.getUserInfo());

user.setAge(26);
console.log(user.getUserInfo());

