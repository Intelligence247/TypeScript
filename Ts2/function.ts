function addNumbers(a: number,b: number): number{
 return a+b;
}

export default addNumbers
console.log(addNumbers(2,30))

export const addStrings = (str1: string, str2: string = ''): string=> `${str1} ${str2}`

console.log(addStrings('Usman','Abdullahi')) 
console.log(addStrings('abdullahi'))

export const format = (title: string, param: string | number | boolean): string => `${param} ${title}`

export const printFormat = (title: string, param: string | number): void => {
 console.log(format(title, param))
}


printFormat('usman',80)

export const fetchData = (url: string)=> 
Promise.resolve(`Data from ${url}`)

function introduce(salutation: string, ...names: string[]): string{
 return `${salutation} ${names.join(' ')}`;
}
const names2 = 'abdullahi'
const names3 = 'abdullahi3'
console.log(introduce('welcome',names2,names3))

export function getName(user:{firstName: string, lastName: string, age: number}): string{
 return `My name is ${user.firstName} ${user.lastName} I am ${user.age} years old`
}

console.log(getName({firstName:'usman', lastName:'abdullahi', age:30}))

// JavaScript is not checking for errors at runtime only does it at compiled time, while typescript checks for errors at runtime