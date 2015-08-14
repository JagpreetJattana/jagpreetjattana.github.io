var states;
(function (states) {
    //class defining transition state
    var TransitionState = (function () {
        //constructor
        function TransitionState() {
            this.main();
        }
        //update methid that updates the objects in this state
        TransitionState.prototype.update = function () {
            city.update();
            stage.update();
        };
        TransitionState.prototype.main = function () {
            game = new createjs.Container();
            //adding city object to stage
            if (config.ACTIVE_STATE == constants.PLAY_STATE) {
                city = new objects.City(assets.loader.getResult("Background"));
                game.addChild(city);
            }
            else if (config.ACTIVE_STATE == constants.PLAY_LEVEL_TWO) {
                city = new objects.City(assets.loader.getResult("level2Background"));
                game.addChild(city);
            }
            // adding transition label to stage
            transitionLbl = new createjs.Bitmap(assets.loader.getResult("transition"));
            game.addChild(transitionLbl);
            // adding next level to stage
            nextLevelButton = new objects.Button(assets.loader.getResult("nextLevelButton"), 500, 330);
            game.addChild(nextLevelButton);
            nextLevelButton.on("click", btnMethods.nextLevelButton);
            // adding menu button to stage
            menuButton = new objects.Button(assets.loader.getResult("menuButton"), 320, 330);
            game.addChild(menuButton);
            menuButton.on("click", btnMethods.menuButton);
            stage.addChild(game);
        };
        return TransitionState;
    })();
    states.TransitionState = TransitionState;
})(states || (states = {}));
//# sourceMappingURL=transitionstate.js.map