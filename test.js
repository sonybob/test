//____________________________________________________________________Бінарний пошук
// function serch(arr, num) {
//     let min = 0, mid = 0, max = (arr.length);

//     while (min <= max) {
//         mid = Math.ceil((min + max) / 2);
//         let value = arr[mid]
//         if (value == num) return { "position": mid, "name": num };
//         else if (value > num) {
//             max = mid - 1;
//         }
//         else min = mid + 1;
//     }
// }

// arr = [1, 3, 5, 7, 8, 9, 10];
// console.log(serch(arr, 5))
//__________________________________________________________________Сортування вибором

// function sort(arr) {
//     let arr2 = [], index = null, min = arr[0];


//     for (i = 0; i <= arr.length; i++) {
//         min = Infinity;
//         for (j = 0; j < arr.length; j++) {

//             if (arr[j] < min) {
//                 min = arr[j];
//                 index = j;
//             }
//         }
//         arr2.push(arr[index]);
//         arr[index] = undefined;
//     }
//     arr2.pop()
//     return arr2;
// }
// arr = [36, 27, 58, 11, 45, 55, 22];
// console.log(sort(arr));

//______________________________________________________________________recurcion

//_____________________________________________________factorial
// function fact(num) {
//     if (num <= 0) {
//         console.error("number not correct")
//     }
//     else if (num == 1) return 1
//     else {
//         let f = (num * fact(num - 1));
//         return f;
//     }
// }
// console.log(fact(5));


//_________________________________________________________fibo
// function fact(num) {
//     if (num < 0) {
//         console.error("number not correct")
//     }
//     else if (num == 1) return 0
//     else if (num == 2) return 1
//     else {
//         return fact(num - 1) + fact(num - 2);

//     }
// }

// console.log(fact(7));

//_________________________________________________________SUM_arr

// function sum(arr) {
//     if (arr.length == 0) {
//         return 0;
//     }
//     else {
//         let f = arr[0];
//         f = f + sum(arr.slice(1));
//         return f;
//     }
// }
// let arr = [2, 3, 6];
// console.log(sum(arr));
//_________________________________________________________SUM_arr2


// function sum(arr, f = 0, index = 0) {
//     if (arr[index]) {
//         return sum(arr, f + arr[index], ++index);
//     }
//     else {
//         return f;
//     }
// }
// let arr = [2, 3, 6];
// console.log(sum(arr));
//_________________________________________________________count_arr

// function sum(arr, index = 0) {
//     if (arr[index]) {
//         return sum(arr, ++index);
//     }
//     else {
//         return index;
//     }
// }
// let arr = [2, 3, 6, 5, 7];
// console.log(sum(arr));

//__________________________________________________________max_num


// function maxnum(arr, max = 0) {
//     if (arr.length > max) {
//         let next = maxnum(arr, max + 1)
//         return (arr[max] > next) ? arr[max] : next;
//     }
//     else {
//         return 0;
//     }
// }
// let arr = [2, 3, 6, 5, 7, 15, 9];
// console.log(maxnum(arr));

//__________________________________________________________mularr


function mularr(arr, newcollection, num = 0) {

    if (arr.length > num) {
        arr.fo(element => {
            ((x) => x * arr[num]);
        });

        mularr(arr, newcollection, num + 1);
        return
    }

}
let newcollection = new Array;
let arr = [2, 3, 1];
console.log(mularr(arr));
