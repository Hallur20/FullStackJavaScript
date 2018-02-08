

var names = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.myFilter = function(callback, context) {
    arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};

Array.prototype.myMap = function(callback) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};

var newArray = names.myFilter((name)=>{
    return name.length <= 3;
});
var newArray2 = names.myMap(function(name) { return name.toUpperCase();});
console.log(newArray);
console.log(newArray2);