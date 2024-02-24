  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
/**
 * I’ll define an array of numbers here, let nums = [1, 2, 3, 4, 5].
 * I want to create a new array containing each of these numbers multiplied by 2.  
 * Create a new empty array called results,  
 * then write a simple for loop: for(let num of nums) {results.push(num * 2)}.  
 * If I log results to the console, it’s got all the numbers multiplied by two in it.  
 */
let nums = [1, 2, 3, 4, 5]; 
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);


// Using map()
/**
 * Now let’s do the exact same thing using the map method. 
 * To do it, I’ll call the map method on the array itself: nums.map(). 
 * The map method expects me to pass it a function which will be called on each element of the nums array. 
 * To make this easy to understand, let’s define a function, multByTwo.
 * All it’s going to do is take in a number and return the same number multiplied by two. 
 * Now, we can  pass the multByTwo function to the map() method and this function will be called on every element of the nums array.
 * To store the result, I’ll set this call to the map method equal to a variable, mapResults. 
 * Now when I log mapResults to the console and run the code, we get the same result. 
 */
const multByTwo = function (num) {
  return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()

const simplified = nums.map(function (num) { return num * 2});
console.log(simplified);


// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(simplified);



// With objects:
/**
 * I’ve just mapped over the entire student array and passed an arrow function to the map method which, for each student, returns an array containing student.name and student.id.
 * As you can see the map method makes life a lot easier. 
 * If I log studentsWithIds to the console, you’ll see it’s an array of arrays, where each one contains the student’s name and id from the original object.
 */

const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];
const studentsWithId = students.map(student => [student.name, student.id]);
console.log(studentsWithId);
