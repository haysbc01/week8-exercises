console.log('secondGreatLow');

function compare(a,b) {
  return a-b;
}

function noDups (arr){
  var newArr = []
  for (var x = 0; x < arr.length; x++){
    if (arr[x]!= arr[x+1]){
      newArr.push(arr[x]);
    }
}return newArr
}

function secondGreatLow (arr){
  var order = arr.sort(compare);
  // console.log(order)
  var newArr = noDups(order);
  // console.log(newArr);


    var secondHigh = newArr[newArr.length-2];
    var secondLow = newArr[1];
    var output = (secondLow + ' ' + secondHigh);

  return output
};
console.log(secondGreatLow([7,7,12,98,106]));
console.log(secondGreatLow([7,7,7,12,98,106]));
console.log(secondGreatLow([65,33,2,10000,106]));
console.log(secondGreatLow([75,21]));

console.log('timeConvert');


function timeConvert(num){
  var hrs = 0
  for (var i = 0; i < num; i++){
    if(num > 60){
      num -= 60;
      hrs += 1
    }
  }return hrs + ':' + num
}

console.log(timeConvert(63));
console.log(timeConvert(163));
console.log(timeConvert(129));

//
//
console.log(bracketMatcher);

function check (str){
  // var str = str.split('')
  var arr = []
  // console.log(str)
  for (var i = 0; i<str.length; i++){
    if(str[i] == '(' || str[i] == ')'){
      arr.push(str[i])
    }

  var opening = arr.lastIndexOf('(');

  var closing = arr.indexOf(')',opening);
  arr.splice(opening, ((closing+1)-opening))

}
return arr
}

function bracketMatcher(str){

  if(check(str).length > 0){
    return false
  } return true

}


console.log(bracketMatcher('(hello (world))'));
console.log(bracketMatcher('((hello (world))'));
console.log(bracketMatcher('(()(())()()()())'));
console.log(bracketMatcher('(((((())'));
console.log(bracketMatcher(')((((())'));
console.log(bracketMatcher('hello world'));
console.log(bracketMatcher('(()(())'));

// function bracketMatcher(str){
//
//   var arr = []
//
//   for (var i = 0; i<str.length; i++){
//     if(str[i] == '(' || str[i] == ')'){
//       arr.push(str[i])
//     }
// }
// var opening = arr.lastIndexOf('(');
//
// var closing = arr.indexOf(')',opening);
// arr.splice(opening, ((closing)-opening))
//
//
// console.log(opening, closing)
//   if(arr.length > 0){
//     return false;
//   } return true;
// }
