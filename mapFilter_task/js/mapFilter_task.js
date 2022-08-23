// Instructions: 
// //  - You should solve all these questions using .map() function 



//  * Exercise 1: 
//  * 
//  * Make an array of numbers that are doubles of the first array
//  *
//  * Test Case: 
//  *
//  * console.log(doubleNumbers([2, 5, 100]));
//  * 
//  * Result:
//  * [4, 10, 200]
//  * 

var number = [2, 5, 100]
let doubleNumbers = number.map((a) => a*2)
console.log(doubleNumbers)
//  * 
//  * 
// //  * Exercise 2 : 
// //  * 
// //  * Take an array of numbers and make them strings
// //  *
// //  * Test Case: 
// //  *
// //  * console.log(stringItUp([2, 5, 100]));
// //  * 
// //  * Result:
// //  * ["2", "5", "100"]
// // */

var stringItUp = [2 , 5 , 100]

let string = stringItUp.map((x)=>`${x}`)
console.log(string)

// //  * Exercise 3:  
// //  * 
// //  * Capitalize each of an array of names
// //  *
// //  * Test Case: 
// //  *
// //  * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// //  * 
// //  * Result:
// //  *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
// // 
// var capitalizeNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// capitalizeNames.join("")
// let uppercase = capitalizeNames.map((ele , p) => {
//      ele[0].toUpperCase()
// })
// console.log(uppercase)


var arrayy= ["john", "JACOB", "jinGleHeimer", "schmidt"]
let capitalizeNames=arrayy.map((c)  => c[0].toUpperCase()+ c.slice())
console.log(capitalizeNames)

//  * Exercise 4:  
//  * a 
//  * Make an array of strings of the names
//  *
//  * Test Case: 
//  *
//  * console.log(namesOnly([
//  *   {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  *   ])); 
//  * 
//  * Result:
//  *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]





function namesOnly(array) {


  return array.map(i => i.name);
}
var names = namesOnly([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
])

console.log(names);







//  * Exercise 5: 

//  * 
//  * Make an array of strings of the names saying whether or not they can go to The Matrix
//  *
//  * Test Case: 
//  *
//  * console.log(makeStrings([
//  *    {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  * ]));  
//  * 
//  * Result:
//  * 
//  * ["Angelina Jolie can go to The Matrix", 
//  * "Eric Jones is under age!!", 
//  * "Paris Hilton is under age!!", 
//  * "Kayne West is under age!!", 
//  * "Bob Ziroll can go to The Matrix"]

  function makeStrings(arr){
  let reFormArr = arr.map(arr =>{
    if(arr.age>=18){
      console.log(arr.name + ' can go to The Matrix') 
    }else {
        console.log(arr.name + " is under age!!");
      }
  })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 




//  */
// * Exercise 6:  
//  * 
//  * Make an array of the names in h1s, and the ages in h2s
//  *
//  * Test Case: 
//  *
//  * console.log(readyToPutInTheDOM([
//  *   {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  * ])); 
//  * 
//  * Result:
//  * 
//  * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
//  * "<h1>Eric Jones</h1><h2>2</h2>", 
//  * "<h1>Paris Hilton</h1><h2>5</h2>", 
//  * "<h1>Kayne West</h1><h2>16</h2>", 
//  * "<h1>Bob Ziroll</h1><h2>100</h2>"]
//  */

function readyToPutInTheDOM(arr){
    let reFormArr = arr.map(arr =>{
      console.log('<h1>'+arr.name+'</h1>'+"<h2>"+arr.age+'</h2>')
  })
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// * Exercise 7:
// * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
// *
// * Test Cases:
// *   Test Case 1:  doubleValues([1,2,3]) 
// *   Test Case 2:  doubleValues([1,-2,-3])  
// *
// * Result:
// * Test Case 1: [2,4,6] 
// * Test Case 2: [2,-4,-6]



var myArray=[1,-2,-3]

let doubleValues=myArray.map ((d) => d*2    )
console.log(doubleValues)


// */
//   * Exercise 8:
//   * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
//   *
//   *
//   * Test Cases :
//   *   Test Case 1:  valTimesIndex([1,2,3])  
//   *   Test Case 2:  valTimesIndex([1,-2,-3]) 
//   * 
//   * Result
//   * Test Case 1: [0,2,6]
//   * Test Case 2: [0,-2,-6]
//   */

var myrray=[1,-2,-3]

let valTimesIndex=myrray.map ((d,i) => d* i )
console.log(valTimesIndex)


//   * Exercise 9:
//   * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
//   * of that key in each object.
//   * 
//   * Test Case:
//   * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
//   * 
//   * Result:
//   * ['Elie', 'Tim', 'Matt', 'Colt']



function extractKey(name_2) {


  return name_2.map(i => i.name);
}
let result = extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]) 

console.log(result)


//   */
//   * Exercise 10:
//   * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
//   * 
//   * Examples:
//   * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
//   */


function extractFullName(nn) {

  return nn.map(i => i.first + ' ' +i.last)}
  var fullname = extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])

console.log(fullname)


//Filter 10 - 15 you should use Array.prototype.filter
/*
10
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

var arr = [1, 8 ,4,6];

var r = arr.filter(function (x) {
    return x % 2 == 0;
});
console.log(r)
/*
11
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

var arr = [1, 8 ,4, 6 ,16 ,20];

var r = arr.filter(function (x) {
    return x % 4 == 0;
});
console.log(r)


/*

12
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char
Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

function containChar(arr,str) {
            return arr.filter (a =>{
                if (a[0] == str) {
                    return a ;
                }
            } )

        }
        console.log ( containChar(["hello","world"], "w"));

/*
13
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(arr) {

            return arr.filter(function (x, index) {
                if ((index % 2 == 0) && (x.length % 2 !== 0)) {
                    return x;
                }
            })


        }

        console.log( evenIndexOddLength(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]));
/*
14
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/







/*
15
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(arr, num) {
            return arr.filter(function (x, index) {
                if (x.length < num) {
                    return x;

                }

            })

        }

        console.log(shorterThan(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"], 5));