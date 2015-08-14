var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // water mellon Class ++++++++++++++++++++++++++++++++++++++
    var WaterMellon = (function (_super) {
        __extends(WaterMellon, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function WaterMellon(imageString) {
            _super.call(this, imageString);
            this.name = "watermellon";
            this.soundString = "watermelonSound";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        WaterMellon.prototype.checkBounds = function () {
            // check if watermelon has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        WaterMellon.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 390); // start watermellon at random location
            // this.y =142;
            this.x = 660; // start watermellon off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        WaterMellon.prototype.update = function () {
            if (!config.MELLON_IS_THERE) {
                game.addChild(watermellon);
                this.reset();
                config.MELLON_IS_THERE = true;
            }
            else {
                if (!config.MELLON_DIEING) {
                    this.x -= 4; // moves water mellons from right to left
                    this.checkBounds();
                }
            }
        };
        return WaterMellon;
    })(objects.GameObject);
    objects.WaterMellon = WaterMellon;
})(objects || (objects = {}));
//# sourceMappingURL=mellon.js.map