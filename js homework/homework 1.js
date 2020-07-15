<!--TASK 1-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Homework</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content = "width=device-width, initial-scale=1, maximum-scale=1"/>
</head>
<body>
    <script>
        let name = prompt("What is your name?", 'Name');
        alert("Hi, " + name);
    </script>
</body>
</html>


<!--TASK 2-->
//html file
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Homework</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content = "width=device-width, initial-scale=1, maximum-scale=1"/>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>

//JS file
let surname = prompt("What is your surname?", 'Surname');
console.log(surname);


<!--TASK 3-->
let a = 2;
let b = 5;
console.log(a);
console.log(b);
b = a;
console.log(a);
console.log(b);


<!--TASK 4-->
let myObject = {
    model: 'Ford',
    year: 2010,
    isWorking: true,
    color: undefined,
    motor: null
};




<!--TASK 5-->
let isAdult = confirm('Are you an adult?');
console.log(isAdult);



<!--TASK 6-->
let name = "Olga";
let surname = "Ganushchak";
let group = "Lv-522.JS Core";
let birthYear = 1994;
let isMeried = true;

//check of type
typeof name;          //string
typeof surname;       //string
typeof group;         //string
typeof birthYear;     //number
typeof isMeried;      //boolean

console.log(birthYear, isMeried, name, surname, group);

//create new variables
let gender = "man";
gender = null;

let age;

console.log("Type of the variable 'gender' is " + typeof gender);     // object
console.log("Type of the variable 'age' is " + typeof age);           //undefined


<!--TASK 7-->
let login = prompt("Please, write your login", 'Login');
let email = prompt("Please, write your e-mail", '*****@**');
let password = prompt("Please, write your password", '123456');

alert("Dear " + login + ", your email is " + email + ", your password is " + password);


<!--TASK 8-->
let secondsInAMinute = 60;
let minutesInAnHour = 60;
let hoursInADay = 24;
let daysInAMonth = 31;

let secondsInAnHour = secondsInAMinute * minutesInAnHour;              //how many seconds in an hour
console.log("There are " + secondsInAnHour + " seconds in an hour");

let secondsInADay = secondsInAnHour * hoursInADay;                     //how many seconds in a day
console.log("There are " + secondsInADay + " seconds in a day");

let secondsInAMonth = secondsInADay * daysInAMonth;                    //how many seconds in a month 
console.log("There are " + secondsInAMonth + " seconds in a month");
