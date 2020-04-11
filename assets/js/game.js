// let canvas = document.querySelectorAll(".game-area")[0];
const canvas = document.getElementById("game-area");
const ctx = canvas.getContext("2d");


const curtain = new Curtain();
const player = new Player();
const frontBg = new FrontBg();
const background = new Background();
const stillBackGround = new StillBackGround();
const sun = new Sun("assets/img/sun.png");
// enemy(startPosition,speed,changeToAttackPosition,high,mid,low)
const enemy1 = new Enemy(2500, -10, 1600, "mid");
const enemy2 = new Enemy(3500, -10, 1600, "low");
const enemy3 = new Enemy(4500, -10, 1600, "high");

const enemy4 = new Enemy(5200, -10, 1600, "high");
const enemy5 = new Enemy(5500, -10, 1600, "mid");

const enemy6 = new Enemy(6200, -10, 1600, "low");
const enemy7 = new Enemy(6500, -10, 1600, "mid");

const enemy8 = new Enemy(7200, -10, 1600, "mid");
const enemy9 = new Enemy(7500, -10, 1600, "mid");
const enemy10 = new Enemy(7800, -10, 1600, "mid");

const enemy11 = new Enemy(11200, -12, 1600, "high");
const enemy12 = new Enemy(11700, -12, 1600, "mid");
const enemy13 = new Enemy(12200, -12, 1600, "low");

const enemy14 = new Enemy(14200, -12, 1600, "mid");
const enemy15 = new Enemy(14700, -12, 1600, "high");
const enemy16 = new Enemy(15200, -12, 1600, "low");

const enemy17 = new Enemy(17200, -12, 1600, "high");
const enemy18 = new Enemy(17700, -12, 1600, "low");
const enemy19 = new Enemy(18200, -12, 1600, "high");
const enemy20 = new Enemy(18900, -12, 1600, "low");

const enemy21 = new Enemy(20200, -12, 1600, "mid");
const enemy22 = new Enemy(20700, -12, 1600, "mid");

const enemy23 = new Enemy(21700, -12, 1600, "high");
const enemy24 = new Enemy(22200, -12, 1600, "high");

const enemy25 = new Enemy(23500, -12, 750, "mid");
const enemy26 = new Enemy(24500, -12, 750, "low");
const enemy27 = new Enemy(25500, -12, 750, "high");
const enemy28 = new Enemy(26500, -12, 750, "mid");

const enemy29 = new Enemy(34200, -15, 800, "mid");
const enemy30 = new Enemy(34700, -15, 800, "high");
const enemy31 = new Enemy(35200, -15, 800, "low");

const enemy32 = new Enemy(36200, -15, 900, "mid");
const enemy33 = new Enemy(36700, -15, 900, "high");
const enemy34 = new Enemy(37200, -15, 900, "low");
const enemy35 = new Enemy(37700, -15, 900, "low");
const enemy36 = new Enemy(38200, -15, 900, "mid");
const enemy37 = new Enemy(38700, -15, 900, "high");

const enemy38 = new Enemy(40200, -15, 1600, "mid");
const enemy39 = new Enemy(40700, -15, 1600, "mid");
const enemy40 = new Enemy(41200, -15, 1600, "mid");









const gameArea = document.getElementById("game-area");
const startButton = document.getElementById("start-button");
startButton.addEventListener('click', startGame);
const restartButton = document.getElementById("restart-button");
restartButton.addEventListener('click', restartGame);
const title = document.getElementById("title");
const signature = document.getElementById("signature");
const end = document.getElementById("end");
const w = document.getElementById("w");
const s = document.getElementById("s");
const d = document.getElementById("d");


let isGameOver;
let isGameFinish;

let myAudio = document.createElement("audio");
myAudio.src = "assets/sound/backgroundMusic.mp3";

let startAudio = document.createElement("audio");
startAudio.src = "assets/sound/start.mp3";

function startGame() {
    startButton.style.display = 'none';
    title.style.display = 'none';
    signature.style.display = 'none';
    gameArea.style.boxShadow = 'none';
    w.style.display = 'none';
    d.style.display = 'none';
    s.style.display = 'none';
    playSound();
    window.requestAnimationFrame(tick);
}

function restartGame() {
    restartButton.style.display = 'none';
    document.location.reload();
}


// tutorial
function tutorial() {
    if (200 < enemy1.x && enemy1.x <= 1300) {
        d.style.display = 'initial';
        s.style.display = 'none';
        w.style.display = 'none';

    } else if (200 < enemy2.x && enemy2.x <= 1200) {
        s.style.display = 'initial';
        d.style.display = 'none';
        w.style.display = 'none';

    } else if (220 < enemy3.x && enemy3.x <= 1200) {
        w.style.display = 'initial';
        d.style.display = 'none';
        s.style.display = 'none';
    } else {
        w.style.display = 'none';
        d.style.display = 'none';
        s.style.display = 'none';
    }

}




// myAudio.pause();

function playSound() {
    startAudio.play();
    myAudio.play();
}

// tick
function tick(timestamp) {


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stillBackGround.draw();

    sun.draw();
    sun.move();



    background.draw();
    background.move();

    frontBg.draw();
    frontBg.move();

    player.tick(timestamp);



    // Enemy
    enemy1.tick(timestamp);
    enemy1.move();
    enemy2.tick(timestamp);
    enemy2.move();
    enemy3.tick(timestamp);
    enemy3.move();
    enemy4.tick(timestamp);
    enemy4.move();
    enemy5.tick(timestamp);
    enemy5.move();
    enemy6.tick(timestamp);
    enemy6.move();
    enemy7.tick(timestamp);
    enemy7.move();
    enemy8.tick(timestamp);
    enemy8.move();
    enemy9.tick(timestamp);
    enemy9.move();
    enemy10.tick(timestamp);
    enemy10.move();
    enemy11.tick(timestamp);
    enemy11.move();
    enemy12.tick(timestamp);
    enemy12.move();
    enemy13.tick(timestamp);
    enemy13.move();
    enemy14.tick(timestamp);
    enemy14.move();
    enemy15.tick(timestamp);
    enemy15.move();
    enemy16.tick(timestamp);
    enemy16.move();
    enemy17.tick(timestamp);
    enemy17.move();
    enemy18.tick(timestamp);
    enemy18.move();
    enemy19.tick(timestamp);
    enemy19.move();
    enemy20.tick(timestamp);
    enemy20.move();
    enemy21.tick(timestamp);
    enemy21.move();
    enemy22.tick(timestamp);
    enemy22.move();
    enemy23.tick(timestamp);
    enemy23.move();
    enemy24.tick(timestamp);
    enemy24.move();
    enemy25.tick(timestamp);
    enemy25.move();
    enemy26.tick(timestamp);
    enemy26.move();
    enemy27.tick(timestamp);
    enemy27.move();
    enemy28.tick(timestamp);
    enemy28.move();
    enemy29.tick(timestamp);
    enemy29.move();
    enemy30.tick(timestamp);
    enemy30.move();
    enemy31.tick(timestamp);
    enemy31.move();
    enemy32.tick(timestamp);
    enemy32.move();
    enemy33.tick(timestamp);
    enemy33.move();
    enemy34.tick(timestamp);
    enemy34.move();
    enemy35.tick(timestamp);
    enemy35.move();
    enemy36.tick(timestamp);
    enemy36.move();
    enemy37.tick(timestamp);
    enemy37.move();
    enemy38.tick(timestamp);
    enemy38.move();
    enemy39.tick(timestamp);
    enemy39.move();
    enemy40.tick(timestamp);
    enemy40.move();




    curtain.draw();

    tutorial();




    if (enemy1.isHit === false && enemy1.x < 120 ||
        enemy2.isHit === false && enemy2.x < 120 ||
        enemy3.isHit === false && enemy3.x < 120 ||
        enemy4.isHit === false && enemy4.x < 120 ||
        enemy5.isHit === false && enemy5.x < 120 ||
        enemy6.isHit === false && enemy6.x < 120 ||
        enemy7.isHit === false && enemy7.x < 120 ||
        enemy8.isHit === false && enemy8.x < 120 ||
        enemy9.isHit === false && enemy9.x < 120 ||
        enemy10.isHit === false && enemy10.x < 120 ||
        enemy11.isHit === false && enemy11.x < 120 ||
        enemy12.isHit === false && enemy12.x < 120 ||
        enemy13.isHit === false && enemy13.x < 120 ||
        enemy14.isHit === false && enemy14.x < 120 ||
        enemy15.isHit === false && enemy15.x < 120 ||
        enemy16.isHit === false && enemy16.x < 120 ||
        enemy17.isHit === false && enemy17.x < 120 ||
        enemy18.isHit === false && enemy18.x < 120 ||
        enemy19.isHit === false && enemy19.x < 120 ||
        enemy20.isHit === false && enemy20.x < 120 ||
        enemy21.isHit === false && enemy21.x < 120 ||
        enemy22.isHit === false && enemy22.x < 120 ||
        enemy23.isHit === false && enemy23.x < 120 ||
        enemy24.isHit === false && enemy24.x < 120 ||
        enemy25.isHit === false && enemy25.x < 120 ||
        enemy26.isHit === false && enemy26.x < 120 ||
        enemy27.isHit === false && enemy27.x < 120 ||
        enemy28.isHit === false && enemy28.x < 120 ||
        enemy29.isHit === false && enemy29.x < 120 ||
        enemy30.isHit === false && enemy30.x < 120 ||
        enemy31.isHit === false && enemy31.x < 120 ||
        enemy32.isHit === false && enemy32.x < 120 ||
        enemy33.isHit === false && enemy33.x < 120 ||
        enemy34.isHit === false && enemy34.x < 120 ||
        enemy35.isHit === false && enemy35.x < 120 ||
        enemy36.isHit === false && enemy36.x < 120 ||
        enemy37.isHit === false && enemy37.x < 120 ||
        enemy38.isHit === false && enemy38.x < 120 ||
        enemy39.isHit === false && enemy39.x < 120 ||
        enemy40.isHit === false && enemy40.x < 120
    ) {

        isGameOver = true;
        if (player.dieSpriteCount <= 9) {
            window.requestAnimationFrame(tick);
        } else {
            restartButton.style.display = 'initial';
            myAudio.pause();
        }

        // document.location.reload();

    } else if (enemy40.isHit === true) {
        isGameFinish = true;
        if (player.x <= 1200) {
            player.move();
            curtain.move();
            window.requestAnimationFrame(tick);
        }
        if (player.x > 1200) {
            end.style.display = 'initial';
            restartButton.style.display = 'initial';
            gameArea.style.boxShadow = '0px 0px 70px 5px rgb(212, 4, 21)';
            myAudio.pause();
        }
    } else {
        window.requestAnimationFrame(tick);
    }

    // requestAnimationFrame just hold the function name
};
