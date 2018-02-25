var names = ["Lars", "Peter", "Jan", "Bo"];

var test = names.map((name) => {
    return "<li>" + name + "</li>";
}).join("");

var addMore = "<ul>" + test + "</ul>"



console.log(addMore); //a

var names2 = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];

var test2 = names2.map((name) => {
    return "<tr><td>" + name.name + "</td>" + "<td>" + name.phone + "</td></tr>";
}).join("");

var addMore2 = "<table><tr><th>name</th><th>phone</th></tr>" + test2 + "</table>";

console.log(addMore2);

document.getElementById("first").innerHTML = addMore;
document.getElementById("second").innerHTML = addMore2;

document.getElementById("btn").onclick = () => {
    var filtered = names.filter((name) => { return name.length <= 3 })
    var test = filtered.map((name) => {
        return "<li>" + name + "</li>";
    }).join("");

    var addMore = "<ul>" + test + "</ul>"
    document.getElementById("first").innerHTML = addMore;
};
