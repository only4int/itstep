document.addEventListener('keydown', function(event) {

   if(event.key == "=" && event.ctrlKey){
       let li = document.createElement("li");
       li.textContent = document.querySelectorAll("ul > li").length+1;
       document.querySelector("ul").append(li);
   }

   if(event.key == "-" && event.ctrlKey){
        if(document.querySelectorAll("ul > li").length > 0){
            document.querySelector("ul > li:last-child").remove();
        }
   }
   return false;
});                                                                                                                     