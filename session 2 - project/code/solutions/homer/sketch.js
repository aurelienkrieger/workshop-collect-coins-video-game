var mario, coin;
var score, time;

function setup() {
  createCanvas(500, 500);
  mario = loadImage('homer.png');
  coin = loadImage('donut.png');
  mario.x = 0;
  mario.y = 0;
  coin.x = random(50, width-50);
  coin.y = random(50, height-50);
  score = 0;
  time = 30;
  setInterval(randomCoin, 1000);
  setInterval(timer, 1000);
}

function draw() {
  background(250, 200, 0);

  console.log(keyCode);
  if(keyIsDown(38)){
    mario.y -= 5;
  }
  if(keyIsDown(37)){
    mario.x -= 5;
  }
  if(keyIsDown(40)){
    mario.y += 5;
  }
  if(keyIsDown(39)){
    mario.x += 5;
  }

  image(mario, mario.x, mario.y);
  image(coin, coin.x, coin.y);

  var d = dist(mario.x, mario.y, coin.x, coin.y);
  if(d<50){
    console.log("cocollision");
    score++;
    randomCoin();
  }

  textSize(20);
  text("score: " + score, 20, 30);
  text("time: " + time, 20, 60);
}

function randomCoin(){
  coin.x = random(70, width-70);
  coin.y = random(70, height-70);
}

function timer(){
  time --;
  if(time == 0) noLoop();
}