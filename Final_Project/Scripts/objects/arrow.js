var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Arrow Class
    var Arrow = (function (_super) {
        __extends(Arrow, _super);
        function Arrow() {
            _super.call(this, "Arrow");
            this.init();
            this.name = "Arrow";
            // game.addChild(this);
        }
        // PUBLIC METHODS
        Arrow.prototype.init = function () {
            this.x = doraemon.x;
            this.y = doraemon.y;
        };
        Arrow.prototype.update = function () {
            this.x += 8;
        };
        return Arrow;
    })(objects.GameObject);
    objects.Arrow = Arrow;
})(objects || (objects = {}));
//# sourceMappingURL=arrow.js.map