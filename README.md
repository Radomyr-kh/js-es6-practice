# Task 1

Implement the **_getModifiedArray(array)_** function, which takes an arbitrary array, and returns an array with the value of the first element of the array equal to “Start”, the last element of the array equal to “End” and the rest of elements should be the same as in an initial array. The initial array should stay unchanged.

**Function example:**
_getModifiedArray([12, 6, 22, 0, -8])); // [‘Start’, 6, 22, 0, ‘End’]_

# Task 2

The function **_filterNums_** receives an array of integers, a number and a parameter (greater, less). Print a new array, where all elements will be greater/less than this number

By default, the number is 0, the parameter is greater.

**Example:**
_filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater'); //[ 55]
filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less'); // [-2, 2, 3, 0, -13]
filterNums([-2, 2, 3, 0, 43, -13, 6], -33, 'less'); // []
filterNums([-2, 2, 3, 0, 43, -13, 6]); // [2, 3, 43, 6]
filterNums([-2, 2, 3, 0, 43, -13, 6], 23); // [43]_

# Task 3

Find the maximum interval between two consecutive arguments.

**Example:**
_maxInterv(3, 5, 2, 7); //5
maxInterv(3, 5, 2, 7, 11, 0, -2); //11
maxInterv(3, 5); //2
maxInterv(3); //0_

# Task 4

The function takes any number of strings and returns the sum of their lengths.

**Example:**
_console.log(sumOfLen('hello', 'hi')); //7
console.log(sumOfLen('hi')); //2
console.log(sumOfLen()); //0
console.log(sumOfLen('hello', 'hi', 'my name', 'is')); //16_

# Task 5

Write a function **_combineArray(arr1, arr2)_** , which takes 2 arrays, and returns a new array consisting only of numeric elements of arrays arr1 and arr2.
**Function example:**
_combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15])); // [12, 22, -8, 6, 15]_

# Task 6

Implement the **_longestLogin(loginList)_** function, which takes an array of user logins loginList and returns the longest login. If the logins of the same length are the longest in the array, the login element with the largest index is returned.  
Tip: You can use the _reduce()_ method to solve the task.

**Function examples:**
_longestLogin(['dima', 'vlad_2', 'Radchenko', 'guest']); // Radchenko
longestLogin(["user1", "user2", "333", "user4", "aa"]); // user4_

# Task 7

Implement the **_processArray(arr, factorial)_** function, which takes the first parameter of the array arr, and the second parameter the function factorial and processes each element of the array arr with the function factorial, returning a new array (the source array arr does not change). The function **_factorial(n)_** calculates and returns the factorial of the number **_n_**. For example factorial(4) returns 24.

**Example:**
_// determines the factorial of the number n
function factorial(n) { // your code};
processArray([1, 2, 3, 4, 5], factorial); // [1, 2, 6, 24, 120]_

# Task 8

Using the default parameter technique, overload the **_overloadedFunc()_** function, which takes 3 arguments. For the 1st argument of the function set the default value [1, 2, 3], for the 2nd - the value 2, for the 3rd - the function that returns the product of the first two arguments, and the function can multiply both arrays and numbers.

The **_overloadedFunc()_** function returns the result of the default function.

**Usage example:**
_console.log(overloadedFunc()); // [2, 4, 6]
console.log(overloadedFunc([2, 4, 6, 8])); // [4, 8, 12, 16]
console.log(overloadedFunc([2, 4, 6], 3)); // [6, 12, 18]
console.log(overloadedFunc(10)); // 20
console.log(overloadedFunc(8, 3)); // 24_

# Task 9

Please, implement a function combineFunctions that takes any number of functions as an argument and returns a function that is a composition of the arguments.

**For example:**
_negate = function(x){ return -x; };
halve = function(x){ return x / 2; };
square = function(x){ return x * x; };
double = function(x){ return 2 * x; };
combineFunctions(negate, halve, square) should return a function
square(halve(negate(x)))
combineFunctions(negate, double) should return a function
double(negate(x)))_

# Task 10

Suppose, you have an array of students:

let students = [{
name: 'Anna',
languages: ['English', 'Ukrainian'],
age: 21
}, {
name: 'Bob',
languages: ['Polish', 'Spanish'],
age: 26
}, {
name: 'Alice',
languages: ['Italian', 'Polish'],
age: 18
}]

Please, implement a function **_getLanguages._**

The function takes an array of students as a first parameter and a condition on a student (function) getLanguages should return an array of languages from students that satisfy a condition.

**For example:**

- getLanguages(students, student => student.age < 26) should return
  ['English', 'Ukrainian', 'Italian', 'Polish']
- getLanguages(students, student => student.name === 'Alice') should  
  return ['Italian', 'Polish']
- getLanguages(students) should return ['English', 'Ukrainian','Polish', 'Spanish', 'Italian', 'Polish']

Try to use **_reduce_** and not use loops to solve this task.

# Task 11

Implement 5 functions that take strings of data and process them in a certain way.

1. The **_upperCase()_** function takes string data as an argument and returns it to uppercase.

2. The **_tripleExclaim()_** function takes string data as an argument and returns it by adding three exclamation marks to it.

3. The **_split()_** function takes a separator as an argument, returns a function that accepts string data split by the separator character into an ordered set of substrings, and returns an array of those substrings.

4. The **_join()_** function takes separator as an argument, returns a function that takes an array of string data that are concatenated into a string by separator, and returns that string.

5. The **_copy()_** function takes string data as an argument and returns it repeating 2 times.

Implement the **_createComposition()_** function, which can take any number of functions as arguments, and create a composition from them. The createComposition() function takes our 5 functions as arguments. The createComposition() function returns a function that takes its initial value as an argument. This nested function successively passes through an array of functions with each iteration returning the result of calling the accumulated value of the current function argument. The reduce() method can be used here.

The final function result is assigned the function createComposition(), which takes our 5 functions as arguments in the appropriate order. (split with '\_' argument, join with ' ' argument)

**Tips:**
Consider that the result of one function can be passed as an argument to another function.
Pay attention to the order of the function arguments.

**Usage example:**

_// implementation of 5 atomic functions
// implementation of createComposition function
const result = createComposition( // 5 function-arguments )
console.log(result("by_ticket_now")); // BY TICKET NOW!!! BY TICKET NOW!!!
console.log(result("total sale")); // TOTAL SALE!!! TOTAL SALE!!!_
