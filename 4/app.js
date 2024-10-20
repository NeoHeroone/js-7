let user = ["name", "age", "job"];

let uzun = user.reduce((a,b) => a.length > b.length ? a : b);

console.log("Siz kiritgan textlardan eng uzuni: " + uzun);