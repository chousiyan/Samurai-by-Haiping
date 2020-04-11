class Enemy {
    x = 600;
    y = 120;

    speed = {
        x: 0,
        y: 0,
    };
    // The scale of the image.
    scale = 1 / 3;
    // where enemy change to attack pose
    attackPosition = 0;

    isAnimating = false;
    // attack pose check


    isHighAttack;
    isMidAttack;
    isLowAttack;




    // run Image
    _runningImageSrc = "assets/img/enemy.png";
    _runningFrames = 14;
    _runningImage;
    _runningSpriteCounter = 0;

    // die
    _dieImageSrc = "assets/img/enemy-die.png";
    _dieFrames = 11;
    _dieImage;
    _dieSpriteCounter = 0;

    // highAttack
    _highAttackImageSrc = "assets/img/enemy-high-attack.png";
    _highAttackFrames = 14;
    _highAttackImage;
    _highAttackSpriteCounter = 0;

    // midAttack
    _midAttackImageSrc = "assets/img/enemy-mid-attack.png";
    _midAttackFrames = 14;
    _midAttackImage;
    _midAttackSpriteCounter = 0;

    // lowAttack
    _lowAttackImageSrc = "assets/img/enemy-low-attack.png";
    _lowAttackFrames = 14;
    _lowAttackImage;
    _lowAttackSpriteCounter = 0;


    // audio
    dieAudio;



    _playDieSound() {
        this.dieAudio.play();
    };
    _pauseDieSound() {
        this.dieAudio.pause();
    };

    isHit = false;

    _start = {};

    constructor(startX, speedX, attackPosition, pose) {
        this.x = startX;
        this.speed.x = speedX;
        this.attackPosition = attackPosition;

        if (pose === "high") {
            this.isHighAttack = true;
        } else if (pose === "mid") {
            this.isMidAttack = true;
        } else if (pose === "low") {
            this.isLowAttack = true;
        };

        this.dieAudio = document.createElement("audio");
        this.dieAudio.src = "assets/sound/enemyDie.mp3";

        this._loadImages();
        this._addListeners();
    }
    // key
    _addListeners() {
        window.addEventListener('keyup', this._isHit.bind(this), false);
    }

    _loadImages() {

        // Load running image
        this._runningImage = new Image();
        this._runningImage.src = this._runningImageSrc;
        this._runningImageSpriteWidth = this._runningImage.width / this._runningFrames;

        // Load die image
        this._dieImage = new Image();
        this._dieImage.src = this._dieImageSrc;
        this._dieImageSpriteWidth = this._dieImage.width / this._dieFrames;

        // Load high attack image
        this._highAttackImage = new Image();
        this._highAttackImage.src = this._highAttackImageSrc;
        this._highAttackImageSpriteWidth = this._highAttackImage.width / this._highAttackFrames;

        // Load mid attack image
        this._midAttackImage = new Image();
        this._midAttackImage.src = this._midAttackImageSrc;
        this._midAttackImageSpriteWidth = this._midAttackImage.width / this._midAttackFrames;

        // Load low attack image
        this._lowAttackImage = new Image();
        this._lowAttackImage.src = this._lowAttackImageSrc;
        this._lowAttackImageSpriteWidth = this._lowAttackImage.width / this._lowAttackFrames;
    }



    tick(timestamp) {
        this.timestamp = timestamp;

        this._draw();
    }
    _draw() {
        // run
        if (this.x >= this.attackPosition) {
            this._drawRunning();
            this._fps(30, this._updateRunningCounter.bind(this));
        }
        // attack pose
        else if (this.x < this.attackPosition && this.isHit === false) {
            if (this.isHighAttack === true) {
                this._drawHighAttack();
                this._fps(30, this._updateHighAttackCounter.bind(this))
            } else if (this.isMidAttack === true) {
                this._drawMidAttack();
                this._fps(30, this._updateMidAttackCounter.bind(this))
            } else if (this.isLowAttack === true) {
                this._drawLowAttack();
                this._fps(30, this._updateLowAttackCounter.bind(this))
            };
        }
        // die
        else if (this.isHit) {
            this._drawDie();
            this._fps(30, this._updateDieCounter.bind(this));
            if (this._dieSpriteCounter < 11) {
                this._playDieSound();
            } else {
                this._pauseDieSound();
            }
        }

        // check isHit here === isGameOver
    }
    //
    _isHit(event) {
        const key = event.key.toLowerCase();
        if (this.isHighAttack === true && key === 'w' && this.x < 400) {
            this.isHit = true;
        } else
        if (this.isMidAttack === true && key === 'd' && this.x < 400) {
            this.isHit = true;
        } else
        if (this.isLowAttack === true && key === 's' && this.x < 400) {
            this.isHit = true;
        }
    }




    // running
    _drawRunning() {

        const spriteLocationX = this._runningImageSpriteWidth * this._runningSpriteCounter;

        ctx.drawImage(
            this._runningImage,
            spriteLocationX, // image crop x
            0, // image crop y
            this._runningImageSpriteWidth - 100,
            this._runningImage.height,
            this.x,
            this.y,
            this._runningImageSpriteWidth * this.scale,
            this._runningImage.height * this.scale
        );
    };


    _updateRunningCounter() {
        this._runningSpriteCounter++;

        if (this._runningSpriteCounter % this._runningFrames === 0) {
            this._runningSpriteCounter = 0;
        }
    };

    // high attack
    _drawHighAttack() {
        const spriteLocationX = this._highAttackImageSpriteWidth * this._highAttackSpriteCounter;

        ctx.drawImage(
            this._highAttackImage,
            spriteLocationX, // image crop x
            0, // image crop y
            this._highAttackImageSpriteWidth - 100,
            this._highAttackImage.height,
            this.x,
            this.y,
            this._highAttackImageSpriteWidth * this.scale,
            this._highAttackImage.height * this.scale
        );
    };

    _updateHighAttackCounter() {
        this._highAttackSpriteCounter++;

        if (this._highAttackSpriteCounter % this._highAttackFrames === 0) {
            this._highAttackSpriteCounter = 0;
        }
    };

    // mid attack
    _drawMidAttack() {
        const spriteLocationX = this._midAttackImageSpriteWidth * this._midAttackSpriteCounter;

    

        ctx.drawImage(
            this._midAttackImage,
            spriteLocationX, // image crop x
            0, // image crop y
            this._midAttackImageSpriteWidth - 100,
            this._midAttackImage.height,
            this.x,
            this.y,
            this._midAttackImageSpriteWidth * this.scale,
            this._midAttackImage.height * this.scale
        );
    };

    _updateMidAttackCounter() {
        this._midAttackSpriteCounter++;

        if (this._midAttackSpriteCounter % this._midAttackFrames === 0) {
            this._midAttackSpriteCounter = 0;
        }
    };

    // low attack
    _drawLowAttack() {
        const spriteLocationX = this._lowAttackImageSpriteWidth * this._lowAttackSpriteCounter;

        ctx.drawImage(
            this._lowAttackImage,
            spriteLocationX, // image crop x
            0, // image crop y
            this._lowAttackImageSpriteWidth - 100,
            this._lowAttackImage.height,
            this.x,
            this.y,
            this._lowAttackImageSpriteWidth * this.scale,
            this._lowAttackImage.height * this.scale
        );
    };

    _updateLowAttackCounter() {
        this._lowAttackSpriteCounter++;

        if (this._lowAttackSpriteCounter % this._lowAttackFrames === 0) {
            this._lowAttackSpriteCounter = 0;
        }
    };




    // die
    _drawDie() {

        const spriteLocationX = this._dieImageSpriteWidth * this._dieSpriteCounter;

        ctx.drawImage(
            this._dieImage,
            spriteLocationX, // image crop x
            0, // image crop y
            this._dieImageSpriteWidth,
            this._dieImage.height,
            this.x,
            this.y,
            this._dieImageSpriteWidth * this.scale * 1.2,
            this._dieImage.height * this.scale
        );
    };

    _updateDieCounter() {
        this.isAnimating = true;

        this._dieSpriteCounter++;

        if (this._dieSpriteCounter % this._dieFrames === 0) {

            // this._dieSpriteCounter = 0;

            // 100ms delay after animation is done
            // before the user can press the key again
            setTimeout(() => {
                this.isAnimating = false;
            }, 1000);
        }
    };





    // move

    move() {


        this.x += this.speed.x;
    };


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



};
