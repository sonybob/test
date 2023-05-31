// let bot = prompt("Скільки буде 7 + або -15");
// switch (true) {
//     case Number(bot) === -8:
//     case Number(bot) === 22:
//     case bot === "I am not bot":
//         console.log("True");
//         break;
//     default: console.log("False");
// }
//______________________________________________________________________________________________________________________________
// let bot = prompt("Скільки буде 7 + або -15");
// if (Number(bot) === -8 || Number(bot) === 22) {
//     console.log("True");
// } else if (bot === "I am not bot") {
//     console.log("True");
// }
// else {
//     console.log("False");
// }

//______________________________________________________________________________________________________________________________
// let bot = prompt("Скільки буде 7 + або -15");
// console.log(`${(Number(bot) === -8) || (Number(bot) === 22) || (bot === "I am not bot") ? "True" : "False"}`)

// const balance = 100;
// const bonusBalance = 120;
// let isBanned = false;
// let isExist = false;
// let isSalling = true;

// let canBuy = (balance >= 1000 || bonusBalance >= 100) && !isBanned && !isExist && isSalling;
// console.log(`${canBuy ? "can buy" : "can't buy"}`);

// const toPowerArrow = (num, power) => num ** power;
// console.log(toPowerArrow(5, 2));

//______________________________________________________________________________________________________________________________

// function credit(age, isWork = false) {
//     if (age > 24 && isWork === true) {
//         return 500;
//     } else if (age > 24 && isWork === false) {
//         return 100;
//     } else {
//         return 0;
//     }
// }

// function canBuy(profuctPrice, age, money, isWork = false) {
//     return `${(credit(age, isWork) + money) >= profuctPrice ? "Can buy" : "No money"}`

// }
// console.log(canBuy(2000, 25, 1600, true));
//______________________________________________________________________________________________________________________________

// const listTasks = ["Купити фарш", "Купити сир", "Купити соус"];

// function addTask(task) {
//     listTasks.push(task);
// }

// function delTask(task) {
//     if (listTasks.includes(task)) {
//         return listTasks.splice(listTasks.indexOf(task), 1);
//     }
// }

// function taskPriority(task) {
//     if (listTasks.includes(task)) {
//         listTasks.unshift(delTask(task)[0]);
//     }
// }

// addTask("Buy agg");
// addTask("Buy milk");
// addTask("Buy baget");
// console.log(listTasks);
// delTask("Buy milk");
// console.log(listTasks);
// taskPriority("Buy agg");
// console.log(listTasks);
// ______________________________________________________________________________________________________________________________

// const url = "http://goit.com/course/javascript";

// function urlElements(url) {

//     const [first, _, second, ...others] = url.split("/");
//     if ((first === "http:" || first === "https:") && second.includes(".")) {

//         console.log(`Protocol: ${first.split(":")[0]}`);
//         console.log(`Host: ${second}`)
//         console.log(`Path: /${others.join("/")}`);

//     } else {
//         console.log("Wrong URL!!!");

//     }
// }
// urlElements(url);

// const arr = ["!", "JS", "love", "I"];
// let str = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     str.push(arr[i]);
// }
// console.log(str.join(" "));
//______________________________________________________________________________________________________________________________

// const balance = 100;
// const operations = [1000, -700, 300, -500, 10000];

// function balanceAfterOperations(balance) {
//     for (const element of operations) {
//         balance = balance + element;
//     }
//     return balance;
// }

// function positiveBalance(balance) {
//     for (const element of operations) {
//         balance = balance + element;
//         if (balance < 0) {
//             return false;
//         } else {
//             continue;
//         }
//     }
//     return true;

// }

// function midleInOut() {
//     let posBalance = null;
//     let minBalance = null;
//     let minCount = 0;
//     let posCount = 0
//     for (const element of operations) {
//         if (element > 0) {
//             posCount++;
//             posBalance += element;

//         }
//         else if (element < 0) {
//             minCount++;
//             minBalance += element;

//         }
//         console.log(posBalance, minBalance);
//     }
//     return ({ "Mid+:": posBalance / posCount, "mid-:": minBalance / minCount });

// }

// console.log(balanceAfterOperations(balance));
// console.log(positiveBalance(balance));
// console.log(midleInOut(balance));
//______________________________________________________________________________________________________________________________

// function sum(a, b) {
//     return a + b;
// }
// function mul(a, b) {
//     return a * b;
// }
// function calc(a, b, whatDo) {
//     console.log(whatDo.name);
//     return whatDo(a, b);
// }
// console.log(calc(2, 2, mul));
//______________________________________________________________________________________________________________________________

// function power(pow) {
//     return function (num) {
//         return num ** pow;
//     }
// }

// const powerOfTwo = power(2);
// console.log(powerOfTwo(2));

// const powerOfThree = power(3);
// console.log(powerOfThree(2));

// console.log(power(2)(5));
//______________________________________________________________________________________________________________________________

// const power = pow => num => num ** pow;

// const powerOfTwo = power(2);
// console.log(powerOfTwo(2));

// const powerOfThree = power(3);
// console.log(powerOfThree(2));

// console.log(power(2)(5));

//______________________________________________________________________________________________________________________________map

// const prices = [[100, 200], [120, 100], [200, 350]];

// const newArray = prices.map((el) => el[1] - el[0]).filter((el) => el > 0);
// console.log(newArray);
//______________________________________________________________________________________________________________________________reduce

// const operations = [1000, -700, 300, -500, 10000];

// const newArr = operations.reduce((acc, value) => {
//     return acc += value;
// }, 0)
// console.log(newArr);
//______________________________________________________________________________________________________________________________reduce

// const operations = [1000, -700, 300, -500, 10000];

// const maxElement = operations.reduce((acc, value) => {
//     if (value > acc) {
//         return value;
//     } else {
//         return acc;
//     }
// }, 0)
// console.log(maxElement);

//______________________________________________________________________________________________________________________________reduce

// const operations = [1, 4, 4, 10];
// const midValue = operations.reduce((acc, value) => {
//     return acc += value / operations.length;
// }, 0)
// console.log(midValue);
//______________________________________________________________________________________________________________________________reduce

// const operations = [1, 4, 4, 10];
// const midValue = operations.reduce((acc, arrEl, index) => {
//     if (index != operations.length - 1) {
//         return acc += arrEl;
//     } else {
//         return (acc += arrEl) / operations.length;
//     }
// }, 0)
// console.log(midValue);
//______________________________________________________________________________________________________________________________find

// const arr = [1, 4, 4, 10, 20];
// const newArr = arr.find(value => { return value > 5; });
// console.log(newArr);
//______________________________________________________________________________________________________________________________findindex

// const arr = [1, 4, 4, 10, 20];
// const findIndex = arr.findIndex(value => value > 5);
// console.log(findIndex);

//______________________________________________________________________________________________________________________________

// const arr = [1, 4, 5, 10, 20];
// function some(arr, value) {
//     for (el of arr) {
//         if (el === value) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log(some(arr, 5));
//______________________________________________________________________________________________________________________________

// const arr = [1, 4, 5, 10, 20];
// function some2(arr, value) {

//     const res = arr.find(el => el === value);

//     return res === value ? true : false;
// }
// console.log(some2(arr, 8));
//______________________________________________________________________________________________________________________________some

// const arr = [1, 4, 5, 10, 20];
// console.log(arr.some(el => el === 5));

//______________________________________________________________________________________________________________________________flat

// const prices = [[100, 200], [120, 100], [200, 350]];
// const res = prices.flat();
// console.log(res);

//______________________________________________________________________________________________________________________________flat

// const prices = [[100, 200], [120, 100], [200, [30, 60]]];
// const res = prices.flat(2);
// console.log(res);

//______________________________________________________________________________________________________________________________flatmap

// const prices = [[100, 200], [120, 100], [200, 350]];
// const res = prices.flatMap(el => el.concat(5));
// console.log(res);

//______________________________________________________________________________________________________________________________sort

// const arr = ["ivan", "bob", "jack", "andy"];
// arr.sort()
// console.log(arr);

//______________________________________________________________________________________________________________________________sort

// const arr = [9, -4, 6, 3, -5];
// const sort = arr.sort((a, b) => b - a); //or a-b

// ////console.log(arr.sort());
// ////console.log(arr.sort(Number));
// console.log(sort);
//______________________________________________________________________________________________________________________________

// const userName = "Ivan have sername pizdorvan";

// let newName = userName.slice(0, userName.indexOf(" ")) + userName.slice(userName.lastIndexOf(" "), userName.length);
// console.log(newName);
//______________________________________________________________________________________________________________________________srting

// const num1 = "80639999999";
// const num2 = "+380639999999";
// const num3 = "+38(063)9999999";
// const num4 = "+38063999-99-99";
// const num5 = "+38(063) 999-99-99";
// const num6 = "    +38(063) 999-99-99";

// const bNum1 = "063999";
// const bNum2 = "+3d0639-999-99";
// const bNum3 = "0_639999999";
// const bNum4 = "0+63g9999999";

// function isPhoneNumber(num) {
//     num = num.trim();
//     num = num.replace("+38", "8");

//     if (!num.startsWith(8)) {
//         return false;
//     }
//     num = num.replaceAll("(", "");
//     num = num.replaceAll(")", "");
//     num = num.replaceAll("-", "");
//     num = num.replaceAll(" ", "");
//     if (num.length != 11) {
//         return false;
//     }
//     let onlyNum = true;
//     for (el of num) {
//         if (isNaN(Number(el))) {
//             onlyNum = false;
//             break;
//         }
//     }
//     return onlyNum;
// }
// console.log(isPhoneNumber(bNum4));
//______________________________________________________________________________________________________________________________padstart_ padand

// const film = "Intarsteller";
// console.log(film.padStart(60, "#"));
// console.log(film.padEnd(40, "*"));
// console.log(film.repeat(10, " "))
//______________________________________________________________________________________________________________________________

// const cart = "9999222288884444";

// let newcart = cart.slice(- 4).padStart(16, "*")
// console.log(newcart);

//_________________________________________________________________OBJECTS_____________________________________________________________

//______________________________________________________________________________________________________________________________sort

// const users = [
//     { name: "Alex", age: 25 },
//     { neme: "Bob", age: 35 },
//     { name: "Jhon", age: 18 },
//     { name: "Verka", age: 45 }
// ];

// function sortUsers(users) {
//     console.log(users.sort((a, b) => a.age - b.age));
// }
// sortUsers(users);

//______________________________________________________________________________________________________________________________sort

// const users = [
//     {
//         name: "Ivan",
//         surname: "Pizdorvan",
//         age: 30,
//         skills: ["dev", "devops"],
//     },
//     {
//         name: "Sveta",
//         surname: "Davalka",
//         age: 45,
//         skills: ["design"],
//     },
// ];

// const newUsers = users.map((elem) => {
//     return {
//         fullName: `${elem.name} ${elem.surname}`,
//         skills: `${elem.skills.length}`,
//     };
// });
// console.log(newUsers);
//______________________________________________________________________________________________________________________________


