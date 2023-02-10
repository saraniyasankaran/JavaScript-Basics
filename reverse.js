/*
Given a string, reverse each word in the sentence
For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
*/

const string="Welcome to this Javascript Guide!";

let rev="";
let rev2 = [];
for(let i=string.length-1;i>=0;i--)
{
    rev+=string[i];
}
console.log(rev);
let str = rev.split(' ');

for(var i = str.length - 1;  i >= 0; i--){
        //rev2=str[i]+" "
        rev2.push(str[i]);
}
console.log(rev2.join(" "));