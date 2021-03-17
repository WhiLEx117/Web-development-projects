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
