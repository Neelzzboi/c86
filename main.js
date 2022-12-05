const { fabric } = require("./fabric");

var canvas = new fabric.Canvas("mycanvas");

player_x = 10;
player_y = 10;

current_width = 30;
current_height = 30;

player_object = "";
block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);

    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(current_width);
        block_image_object.scaleToHeight(current_height);

        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

