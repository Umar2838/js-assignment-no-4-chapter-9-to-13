//<----------------------Chapter no 9 to 11----------------------------------------------------->

// Question no 01
// var city = prompt("Enter City Name")

// if(city==="Karachi"){
// alert("Welcome to City of Lights")
// }

// Question no 02

// var gender = prompt("Enter Your Gender")

// if(gender==="Male"){
// alert("Good Morning Sir")
// }
// if(gender==="Female"){
// alert("God Morning Ma'am")
// }

// Question no 03

// var signal = prompt("Enter Signal Light Color")

// if(signal==="Red"){
//     alert("Must Stop")
// }
// if(signal==="Yellow"){
//     alert("Ready To Move")
// }
// if(signal==="Green"){
//     alert("Move Now")
// }

// Question no 04

// var fuel = prompt("Enter Car remaining Fuel In Litres")

// if(fuel<0.25){
// alert("Please refill the fuel in your car")
// }

// Question no 05

//  var a = 4;
// if (++a === 5){             //(Run)
// alert("given condition for variable a is true");
// }

//  var b = 82;
// if (b++ === 83){                 //(Not Run)
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){  //(Not Run)
// alert("condition 1 is true");
// }
// if (c === 13){    //(Run)
// alert("condition 2 is true");
// }
// if (++c < 14){   //(Not Run)
// alert("condition 3 is true");
// }
// if(c === 14){    //(Run)
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");  //(Run)
// }
// if (false){
// alert("False");
// }

// if("car" <br "cat"){
// alert("car is smaller than cat");  //(Run)
// }


// Question no 06


// var obtained = prompt("Enter Obtained marks in 3 subject")
// var total = prompt("Enter Total Marks Of 3 Subject")
// var percentage = obtained/total*100

// document.write("<h1>MarkSheet</h1></br>")
// document.write("Total Marks = "+total)
// document.write("</br>Marks Obtained = "+obtained)
// document.write("</br>Percentage = "+percentage+"%")
// if(percentage>=80){
//     document.write("</br>Grade = A-one")
//     document.write("</br>Remarks = Excellent")
// }
// else if(percentage>=70){
//     document.write("</br>Grade = A")
//     document.write("</br>Remarks = Good")
// }
// else if(percentage>=60){
//     document.write("</br>Grade = B")
//     document.write("</br>Remarks = You Need to Improve")
// }
// else if(percentage<60){
//     document.write("</br>Grade = Fail")
//     document.write("</br>Remarks = Sorry")
// }

// Question no 07

// var _secretNum = 5
// var guessNum = +prompt("Enter A Secret Number from (1-10)" )

// if(guessNum === _secretNum){
// alert("Bingo! Correct answer.")
// }
// else if (guessNum + 1 === _secretNum || guessNum - 1 === _secretNum ){
//     alert("Close enough to the correct answer")
// }
// else {
// alert("Wrong Answer. Try Again")
// }


// Question no 08

// var num = +prompt("Enter the Number")
// var div = num%3 
// if(div === 0){
// alert("The Number is divisible by 3")
// } 
// else{
//     alert("The Number is not divisible by 3")
// }





//Question no 09

// var input = +prompt("Enter the Number")
// var even = input%2
// var odd = input%2
// if(even === 0 ){
//     alert("The Number is even")
// }
// else if (odd || 0){
// alert("The Number is odd")
// }






// Question no 10

// var temp = +prompt("Enter tempreture")

// if(temp > "40"){
// alert("It is too hot outside.")
// }
// else if(temp > "30"){
//     alert("The Wheather today is normal.")
//     }
//  else if(temp > "20"){
//     alert("Today's Wheather is Cool.")
//     }
//  else if(temp > "10"){
//     alert("OMG! Today's Wheather is so cool .")
//     }
          

// Question no 11

// var firstNum = +prompt("Enter First Number")
// var operator = prompt("Enter Operator")
// var SecondNum = +prompt("Enter Second Number")

// if(operator === "+"){
// alert(firstNum+SecondNum)
// }
// else if(operator==="-"){
//     alert(firstNum-SecondNum)
// }
// else if(operator==="*"){
//     alert(firstNum*SecondNum)
// }
// else if(operator==="/"){
//     alert(firstNum/SecondNum)
// }


//<---------------------------------Chapter no 12 and 13--------------------------------------------------->

//Question no 01

// var char = prompt("Enter a character");
// var charcode = char.charCodeAt();

// if(charcode>=65 && charcode<=90){
// alert("Capital")
// }
// else if(charcode<=97 && charcode<=122){
// alert("Small")
// }
// else if {
// alert("number")
// }

// if (letter >= "0" && letter <= "9") {
//   alert("Input is a number");
// } else if (letter >= "A" && letter <= "Z") {
//   alert("Input is an uppercase letter");
// } else if (letter >= "a" && letter <= "z") {
//   alert("Input is a lowercase letter");
// } else {
//   alert("Input is neither a number nor a letter");
// }

//Question no 02

// var number1 = +prompt("Enter 1st Number")
// var number2 = +prompt("Enter 2nd Number")

// if(number1===number2){
//     alert("the two integers are equals")
// }
// else if(number1>number2){
// alert(number1+" is larger")
// }
// else{
// alert(number2+" is larger")
// }


// Question no 03

//) var integer = +prompt("Enter Number")

// if(integer>0){
// alert("The number is positive")
// }
// else if(integer<0){
// alert("The number is negative")
// }
// else if(integer===0){
// alert("The number is zero")
// }

// Question no 04

// var vowel = prompt("Enter a vowel");
// if(vowel==="a"){
//     alert("This is a vowel")
// }
// else if(vowel==="e"){
//     alert("This is a vowel")
// }
// else if(vowel==="i"){
//     alert("This is a vowel")
// }
// else if(vowel==="o"){
//     alert("This is a vowel")
// }
// else if(vowel==="u"){
//     alert("This is a vowel")
// }
// else{
//     alert("This is not vowel")
// }
//Question no 05

// var correctPassword = "secret123";

// var inputpassword = prompt("Enter password")

// if(inputpassword===""){
// alert("Please input password")
// }
//   else if (inputpassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
//   } else {
//     alert("Incorrect password");
//   }


// //Question no 06
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = alert("Good day");
// }
// else{
// greeting = alert("Good evening");
// }


//Question no 07




















