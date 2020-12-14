var man, man_img;
var arrow, arrow2, ar_img, ar_img2;
var bg_img;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var obstaclesGroup;
var ZombieGroup;
var zombie1, zombie2, zombie3;
var kill, killimg, kill2, kill2img;

function preload(){

    bg_img = loadImage("bg.jpg");
    man_img = loadImage("man.png");
    ar_img = loadImage("arrow.png");
    ar_img2 = loadImage("arrow2.png");
    obstacle1 = loadImage("obs1.jpg");
    obstacle2 = loadImage("obs2.jpg");
    obstacle3 = loadImage("obs3.jpg");
    zombie1 = loadImage("zomb.jpg");
    zombie2 = loadImage("zomb2.jpg");
    zombie3 = loadImage("zomb3.jpg");
    killimg = loadImage("kill.png");
    kill2img = loadImage("kill2.png"); 

}


function setup(){

createCanvas(900, 500);
obstaclesGroup = createGroup();
ZombieGroup = createGroup();

man = createSprite(770, 220, 50, 50);
man.addImage(man_img);


} 


function draw(){



    background("white");

    spawnZombies();



if(keyDown("space")){

arrow = createSprite(750, 195, 50, 50);
arrow.addImage(ar_img);
arrow.scale = 0.5;
arrow.velocityX = -5;
arrow.y = man.y;
}

if(keyDown(LEFT_ARROW)){
  arrow2 = createSprite(750, 190, 50, 50);
  arrow2.addImage(ar_img2);
  arrow2.scale = 0.15;
  arrow2.velocityX = -6;
  arrow2.y = man.y
}

if(keyDown(DOWN_ARROW)){

   man.y = man.y+4;
}

if(keyDown(UP_ARROW)){

    man.y = man.y-4;
}

if(ZombieGroup.isTouching(arrow)){
ZombieGroup.destroyEach();
arrow.destroy();
kill2 = createSprite(350, 80, 20, 20);
kill2.addImage(kill2img);
kill2.scale = 0.35;
kill2.lifetime = 50;
}

if(ZombieGroup.isTouching(arrow2)){
ZombieGroup.destroyEach();
arrow2.destroy();
kill = createSprite(400, 80, 20, 20);
kill.addImage(killimg);
kill.scale = 0.5;
kill.lifetime = 50;
}



//spawnObstacles();


    drawSprites();
}

function spawnZombies() {
  if (frameCount % 130 === 0) {
    var zombies = createSprite(100, 165, 10, 40);
    zombies.y = Math.round(random(100, 400))
    zombies.velocityX = 4
    
    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1:
        zombies.addImage(zombie3);
        break;
      case 2:
        zombies.addImage(zombie1);
        break;
      case 3:
        zombies.addImage(zombie2);
      
    }

           
    zombies.scale = 0.5;
    zombies.lifetime = 200;


    ZombieGroup.add(zombies);
  }
}

  