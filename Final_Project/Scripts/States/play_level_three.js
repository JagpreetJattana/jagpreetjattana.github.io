var states;
(function (states) {
    //class defining play level three state
    var Play_Level_Three = (function () {
        //game variables
        function Play_Level_Three() {
            this.main();
        }
        //method updating play level three state objects
        Play_Level_Three.prototype.update = function () {
            city.update();
            fireballManager.update();
            doraemon.update();
            final_Monster.update();
            arrowManager.update();
            config.FRAME_COUNTER += 1;
            if ((config.FRAME_COUNTER == 300) && (config.MONSTER_IS_THERE)) {
                config.FIRING_FIREBALL = true;
            }
            else if (config.FRAME_COUNTER == 360) {
                config.FRAME_COUNTER = 0;
                config.FIRING_FIREBALL = false;
            }
            scoreboard.update();
            stage.update();
        };
        Play_Level_Three.prototype.main = function () {
            game = new createjs.Container();
            createjs.Sound.stop();
            createjs.Sound.play("level3Sound", { "loop": -1 });
            //adding city object to stage
            city = new objects.City(assets.loader.getResult("level3Background"));
            game.addChild(city);
            // adding final monster to stage
            final_Monster = new objects.FinalMonster("FinalMonster");
            game.addChild(final_Monster);
            // adding doraemon to stage
            doraemon = new objects.Doraemon("Dom");
            game.addChild(doraemon);
            //making sure that doraemon has bow
            config.HAVING_BOW = true;
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
            collision_other = new managers.Collision_other();
            stage.addChild(game);
        };
        return Play_Level_Three;
    })();
    states.Play_Level_Three = Play_Level_Three;
})(states || (states = {}));
//# sourceMappingURL=play_level_three.js.map