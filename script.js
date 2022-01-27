// HW 11
// 1
function chessBoard(str) {
   var str0 = str.charAt(0);
   var str1 = +str.charAt(1);
   console.log(str1 % 2 !== 0)
   if (str0 === 'a' || str0 === 'c' || str0 === 'e' || str0 === 'g') {
      if (str1 % 2 !== 0) {
         return 'черное';
      } else if (str1 % 2 === 0) {
         return 'белое';
      }
   } else if (str0 === 'b' || str0 === 'd' || str0 === 'f' || str0 === 'h') {
      if (str1 % 2 === 0) {
         return 'черное';
      } else if (str1 % 2 !== 0) {
         return 'белое'
      }
   }
}
console.log(chessBoard('a1'));
console.log(chessBoard('e5'));
console.log(chessBoard('d1'));
console.log(chessBoard('h8'));
console.log(chessBoard('f3'));
console.log(chessBoard('d6'));

// 2
function mirror(arr) {
   var newArr = [];
   for (var i = 0; i < arr.length; i++) {
      newArr.unshift(arr[i])
   }
   return arr.concat(newArr.slice(1))
}
console.log(mirror([0, 2, 4, 6]));
console.log(mirror([1, 2, 3, 4, 5]));
console.log(mirror([3, 5, 6, 7, 8]));


// Вар 2
// function mirror(arr) {
//    var newArr = arr;
//    return newArr.concat(arr.slice(0, arr.length - 1).reverse())

// }
// console.log(mirror([0, 2, 4, 6]));
// console.log(mirror([1, 2, 3, 4, 5]));
// console.log(mirror([3, 5, 6, 7, 8]));