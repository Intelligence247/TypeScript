interface Coordinate{
 x: number;
 y: number;
} 

// Optional in typescript is denoted by ?


function parseCoordinateFromObject(obj: Coordinate): Coordinate{
 return{
  ...obj,
 }
}

function parseCoordinateFromNumber(x: number, y: number): Coordinate{
 return{
  x,
  y,
 }
}

 




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