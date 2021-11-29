document.querySelector(".container").onclick = function(event){

    let current = event.target;

    let children = this.children;

    let number = -1;

    Array.from(children).forEach(function(item, index) {
        if(item == current)
            number = index;
    });

    console.log(number+1);

    return false;
}