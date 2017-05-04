

var friendArray = [
  {
    name: "Kirk",
    photo: "kirk@email.com",
    score: [
    	 5,
		 1,
		 4,
		 4,
		 5,
		 1,
		 2,
		 5,
		 4,
		 1
    ]
  },
  {
    name: "Dirk",
    photo: "dirk@email.com",
    score: [
    	 5,
		 1,
		 4,
		 4,
		 5,
		 1,
		 2,
		 5,
		 4,
		 1
    ],
  },
  {
    name: "Lisa",
    photo: "lisa@email.com",
    score: [
    	 1,
		 2,
		 3,
		 4,
		 1,
		 5,
		 1,
		 4,
		 2,
		 3
    ],
  },
];

var sum = 0;  

var scoreTotal = [];

for (var i = 0; i < friendArray.length; i++) {

	friendArray[i].score.forEach(
		function addNumber(value) { sum += value; }
	);
	console.log("Index", i, "Total", sum)
	scoreTotal.push(sum);
};

console.log(scoreTotal);

scoreTotal = [ 32, 64, 90 ]

//Compare the difference between each value within the array

var index0_1 = Math.abs(scoreTotal[0] - scoreTotal[1]);
console.log("0-1", index0_1);

var index0_2 = Math.abs(scoreTotal[0] - scoreTotal[2]);
console.log("0-2", index0_2);


if (index0_1 < index0_2) {
	console.log(friendArray[1].name)
} else {
	console.log(friendArray[2].name)
}









module.exports = friendArray;
