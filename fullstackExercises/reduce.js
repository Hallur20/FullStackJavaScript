var all = ["Lars", "Peter", "Jan", "Bo"];

var comma = all.join(",");
var space = all.join(" ");
var hashTag = all.join("#");

console.log(comma);
console.log(space);
console.log(hashTag);

var numbers = [2, 3, 67, 33];

console.log(numbers.reduce((prev, current) => { return prev + current }));

var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
];
var reducer = function (num) {
    return num;
}
//jeg fandt ikke ud ad denne opgave... (c)

var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
var results = { Clinton: 0, Trump: 0, None: 0 };
console.log(votes.reduce((prev, current) => {
    console.log("current is: " + current);
    if(typeof prev === "string"){
        if (prev === "Clinton") {
            results.Clinton++;
        }
        if (prev === "Trump") {
            results.Trump++;
        }
        if (prev === "None") {
            results.None++;
        }
    }
    if (current === "Clinton") {
        results.Clinton++;
    }
    if (current === "Trump") {
        results.Trump++;
    }
    if (current === "None") {
        results.None++;
    }
    return results;
}));

console.log(results);