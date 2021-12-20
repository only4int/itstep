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


function intersectArray(a,b){
    let intersect = a.filter(function(item){
        return b.includes(item);
    });
    let uniqueIntersect = intersect.filter(function(item, index){
        return index == intersect.indexOf(item);
    });

    return uniqueIntersect;
}

console.log(intersectArray([1,2,3,1], [1,2]));