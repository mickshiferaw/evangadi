// Question 1 
// ●Write a function that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop.
// function counter() {
//     for (a = 1; a <= 10; a++) {
//         console.log (a);
//     }
// }
// counter()

// Question 2 
// ●Write a function that takes a single number as an argument and prints the next 5 numbers in the console. Note: each output should be displayed on a new line. 
// ○Test case: If you give 7 to the function, output should look like this:
//  8 
//  9 
//  10 
//  11 
//  12
// function nextFive (a) {
//     for (m = a + 1; m <= a + 5; m++) {
//         console.log (m)
//     }
// }
// nextFive(7)

// Question 3 
// ●Write a function that takes a single number and prints the sum of the next 10 numbers after the given number. ○Testcase:Ifyougive7tothefunction,outputshouldbe:125-because(8+9+10+ 11+  12+  13+  14+  15+  16+  17 = 125)

// function sum(b) {
//     let total = 0;
//     for ( m = b +1; m <= b + 10; m++ ) {
//         total += m;
//      }
//      console.log (total)
//  }
//  sum(7)

// Question 4 
// ●Write a function that takes an array as an argument and prints every element of the array on the console. 
// ○Test case: given the array a = [1, "Hello", 8, 44],  output should look like this:
//1 
//Hello 
//8 
//44

 function ar (a) {
    for (i = 0; i < a.length; i++) {
        console.log (a[i])
    }
 }
ar ([1, "Hello", 8, 44])

// Question 5 
// ●Write a function that takes an array as an argument and prints the total number of elements found in the array.
// Hint: use a property of the Arrayobject to solve this question. 
// ○Test case 1: 
// Given the array a = [1, "Hello", 8, 44], output should be:4 
// ○Test case 2: 
// Given the array a = ["world", 13], output should be:2

// function totalElement (a) {
//     console.log (a.length)
// }
// totalElement ([1, "Hello", 8, 44])

// Question 6 
// ●Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array. 
// ○Testcase1:
// Ifyougivethisarray,[5,6,99,8,76,4,68,44],to the function,out put should be:310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44 
// ○Testcase2:
// If you give this array,[3,0],to the function,out put should be:3 because 3 + 0

// function sum (a) {
//     sum = 0;
//     for (i = 0; i < a.length; i++) {
//         sum += a[i];
        
//     }
//     console.log (sum)
// }
// sum ([5,6,99,8,76,4,68,44])

// Question 7 
// ●Write a function that takes an array of all numbers as aparameter,subtracts the total sum of all odd numbers of the array from the total sum of all even numbers and logs the result in the console. 
// ○Testcase:
// If you give these array,,to the function,output should be:   102 ■Sum of odd numbers: 5 + 99 =  104 
// ■Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 =  206 
// ■Difference between total even and total odd numbers: 206 - 104 = 102

// function evenOdd (a) {
//     let evenAdd = 0;
//     let oddAdd = 0;
//     let i = 0;
//     if(typeof a[i] != "number") {
//         console.log("please enter a number")
//     }
//     else {
//         for (i = 0; i < a.length; i++){
//             if (a[i] % 2 == 0){
//                 evenAdd += a[i]
//             }
//             else  {
//                 oddAdd += a[i]
//             }
//         }
    
//         console.log(evenAdd)
//         console.log(oddAdd)
//         console.log(evenAdd - oddAdd)
//         }
// }
// evenOdd (["abc", 5,6,99,8,76,4,68,44])

// Question  8 ●Write a function that takes an array as a parameter and logs in the console the elements that have even indexes only.Notice:this question is not asking you to log elements with even value,but elements that are located on even indexes) ○Testcase1:
// If you give this array to the function[5,6,99,8,76,4,68,44],toutput should be: 5 99 76 68 
// ○Testcase2:
// If you give this array to the function[11,“Sam”,3,7,“car”],output should be: 11 3 car

// function arr (a) {
//     for (i = 0; i < a.length; i++) {
//         if (i % 2 == 0) {
//             console.log(a[i])
//         }
//     }
// }

// arr([5,6,99,8,76,4,68,44])

// Questions 9 and 10 are dependent on the sampleArray provided below: 
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44]; 

// Question 9 Write a function that takes the sample Array as a parameter,removes the last element from the array, adds a new value of "32" to the array and prints the new array on the console.Hint: use an array method

// function removeAdd (a) {
//     let m = a.length - 1;
//     a.splice(1, 3, "hello", 12,11)
//     console.log(a)
// }
// removeAdd ([5, 6, 99, 8, 76, 4, 68, 44])


// Question 10 
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order and prints the sorted array on the console // Use the sort method. Make sure you understand just using the sort() method alphabetically. You should use this sorting syntax -  sort(function(a, b){return a-b});

// function order (a) {
//     console.log (a.sort())
// }
// order([5, 6, 99, 8, 76, 4, 68, 44])
// we need compare function

// function order (a) {
//  console.log(a.sort(function(a, b){return a - b}))
//  }
// order([5, 6, 99, 8, 76, 4, 68, 44])

let evangadiClass = {
     lengthOfCourse: "1 Month", 
     website: "https://www.evangadi.com/", 
     isChallenging: false, 
     topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"], 
     students: [ 
                    {
                        name: "Abebe", 
                        age: 34, 
                        sex: "M" 
                    },
                    {
                        name: "Kebede", 
                        age: 44, 
                        sex: "M" 
                    },
                    {
                        name: "Almaz", 
                        age: 27, 
                        sex: "F" 
                    },
                    {
                        name: "Challa", 
                        age: 22, 
                        sex: "M" 
                    },
                    {
                    name: "Chaltu", 
                    age: 19, 
                    sex: "F" 
                    }
                ]
    }

// Question 11 
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the console ○ // Use the dot notation "." to call the property you want to change

// evangadiClass.lengthOfCourse = "5 Month";
// console.log(evangadiClass)

// Question 12 
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the console ○ // Use an array method

// evangadiClass.topicsCovered.push("Bootstrap")
// console.log(evangadiClass)

// Question 13 ● Write a function that takes the "evangadiClass" object as an argument and calculates the average age of the class. Print the result on the console

// function avg (abc) {
//     abc = evangadiClass.students
//     let sum = 0;
//     for (i = abc[0].age; i <= abc.length; i++) {
//         console.log (i)
//         sum += i;
//     }
//     console.log(sum)
// }

// console.log(evangadiClass)

// console.log(evangadiClass.students)



// Question 14 
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the percentage of male students in the class. Print the result on the console




















// Question 15:Test the divisors of three 
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all numbers (on the console) between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.

// function low (a, b) {
//     if (typeof (a) != "number" || typeof (b) != "number"){
//         console.log("please enter a number")
//     }
//     else{
//         for (i = a + 1; i < b; i++ ){
//             console.log(i)
//                 if (i % 3 == 0) {
//                 console.log(i + " div3")
//                 }
//             }
//         }
//     }
// low(1, 10)

// Question 16: The famous coding interview question (FizzBuzz) 
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for numbers which are multiples of both three and five print "FizzBuzz".

// function fizz() {
//     for (i = 1; i <= 100; i++){
//          if (i % 3 == 0 && i % 5 == 0); {
//                     console.log ("FizzBuzz")
//          }  
//         if (i % 3 == 0){
//             console.log("Fizz")
//         }
//         else if (i % 5 == 0) {
//             console.log("Buzz")
//         }
        
        
//             else{
//                 console.log(i)
//             }
//     }
// }
// fizz()


// Question 17: Evens number 
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens number but 3224 is not. Write a function named isEvens that prints on the console 1 if its integer argument is an Evens number. The function prints 0 otherwise.

// function isEven(n) {
// 	var newNum = n.toString().split("");
// 	console.log(newNum);
// 	for (let i = 0; i < newNum.length; i++) {
// 		if (newNum[i] % 2 !== 0) {
// 			return 0;
// 		}
// 	}
// 	return 1;
// }

// console.log(isEven(3224));
