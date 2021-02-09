var cat,cat_image,cat_lastimage,cat_runningimage,mouse,
mouse_image,mouse_teasing,mouse_lastimage,moveLeft,
moveRight,garden,garden_image;

function preload() {
    cat_image=loadImage("cat1.png");
    cat_lastimage=loadImage("cat4.png");
    cat_runningimage=loadAnimation("cat2.png","cat3.png");
    mouse_image=loadImage("mouse1.png");
    mouse_lastimage=loadImage("mouse4.png");
    mouse_teasing=loadAnimation("mouse2.png","mouse3.png");
    garden_image=loadImage("garden.png");
}

function setup(){
    createCanvas(600,600);
    
 cat = createSprite(500,500,20,50);
 cat.addImage("standing", cat_image);
 cat.scale=0.1;

 mouse = createSprite(500,300,20,50);
 mouse.addImage("standing", mouse_image);
 mouse.scale=0.1;

 garden=createSprite(300,300,300,300);
 garden.addImage("garden",garden_image);
 mouse.scale=0.1;
 
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

  

if(mouse.x-cat.x < cat.width/2+mouse.width/2 &&
   cat.x-mouse.x < mouse.width/2+cat.width/2){
       cat.addImage("lastImage",cat_lastimage);
       cat.changeImage("lastImage");
       mouse.addImage("M_lastImage",mouse_lastimage);
       mouse.changeImage("M_lastImage");
   }

keyPressed();

    drawSprites();
}


function keyPressed(){


    if(onKeyDown==="left_arrow" &&
     mouse.x-cat.x > cat.width/2+mouse.width/2 &&
    cat.x-mouse.x > mouse.width/2+cat.width/2){
        cat.velocitX=-5;
        cat.addAnimation("running",cat_lastimagecat_runningimage);
        cat.changeAnimation("running");
        mouse.addAnimation("teasing",mouse_teasing);
       mouse.changeAnimation("teasing");

    }

  //For moving and changing animation write code here


}
