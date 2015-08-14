var states;
(function (states) {
    //class defining win state
    var Win = (function () {
        //constructor
        function Win() {
            this.main();
        }
        //update methid that updates the objects in this state
        Win.prototype.update = function () {
            city.update();
            stage.update();
        };
        Win.prototype.main = function () {
            game = new createjs.Container();
            btnMethods = new buttonMethods.Button_Methods();
            //adding city object to stage
            city = new objects.City(assets.loader.getResult("level3Background"));
            game.addChild(city);
            //adding game win label
            winlbl = new createjs.Bitmap(assets.loader.getResult("winlbl"));
            game.addChild(winlbl);
            // adding menu button to stage
            menuButton = new objects.Button(assets.loader.getResult("menuButton"), 320, 330);
            game.addChild(menuButton);
            menuButton.on("click", btnMethods.menuButton);
            stage.addChild(game);
        };
        return Win;
    })();
    states.Win = Win;
})(states || (states = {}));
//# sourceMappingURL=win.js.map