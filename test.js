// break
// for (let i = 1; i <= 100; i++){
//     if (i > 50) {
//         break;
//     }
//     console.log(i)
// }
let start = 0;
let str = "1234567890";
let counter = {};

 counter[str[start]] = 2;
if (counter[str[start]]) {
    console.log(counter[str[start]]);
} else {
    console.log("failed");
}