
var sum = 0;
for(var i = 2; i < process.argv.length; i++){
    var add = parseInt(process.argv[i]);
    sum+=add; 
}
console.log(sum);