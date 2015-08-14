var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Domraemon Class ++++++++++++++++++++++++++++++++++++++
    var Doraemon = (function (_super) {
        __extends(Doraemon, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Doraemon(imageString) {
            _super.call(this, imageString);
            window.onkeydown = this.jump;
            window.onkeyup = this.jumpdown;
            this.name = "doraemon";
            this.dy = 3;
            this.y = 0;
            if (config.ACTIVE_STATE == constants.PLAY_LEVEL_THREE) {
                this.x = 100;
            }
            else {
                this.x = 250;
            }
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Doraemon.prototype.update = function () {
            if (!config.DORAEMON_DIEING) {
                this.y += this.dy;
                this.checkbounds();
                this.performingjump();
            }
        };
        Doraemon.prototype.dieing = function () {
            createjs.Sound.play("monsterFiring");
            scoreboard.lives -= 1;
            if (scoreboard.lives < 0) {
                changeState(constants.GAME_OVER_STATE);
            }
            config.DORAEMON_DIEING = true;
            config.HAVING_CONTROLS = false;
            doraemon.gotoAndPlay("Dora_die");
            window.setTimeout(function () {
                doraemon.y = -900;
                doraemon.gotoAndPlay("Dom");
            }, 1800);
            window.setTimeout(function () {
                config.DORAEMON_DIEING = false;
                config.HAVING_CONTROLS = true;
            }, 2850);
        };
        Doraemon.prototype.checkbounds = function () {
            if (this.y > 400) {
                this.dieing();
            }
            else if (this.y < 0) {
                this.y += 7;
                config.JUMP = false;
            }
        };
        //performing jump events
        Doraemon.prototype.jump = function (event) {
            if (config.HAVING_CONTROLS) {
                switch (event.keyCode) {
                    case config.KEY_UP:
                        config.JUMP = true;
                        createjs.Sound.play("jumpSound");
                        break;
                    case config.KEY_DOWN:
                        config.JUMP = false;
                        break;
                    case config.KEY_SPACE:
                        config.FIRING = true;
                        break;
                }
            }
        };
        Doraemon.prototype.jumpdown = function (event) {
            switch (event.keyCode) {
                case config.KEY_UP:
                    config.JUMP = false;
                    // this.y -= 100;
                    break;
                case config.KEY_DOWN:
                    config.JUMP = false;
                    break;
                case config.KEY_SPACE:
                    config.FIRING = false;
                    break;
            }
        };
        //method to perform jump acutally
        Doraemon.prototype.performingjump = function () {
            if (config.JUMP) {
                this.y -= 7;
            }
        };
        return Doraemon;
    })(objects.GameObject);
    objects.Doraemon = Doraemon;
})(objects || (objects = {}));
//# sourceMappingURL=doraemon.js.map