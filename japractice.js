// 1.Მოცემულია მასივიდან, for ციკლის და continue ბრძანების საშუალებით ამოარჩიეთ და კონსოლში გამოიტანეთ ისეთი სიტყვები სადაც სიმბოლოების რაოდენობა მეტია ან ტოლი 5-ზე:

let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];

for(let i =0; i < arr.length; i++){
    if(arr[i].length < 5){
        continue;
    }else {
        console.log(arr[i]);
    }

}

//2. Მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let arr1 = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];

for (let x = 0; x < arr1.length; x ++){
    if(arr1[x] > 0 ){
        console.log(arr1[x]);
    }
}

// 3.Მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let arr2 = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

for(let i = 0; i < arr2.length; i++){
    for(let y = 0; y <arr2[i].length; y++){
        if(arr2[i][y] > 0){
            console.log(arr2[i][y]);
        }

    }   
}

// 4. Შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

let arr4 = [5, 2, 85, 207, 26, 42, 115, 32, 15, 11, 0, 105, ];

function getMax(maxNumber){
maxNumber.sort(function(x, y){
    return x - y;

});
console.log(maxNumber[maxNumber.length - 1]);
}
getMax(arr4);


// 5 Შექმენით ფუნქცია სახელად printName რომელსაც პარამეტრად გადაეცემა ობიექტი. ობიექტს ექნება შემდეგი ფორმა:
// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isLoggedIn არის true და false თუ isLoggedIn ფროფერთი არის false;


let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isLoggedIn: true
  };

  function printName (usersObject){
      return usersObject.firstname + ' ' + usersObject.lastname + ' ' + usersObject.isLoggedIn;

  }

  console.log(printName(user));
  

