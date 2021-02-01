var canvas = new fabric.Canvas('mycan');

blockwidth= 30;
blockheight=30;

playerx=10;
playery=10; 

var playobis="";
var blockimg="";

function playerupd(){
    fabric.Image,fromURL("player.png", function(Img){
        playobis= Img;

        playobis.scaleToWidth(150);
        playobis.scaleToHeight(140);
        playobis.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_object);
    });
}

function newimage(get_image){
    fabric.Image,fromURL(get_image, function(Img){
        blockimg= Img;

        blockimg.scaleToWidth(blockwidth);
        blockimg.scaleToHeight(blockheight);
        blockimg.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_object);
    });
}

window.addEventListener ("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey && keyPressed ==' 80 '){
        console.log("p and shift pressed together");
        blockwidth= blockwidth + 10;
        blockheight= blockheight+10;
        document.getElementById("curwidth").innerhtml= blockwidth;
        document.getElementById("curheight").innerhtml= blockheight;
    }

    if(e.shiftKey && keyPressed ==' 77 '){
        console.log("m and shift pressed together");
        blockwidth= blockwidth - 10;
        blockheight= blockheight-10;
        document.getElementById("curwidth").innerhtml= blockwidth;
        document.getElementById("curheight").innerhtml= blockheight;
    }

    if (keyPressed == ' 38 '){
        up();
        console.log("up");
    }

    
    if (keyPressed == ' 40 '){
        down();
        console.log("down");
    }   

    
    if (keyPressed == ' 37 '){
        left();
        console.log("left");
    }

    
    if (keyPressed == ' 39 '){
        right();
        console.log("right");
    }

    
    if (keyPressed == ' 87'){
        newimage("hulk_face.png");
        console.log("w");
    }

    
    if (keyPressed == ' 71'){
        newimage("hulk_left_hand.png");
        console.log("g");
    }

    if (keyPressed == '76'){
        newimage("hulk_legs");
        console.log("l");
    }

    if (keyPressed == ' 84'){
        newimage("hulk_right_hand.png");
        console.log("t");
    }

    if (keyPressed == ' 82'){
        newimage("hulkd_body.png");
        console.log("r");
    }

    if (keyPressed == ' 89'){
        newimage("ironman_body.png");
        console.log("y");
    }

    if (keyPressed == ' 89'){
        newimage("ironman_face.png");
        console.log("d");
    }
    
    if (keyPressed == ' 85'){
        newimage("ironman_left_hand.png");
        console.log("u");
    }

    if (keyPressed == ' 67'){
        newimage("ironman_legs.png");
        console.log("c");
    }

    if(keyPressed == '73'){
        newimage("ironman_right_hand.png");
        console.log("i");
    }

    if(keyPressed == '66'){
        newimage("spiderman_body.png");
        console.log("b");
    }

    if(keyPressed == '65'){
        newimage("spiderman_face.png");
        console.log("a");
    }

    if(keyPressed == '83'){
        newimage("spiderman_left_hand.png");
        console.log("s");
    }

    if(keyPressed == '74'){
        newimage("spiderman_right_hand.png");
        console.log("j");
    }

    if(keyPressed == '79'){
        newimage("thor_face.png");
        console.log("o");
    }

    if(keyPressed == '81'){
        newimage("thor_left_hand.png");
        console.log("q");
    }

    if(keyPressed == '81'){
        newimage("thor_lright_hand  .png");
        console.log("q");    
    }
    
    if( keyPressed == '75'){
        newimage("player.png")  
        console.log("k")
     }
}   

function up(){
    if(playery >= 0){
        playery= playery-blockheight;
        console.log("blockheaight =" + blockheight)
        console.log("When up arrow is pressed, X=" + playerx + ", Y = " + playery)
        canvas.remove(player_object);
        playerupd();
    }
}

function down(){
    if(playery <= 500){
        playery= playery+blockheight;
        console.log("blockheaight =" + blockheight)
        console.log("When down arrow is pressed, X=" + playerx + ", Y = " + playery)
        canvas.remove(player_object);
        playerupd();        
    }
}

function left(){
    if(playerx >0){
        playerx= playerx-blockheight;
        console.log("blockheaight =" + blockheight)
        console.log("When left arrow is pressed, X=" + playerx + ", Y = " + playery)
        canvas.remove(player_object);
        playerupd();
    }
}

function right(){
    if(playerx <=850){
        playerx= playerx-blockheight;
        console.log("blockheaight =" + blockheight)
        console.log("When Right arrow is pressed, X=" + playerx + ", Y = " + playery)
        canvas.remove(player_object);
        playerupd();
    }
}