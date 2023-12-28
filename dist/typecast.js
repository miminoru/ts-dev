"use strict";
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(1, 5);
function printResult(num) {
    console.log(`result:${num}`);
}
let combineValues;
combineValues = add;
console.log(combineValues(1, 2));
const errorBug = {
    email: '正しいメールアドレスではありません',
    username: 'ユーザ名に記号を含めることはできません'
};
console.log(errorBug.email);
console.log(errorBug.username);
