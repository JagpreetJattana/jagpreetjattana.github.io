var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // obstacle class. This is class defines upper obstacle
    var Obstacle = (function (_super) {
        __extends(Obstacle, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Obstacle(imageString) {
            _super.call(this, imageString);
            this.name = "obstacle1";
            this.soundString = "fireballs";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Obstacle.prototype.checkBounds = function () {
            // check if obstackle has left screen
            if (this.x < 0) {
                config.RINGSTRIKE = false;
                this.reset();
            }
        };
        Obstacle.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 142); // start obstacle at random location
            // this.y =142;
            this.x = 660; // start obstacle off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Obstacle.prototype.update = function () {
            this.x -= 3; // moves obstacle from right to left
            this.checkBounds();
        };
        return Obstacle;
    })(objects.GameObject);
    objects.Obstacle = Obstacle;
})(objects || (objects = {}));
//# sourceMappingURL=obstacle.js.map