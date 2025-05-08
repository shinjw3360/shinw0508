// //배열 [array]
// const arr = ['a', 'b', 'c', 'd'];
// console.log(arr.length);

// // 반복문(loop)
// // for(let i = 0; i < arr.length; i++) {
// //   console.log('반복문', arr[i]);
// // }

// // arr.forEach((arr, index) => {
// //   console.log(arr, index)
// // });

// // arr.map((arr, index) => {
// //   console.log(arr, index)
// // });

// //객체는 오브젝트(object) 라고 합니다. // {key1 : value1, key2 : value2}
// const objs = {
//   a: 1,
//   b: 'a',
//   c: () => {
//     console.log('객체 함수 출력');
//   },
//   d: ['a', 'b', 'c'],
// };

// // const obj = {
// //   a: 1,
// //   b: 'a',
// //   c: () => {
// //     console.log('객체 함수 출력');
// //   },
// //   d: ['a', 'b', 'c'],
// // };

// console.log(objs.d);

// objs.d.forEach((obj) => {
//   console.log(obj);
// });

// // console.log(obj.d);

// //형(type) - 원시타입(primative type), 객체타입 (object type)
// //원시타입 : 문자, 숫자, null, undifiend, boolean(true, false)
// //객체타입 : 함수, 배열, 객체

const a = 'a';
const b = 1;

const c = 'a변수에는 문자 ' + a + '가 있고, b 변수에는 숫자' + b + '가 있다.';

//탬플릿 문자열
const d = `a변수에는 문자 ${a} 가 있고, b 변수에는 숫자 ${b} 가 있다.`;
console.log(d);
