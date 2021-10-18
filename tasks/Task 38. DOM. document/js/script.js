document.write("<h1>Привет мир</h1>");
document.write("<h2>Привет мир2</h2>");

var fruits = ["apple", "orange", "lime","watermelon"];

let  out = "<ul>";
fruits.forEach(function(item){
    out = out + `<li>${item}</li>`;
})
out += "</ul>"; 
/*
 * <ul>
 *      <li>apple</li>
 *      <li>orange</li>
 *      <li>lime</li>
 *      <li>watermelon</li>
 * </ul>
 */
document.write(out);
out = "<p><ins>1</ins> <span>2</span> <ins>3</ins> <span>4</span> <ins>5</ins> 6</p>";
document.write(out);
out = "<div class='box'>";

for(let i = 1; i <= 30; i++){
    if(i%2 == 0)
        out+= `<span class='red'>${i} </span><br>`;
    else
        out+= `<span>${i} </span><br>`;
}

out += "</div>";

document.write(out);

out = "<div class='chess'>";

for(let i = 1; i <= 8; i++){
    for(let j = 1; j <= 8; j++){
        if((i+j) % 2 == 0){
            out += "<div class='white'></div>";
        }
        else{
            out += "<div class='black'></div>";
        }
    }
}

out += "</div>";

document.write(out);

out = "<table class='chess2'>";

for(let i = 1; i <= 8; i++){
    out += "<tr>";
    for(let j = 1; j <= 8; j++){
        if((i+j) % 2 == 0){
            out += "<td class='white'></td>";
        }
        else{
            out += "<td class='black'></td>";
        }
    }
    out += "</tr>";
}

out += "</table>";

document.write(out);

fruits = ["apple", "orange", "lime","watermelon"];

out = "<ul>";

for(let i = 0; i < fruits.length; i++){
    out += `<li>${fruits[i]}</li>`;
}

out += "</ul>";
document.write(out);