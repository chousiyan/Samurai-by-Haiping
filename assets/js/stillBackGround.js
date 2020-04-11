class StillBackGround {
    x = -70;
    y = -20;
    width = 1250;
    height = 450;
    speed = {
        x: -0.1,
        y: 0,
    };
    imageSrc = "assets/img/stillBackGround.png";


    draw() {
        const img = new Image();
        img.src = this.imageSrc;

        ctx.drawImage(
            img, this.x, this.y, this.width, this.height);
    };



};
