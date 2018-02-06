
var arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function myFilter(array, callback){
    callback(array);
}
function myMap(array, callback){
    callback(array);
}

console.log(myFilter(arr, function(array){
    var a = array;
    for(var i = 0; i < a.length; i++){
        if(a[i].length >= 4){
           a.splice(i,1);
        }
    }
    console.log(a);
}));

console.log(myMap(arr, function(array){
    var a = array;
    for(var i = 0; i < a.length; i++){
        a[i] = a[i].toUpperCase();
    }
    console.log(a);
}))

