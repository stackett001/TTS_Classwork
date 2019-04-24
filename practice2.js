var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log(course.students[1].computer.type);
console.log(course.preReqs.equipment);
console.log(course.preReqs.equipment.OSOptions[1]);
console.log(course.preReqs.equipment.OSOptions[0] + " or " + course.preReqs.equipment.OSOptions[1]);

var getOS = course.students.filter((opsys) => {
	return opsys.computer.OS === "OSX";
});
console.log(getOS); //yes Niko helped me with this.




// var courseOSfiltered = course.students.computer.OS.filter(function(str) === {
// 	return str.includes("OSX");
// });
// console.log(courseOSfiltered);  


// var filtered = course.students.computer.filter(function (str) {
//   return str.includes("OSX");
// });

// console.log(filtered); // ["Matt", "Cat"];

// console.log(course.preReqs.equipment.OSOptions.join("or"));

// Map function to solve #8
// var kings_arr = [];   //setup new array
// course.students.map(student =>{
// 	if (student.computer.OS === "OSX"){
// 		kings_arr.push(student.name);
// 	}
// })
// console.log(kings_arr);

// var blake_arr = [];
// for (var i = 0; i < course.students.length; i++) {
// 	if (course.students[i].computer.OS === "OSX") {
// 		blake_arr.push(course.students[i].name)
// 	}
// }
// console.log(blake_arr);