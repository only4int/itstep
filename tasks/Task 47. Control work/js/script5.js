let radios = document.querySelectorAll("input[name='operation']");

for(let i = 0; i < radios.length; i++){
    radios[i].onchange = function(){

        let numberA = +a.value;
        let numberB = +b.value;
        
        let o = this.value;
        let result;
        
        switch(o){
            case "+":
                result = numberA+numberB; break;
            case "-":
                result = numberA-numberB; break;    
            case "*":
                result = numberA*numberB; break;
            case "/":
                result = numberA/numberB; break; 
        }
    
        document.querySelector("p").innerHTML = result;
    }
}
