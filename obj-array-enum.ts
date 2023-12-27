
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

type Person = {
  name:string
  age:number
  hobbies:string[],
  role:Role
}

const person:Person = {
  name: 'toshi',
  age: 33,
  hobbies: ['sports','cooking'],
  role:Role.ADMIN
}

console.log(`${person.name}　さん　は、${person.age}歳です。${person.hobbies[0]}  ${person.role}` )

if(person.role === Role.ADMIN){
  console.log('管理者ユーザです')
}

