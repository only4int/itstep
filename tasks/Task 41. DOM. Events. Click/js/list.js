document.getElementById("add").onclick = function(){
        let uls = document.getElementsByTagName("ul");
        let ul;
        if(uls.length == 0){
                ul = document.createElement("ul");
                document.getElementById("result").appendChild(ul);
        } else {
                ul = uls.item(0);
        }

        let x = +document.getElementById("num").value;

        if(isNaN(x))
                return;
        
        let countLi = document.getElementsByTagName("li").length; 
        for(let i = countLi; i < x+countLi;i++){
            let li = document.createElement("li");
            li.innerHTML = `Пункт ${i}`;
            ul.appendChild(li);
        }
}