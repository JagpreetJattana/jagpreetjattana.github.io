var states;
(function (states) {
    //class defining play state
    var Play = (function () {
        //game variables
        function Play() {
            this.main();
        }
        //method updating playing state objects
        Play.prototype.update = function () {
            doraemon.update();
            if (!config.DORAEMON_DIEING) {
                city.update();
                // arrowManager.update();
                ring.update();
                obstacle1.update();
                obstacle_down.update();
                collision.check(ring);
                collision.check_obstacle();
                scoreboard.update();
            }
            stage.update();
        };
        Play.prototype.main = function () {
            createjs.Sound.stop();
            createjs.Sound.play("level1Sound", { "loop": -1 });
            game = new createjs.Container();
            //adding city object to stage
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);
            // adding upper obstacle to stage
            obstacle1 = new objects.Obstacle("obstacle1");
            game.addChild(obstacle1);
            // adding lower obstacle to stage
            obstacle_down = new objects.Obstacle_down("obstacle2");
            game.addChild(obstacle_down);
            //add rings object to stage
            ring = new objects.Ring("ring");
            game.addChild(ring);
            // adding doraemon to stage
            doraemon = new objects.Doraemon("Dom");
            game.addChild(doraemon);
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
            collision_other = new managers.Collision_other();
            stage.addChild(game);
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map