/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="buttonmethods/buttonmethods.ts" />
/// <reference path="config/config.ts" />
/// <reference path="managers/arrow.ts" />
/// <reference path="managers/collisionother.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="managers/fireballmanager.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/city.ts" />
/// <reference path="objects/doraemon.ts" />
/// <reference path="objects/fireball.ts" />
/// <reference path="objects/finalmonster.ts" />
/// <reference path="objects/arrow.ts" />
/// <reference path="objects/ring.ts" />
/// <reference path="objects/bow.ts" />
/// <reference path="objects/mellon.ts" />
/// <reference path="objects/obstacle.ts" />
/// <reference path="objects/obstacle_down.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="constants.ts" />
/// <reference path="states/transitionstate.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/play_level_two.ts" />
/// <reference path="states/play_level_three.ts" />
/// <reference path="states/win.ts" />
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
var doraemon;
var final_Monster;
var arrow;
var fireball;
var doraemonArrow;
var iron_bow;
var watermellon;
var menulbl;
var gameoverlbl;
var winlbl;
var level1inst;
var level2inst;
var level3inst;
var transitionLbl;
var ring;
var obstacle1;
var obstacle_down;
var scoreboard;
//game states
var play;
var menu;
var play_level_two;
var play_level_three;
var win_state;
var transition_state;
var gameover;
var currentstate;
//Game managers
var assets;
var arrowManager;
var fireballManager;
var collision;
var collision_other;
var btnMethods;
//game buttons
var startbutton;
var playagainbutton;
var playButton;
var playButton2;
var nextLevelButton;
var instructionsButton;
var levelsButton;
var exitButton;
var level1Button;
var level2Button;
var level3Button;
var menuButton;
var nextButton;
var backButton;
// Preloader Function
function preload() {
    assets = new managers.Assets();
    arrowManager = new managers.ArrowManager();
    fireballManager = new managers.FireballManager();
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
    stats.domElement.style.left = '150px';
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
    config.ACTIVE_STATE = constants.MENU_STATE;
    currentstate = menu;
}
function changeState(state) {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            config.ACTIVE_STATE = constants.MENU_STATE;
            menu = new states.Menu();
            currentstate = menu;
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            config.ACTIVE_STATE = constants.PLAY_STATE;
            play = new states.Play();
            currentstate = play;
            break;
        case constants.PLAY_LEVEL_TWO:
            // instantiate play level two screen
            config.ACTIVE_STATE = constants.PLAY_LEVEL_TWO;
            play_level_two = new states.Play_Level_Two();
            currentstate = play_level_two;
            break;
        case constants.PLAY_LEVEL_THREE:
            // instantiate play level three screen
            config.ACTIVE_STATE = constants.PLAY_LEVEL_THREE;
            play_level_three = new states.Play_Level_Three();
            currentstate = play_level_three;
            break;
        case constants.GAME_OVER_STATE:
            //instantiating game over screen
            gameover = new states.Gameover();
            currentstate = gameover;
            break;
        case constants.WIN_STATE:
            //instantiating game win screen
            win_state = new states.Win();
            currentstate = win_state;
            break;
        case constants.TRANSITION_STATE:
            //instantiating level complete screen
            transition_state = new states.TransitionState();
            currentstate = transition_state;
            break;
    }
}
//# sourceMappingURL=game.js.map