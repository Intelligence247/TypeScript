// We can decalare TypeScript as "explicit" e.g
let myname: string = "Abdullahi"

// We can also decalre typescript as "implicit", note by decalring it as implicit means we infer the typescript, that is we forced it to determine the type by itselfs
let mynum = 99

// Special types

// Explaining the type any
let u:any = true
u= "string"
console.log(u)
// if the any form above is removed there would be an error, bcs, the first one is a boolean while the second is a string
// Setting any to the special type any disables type checking:

let v: any = false
console.log(Math.round(v))

// any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...



// Type: unknown
// unknown is a similar, but safer alternative to any.

let wi: unknown = 2;
wi = 'string'
wi = {
 runANonExistentMethod: () => {
  console.log('I think therefore I am')
 }
} as {runANonExistentMethod: () => void}
 
// console.log(wi.runANonExistentMethod)

if (typeof wi === 'object' && wi !== null ){
 (wi as {runANonExistentMethod: Function}).runANonExistentMethod();
 // console.log(wi)
}
// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
// Casting is when we use the "as" keyword to say property or variable is of the casted type.

// let typeNever: never = 90;
// console.log(typeNever)

let typeUndefined: undefined = undefined
let typeNull: null = null



// TypeScript Arrays

const namesArray: string[] = [];
namesArray.push("Abdullahi")
namesArray

// const namesReadonlyArr : readonly string[] = ['Usman']
// note that readonly does not allow adding or any modification to arrays
const namesReadonlyArr :  string[] = ['Usman']
namesReadonlyArr.push('abdul')
console.log(namesReadonlyArr)

const numbers = [1,2,3];
numbers.push(4);
// numbers.push('2'), string not assignable to numbers

let head: number = numbers[0]
console.log(head)

// Typescript Tuples
// Tuple is the process of specifying the types for each of the array element 


// define our tuple 
let ourTuple: [number, boolean, string]

// initialize correctly
ourTuple = [5, false, 'falsCoding God was here',]
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// Readonly is included so it is impossible to push
// ourReadonlyTuple.push('Coding God took a day off')

// Named Tuples give more infromation about the code and makes it more readble
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
console.log(graph)
console.log(x)

const car: {type: string, model: string, year?: number} = {
 type: "Toyota",
 model: "Corolla",
}

console.log(car)

// As anything is specified in typescript it must be included as we, else it will throuw an error, the only way to solve this issue is using question mark to denote it as an optional value


// Learning Enums


enum CardinalDirections {
 North,
 East,
 South,
 West,
}

let currentDirection = CardinalDirections.North;
console.log(currentDirection)
console.log(CardinalDirections.East)
console.log(CardinalDirections.South)
console.log(CardinalDirections.West)
enum CardinalDirections2 {
 North = 1,
 East,
 South,
 West,
}
console.log(CardinalDirections2.West)
// The value in the enums increment
enum StatusCodes {
 NotFound = 404,
 Success = 200,
 Accepted = 202,
 BadRequest = 400,
}

console.log(StatusCodes.BadRequest)

// This is a fully initiallised enums

enum CardinalDirections3 {
 North = 'North',
 East = 'East' ,
 South = "South",
 West = "West"
};

// Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.







// Learning Aliases and Interfaces
// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.


type CarYear = number
type CarType = string
type CarModel = string | number

type Car = {
 year: CarYear,
 type?: CarType,
 model?: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = 'Toyota'
const carModel: CarModel = "Corolla"
const carObj: Car = {
 year: carYear,
 type: carType,
 model: carModel
}
console.log(carObj)

interface Rectangle {
 height: number,
 width: number
}
const rectangle: Rectangle = {
 height:20,
 width: 10
}
// Extending Interfaces
// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface ColoredRectangle extends Rectangle {
 color: string;
}

const coloredRectangle: ColoredRectangle = {
 height: 20,
 width: 10,
 color: '#3345fa'
}