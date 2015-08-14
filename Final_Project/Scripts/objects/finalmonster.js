var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Final Monster Class ++++++++++++++++++++++++++++++++++++++
    var FinalMonster = (function (_super) {
        __extends(FinalMonster, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function FinalMonster(imageString) {
            _super.call(this, imageString);
            this.name = "FinalMonster";
            this.soundString = "hit_monsterSound";
            this.x = 580;
            this.y = 600;
            this.scaleX = -1;
            config.MOVE_UP = true;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        FinalMonster.prototype.checkBounds = function () {
            //to keep monster in between the cancas height
            if (this.y < 40) {
                config.MOVE_UP = false;
                config.MOVE_DOWN = true;
            }
            if (this.y > 360) {
                config.MOVE_UP = true;
                config.MOVE_DOWN = false;
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        FinalMonster.prototype.update = function () {
            if (config.MONSTER_IS_THERE) {
                if (config.MOVE_UP) {
                    this.y -= 4;
                }
                if (config.MOVE_DOWN) {
                    this.y += 4;
                }
                this.checkBounds();
            }
        };
        return FinalMonster;
    })(objects.GameObject);
    objects.FinalMonster = FinalMonster;
})(objects || (objects = {}));
//# sourceMappingURL=finalmonster.js.map