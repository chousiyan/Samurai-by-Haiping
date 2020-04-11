class Curtain {

    x = -1201;
    y = 0;

    speed = {
        x: 8,
        y: 0,
    };

    imageSrc = "assets/img/curtain.png";
    width = 1201;
    height = 421;

    img;

    constructor() {
        this.img = new Image();
        this.img.src = this.imageSrc;
    }



    draw() {
        ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    };
    move() {
        this.x += this.speed.x;
    };



}
