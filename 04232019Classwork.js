
// var teachers = ["shane", "rock", "Patricia", "CL", "Junior"];
// console.log(teachers[3]); //writes the 4th value in the array to the console

// console.log(teachers.length); //count number of items in teachers array

// teachers.push("Ashoe");
// console.log(teachers);

// for(var i=0;teachers.length >i; i++) {		//starting i = 0.  Is the array greater than 0?  Yes, increment i by 
// 	console.log(teachers[i])				// 1; write array[0] then loops
// }

// teachers.reverse();  // reverses the order of the items in the array; not necessarily alphabetical or numerical.
// console.log(teachers); 

// teachers.sort(); //if numbers and strings are both in array it will sort numbers first
// console.log(teachers);

var dog = {
	name: "Leo",
	speed: 100,
	stamina: 80,
	coat: "Black & Tan",
	nails: "short",
	health: 100,
	owner: {
		name: "Shaz",
		health: 100,
		profession: "Chipotle",
		dog_park_member: true,
		vet: {
			name: "Charles",
			contact: "1-800-VET",
			clinic: "PetCo",
			profession: "Lead Vet",
			specialization: "Dogs",

		}
	},
	sibilings: ["Lucy", "Winter", "Larry"],
}


console.log(dog.owner.vet.clinic);

delete dog.speed;
console.log(dog);

//dog.speed = 100;
//console.log(dog);
