var states;
(function (states) {
    //class defining game over state
    var Gameover = (function () {
        //constructor
        function Gameover() {
            this.main();
        }
        //update methid that updates the objects in this state
        Gameover.prototype.update = function () {
            city.update();
            stage.update();
        };
        Gameover.prototype.main = function () {
            game = new createjs.Container();
            //adding city object to stage
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);
            //adding game over label
            gameoverlbl = new createjs.Bitmap(assets.loader.getResult("gameoverlbl"));
            game.addChild(gameoverlbl);
            menuButton = new objects.Button(assets.loader.getResult("menuButton"), 320, 330);
            game.addChild(menuButton);
            menuButton.on("click", btnMethods.menuButton);
            stage.addChild(game);
        };
        return Gameover;
    })();
    states.Gameover = Gameover;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map