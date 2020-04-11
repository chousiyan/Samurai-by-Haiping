class Player {

    // Players original location
    x = 50;
    y = 250;

    speed = {
        x: 8,
        y: 0,
    };

    // run Image
    runImageSrc = "assets/img/run.png";
    runWidth = 500;
    runHeight = 308;
    // main image
    runImg;
    // run sprite
    runSprite = [
        0,
        500,
        1000,
        1500,
        2000,
        2500,
        3000,
        3500,
        4000,
        4500,
        5000,
        5500,
        6000,
        6500,
    ];
    runFrame = 14;
    runSpriteCount = 0;
    // HighAttack Image
    highAttackImageSrc = "assets/img/player-high-attack.png";
    highAttackWidth = 813;
    highAttackHeight = 417;
    // main image
    highAttackImg;
    highAttackSprite = [
        0,
        813,
        1626,
    ];
    highAttackFrame = 3;
    highAttackSpriteCount = 0;
    // MidAttack Image
    midAttackImageSrc = "assets/img/player-attack.png";
    midAttackWidth = 813;
    midAttackHeight = 308;
    // main image
    midAttackImg;
    midAttackSprite = [
        0,
        813,
        1626,
    ];
    midAttackFrame = 3;
    midAttackSpriteCount = 0;
    // LowAttack Image
    lowAttackImageSrc = "assets/img/player-low-attack.png";
    lowAttackWidth = 813;
    lowAttackHeight = 320;
    // main image
    lowAttackImg;
    lowAttackSprite = [
        0,
        813,
        1626,
    ];
    lowAttackFrame = 3;
    lowAttackSpriteCount = 0;

    // die Image
    dieImageSrc = "assets/img/player-die.png";
    dieWidth = 640;
    dieHeight = 343;
    // main image
    dieImg;
    //die sprite
    dieSprite = [
        0,
        791,
        791 * 2,
        791 * 3,
        791 * 4,
        791 * 5,
        791 * 6,
        791 * 7,
        791 * 8,
        791 * 9,
    ];
    dieFrame = 10;
    dieSpriteCount = 0;



    // The scale of the image.
    scale = 3;

    isAnimating = false;


    // Attack booleans
    isHighAttack = false;
    isMidAttack = false;
    isLowAttack = false;


    // Keeps track of timers
    _start = {};

    // sound

    highAttackAudio;
    midAttackAudio;
    lowAttackAudio;
    slashAudio;
    dieAudio;


    playHighAttackSound() {
        this.highAttackAudio.play();
        this.slashAudio.play();
    };
    playMidAttackSound() {
        this.midAttackAudio.play();
        this.slashAudio.play();
    };
    playLowAttackSound() {
        this.lowAttackAudio.play();
        this.slashAudio.play();
    };
    playDieSound() {
        this.dieAudio.play();
    };



    constructor() {
        this.runImg = new Image();
        this.runImg.src = this.runImageSrc;
        this.midAttackImg = new Image();
        this.midAttackImg.src = this.midAttackImageSrc;
        this.highAttackImg = new Image();
        this.highAttackImg.src = this.highAttackImageSrc;
        this.lowAttackImg = new Image();
        this.lowAttackImg.src = this.lowAttackImageSrc;
        this.dieImg = new Image();
        this.dieImg.src = this.dieImageSrc;


        this.slashAudio = document.createElement("audio");
        this.slashAudio.src = "assets/sound/swordSlash.mp3";
        this.highAttackAudio = document.createElement("audio");
        this.highAttackAudio.src = "assets/sound/highAttack.mp3";
        this.midAttackAudio = document.createElement("audio");
        this.midAttackAudio.src = "assets/sound/midAttack.mp3";
        this.lowAttackAudio = document.createElement("audio");
        this.lowAttackAudio.src = "assets/sound/lowAttack.mp3";
        this.dieAudio = document.createElement("audio");
        this.dieAudio.src = "assets/sound/playerDie.mp3";

        this._addListeners();
    }

    _addListeners() {
        window.addEventListener('keyup', this._checkKeys.bind(this), false);
    }


    // functions
    tick(timestamp) {
        this.timestamp = timestamp;

        this._draw();
    }

    _draw() {

        if (this.isMidAttack) {
            this._drawMidAttack();
            this.playMidAttackSound();
            this._fps(10, this._updateMidAttackCounter.bind(this));
        } else if (this.isHighAttack) {
            this._drawHighAttack();
            this.playHighAttackSound();
            this._fps(10, this._updateHighAttackCounter.bind(this));
        } else if (this.isLowAttack) {
            this._drawLowAttack();
            this.playLowAttackSound();
            this._fps(10, this._updateLowAttackCounter.bind(this));
        } else if (isGameOver === true) {
            this._drawDie()
            this.playDieSound();
            this._fps(50, this._updateDieCounter.bind(this));
        } else {
            this._drawRunning();
            this._fps(30, this._updateRunningCounter.bind(this));
        }

    }

    // RUNNING
    _drawRunning() {
        ctx.drawImage(
            this.runImg,
            this.runSprite[this.runSpriteCount],
            0,
            500,
            308,
            this.x,
            this.y,
            this.runWidth / this.scale,
            this.runHeight / this.scale
        );

        // this.runSpriteCount++;
        // if (this.runSpriteCount % 14 === 0) {
        //     this.runSpriteCount = 0;
        // }
    }

    _updateRunningCounter() {
        this.runSpriteCount++;
        if (this.runSpriteCount % this.runSprite.length === 0) {
            this.runSpriteCount = 0;
        }
    }

    // HIGH
    _drawHighAttack() {
        ctx.drawImage(
            this.highAttackImg,
            this.highAttackSprite[this.highAttackSpriteCount],
            0,
            813,
            417,
            this.x + 20,
            this.y - 36,
            this.highAttackWidth / this.scale,
            this.highAttackHeight / this.scale
        );
    }

    _updateHighAttackCounter() {

        this.isAnimating = true;

        this.highAttackSpriteCount++;

        if (this.highAttackSpriteCount % this.highAttackSprite.length === 0) {
            this.highAttackSpriteCount = 0;

            this._resetAttackBooleans();

            // 100ms delay after animation is done
            // before the user can press the key again
            setTimeout(() => {
                this.isAnimating = false;
            }, 0);


        }
    }
    // MID
    _drawMidAttack() {
        ctx.drawImage(
            this.midAttackImg,
            this.midAttackSprite[this.midAttackSpriteCount],
            0,
            813,
            308,
            this.x + 20,
            this.y,
            this.midAttackWidth / this.scale,
            this.midAttackHeight / this.scale
        );
    }

    _updateMidAttackCounter() {

        this.isAnimating = true;

        this.midAttackSpriteCount++;

        if (this.midAttackSpriteCount % this.midAttackSprite.length === 0) {
            this.midAttackSpriteCount = 0;

            this._resetAttackBooleans();

            // 100ms delay after animation is done
            // before the user can press the key again
            setTimeout(() => {
                this.isAnimating = false;
            }, 0);


        }
    }


    // LOW


    _drawLowAttack() {
        ctx.drawImage(
            this.lowAttackImg,
            this.lowAttackSprite[this.lowAttackSpriteCount],
            0,
            813,
            320,
            this.x + 20,
            this.y - 4,
            this.lowAttackWidth / this.scale,
            this.lowAttackHeight / this.scale
        );
    }

    _updateLowAttackCounter() {

        this.isAnimating = true;

        this.lowAttackSpriteCount++;

        if (this.lowAttackSpriteCount % this.lowAttackSprite.length === 0) {
            this.lowAttackSpriteCount = 0;

            this._resetAttackBooleans();

            // 100ms delay after animation is done
            // before the user can press the key again
            setTimeout(() => {
                this.isAnimating = false;
            }, 0);


        }
    }



    // Die


    _drawDie() {
        ctx.drawImage(
            this.dieImg,
            this.dieSprite[this.dieSpriteCount],
            0,
            791,
            425,
            this.x + 20,
            this.y - 7,
            this.dieWidth / this.scale,
            this.dieHeight / this.scale
        );
    }

    _updateDieCounter() {

        this.isAnimating = true;

        this.dieSpriteCount++;

        if (this.dieSpriteCount % this.dieSprite.length === 0) {


            this._resetAttackBooleans();

            // 100ms delay after animation is done
            // before the user can press the key again
            setTimeout(() => {
                this.isAnimating = false;
            }, 0);


        }
    }




    // utility
    _fps(fps, callback) {
        let functionName = callback.name;

        if (functionName.indexOf("bound ") >= 0) {
            functionName = functionName.split("bound ").pop();
        }

        if (!this._start[functionName]) {
            this._start[functionName] = this.timestamp;
        }

        const diff = this.timestamp - this._start[functionName];

        if (diff >= fps) {
            callback();
            delete this._start[functionName];
        }
    }

    _resetAttackBooleans() {
        this.isHighAttack = false;
        this.isMidAttack = false;
        this.isLowAttack = false;
    }


      move() {
          this.x += this.speed.x;
      };




    // keys
    _checkKeys(event) {
        const key = event.key.toLowerCase();

        if (this.isAnimating) {
            return;
        }

        if (key === 'w') {
            this.isHighAttack = true;
            this.isMidAttack = false;
            this.isLowAttack = false;

        } else if (key === 's') {
            this.isHighAttack = false;
            this.isMidAttack = false;
            this.isLowAttack = true;

        } else if (key === 'd') {
            this.isHighAttack = false;
            this.isMidAttack = true;
            this.isLowAttack = false;
        }
    }


}
