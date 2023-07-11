// import house from "./house"
const houses =  [
 {"name":"Atreides", "planets": "Calladan"},
 {"name":"Corrino", "planets": ["Kaitan",'Salusa Secundus']},
 {"name":"Harkonnen", "planets": ["Giedi Prime", "Arrakis"]},
]

interface House {
 name: string;
 planets: string | string[];
 cool: boolean;
}

interface HouseWithID extends House{
 id: number;
}

// function findHouses(houses: string): HouseWithID[];
// function findHouses(
//  houses: string,
//  filter: (house: House)=> boolean
// ): HouseWithID[];

// function findHouses(houses: string | House[]): HouseWithID[];
// function findHouses(
//  houses: string | House[],
//  filter: (house: House)=> boolean
// ): HouseWithID[];

function findHouses(
 input: string | House[],
 filter?: (house: House)=> boolean
): HouseWithID[] {
 const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;
return (filter?houses.filter(filter): houses).map((house)=> ({
 id: houses.indexOf(house),
 ...house,
}));
}

console.log(
 findHouses(JSON.stringify(houses), ({ name })=> name === "Atreides")
);


console.log(
 findHouses(JSON.stringify(houses), ({ name })=> name === "Corrino")
);