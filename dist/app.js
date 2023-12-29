"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// function merge<T,U>(objA:T,objB:U){
//   return Object.assign(objA,objB)
// }
const mergedObject = merge({ name: 'MAX', hobbies: ['sports'] }, { age: 30 });
console.log(mergedObject.name);
console.log(mergedObject.hobbies);
console.log(mergedObject.age);
function countAndDescribe(element) {
    let descriptionText = '値がありません';
    if (element.length) {
        descriptionText = '値は' + element.length + '個です';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
