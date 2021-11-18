var field = new Field(4,4);
field.addWall(1,0);
field.addWall(1,1);
field.addWall(1,3);
field.addWall(2,3);
field.addWall(3,1);
field.addMine(1,2);
field.addMine(2,0);
field.show();

var robot = new Robot(field,0,0,0);

document.onkeydown = function(event){
    if(event.key == "ArrowLeft"){
        robot.left();
        robot.move();
    }
    if(event.key == "ArrowRight"){
        robot.right();
        robot.move();
    }    
    if(event.key == "ArrowUp"){
        robot.up();
        robot.move();
    }
    if(event.key == "ArrowDown"){
        robot.down();
        robot.move();
    }
}