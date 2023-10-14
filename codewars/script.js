// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7)  ? 'Senior' : 'Open');
// };  

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));

// function findOutlier(integers){
//     let even = new Array();
//     let odd = new Array();
//     integers.forEach(i => {
//         i % 2 === 0 ? even.push(i) : odd.push(i);
//     });

//     return even.length > odd.length ? odd[0] : even[0];
// };


// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

// OR
// function findOutlier(int){
//     var even = int.filter(a => a % 2 == 0);
//     var odd = int.filter(a => a % 2 !== 0);
//     return even.length == 1 ? even[0] : odd[0];
// };

// function getSum(a, b) {
//     let sum = 0;

//     if (a < b) {
//         while(a <= b) {
//             sum += a;
//             a++;
//         };
//     } else {
//         while(a >= b) {
//             sum += a;
//             a--;
//         };
//     };
// };

// OR
function getSum(a, b) // (1, 3) return 6
{
    let min = Math.min(a, b), max = Math.max(a, b);
    // return (max - min + 1) * (min + max) / 2;
    console.log((max - min + 1));
}

// console.log(getSum(0, -1));
getSum(1, 3);
// (Math.abs(a - b) + 1) * (a+b) / 2;