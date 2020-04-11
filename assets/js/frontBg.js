class FrontBg {
    x = -40;
    y = 20;
    width = 8306;
    height = 350;
    speed = {
        x: -70,
        y: 0,
    };
    imageSrc = "assets/img/frontBg.png";


    draw() {
        const img = new Image();
        img.src = this.imageSrc

        if (isGameOver === true) {

        } else {
            this.x += this.speed.x;
            ctx.drawImage(
                img, this.x, this.y, this.width, this.height);
        }
    }

    move() {



        if (this.x + 11000 <= 0) {
            this.x = 1400;
            this.x += this.speed.x;
        }

        if (this.x + 11000 > 0) {

            this.x += this.speed.x;
        }


    }

};
