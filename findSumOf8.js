// const findSumOf8 = (range) => {
//   let current = range.length - 1;
//   const performanceFunc = performance.now()
//   for (let i = 0; i < range.length; i++) {
//     if (range[i] + range[current] > 8) {
//       i--;
//       current--;
//     } else if (i === current) {
//       current--;
//       i--;
//     }
//     else if (range[i] + range[current] < 8) {
//       current = range.length - 1
//     }
//     else if (range[i] + range[current] === 8) {
//       // console.log(performance.now());
//       // console.log(i + " " + current);
//     }
//   }

//   // console.log("8 cannot be found!!!")
// }
