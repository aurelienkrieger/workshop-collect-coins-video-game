//mario setup
var posX = 20;
var posY = 65;
var mario = document.getElementById("mario");
mario.style.left = Math.round(posX) + "px";
mario.style.bottom = Math.round(posY) + "px";

//coin setup
var posX_coin = 20;
var posY_coin = 65;
var coin = document.getElementById("coin");
coin.style.left = Math.round(posX_coin) + "px";
coin.style.bottom = Math.round(posY_coin) + "px";

//gameover setup
var gameover = document.getElementById("gameover");
gameover.style.visibility = "hidden";

//time and score setup
var seconds = 30;
var seconds_text = document.getElementById("seconds");
var score = 0;
var score_text = document.getElementById("score");

//start timer, spawn coin, start game and event listener to move mario
spawn_coin();
var timer_interval = setInterval(timer, 1000);
var coin_interval = setInterval(spawn_coin, 2000);
var game_interval = setInterval(game, 20);
window.addEventListener('keydown', moveMario);

function game(){
  let collision = checkCollision();
  if(collision) {
    spawn_coin();
    score++;
    score_text.innerHTML = "Score : "+ score;
  }
}

function timer(){
  seconds--;
  seconds_text.innerHTML = "Temps restant : "+ seconds+" s";
  if(seconds==0){
    clearInterval(timer_interval);
    clearInterval(coin_interval);
    clearInterval(game_interval);
    coin.style.visibility = "hidden";
    gameover.style.visibility = "visible";
  }
}

function spawn_coin(){
  posX_coin = Math.random()*(innerWidth-100) + 50;
  posY_coin = Math.random()*(innerHeight-100) + 50;
  coin.style.left = Math.round(posX_coin) + "px";
  coin.style.bottom = Math.round(posY_coin) + "px";
}

function moveMario(event){
  if(event.keyCode == 37) {
    posX -= 50;
    mario.style.left = Math.round(posX) + "px";
  }
  else if(event.keyCode == 39) {
    posX += 50;
    mario.style.left = Math.round(posX) + "px";
  }
  else if(event.keyCode == 38) {
    posY += 50;
    mario.style.bottom = Math.round(posY) + "px";
  }
  else if(event.keyCode == 40) {
    posY -= 50;
    mario.style.bottom = Math.round(posY) + "px";
  }
};

function checkCollision(){
  let collision = false;
  let a = posX - posX_coin;
  let b = posY - posY_coin;
  let dist = Math.sqrt( a*a + b*b );
  if(dist<60) collision = true;
  return collision;
}
