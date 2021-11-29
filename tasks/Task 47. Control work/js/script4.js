document.querySelector("input").onkeyup = function(){
    
    let str = this.value;

    let result = str.split(" ").map(function(item){
        return +item;
    }).reduce(function(sum, item){
        return sum+item;
    },0);

    document.querySelector("p").innerHTML = result;
}