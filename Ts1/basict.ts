let userName: string = "Usman"
let hasLogedIn: boolean = true

userName += ' Abdullahi'

console.log(userName)

let myNumber: number = 20;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(' ')
console.log(names)

const myValues: Array<number> = [1,2,3];


interface Person {
 first: string;
 last: string;
 cool: boolean;
}

const myPerson: Person = {
  first: 'Usman',
  last: 'Abdullahi',
  cool: true,

}

console.log(myPerson)

const ids: Record<number, string> = {
 10: 'a',
 20: 'b'
}

ids[30] = 'c'

ids

if (ids[30] === 'D'){
  console.log('welcome to my territory')
}

let myArr: number[] = []
for (let i:number = 0; i < 10; i++){
 myArr.push(i)
 i
}

console.log(myArr)
myArr.forEach((v) => myArr.push(v))


const outs:number[] = myArr.map((e)=>e*3)

console.log(outs)

