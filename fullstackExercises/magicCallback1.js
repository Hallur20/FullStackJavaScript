var arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var filtered = arr.filter((name)=>{ return name.length <=3})
var mapped = arr.map((name)=>{ return name.toUpperCase()})
console.log(filtered);
console.log(mapped);