var buttonMethods;
(function (buttonMethods) {
    //This class containes all the methods that will be executed when a button is clicked.
    //Names of the methods are exaclty same as the name of bttons.
    var Button_Methods = (function () {
        function Button_Methods() {
        }
        Button_Methods.prototype.menuButton = function () {
            changeState(constants.MENU_STATE);
        };
        Button_Methods.prototype.playButton = function () {
            menu.stateTrasition();
        };
        Button_Methods.prototype.playButton2 = function () {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(menuButton);
            game.removeChild(level1inst);
            game.removeChild(level2inst);
            game.removeChild(level3inst);
            game.removeChild(backButton);
            game.removeChild(nextButton);
            game.removeChild(playButton2);
            if (config.ACTIVE_STATE == constants.MENU_STATE) {
                changeState(constants.PLAY_STATE);
            }
            else if (config.ACTIVE_STATE == constants.PLAY_STATE) {
                changeState(constants.PLAY_LEVEL_TWO);
            }
            else if (config.ACTIVE_STATE == constants.PLAY_LEVEL_TWO) {
                changeState(constants.PLAY_LEVEL_THREE);
            }
        };
        Button_Methods.prototype.nextLevelButton = function () {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(menuButton);
            game.removeChild(level1inst);
            game.removeChild(level2inst);
            game.removeChild(level3inst);
            game.removeChild(backButton);
            game.removeChild(nextButton);
            game.removeChild(playButton2);
            game.removeChild(nextLevelButton);
            game.removeChild(transitionLbl);
            if (config.ACTIVE_STATE == constants.PLAY_STATE) {
                game.addChild(level2inst);
                game.addChild(playButton2);
            }
            else if (config.ACTIVE_STATE == constants.PLAY_LEVEL_TWO) {
                game.addChild(level3inst);
                game.addChild(playButton2);
            }
        };
        Button_Methods.prototype.nextButton = function () {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(menuButton);
            game.removeChild(level1inst);
            game.removeChild(level2inst);
            game.removeChild(level3inst);
            game.removeChild(backButton);
            if (config.MENU_INSTRUCTIONS == 0) {
                game.addChild(level2inst);
                game.addChild(backButton);
                game.addChild(menuButton);
                config.MENU_INSTRUCTIONS = 1;
            }
            else if (config.MENU_INSTRUCTIONS == 1) {
                game.addChild(level3inst);
                game.removeChild(nextButton);
                game.addChild(menuButton);
                game.addChild(backButton);
                config.MENU_INSTRUCTIONS = 2;
            }
            game.addChild(backButton);
        };
        Button_Methods.prototype.backButton = function () {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(playButton);
            game.removeChild(menuButton);
            game.removeChild(level1inst);
            game.removeChild(level2inst);
            game.removeChild(level3inst);
            game.removeChild(nextButton);
            game.removeChild(menuButton);
            game.removeChild(backButton);
            if (config.MENU_INSTRUCTIONS == 1) {
                game.addChild(level1inst);
                game.addChild(nextButton);
                game.addChild(menuButton);
                config.MENU_INSTRUCTIONS = 0;
            }
            else if (config.MENU_INSTRUCTIONS == 2) {
                game.addChild(level2inst);
                game.addChild(nextButton);
                game.addChild(menuButton);
                game.addChild(backButton);
                config.MENU_INSTRUCTIONS = 1;
            }
        };
        Button_Methods.prototype.instructionsButton = function () {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(levelsButton);
            game.addChild(nextButton);
            game.addChild(menuButton);
            game.addChild(level1inst);
        };
        Button_Methods.prototype.levelsButton = function () {
            game.removeChild(playButton);
            game.removeChild(exitButton);
            game.removeChild(instructionsButton);
            game.removeChild(levelsButton);
            game.addChild(level1Button);
            game.addChild(level2Button);
            game.addChild(level3Button);
            game.addChild(menuButton);
        };
        Button_Methods.prototype.level1Button = function () {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();
            changeState(constants.PLAY_STATE);
        };
        Button_Methods.prototype.level2Button = function () {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();
            changeState(constants.PLAY_LEVEL_TWO);
        };
        Button_Methods.prototype.level3Button = function () {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();
            changeState(constants.PLAY_LEVEL_THREE);
        };
        Button_Methods.prototype.exitButton = function () {
            window.close();
        };
        return Button_Methods;
    })();
    buttonMethods.Button_Methods = Button_Methods;
})(buttonMethods || (buttonMethods = {}));
//# sourceMappingURL=buttonMethods.js.map