var canvas;
var music;
var block1,block2,block3,block4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces
block1=createSprite(50,600,190,100);
block1.shapeColor="purple";

block2=createSprite(250,600,190,100);
block2.shapeColor="blue";

block3=createSprite(450,600,190,100);
block3.shapeColor="green"

block4=createSprite(650,600,190,100);
block4.shapeColor="yellow";
    //create box sprite and give velocity
box=createSprite(random(20,750));
box.shapeColor="white";
box.velocityY=8;
}

function draw() {
    background("black");
    //create edgeSprite
    createEdgeSprites();

if(block1.isTouching(box)&&
box.bounceOff(block1)){
    box.shapeColor="purple";
    box.velocityY=0;
    
}

if(block2.isTouching(box)&&
box.bounceOff(block2)){
    box.shapeColor="blue";
    box.velocityY=0;
    
}

if(block3.isTouching(box)&&
box.bounceOff(block3)){
    box.shapeColor="green";
    box.velocityY=0;

}

if(block4.isTouching(box)&&
box.bounceOff(block04)){
    box.shapeColor="yellow";
    box.velocityY=0;
    
}

drawSprites();

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box) && box.bounceOff(block1)){
        //change color
        box.shapeColor="purple";
    }

    if(block2.isTouching(box) && box.bounceOff(block2)){
        //change color
        box.shapeColor="blue";
    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        //change color
        box.shapeColor="green";
    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
        //change color
        box.shapeColor="yellow"
    }


}
function isTouching(object1,object2){
    if(object1.x-object2.x<object1.width/2 + object2.width/2
        &&object2.x- object1.x < object1.width/2 + object2.width/2
        &&object1.y- object2.y < object2.width/2 + object1.width/2
        &&object2.y - object1.y < object2.width/2 + object1.width/2){
            return true;
        }
        else{
            return false;
        }
}



function bounceOff(object1,object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
        &&object2.x - object1.x < object2.width/2 + object1.width/2 ){
            object1.velocityX=object1.velocityX*(-1);
            object2.velocityX=object2.velocityX*(-1);
        }
        if(object1.y - object2.y < object2.height/2 + object1.height/2
            && object2.y - object1.y < object2.height/2 + object1.height/2){
                object1.velocityY=object1.velocityY*(-1);
                object2.velocityY=object2.velocityY*(-1);
            }
}
