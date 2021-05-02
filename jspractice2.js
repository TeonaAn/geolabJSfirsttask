// reduce ფუნქციის გამოყენებით ამ სიტყვებისგან ააწყვეთ წინადადება ისე, რომ ყოველი მეორე სიტყვა ეწეროს მთლიანად დიდი ასოებით:

let words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam'];

console.log(words.reduce(functionreduce));

function functionreduce(acc, value, index){

    if (index % 2 === 1){
        return acc + ' ' + value.toUpperCase();
    }
        return acc + ' ' + value;
}

// filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო M-ს. ზომას მნიშვნელობა არ აქვს. (უნდა შეიცავდეს M ანდ m-ს).

let words2 = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi'];

console.log(words2.filter(filterFunction));

function filterFunction(value){

    for (let i = 0; i < value.length; i ++){
        if(value[i] == 'm' || value[i] == 'M'){
            return value;
        } continue;
    }
    
}
// წინა დავალება ამოხსენი ისე რომ თქვენი კოდი იყოს მხოლოდ 1 ხაზი. (გამოიყენეთ arrow ფუნქცია. ფუგურული {} ფრჩხილების გამოყენების გარეშე).


let words3 = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam'];

let red = (total, value, index) => (index % 2 === 1) ? total + ' ' + value.toUpperCase() : total + ' ' + value;

console.log(words3.reduce(red));



// შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ახალ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად.

let items = [12, 'Google', 32, null, undefined, 'yahoo', 0, 'bing'];

function mapFunction (value){
    if(typeof value === 'string'){
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * value;
    }else {
        return value;
    }
}
let newItem = items.map(mapFunction);
console.log(newItem);

// filter და map ფუნქციების გამოყენებით შექმენით ახალი მასივი სადაც იქნება იმ იუზერების სახელები (მხოლოდ სახელები), რომელთა ასაკიც მეტია 18-ზე.

let users = [
    {name: 'giorgi', age: 16},
    {name: 'levani', age: 90},
    {name: 'nino', age: 30},
    {name: 'otari', age: 11},
    {name: 'mari', age: 28}
  ];

 function objFilter(value){
     return value.age > 18;
 } 

 console.log(users.filter(objFilter).map(x => x.name));
  












