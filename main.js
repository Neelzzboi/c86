
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

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    if(e.shiftkey == true && keyPressed == "80"){
        current_width = current_width + 10;
        current_height = current_height + 10;
        document.getElementById("current_width").innerHTML = current_width;
        document.getElementById("current_height").innerHTML = current_height;
    }

    if(e.shiftkey == true && keyPressed == "77"){
        current_width = current_width - 10;
        current_height = current_height - 10;
        document.getElementById("current_width").innerHTML = current_width;
        document.getElementById("current_height").innerHTML = current_height;
    }

    if(keyPressed = "37"){
        left();
    }

    if(keyPressed = "38"){
        up();
    }

    if(keyPressed = "39"){
        right();
    }

    if(keyPressed = "40"){
        down();
    }
    
    if(keyPressed = "87"){
        new_image('wall.jpg');
    }

    if(keyPressed = "71"){
        new_image('ground.png');
    }

    if(keyPressed = "76"){
        new_image('light_green.png');
    }

    if(keyPressed = "84"){
        new_image('trunk.jpg');
    }

    if(keyPressed = "82"){
        new_image('roof.jpg');
    }

    if(keyPressed = "89"){
        new_image('yellow_wall.png');
    }

    if(keyPressed = "68"){
        new_image('dark_green.png');
    }

    if(keyPressed = "85"){
        new_image('unique.png');
    }

    if(keyPressed = "67"){
        new_image('cloud.jpg');
    }
}



