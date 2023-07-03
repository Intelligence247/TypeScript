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

