
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ballImage;
var fidgetSpinnerImage,fidgetSpinnerGroup;
var leftArrowImage,leftArrowGroup;
var rightArrowImage,rightArrowGroup;
var starImage,starGroup;
var tableImage,tableGroup;
var restart,restartImage;
var ground;

function preload() {
ballImage=loadImage("sprites/ball.png");
fidgetSpinnerImage= loadImage("sprites/fidgetSpinner.jpg");
leftArrowImage= loadImage("sprites/leftArrow.png");
rightArrowImage= loadImage("sprites/rightArrow.png");
starImage= loadImage("sprites/star.png");
tableImage= loadImage("sprites/table.jpg");
restartImage = loadImage("sprites/restartImage.jpg");
}

function setup() {
  createCanvas(800, 700);

  //The ball
  ball = createSprite(100,410,40,40);
  ball.shapeColor = "red";
  ball.addImage(ballImage);
	
  //Ground
  ground = createSprite(400,420,800,3);
  ground.x = ground.width/2;
  ground.velocityX = -10;

  //Groups for different obstacle types
  fidgetSpinnerGroup = new Group();
  leftArrowGroup = new Group();
  rightArrowGroup = new Group();
  starGroup = new Group();
  tableGroup = new Group();
}

function draw(){
  background("pink");

  //Creating an infinite ground
  if (ground.x < 200) {
    ground.x = ground.width/2;
  }

  //The ball's ability to jump with gravity making it fall again
  if (keyCode === 32){
    ball.velocityY = -12
  }
  ball.velocityY = ball.velocityY + 1;

  createFidgetSpinners();
  createleftArrows();
  createRightArrows();
  createStars();
  createTables();

  drawSprites();
}

function createFidgetSpinners(){
  //Spawning fidget spinners
  var randomFrames = random(80,120);
  if (frameCount % randomFrames === 0 ) {
    var fidgetSpinner = createSprite(800,407,25,25);
    fidgetSpinner.addImage("fidgetSpinner",fidgetSpinnerImage);
    fidgetSpinner.velocityX = -4;

    fidgetSpinnerGroup.add(fidgetSpinner);
  }
}

function createleftArrows(){
  //Spawning left arrows
  var randomFrames = random(75,125);
  if (frameCount % randomFrames === 0 ) {
    var leftArrow = createSprite(800,407,25,25);
    leftArrow.addImage("leftArrow",leftArrowImage);
    leftArrow.velocityX = -4;

    leftArrowGroup.add(leftArrow);
  }
}

function createRightArrows(){
  //Spawning right arrows
  var randomFrames = random(75,125);
  if (frameCount % randomFrames === 0 ) {
    var rightArrow = createSprite(800,407,25,25);
    rightArrow.addImage("rightArrow",rightArrowImage);
    rightArrow.velocityX = -4;
  
    rightArrowGroup.add(rightArrow);
  }
}

function createStars(){
  //Spawning stars
  var randomFrames = random(120,150);
  if (frameCount % randomFrames === 0 ) {
    var randY = random(350,410);
    var star = createSprite(800,randY,20,20);
    star.addImage("star",starImage);
    star.velocityX = -4;

    starGroup.add(star);
  }
}

function createTables(){
  //Spawning tables
  var randomFrames = random(70,120);
  if (frameCount % randomFrames === 0 ) {
    var table = createSprite(800,410,50,20);
    table.addImage("table",tableImage);
    table.velocityX = -4;
  
    tableGroup.add(table);
  }
}