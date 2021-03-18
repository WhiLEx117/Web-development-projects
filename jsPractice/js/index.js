// function hornear(pastel) {
//   return function (ingredientes) {
//     return pastel + " " + ingredientes;
//   };
// }
// let horno = hornear("pastelito");
// console.log(horno("horneando"));

// function hardware(software) {
//   return function (obj) {
//     return software + " " + obj;
//   };
// }
// let keys = hardware("windows");
// console.log(keys("Monitor"));

// let rooms = ["H1", "H2", "H3"];
// let newRooms = rooms.map(function (rm) {
//   if (rm == "H3") {
//     return "H4";
//   } else {
//     return rm;
//   }
//   {
//   }
// });
// console.log(newRooms);

var numeros = [1, 4, 9];
var raices = numeros.map(Math.sqrt);
console.log(raices);


// function hornear(pastel) {
//   return function (ingredientes) {
//     return pastel + " " + ingredientes;
//   };
// }
// let horno = hornear("pastelito");
// console.log(horno("horneando"));

// function hardware(software) {
//   return function (obj) {
//     return software + " " + obj;
//   };
// }
// let keys = hardware("windows");
// console.log(keys("Monitor"));

// let rooms = ["H1", "H2", "H3"];
// let newRooms = rooms.map(function (rm) {
//   if (rm == "H3") {
//     return "H4";
//   } else {
//     return rm;
//   }
//   {
//   }
// });
// console.log(newRooms);

// var numeros = [1, 4, 9];
// var raices = numeros.map(Math.sqrt);
// console.log(raices);

//SIDE EFFECTS
// let globalState = 0;

// function changeState() {
//   globalState += 1;
// }
// changeState();
// console.log(globalState);

//INMUTABLIDAD
// const count = 0;
// function increment(num) {
//   return num + 1;
// }
// const newCount = increment(count);
// console.log(newCount);

//MAP
// function transform(arr, fn) {
//   let list = new Array(arr.length);

//   for (let i = 0; i < arr.length; i++) {
//     list[i] = fn(arr[i], i, arr);
//   }
//   return list;
// }
// let powToTwo = transform([1, 2, 3, 4, 5, 6] , (el) => el * 2);
// console.log(powToTwo);

//FILTER
// function exclusion(arr, fn) {
//   let list = new Array(arr.length);

//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i, arr)) {
//       list.push(arr[i]);
//     }
//   }

//   return list;
// }
// let greaterThan2 = exclusion([1, 2, 3, 4, 5, 6], (el) => el < 2);
// console.log(greaterThan2);
// // 3, 4, 5, 6

//REDUCE
function composition(arr, fn, init) {
  let total = init;

  for (let i = 0; i < arr.length; i++) {
    total = fn(total, arr[i], i, arr);
  }

  return total;
}
let sum = composition([1, 2, 3, 4, 5, 6], (acc, el) => el + acc, 0);
console.log(sum);
// 21
