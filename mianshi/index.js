// (function () {

//   function Foo() {
//     getName = function () {
//       console.log(1);
//     };
//     console.log('this is' + this)
//     return this;
//   }
//   Foo.getName = function () {
//     console.log(2);
//   };
//   Foo.prototype.getName = function () {
//     console.log(7);
//   };
//   var getName = function () {
//     console.log(4);
//   };

//   function getName() {
//     console.log(5);
//   }

//   fn3();
//   // 请写出一下的输出结果
//   // Foo.getName(); 
//   // getName(); 
//   // Foo().getName();  
//   // getName();  
//   // new Foo.getName();  
//   // new Foo().getName();  
//   // new new Foo().getName(); 

//   select1();
// }())

// function fn() {

//   for (var index = 0; index < 5; index++) {

//     setTimeout(function () {
//       console.log(index)
//     }, 1000)

//   }

// }

// function select(a, b) {

//   a = [5, 1, 7, 5, 3, 10];
//   b = [4, 2, 9, 6, 3]
//   var array = [];
//   var first = a[0],
//     second = b[0]
//   var i = first > second ? second : first;
//   for (let index = 1; index < i + 1; index++) {
//     var rs = a[index] - b[index];
//     if (rs < 0) rs = rs * -1
//     array.push(rs);
//   }
//   return Math.min.apply(null, array)
// }


// function select1() {
//   arr = [6, 4, 4, 4, 1, 1, 1]
//   var obj = {};
//   var k = arr.shift();
//   for (var i = 0; i < arr.length; i++) {
//     var key = arr[i];
//     if (obj[key]) {
//       obj[key]++;
//     } else {
//       obj[key] = 1;
//     }
//   }
//   var maxCount = 0;
//   var maxElement = arr[0];
//   for (var key in obj) {
//     if (maxCount < obj[key]) {
//       maxCount = obj[key];
//       maxElement = key;
//       if (maxCount > arr.length / k) break;
//     }
//   }

//   return maxElement;

// }



// function fn3(str) {
//   str = "abcdfwqjfbewgewlgbewjegwe";
//   let array = str.split('')
//   let hs = {};
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (hs[element]) {
//       hs[element]++
//     } else {
//       hs[element] = 1
//     }
//   }
//   var maxCount = 0;
//   var maxElement = array[0];
//   for (var key in hs) {
//     if (maxCount < hs[key]) {
//       maxCount = hs[key];
//       maxElement = key;
//     }
//   }
//   console.log(maxElement+'='+maxCount)
//   }



// var a=1;
// (function(){
//   console.log(a);
//   var a=2;
//   console.log(a)
// })()


// (function(){
//   function Foo(){
//     var i=0;
//     return function(){
//       console.log(i++)
//     }
//   }

//   var f1=Foo();
//    var f2=Foo();
//    f1();
//    f1();
//    f2();
//    f2();
// })()



 (function(){
  var value='1';
  check(value)
 })()


function fn(value) {
  var hs = {};
  for (let index = 0; index < value.length; index++) {
    const element = value[index];
    if (hs[element]) {
      hs[element]++;
    } else {
      hs[element] = 1;
    }
  }
    for (const key in hs) {
       if(hs[key]===1)console.log(key)
    }

}
