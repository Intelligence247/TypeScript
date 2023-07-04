// THis is all about Callback functions

export function printToFile(text: string, Callback: () => void): void  {
 console.log(text)
 Callback()
}
const aa = (text: string): void =>{
 console.log(text)
}

const arrayMutate = (
 numbers: number[],
 mutate: (v: number) => number,
) : number[] => {
 console.log(mutate)
 console.log(numbers)
return numbers.map(mutate)
}

console.log(arrayMutate([1,2,3,9],(v) => v * 9 ))