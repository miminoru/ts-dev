function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// function merge<T,U>(objA:T,objB:U){
//   return Object.assign(objA,objB)
// }

const mergedObject = merge({name:'MAX',hobbies:['sports']},{age:30})
console.log(mergedObject.name)
console.log(mergedObject.hobbies)
console.log(mergedObject.age)

type Lengthy = {
  length : number
}

function countAndDescribe<T extends Lengthy>(element:T){
  let descriptionText = '値がありません'
  if(element.length){
    descriptionText = '値は' + element.length + '個です'
  }
  return [element,descriptionText]
}

console.log(countAndDescribe(['sports','Cooking']))


function extractAndConvert<T extends object, U extends keyof T>(obj:T,key:U){
  return 'Value: ' + obj[key]
}

extractAndConvert({name:'Max'}, 'name')
