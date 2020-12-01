var thunder, thunderAnimation;
var man, manAnimation;  

function preload(){
    thunderAnimation =loadAnimation("1.png","2.png","3.png","4.png" );

manAnimation = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png",
"walking_7.png","walking_8.png")
}

function setup(){
    thunder = createSprite(500,140,10,10);
    thunder.addAnimation("thund", thunderAnimation);
    thunder.scale = 0.1;

    man = createSprite(100,350,10,10);
man.addAnimation("man", manAnimation);
man.scale = 0.2;  
    
}

function draw(){

    background(0,0,0)

    if(keyDown("UP_ARROW")){
        man.velocityX = 2;
        }
        
    rainDrops ();
    drawSprites();}   



    function rainDrops (){
        var drop = createSprite(random(10,990),0,random(2,6),random(20,50));
        drop.velocityY = random(2,6);
        drop.shapeColor = "lightBlue";
        }
