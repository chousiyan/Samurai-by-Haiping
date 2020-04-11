class Background {
    x = -40;
    y = 105;
    width = 7318 / 2;
    height = 250;
    speed = {
        x: -0.2,
        y: 0,
    };
    imageSrc = "assets/img/mountain.png";


    draw() {
        const img = new Image();
        img.src = this.imageSrc

        ctx.drawImage(
            img, this.x, this.y, this.width, this.height);
    }

    move() {
        if (isGameOver === true || isGameFinish === true) {
            this.speed.x = 0;
            this.x += this.speed.x;
        }
        this.x += this.speed.x;


    }

};
