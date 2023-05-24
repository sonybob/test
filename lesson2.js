// let count = 1;
// function factorial(fact) {
//     for (let i = 1; i <= fact; i++) {
//         count = count * i;
//     }
// }
// factorial(9);
// console.log(count);

//__________________________________________________________________________________________
// let count = 1;
// let factorial = function (fact) {
//     for (let i = 1; i <= fact; i++) {
//         count = count * i;
//     }
// }
// factorial(5);
// console.log(count);


//__________________________________________________________________________________________
// let count = 1;
// let factorial = fact => {
//     if (typeof fact !== "number") console.log("must be number");
//     for (let i = 1; i <= fact; i++) {
//         count = count * i;
//     }
//     console.log(count);
// }
// factorial(5);

//__________________________________________________________________________________________

// function factorial(fact) {
//     if (typeof fact !== "number") throw new Error("must be number");
//     let count = 1
//     for (let i = 1; i <= fact; i++) {
//         count = count * i;
//     }
//     return (count);
// }
// try {
//     let result = factorial(5);
//     console.log(result);
// }
// catch (Error) {
//     console.error(Error);
// }
//__________________________________________________________________________________________

// let factorial = fact => {
//     if (typeof fact !== "number") throw new Error("must be a number");
//     let count = 1;
//     for (let i = 1; i <= fact; i++) {
//         count = count * i;
//     }
//     return (count);
// }
// try {
//     let result = factorial("5");
//     console.log(result);
// }
// catch (Error) {
//     console.error(Error);
// }
//______________________________________________________________________________________

// let users = [{ name: 'Bob', groups: ['admin', 'moder', 'ambas'], age: 26 },
// { name: 'Jack', groups: ['admin', 'beginuser'], age: 21 },
// { name: 'Kent', groups: ['moder', 'ambas'], age: 18 },
// { name: 'Paul', groups: ['admin', 'user'], age: 30 },
// { name: 'James', groups: ['superuser', 'ambas'], age: 23 },
// { name: 'Mike', groups: ['admin', 'poweruser'], age: 37 },
// { name: 'Alex', groups: ['admin', 'dev'], age: 39 }];


// function usersgroup(users) {
//     const mySet = new Set();

//     for (i = 0; i < users.length; i++) {

//         for (j = 0; j < users[i].groups.length; j++) {
//             mySet.add(users[i].groups[j]);
//         }
//     }
//     console.log(mySet)

// }
// usersgroup(users);
//______________________________________________________________________________________

// let users = [{ name: 'Bob', groups: ['admin', 'moder', 'ambas'], age: 26 },
// { name: 'Jack', groups: ['admin', 'beginuser'], age: 21 },
// { name: 'Kent', groups: ['moder', 'ambas'], age: 18 },
// { name: 'Paul', groups: ['admin', 'user'], age: 30 },
// { name: 'James', groups: ['superuser', 'ambas'], age: 23 },
// { name: 'Mike', groups: ['admin', 'poweruser'], age: 37 },
// { name: 'Alex', groups: ['admin', 'dev'], age: 39 }];

// function names(users){
//     let newarr = [];
//     for (i = 0; i < users.length; i++) {
//         newarr.push (users[i].name);
//     }
//     console.log(newarr);
// }
// function ages(users){
//     let mid = 0;
//     for (i = 0; i < users.length; i++) {
//         mid = mid + users[i].age;
//     }
//     console.log(parseInt( mid/users.length));
// }

// function adm(users) {
//    const namesadm = [];
//     for (i = 0; i < users.length; i++) {

//         for (j = 0; j < users[i].groups.length; j++) {
//             if (users[i].groups[j] == 'admin'){
//                 namesadm.push(users[i].name); 
//             }
//         }
//     }
//     console.log(namesadm);

// }

// function main(array, filtr){
//     filtr(array);
//     }

//     main(users, ages);
//______________________________________________________________________________________



