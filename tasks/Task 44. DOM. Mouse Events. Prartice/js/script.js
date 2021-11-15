document.querySelector(".box").onclick = function(event){
    let style = getComputedStyle(this);// event.target, event.currentTarget
    let widthStr = style.width;
    let heightStr = style.height;
    width = +widthStr.substr(0,widthStr.length - 2)*2;
    height = +heightStr.substr(0,heightStr.length - 2)*2;
    this.style.width = `${width}px`;
    this.style.height = `${height}px`;
    
}
document.querySelector(".box").oncontextmenu = function(event){
    let style = getComputedStyle(this);
    let widthStr = style.width;
    let heightStr = style.height;
    width = +widthStr.substr(0,widthStr.length - 2)/2;
    height = +heightStr.substr(0,heightStr.length - 2)/2;
    this.style.width = `${width}px`;
    this.style.height = `${height}px`;
    return false;
}