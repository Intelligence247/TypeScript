// THis is all about Callback functions

export function printToFile(text: string, Callback: () => void): void  {
 console.log(text)
 Callback()
}
const aa = (text: string): void =>{
 console.log(text)
}

type MutationFunction = (v: number) => number

const arrayMutate = (
 numbers: number[],
 mutate: MutationFunction,
) : number[] => {
 console.log(mutate)
 console.log(numbers)
 const tests = numbers.map(v=> v * 9)
 console.log(tests)
return numbers.map(mutate)
}

const myNewMutation: MutationFunction = (v: number) => v * 100
 
console.log(arrayMutate([1,2,3,9,800],(v) => v * 9 ))

type adderFunction = (v: number) => number

export function createAdder(num: number): adderFunction{
 return (val: number) => num + val
}

const addOne = createAdder(1)

console.log(addOne(66))