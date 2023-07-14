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
