﻿/// <reference path="typings/stats/stats.d.ts" />
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
var stage: createjs.Stage;
var stats: Stats;

var game: createjs.Container;
var game: createjs.Container;







// Game Variables
var city: objects.City;

var doraemon: objects.Doraemon;
var final_Monster: objects.FinalMonster;
var arrow: objects.Arrow;
var fireball: objects.Fireball;
var doraemonArrow: objects.Doraemon;
var iron_bow: objects.Bow;
var watermellon: objects.WaterMellon;
var menulbl: createjs.Bitmap;
var gameoverlbl: createjs.Bitmap;
var winlbl: createjs.Bitmap;
var level1inst: createjs.Bitmap;
var level2inst: createjs.Bitmap;
var level3inst: createjs.Bitmap;
var transitionLbl: createjs.Bitmap;
var ring: objects.Ring;

var obstacle1: objects.Obstacle;
var obstacle_down: objects.Obstacle_down;
var scoreboard: objects.ScoreBoard;

//game states
var play: states.Play;
var menu: states.Menu;
var play_level_two: states.Play_Level_Two;
var play_level_three: states.Play_Level_Three;
var win_state: states.Win;
var transition_state: states.TransitionState;

var gameover: states.Gameover;
var currentstate;
//Game managers
var assets: managers.Assets;
var arrowManager: managers.ArrowManager;
var fireballManager: managers.FireballManager;
var collision: managers.Collision;
var collision_other: managers.Collision_other;
var btnMethods: buttonMethods.Button_Methods;

//game buttons
var startbutton: objects.Button;
var playagainbutton: objects.Button;

var playButton: objects.Button;
var playButton2: objects.Button;
var nextLevelButton: objects.Button;
var instructionsButton: objects.Button;
var levelsButton: objects.Button;
var exitButton: objects.Button;
var level1Button: objects.Button;
var level2Button: objects.Button;
var level3Button: objects.Button;
var menuButton: objects.Button;
var nextButton: objects.Button;
var backButton: objects.Button;





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
   currentstate =menu;
  
    

}

function changeState(state: number): void {
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