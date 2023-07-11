interface Coordinate{
 x: number;
 y: number;
} 

// Optional in typescript is denoted by ?


// function parseCoordinateFromObject(obj: Coordinate): Coordinate{
//  return{
//   ...obj,
//  }
// }

// function parseCoordinateFromNumber(x: number, y: number): Coordinate{
//  return{
//   x,
//   y,
//  }
// }

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y  : number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate{
 let coord: Coordinate = {
  x: 0,
  y: 0,
 }
 if (typeof arg1 === 'string'){
 (arg1 as string).split(',').forEach(str => {
  const [key, value] = str.split(':');
  coord[key as 'x' | 'y'] = parseInt(value, 10)
 })
  
 }else if (typeof arg1 === 'object'){
  coord = {
   ...(arg1 as Coordinate)
  }
 }else{
  coord = {
   x: arg1 as number,
   y: arg2 as number,
  };   
 }

 return coord;
}

 
console.log(parseCoordinate(20,90))
console.log(parseCoordinate({x:20,y:90}))
console.log(parseCoordinate("x:12,y:22"))



// Coordinate Practice
// type Coordinate = {
//  x: number;
//  y: number;
// };

// const coordinates: Coordinate ={ x: 10, y: 20}
// console.log(coordinates)
// console.log(coordinates.x)
// console.log(coordinates.y)

// function calculateDistance(point1, point2){
//  const dx = point2.x - point1.x;
//  const dy = point2.y - point1.y;
//  return Math.sqrt(dx * dx + dy * dy)
// }

// const pointA = {x: 0, y: 0};
// const pointB = {x: 3, y: 4};

// const distance = calculateDistance(pointA, pointB)
// console.log(distance)