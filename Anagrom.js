/*Given two strings, return true if they are anagrams of one another*/

let str1 = "Mary";
let str2 = "Army";

let string1 = str1.toLowerCase().split('').sort();
let string2 = str2.toLowerCase().split('').sort();

let final1 = string1.join();
let final2 = string2.join();

if(final1 == final2){
    console.log("true");
}
else{
    console.log("false");
}





