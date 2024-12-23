// console.log("Jack Ma maslahatlari");

// TASK F
// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

function findDoublers(string) {
  let charCount = {};

  for (let result of string) {
    if (charCount[result]) {
      return true;
    }
    charCount[result] = 1;
  }
  return false;
}

console.log(findDoublers("hello")); // true
console.log(findDoublers("world")); // false
console.log(findDoublers("apple")); // true
console.log(findDoublers("bella")); // true

// E TASK
// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

const getReverse = (reversed) => {
  let originReverse = reversed.split("").reverse().join("");
  return originReverse;
};
console.log(getReverse("helloMIT"));

//D task
// const checkWord = (input1, input2) => {
//   let checkInput1 = input1.split("").sort().join("");
//   let checkInput2 = input2.split("").sort().join("");

//   return checkInput1 === checkInput2;
// };

// console.log(checkWord("mitgroup", "gmtiprou"));

// console.log(checkWord("hello", "world"));

// const list = [
//   "yaxshi talaba bo'ling", //0-20
//   "to'gri boshliq tanlang va ko'proq hato qiling", //20-30
//   "uzingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq endi", //60
// ];

//Callback

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a <= 20 && a <= 30) callback(null, list[1]);
//   else if (a <= 30 && a <= 40) callback(null, list[2]);
//   else if (a <= 40 && a <= 50) callback(null, list[3]);
//   else if (a <= 50 && a <= 60) callback(null, list[4]);
//   else {
// setTimeout(() => {
//   callback(null, list[5]);
// }, 5000);

//     setInterval(() => {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed her 0");
// maslahatBering(55, (err, data) => {
//   if (err) console.log("Error", err);
//   else {
//     console.log("javob", data);
//   }
// });
// console.log("passed here 1");

//async function ========

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a <= 20 && a <= 30) return list[1];
//   else if (a <= 30 && a <= 40) return list[2];
//   else if (a <= 40 && a <= 50) return list[3];
//   else if (a <= 50 && a <= 60) return list[4];
//   else {
//     // return list[5];
//     // setTimeout(() => {
//     //   callback(null, list[5]);
//     // }, 5000);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//       //===========

//       setInterval(() => {
//         resolve([list5]);
//       }, 4000);
//     });
//   }
// }

//call via then/catch

// console.log("passed her 0");

// maslahatBering(40)
//   .then((data) => {
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });
// console.log("passed here 1");

// call via asyn/await

// async function run() {
//   let javob = await maslahatBering(21);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

//MIT TASK

// function mitTask(letter, engineer) {
//   if (letter.length !== 1) {
//     return "Please provide a single letter as the first parameter.";
//   }

//   let count = 0;

//   for (let howmany of engineer) {
//     if (howmany === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// let result = mitTask("o", "hello");
// console.log(`The letter appears ${result} times.`);

// DEFINE
// function qoldiqBolish(a, b, cb) {
//   if (a === 0) {
//     cb("Mahraj nolga teng bolmasin!", null, "ishlamaydi");
//   } else {
//     const c = a % b;
//     cb(null, c, "ishladi");
//   }
// }

// // CALL
// qoldiqBolish(6, -1, (err, data, data2) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("data:", data);
//     console.log("data2:", data2);
//     console.log("ANY LOGIC");
//   }
// });

//mit task 2

// function findNumber(inputstring) {
//   const digits = inputstring.match(/\d/g);

//   return digits ? digits.length : 0;
// }

// const input = "hello234MIT621";
// const findInput = findNumber(input);
// console.log(`here has ${findInput} numbers`);

//MIT TASK
// class Shop {
//   constructor(amount, product, price) {
//     this.amount = amount;
//     this.product = product;
//     this.price = price;
//   }
//   receive() {
//     console.log(
//       `today we received ${this.amount} ${this.product}  and the amount was about ${this.price} krw `
//     );
//   }

//   sell() {
//     console.log(`today I sold ${this.amount}  ${this.product} `);
//   }
//   qoldiq() {
//     console.log(`now left ${this.amount}  ${this.product}`);
//   }
// }

// const shop = new Shop(30, "breads", 100000);
// const shop1 = new Shop(22, "breads");
// const shop2 = new Shop(8, "breads");

// shop.receive();
// shop1.sell();
// shop2.qoldiq();
