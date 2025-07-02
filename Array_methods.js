let marks_array = [10, 20, 30, "Not Present", undefined];

console.log("Length of array is " + marks_array.length);

marks_array[5] = 50;
console.log("Array after adding element at index 5: " + marks_array);

let num = [1, 2, 34, 56];

let b = num.toString();
console.log("Array toString(): " + b);

let c = num.join("_");
console.log("Array joined with '_': " + c);

let d = num.pop();
console.log("Popped element: " + d);
console.log("Array after pop(): " + num);

let r = num.push(100);
console.log("Array after push(100): " + num + ", New length: " + r);

let s = num.shift();
console.log("Shifted element: " + s);
console.log("Array after shift(): " + num);

let g = num.unshift(78);
console.log("Array after unshift(78): " + num + ", New length: " + g);

delete num[0];
console.log("Array after delete at index 0: " + num);

let arr = [1, 2, 3, 4, 5];
let arr2 = [45, 56, 34, 454];

let newarr = arr.concat(arr2);
console.log("Concatenated array: " + newarr);

let num2 = [343, 565, 5353, 776, 2, 878, 232423, 4334, 564];

num2.sort();
console.log("Array sorted alphabetically: " + num2);

let compare = (a, b) => a - b;
num2.sort(compare);
console.log("Array sorted numerically: " + num2);

num2.splice(2, 3, 3453, 656, 676);
console.log("Array after splice: " + num2);

let num4 = num2.slice(2, 5);
console.log("Sliced array (index 2 to 4): " + num4);

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr4 = arr3.map(value => value * 2);
console.log("Array after map (values doubled): " + arr4);

let arr5 = arr3.filter(value => value % 2 === 0);
console.log("Filtered even numbers: " + arr5);

let arr6 = arr3.reduce((acc, value) => acc + value, 0);
console.log("Sum of all elements: " + arr6);
