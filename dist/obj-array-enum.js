"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'toshi',
    age: 33,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
console.log(`${person.name}　さん　は、${person.age}歳です。${person.hobbies[0]}  ${person.role}`);
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザです');
}
