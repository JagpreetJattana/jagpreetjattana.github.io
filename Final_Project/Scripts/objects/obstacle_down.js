var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // obstacle Class. This class defines downside obstacle
    var Obstacle_down = (function (_super) {
        __extends(Obstacle_down, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Obstacle_down(imageString) {
            _super.call(this, imageString);
            this.name = "obstacle_down";
            this.soundString = "fireballs";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Obstacle_down.prototype.checkBounds = function () {
            // check if obstacle has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Obstacle_down.prototype.reset = function () {
            this.y = obstacle1.y + 400; // start obstacle at random location
            this.x = 660; // start obstacle off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Obstacle_down.prototype.update = function () {
            this.x -= 3; // moves obstacle up and down the stage
            this.checkBounds();
        };
        return Obstacle_down;
    })(objects.GameObject);
    objects.Obstacle_down = Obstacle_down;
})(objects || (objects = {}));
//# sourceMappingURL=obstacle_down.js.map