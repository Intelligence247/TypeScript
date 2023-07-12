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