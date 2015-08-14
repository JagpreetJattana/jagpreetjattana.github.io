var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Fireball Class
    var Fireball = (function (_super) {
        __extends(Fireball, _super);
        function Fireball() {
            _super.call(this, "Fireball");
            this.init();
            this.name = "Fireball";
            // game.addChild(this);
        }
        // PUBLIC METHODS
        Fireball.prototype.init = function () {
            this.x = final_Monster.x;
            this.y = final_Monster.y;
        };
        Fireball.prototype.update = function () {
            this.x -= 6;
        };
        return Fireball;
    })(objects.GameObject);
    objects.Fireball = Fireball;
})(objects || (objects = {}));
//# sourceMappingURL=fireball.js.map