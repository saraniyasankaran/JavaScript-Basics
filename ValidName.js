/*
Valid Name
 H.Wells
 H.G.Wells
 Herbert G.Wells
 Herbert George Wells

 Invalid Names
  Herbert or Wells
  H Wells or H.G Wells
  H.George Wells
*/



var str="H.G.Wells"
  var arr = str.split(".");
  let len=arr.length;
  
    if(len==1||arr[0].length>1){
        console.log("false");
        
    }
    else if(isLowerCase(arr[arr.length-1].charAt(0))){
        console.log("false");
        
    }
    else if((arr[0].length>=1 && isLowerCase(arr[0]))){
        console.log("false");
       
    }
    else if((arr[1].length!=1 || (arr[1].length==1 && isLowerCase(arr[1].charAt(0))))&&arr.length>=3){
        console.log("false");
     
    }
    else{
        console.log("true");

}
function isLowerCase(str) {
    return str === str.toLowerCase();
}
    