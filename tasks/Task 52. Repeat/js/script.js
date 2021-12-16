function isEqual(str1, str2){

    if(str1.split("").sort().join("") == str2.split("").sort().join("")){
        return true;
    }

    return false;
}


function outArray(arr) {
    let i = 0;
    let  counter  = setInterval(function() {
          console.log(i);
          i++;
          if(i == arr.length)
            clearInterval(counter);
        }, 3000);
}

outArray([1,2,3,4,5]);