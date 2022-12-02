
// Question 1 
// Given an array of numbers, write a function that prints in the console another array which contains all the even numbers in the original array, which also have even indexes only. 
// ○ Test 1:  getOnlyEvens([1, 2, 3, 6, 4, 8]) prints  [ 4] 
// ○ Test 2:  getOnlyEvens([0, 1, 2, 3, 4]) prints  [0, 2, 4]

// general approach

// write a function which takes an Array
// then prints on the console another Array
// the new array should contain even numbers that were in the orginal array and also they should be located in even index in the original array.

// psudo code 

// write a function that takes an array
//     fuction (a) {}
// another array needs to be creared, so create an empty array
//     let arr = []
// we need a loop to iteratate through the array 
//     for(initiation, condition, update) {}
// we need to identify the initiation, condition and update
//     for(i = a[0]; i < a.length; a++)
// we need to isolate even indexes of the array
//     if (i % 2 == 0 ) {}
// we need to check if numbers in the even index are even
//     if (a[i] % 2 == 0) 
// we need to update the arr variable th get the new array.
//     arr.push(a[i]);
// we need to return arr
//     return (arr);
// finally, we need to call the function
// console.log(arr())

// function evenEven (a) {
//     let arr = [];
//     for(i = 0; i < a.length; i++ ){
//         if (i % 2 == 0 && a[i] % 2 == 0){
//             arr.push(a[i]);  
//         }
//     }
//     return (arr);
// }
// console.log (evenEven([0, 1, 2, 3, 4]))

// Question 2 
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in the console if the given string is greater than its reversed digit version. If not, the function will print "Not ok" 
// ○ Test 1: reverseCompare(72)  prints "ok" because  72 > 27 
// ○ reverseCompare(23) prints  "Not ok", because 23 is not greater than 32

// general approach

// create a function that takes two digit number as a parameter.
// function should print "ok" if the given string is greater than its reversed digit.
// function should print "Not ok" if the riversed digit is greater than the original 

// psudo code 
// create a function that takes two digit as a parameter 
// function reverse(a) {}
// we need to revese the original given number
//   how?
    // first we need to change the number to string using toString method 
    // then we need to split to individual elements of an array using split method 
    // then we need to reverse the orders of the element using the reverse method 
    // we need to join it back what we priviously splited using the join method 
    // we could change the string to number using parseInt method but we dont need to, since javascript is not strict.
// we need to compare original and reversed number 
// if (a > reversed number){}
// if original number is greater than the reverse, we need to rturn "ok" 
// if (a > reversed number) {
//     return (" ok")
// }
// if the original number is less than the reversed number 
// else {
//     return ("Not ok")
// }

// n.split("").reverse().join("")

// function rev(f) {
//     let a = f.toString()
//     let b = a.split('')
//     let c = b.reverse()
//     let d = c.join('')
//     let e = parseInt(d)
//     if (f > e) {
//         return ("ok")
//     }
//     else {
//         return ("Not ok")
//     }
// }
// console.log (rev(23))

// Write a function that takes a positive integer and returns the factorial of the number. Notes: The factorial of 0 is 1. 
// Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The factorial of any positive integer x is x * (x- 1) * (x- 2) * . . . . . . * 1 (ex: factorial of 4 is 4 * 3 * 2 * 1 = 24) 
// ○ Test 1: returnFactorial(5) outputs 120 
// ○ Test 2: returnFactorial(6) outputs 720 
// ○ Test 3: returnFactorial(0) outputs 1

// function fact(a) {
//     if (a < 0 ) {
//         return("please enter a positive number")
//     }
//     else if (a == 1 || a == 0) {
//         return (1)
//     }
//     else {
//         return (a * fact(a-1))
// }
// }
// console.log(fact(5))

// // explanation
// fact (5)
//     5 * fact(4)
//         4 * fact(3)
//             3 * fact (2)
//                 2 * fact (1)


// Question 4 (Meera array) ● A Meera array is defined to be an array containing only numbers as its elements and for all n values in the array, the value n*2 is not in the array. So [3, 5,-2] is a Meera array because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an array of numbered elements and prints “I am a Meera array” in the console if its array does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a Meera array” 
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 * 2 is 10 ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array” 
// ○ Test 1: checkMeera([1,-6, 4,-3]) outputs “I am NOT a Meera array” because-3 *2 is -6
// if (a[i] * 2 != a[i])
// function checkMeera (a) {
//     for () {

//     }
// }


// checkMeera([10, 4, 0, 5])












// Question 6 ● Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00. 
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45 secs. ■ digitalClock(61201) as "17:00:01"   No AM/PM. 24h format. ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.



// function digitalClock (a) {
//     let s = 0, m = 0, h = 0;
// for (i = 1; i <= a; i++){
//         s++;
//     if (s > 59) {
//         m++;
//         s = 0;
//     }
//     if (m > 59) {
//         h++;
//         m = 0;
//     }
//     if (h > 23) {
//         h = 0;
//     }
// }
//     // if (m == 60) {
//     //     m = 0;
//     // }
//     if (h < 10  ) {
//         h = "0" + h;
// }
//     if (m < 10) {
//         m = "0" + m;
// }
//     if (s < 10) {
//         s = "0" + s;
// }
// console.log( h + ":" + m + ":" + s)


// }
// digitalClock (24 * 3600)

// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// function triangle () {
//     let a = " "
//     for(i = 0; a.length <= 7; i++) {
//         a += "#"
//        console.log(a)
//     }
    
    
// }
// triangle()

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// function chess1 () {
//     let a = "";
//     let m = " "
//     for (i = 0; a.length <= 8; i++) {
//         a += " # # # \# ";
//         console.log (a)
//         for(b = 0; m.length <= 16; b++){
//         m += " \# \# \# \#"
//         console.log (m)}
//         }
// }
// chess1()


// QUESTION 1
// Find the Smallest and Biggest Numbers

// Create a function that takes an array of numbers and return both 
// the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

// function minMax1 (a) {
//     mini = Math.min(str)
//     return (mini);
// }
// console.log (minMax1([1, 2, 3, 4, 5]))

// console.log(Math.min(1, 2, 3, 4, 5))
// let arr = [1, 2, 3, 4, 5];
// console.log(Math.max(arr))