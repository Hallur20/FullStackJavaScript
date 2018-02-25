# FullStackJavaScript 
FullStackJS_P1_ExamQuestions


*.Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.
1. Javascript er et OO scripting sprog der har til formål at lave dynamiske html sider på en web-browser.
2. Java er et programmerings-sprog, der gør at du kan lave programmer det kan køre på din computer/browser, mens javascript kun kører på din browser.
3. Du skal compile java-kode med f.eks commando-prompt for at f.eks kunne se et system.out.println("hello world") i cmd, med med javascript behøver du ikke compile.
4. i javascript behøver man ikke at definerer hvad type en variabel er, eller hvad en metode skal returnere, men det skal man i java.
5. Javascript kræver heller ikke at din kode bliver lavet i klasser, men det skal man i java.
6. Javascript kører kun i én thread, mens i java kan man lave flere (typisk bruges der 4 threads i java fordi computerer nu om dage som regel har 4 kerner)

Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
es2015
1. arrow funktioner - en kortere syntax end den normale javascript-funktion, med arrow funktion behøver du ikke skrive function, og hvis det er samme linje behøver du heller ikke skrive return eller lave krølleparanteser. Man behøver heller ikke binde this i feks react når der bruges arrow funktioner
2. klasser - gør det muligt at ligesom i java at gøre brug af constructors, inheritance, extend osv, komponenter i react gør brug af klasser ved at classen extender React.component.

typescript
1. Typescript er en udvidelse af javascript, og  giver mulighed for at angive typer i koden og lave interfaces og moduler.

es2015/typescript bruges på 2 måder:
1. browseren hvor et script tag i en html fil med et source for javascript filen sættes nederst i body tag, hvilket vil gøre at man kan se resultatet på browseren (chrome, firefox, edge osv)
2. Node hvor blandt andre mulighed du kan se resultaterne fra console.log vil printes ud på kommandoprompt vinduet, du skal bare have node.js installeret på computeren.
Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.

Node js er et javascript runtime system der fungerer sammen med side-server applikationer.
Uden node.js er det ikke muligt at lave feks et react applikation der kræver feks node modules ved at du skriver npm install.
Npm er et software registry i node der indeholder over 600.000 packages lavet af javascript developers.
Node kører en javascript fil på samme måde som i en browser, men node har nogle APIs der kan bruges til backup development, http requests osv.
Node js giver mest mening ved et real time web application, hvilket er når en klient og server kan udveksle data uden forstyrrelser (states). Det sker med websockets?.
Explain about the Event Loop in Node.js 
Et event loop er hvad der tilllader node.js i at fuldføre ikke-blokerende I/O operationer, hvilket er kode, der ikke blokerer for eksekveringen af koden (promises osv). Dette er rigtig godt for node.js fordi at det er single threaded.
Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
Babel bliver brugt til at  transpile nyere javascript-kode om til es-2015, sådan at næsten alle browserer kan forstå koden. WebPack er en module bundler. Med webpack kan du gøre brug af nøgleordet "require" der gør sådan at du kan få lavet nogle dependencies der peger på  nogle lokale filer du har på din egen computer som feks et image.
Explain the purpose of “use strict” and also Linters, exemplified with ESLint 
Strict gør sådan at fejle der normalt ikke ville betyde noget i javascript, vil betyde noget sådan at en fejlbesked bliver printet. Feks a = 5 vil give fejl fordi a ikke har nogen declaration (Var a = 5), man kan siger det gør koden strengere for fejle. Sådan noget som funktioner er ikke vigtigt at det er i rette rækkefølge fordi at de bliver automatiskt sat op på toppen af koden.  ESLint er et godt værktøj for at finde fejle hvori du selv kan definerer reglerne feks kan du lave en regelfil hvori du siger "no-console" hvilket gør at koden ikke skal kunne gøre brug af konsolen.7
Variable/function-Hoisting
Variable hoisting:
x = 5; // Assign 5 to x
console.log(x);
var x = 1;  // Declare x
Eksemplet her vil virke fordi at et assignment i javascript undersøger variabler nedenfor i koden, og så hejser den variablen op til toppen, sådan at den nye assignment kommer til at virke.
function sup(){ return yo();}
console.log(sup());
function yo(){ return 10;}
Eksemplet her vil så også virke fordi igen undersøges der nedenfor om noget funktion kaldet for yo eksisterer, og så hejser den funktionen op til toppen, sådan at funktion sup kan returnere 10 fra yo funktionen.
this in JavaScript and how it differs from what we know from Java/.net.
Simpelt eksempel på this:
var a = 5;
function b(){ return 6; }
console.log(this.a);
console.log(this.b());
Her er this en genvej til a variablen og b funktionen, men man kunne også have skrevet console.log(a) og console.log(b()). I javascript har this et globalt omfangt så når man ikke er på den globale omgang men i en funktion vil this ikke virke. eksempel nedenunder. (a vil stadig være 5).
let a = 5;
(function(){
this.a = 10;
})();
console.log(a);
men i java/.net har this et omfang for metoder og variabler der ikke er statiske. eksmpel (b skulle gerne være 10):
package thisdemo;

    static int a = 5;
    int b = this.a + 5;
    public static void main(String[] args) {
        ThisDemo td = new ThisDemo();
        System.out.println(td.b);}
    public int b() {return this.b;}}
arrow funktioner løser alle problemer med this hvis feks et object med en konstructor fra en klasse bliver sendt ned i en funktion giver undefined (fordi assigment ikke er globalt), hvilket før var et problem i javascript fordi det hørte dårligt sammen med OO programmering som i java, men en midlertidlig løsning dengang var at sige const self = this (dette er en bid kode fra en af timerne).
class Person{
    constructor(private fName:string,private lName:string){
        this.fName = fName;
    }
sayHelloArrowFix(){
        setTimeout(() =>{ //fix!
            console.log(`Hi ${this.fName}`);
        },);    
    }
    sayHelloFixSelf(){
        const self = this; //fix!
        setTimeout(function(){
            console.log(`Hi ${self.fName}`);
        },);    
    }
}
let p = new Person("Hallur", "vid Neyst");
p.sayHelloFixSelf();
p.sayHelloArrowFix();
Function Closures and the JavaScript Module Pattern
Function closure generelt er udtryk for ting man kan gøre indenfor funktionens eget scope.
Én funktion i javascript har mulighed for at gøre brug af både det lokale og globale omfang af variabler (kode nedenfor viser at funktionen tager imod en variabel fra det globale scope.
var a = 4; //variabel i det globale omfang
(function myFunction() {
    var b = 5; //b er i det lokale omfang
    console.log(a * a); //giver 16, gør brug af a fra det globale omfang
}()); //self-call
Javascript module pattern er almindeligt javascript-kode-mønster. Koden ovenover gør faktiskt brug af den fondumentale konstruktur hvori paranteserne rundt om funktionen gør sådan at funktionen går fra at være en deklaration til ét funktions udtryk i stedet, der eksekverer sig selv.
Immediately-Invoked Function Expressions (IIFE)
én javascript funktion der eksekveres så snart den er defineret. 
(function(){
    var hello = "hello world"
    console.log(hello);
})();
der er paranteser rundt om funktionen for at forhindre adgang til variabler indeni IIFE functionen (så hello variablen har ingen adgang ude i det globale scope). De 2 sidste paranteser er skyld i eksekveringen ligesom når man normalt kører en funktion.
JavaScripts Prototype
Prototyper i javascript har at gøre med feks map, filter reduce osv. Disse 3 er Array Prototyper som også er standard javacript obects, og én array prototype er en predefineret function der tager et callback og gør noget med callback-regelen brugeren har defineret.
For at lave din egen array prototype constructor kan du gøre det på den her måde:
Array.prototype.myUcase = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

var a = ["a","b"]
a.myUcase();
console.log(a);
den her prototype tager this[i] (det originale string-array's index) og laver indexet til et stort bogstav. Ét andet prototype eksempel er ligesom i object orienteret programmering hvori feks én person klasse har en konstruktor, så kan javascript gøre det med én function (med stort bogstav til at starte fordi det er ét object konstructor). Eksempel nedenfor:
function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}
var me = new Person("Hallur", "við Neyst");
console.log(me);
User defined Callback Functions
En callback funktion er en funktion der sættes ind i parametret af én anden funktion, der så bruges i det lokale scope for den funktion.
function takeName(fName, lName, callback) {
    callback(fName, lName);
}
function alertName(fName, lName){ alert(fName + " " + lName);}
takeName('hallur', 'vid neyst', alertName);
I dette eksempel tager takeName 2 strings og en callback funktion, callback funktionen (alertName) tager selv fName og lName i dets parameter. takeName eksekverer funktionen med fName og lName der resulterer i én javascript alarm med indholdet af fName og lName.
Explain the methods map, filter and reduce
map laver et nyt array ud fra et andet array, med den regel at bruger-callback metoden gør noget ved hvert element (ganger med 2 i eksemplet). Nedenstående eksempel vil give [2,8,18,32].
var array = [1, 4, 9, 16];
const map = array.map(x => x * 2);
console.log(map);
filter lavet et nyt array ud fra et andet array, med den regel at bruger-callback metoden returnerer boolean ud fra en regel for hvert element, og hvis det giver false bliver det nuværende element i arrayet slettet (element skal være mindre end 10 i eksemplet). Nedenstående eksempel vil give [1,4,9].
var array = [1, 4, 9, 16];
const filter = array.filter(x => x < 10);
console.log(filter);
reduce laver én string eller et tal ud fra et array, med den regel at bruger-callback metoden gør noget ved de forrige elementer og det nuværende element (plusser de forrige med det nuværende i eksemplet). Nedenstående eksempel vil give 125.
var array = [65, 44, 12, 4];
const reduce = numbers.reduce((total, num) => total+num);

Provide examples of user defined reusable modules implemented in Node.js
modules i node js er ligesom libraries i javascript, det er nogle funktionaliter du kan gøre brug af i din applikation. For at du som bruger skal kunne lave et reusable module kan du gøre brug af exports for at gøre dine properties og metoder synlige udenfor modul filen. Eksempel nedenfor:
exports.sayHello = function () {
    return "hello";
};
Lad os sige at filen hedder helloModule.js. Lav så én anden javascript fil kald den demo_module.js med indholdet :
var http = require('http');
var dt = require('./helloModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("from function: " + dt.sayHello());
    res.end();
}).listen(8080);
kør filen ved at skrive: node demo_modules, og gå så ind på localhost:8080 for at se den.
Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.
let
let x = 1;
if (x === 1) {
  let x = 2; // x findes ikke i det lokale scope så vi kan lave en ny lokal x variabel
  console.log(x); //giver 2
}
console.log(x); //giver 1 fordi let sætter variablen til kun at kunne ændre sig i det lokale scope.
arrow funktions
function sayHello1(){
    return "hello";
} //gode gammeldags funktion
sayHello2=()=>"hello"; /*fylder mindre, og gør det samme, med arrow funktion behøves der ikke skrives function, og hvis det er samme linje behøver vi heller ikke curley brackes og return.*/
this
var a = 5;
var b = 5;
console.log(a+b); //giver 10. This i javascript har et globalt scope.
rest parameters
function mapThis(...theArgs) { //dette er et rest parameter, det tager et ubestemt antal numre, i dette tilfælde så mange numre man har lyst til.
    return theArgs.map((num) => {
      return num*2;
    });
  }
  function mapThis2(...[a,b,c]){ //dette er et rest parameter med op til 3 numre...
      return [a,b,c].map((num=>{
          return num*2;
      }));
  }
  console.log(mapThis(1, 2, 3,4,5)); //giver [2,4,6,8,10]
  console.log(mapThis2(1,2,3,4,5)); //giver [2,4,6]
de-structuring assignments
var strings = ['one', 'two', 'three', "try and remove this"];
var [one, ...rest] = strings;
[one] = ["one has been changed"];
[...rest] = ["two changed", "three changed"];
strings = [one, ...rest];
console.log(strings);
/*som ses på koden bygger vi om på arrayet, vi definerer one som det første element,
og ...rest definerer erstatning af hvad der var i forvejen af resten af stringsene*/
maps/sets 
const set = new Set([1,1, "hey", true]);
console.log(set); /* giver Set{1,hey,true}. Grunden til den ignorerer det andet et tal
er fordi i set skal ingen værdier gentage sig.
*/
const map = new Map([[1,'hey'],[2,'yo']]);
console.log(map.get(1)); /*
lidt ligesom hashmap holder map en nøgle og en tilhørende værdi til den nøgle
for hvert element, resultatet skulle gerne give -> hey.
*/
Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
export = opretter js modul til at exportere funktioner eller andet fra modulet så det kan blive brugt af andre applikationer der kan importere det.
import = importerer modulet til din applikation.
//------ myFunc.js ------
export default function hey() {  return "hey"};

//------ main1.js ------
import myFunc from 'myFunc'; //export default gør at vi selv kan navngive det vi importerer
myFunc(); /* i node js skriver man exports.function = function(){} i én fil og require'module' i den anden. */
Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
class Vehicle {
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
  getName () {
    return this.name;
  }
  getType () {
    return this.type;
  }
}
class Car extends Vehicle {
  constructor (name) {
    super(name, 'car');
  }
  getName () {
    return 'It is a car: ' + super.getName();
  }
} let car = new Car('Toyota'); /*konstructoren i Car gør brug af super som sætter navn og biltype på superklasse konstrukteren (Vehicle)
*/
console.log(car.getName());  //henter getName fra superklassen GetVehicle
/* det ligner rigtig meget inheritance i java, forskellen er dog at super bliver ikke brugt lige meget i java når der er tale om inheritance, fordi at  værdierne vil være default i java, og ikke i javsacript?, konstrukteren i dette tilfælde behøver heller ikke have samme navn som klassen i javascript, andet end det kan jeg ikke se den store forskel. */

Provide examples with es6, running in a browser, using Babel and Webpack

