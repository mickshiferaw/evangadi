// question 1
// Question 1 ● Define a simple function named myFirst that prints the word "Hello" on the console ○ First define the function ○ Then call the function

function myFirst () {
    console.log("Hello")
 }
 myFirst()

// Question 2
// Question 2 ● Define a function called mySecond that takes a parameter and prints the parameter on console ○ Feel free to give any value as a parameter in your function

function mySecond (a) {
console.log(a)
 }
mySecond (15)


// Question 3
// Define a function called myThird that takes a parameter and prints the parameter on the console. But, it uses mySecond function to print the parameter on the console


function myThird (m) {
    mySecond(m)
}
myThird(12)

// Question 4

// Write a function named myFourth that takes an array as a parameter and prints only the first value of the array on the console. Remember, this question is here to explain the concept of function delegation in JavaScript.
function myFourth (a) {
    console.log (a[0])//this prints the first element
console.log(a);
console.log(a[a.length-1]);//this prints the last element
}
myFourth ([10, 9])

//  Question 5
// Write a function named myFifth that takes an array with two numbers in it as a parameter and prints the sum of the two numbers on console


function myFifth (a) {
    console.log(a[0] + a[1])
}
 myFifth([10,12])

// // Question 6
// Write a function that takes an integer minutes and converts it to seconds.


function convert (a) {
    let s = (a * 60) + " " + "seconds"
    console.log(s)
}
convert(15)

// Question 7
// Create a function that takes a number as a parameter, increments the number by +1 and returns the result.


 function increment (a) {
    return (++a)
 }
 console.log(increment (10))

// Question 8
// Write a function that takes the base and height of a triangle and returns its area.


 function area (b, h) {
    let a = (h * b) / 2;
    console.log(a)
    return (a)
 }
 area (10, 15)

//  Question 9
// Create a function that returns the total number of legs of all the animals. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the farmer wants to know the total number of legs and not the total number of animals.

function legs (ch, cow, pig) {
    legs = (ch * 2) + (cow * 4) + (pig * 4);
    console.log(legs)
}
legs(5, 2, 2)


// Question 10
// Create a function that takes an array containing only TWO numbers as a parameter and returns a value that is 3 times the first element of the array.(

function times (a) {
    m = a[0] * 3;
    return (m);
}
console.log(times([10, 11]))

// Question 11
// Create a function that returns true when num1 is equal to num2; otherwise return false.
function bool (a, b) {
    if (a == b) {
        return (true)
    }
    else {
        return (false)
    }
}
console.log(bool(10, 10))

// Question 12
// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false
function divis (a) {
    let b = a % 100;
    if (b == 0) {
        return (true)
    }
    else {
        return (false)
    }
     
}
console.log(divis(300))

// Question 13
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function even (a) {
    let n = a % 2
    if (n == 0) {
        return ("even");
    }
    else {
        return ("odd")
    }
}
console.log(even(11))

// Question 14
// Create a function that returns
// “Invalid score” if score is above 100 or score is a negative number
// “Grade A”  when score is between 90 and 100 (both 90 and 100 included)
// “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// “Grade C”  for any score below 79

function grade (a) {
    if (a > 100 || a < 0) {
        return ("Invalid score")
    }
    else if (a >= 90) {
        return ("Grade A")
    }
    else if (a >=80) {
        return ("Grade B")
    }
    else {
        return ("Grade C")
    }
}
console.log(grade(80))

