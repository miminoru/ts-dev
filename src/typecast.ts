type combinable = number | string


function add(a:combinable, b:combinable){
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add(1,5)

function printResult(num:number) : void{
  console.log(`result:${num}`)
}

let combineValues
combineValues = add

console.log(combineValues(1,2))

type ErrorContainer = {
  [prop: string] : string
}

const errorBug:ErrorContainer = {
  email:'正しいメールアドレスではありません',
  username:'ユーザ名に記号を含めることはできません'
}

console.log(errorBug.email)
console.log(errorBug.username)

