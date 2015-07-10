/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/city.ts" />
/// <reference path="objects/superman.ts" />
/// <reference path="objects/ring.ts" />
/// <reference path="objects/fireball.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="objects/colliding.ts" />
/// <reference path="constants.ts" />
/// <reference path="states/play.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var game;
var game;
// Game Variables
var city;
var colliding;
var superman;
var menulbl;
var gameoverlbl;
var ring;
var fireballs = [];
var scoreboard;
var play;
var menu;
var gameover;
var currentstate;
//Game managers
var assets;
var collision;
//game buttons
var startbutton;
var playagainbutton;
// Preloader Function
function preload() {
    assets = new managers.Assets();
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    optimizeForMobile();
    // calling main game function
    main();
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    ///updating current state
    currentstate.update();
    stats.end(); // end measuring
}
// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}
// Our Main Game Function
function main() {
    menu = new states.Menu();
    currentstate = menu;
}
function changeState(state) {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentstate = menu;
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            play = new states.Play();
            currentstate = play;
            break;
        case constants.GAME_OVER_STATE:
            gameover = new states.Gameover();
            currentstate = gameover;
            break;
    }
}
//# sourceMappingURL=game.js.map