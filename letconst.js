const coach = "Guardiola";
//coach = "Pochettino";
console.log(coach);

const numbers = [10, 8, 12];
numbers[2] = 15;
numbers.push(18);
//numbers = [10,20,30];
numbers.pop();

const player = {name: "Kevin De Bruyne", kit: 7};
console.log(numbers);

let club = "Man City";
club = "Arsenal";
console.log(club);

let sum = 0;
for(let i = 0; i<10; i++){ //value of a let variable stays within the scope
    sum+=i;
    console.log(i);
}
//console.log(i);