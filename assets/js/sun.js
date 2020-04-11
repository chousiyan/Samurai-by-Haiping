class Sun {
    x = 0;
    y = 150;
    width = 447 / 2.5;
    height = 447 / 2.5;
    speed = {
        x: 0.32,
        //0.2
        y: 0,
    };
    imageSrc;
    img;

    degree;

    constructor(imageLocation) {
        this.imageSrc = imageLocation;

    }

    draw() {
        const img = new Image();
        img.src = this.imageSrc


        ctx.drawImage(
            img, this.x, this.y, this.width, this.height);

    }

    move() {


        this.x += this.speed.x;
        this.y = 190 * Math.sin(0.0035 * this.x + Math.PI) + 180;

    }


};
