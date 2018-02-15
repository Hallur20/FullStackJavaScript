let promiseFactory = function (msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var ok = true;
            var err = "UPPPS";
            if(msg = "a"){
                ok = false;
                err = "a is not allowed";
            }
            if (ok) {
                resolve(msg.toUpperCase());
            } else {
                reject(err);
            }
        }, delay);
    });
};

let p1 = promiseFactory("Msg from Promise", 4000);
let p2 = promiseFactory("a", 1000);
let p3 = promiseFactory("Hi Class", 3000);
let p4 = promiseFactory("Promises are cool", 1000);
Promise.all([p1,p2,p3,p4])
.then(data=>{
    console.log(data.join("\n"));
}).catch(err=>console.log("Error: " + err));