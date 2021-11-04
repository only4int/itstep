document.getElementById("calc").onclick = function(){
    let classes = document.getElementsByTagName("div").item(0).classList;

    let ol = document.createElement("ol");

    for(let i = 0; i < classes.length; i++){
        let li = document.createElement("li");
        li.textContent = classes[i];
        ol.append(li);
    }

    document.getElementsByTagName("div").item(0).append(ol);

}