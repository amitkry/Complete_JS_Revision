//1--> Use logical operator to find wheter the given number is between 10 and 20 or not.

let age = prompt("Enter the age of the person: ")

if(age>=10 && age <=20){
    console.log("Entered age is between 10 and 20")
}

else{
    console.log("Entered age is outside the range")
}

//2--> Demonstrate the use of switch case statement in JavaScript

let day = parseInt(prompt("Enter the day number: "))

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not a valid input");
        break;
}


//3--> Write a JS program to find whether a number is divisble by 2 and 3

let num = parseInt(prompt("Enter a number: "))

if(num%2==0 && num%3==0){
    console.log("The number is divisible by 2 and 3 ")
}
else{
    console.log("No the number is not divisible by 2 and 3")
}

//4--> Write a JS program to find wheter the number is divisible by either 2 or 3

let num1 = parseInt(prompt("Enter a number: "))

if(num%2==0 && num%3==0){
    console.log("The number is divisible by both 2 and 3 ")
}
else if(num%2==0){
    console.log("The number is divisible by 2")
}
else if(num%3==0){
    console.log("The number is divisible by 3")
}

else{
    console.log("No the number is not divisible by 2 and 3")
}


