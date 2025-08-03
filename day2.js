// const myObj = {
//     "name":"Pranay",
//     "age":25,
//     "isStudent":true,
//     "hobbies":["reading","coding"],
//     "address":{
//         "city":"Newyork",
//         "zipCode":"10001"
//     }
// }
// console.log(`Name:${myObj.name}`);
// console.log(`Hobby:${myObj.hobbies[0]}`);
// console.log(`Zip:${myObj.address.zipCode}`);

// let arr = []
// for(i=0;i<=100;i++) {
//     arr.push(i*3)
    
// }
// console.log(arr)
// let arr1 = []
// for(i=0;i<arr.length;i++) {
//     if(i%5==0) {
//         arr1.push(i)
//     }
// }
// console.log(arr1)

// let sum = 0;
// for(let j = 0; j < arr1.length; j++) {
//     sum += arr1[j];
// }
// console.log("Sum of arr1 values:",sum);

const users = [
    {name:'Alice',age:25},
    {name:'Bob',age:30},
    {name:'Charlie',age:25}
];
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const avgAge = totalAge / users.length;
console.log("Average age:", avgAge);