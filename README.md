Exercise 1 NodeJs

**Description**

console.log("test from Node");
This checks that Node.js is running properly by printing a message to the console.

**Creating and Modifying an Object (userOne)**
const userOne = {
    firstName: "Bog",
    age: 27,
    admin: false
};

userOne.age = 30;
console.log(userOne);

Creates an object called userOne with three properties: firstName, age, and admin.
Initially, age is set to 27.
Then, userOne.age = 30 changes the age to 30.
Finally, it logs the entire userOne object, showing the updated age.

**Working with an Array (sports)**
const sports = ["tennis", "golf", "volleyball"];
sports.push("test");

const foundSport = sports.indexOf("superman")
console.log(foundSport);

Creates an array called sports with three initial items: "tennis", "golf", and "volleyball".
Adds a new item "test" to the end of the array using push.
Tries to find the index of "superman" in the array using indexOf. Since "superman" isn’t in the array, indexOf returns -1.
Logs -1, indicating "superman" wasn’t found in the array.

**Creating and Modifying an Object with an Array (student)**
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


Creates an object called student with properties name, age, and courses (an empty array).
Updates age to 21.
Adds a new property grade and sets it to "A".
Adds three subjects ("Math", "Physics", and "Chemistry") to the courses array.
Finds the index of "Physics" in the courses array using indexOf, which returns the position of "Physics" in the array.
Uses slice to create a new array containing only the first two courses ("Math" and "Physics").
Logs the updated student object, the index of "Physics", and the new array with the first two courses.


**Creating and Testing a Class (User)**
class User {
    constructor(firstName, lastName, age, email, admin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.admin = admin;
    }

Defines a User class with properties firstName, lastName, age, email, and admin.
The constructor method sets up these properties when a new User object is created.
The getUserInfo method returns a formatted string showing the user’s full name and age.
The setAge method updates the user’s age to a new value.

**Creating an Instance of User and Testing Methods**
const user = new User("Sam", "Sung", 25, "sam.sung@hotmail.com", false);
console.log(user.getUserInfo());

user.setAge(26);
console.log(user.getUserInfo());

Creates a new instance of the User class, named user, with initial values for each property.
Calls getUserInfo() to display the user’s full name and age.
Updates the user’s age to 26 using setAge.
Calls getUserInfo() again to verify that the age was updated.

