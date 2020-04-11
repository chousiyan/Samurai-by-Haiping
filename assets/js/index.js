// Create the loader and queue our 3 images. Images will not
// begin downloading until we tell the loader to start.
const loader = new PxLoader();

const imagesToLoad = [
    "assets/img/background.jpg",
    "assets/img/blackbg.jpg",
    "assets/img/enemy-die.png",
    "assets/img/enemy-high-attack.png",
    "assets/img/enemy-mid-attack.png",
    "assets/img/enemy-low-attack.png",
    "assets/img/enemy.png",
    "assets/img/floor.jpg",
    "assets/img/frontBg.png",
    "assets/img/mountain.png",
    "assets/img/player-attack.png",
    "assets/img/run.png",
    "assets/img/stillBackGround.png",
    "assets/img/sun.png",
    "assets/img/player-high-attack.png",
    "assets/img/player-low-attack.png",
    "assets/img/player-die.png",
    "assets/img/curtain.png",
    "assets/img/title.png",
    "assets/img/w.png",
    "assets/img/s.png",
    "assets/img/d.png",
];

for (let i = 0; i < imagesToLoad.length; i++) {
    const asset = imagesToLoad[i];
    loader.addImage(asset);
}


// callback that will be run once images are ready
loader.addCompletionListener(function () {
});

// begin downloading images
loader.start();
