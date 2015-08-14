var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Bow Class ++++++++++++++++++++++++++++++++++++++
    var Bow = (function (_super) {
        __extends(Bow, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Bow(imageString) {
            _super.call(this, imageString);
            this.name = "Bow";
            //  this.soundString = "bow";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Bow.prototype.checkBounds = function () {
            // condition to bring bow again on the screen
            if (this.x < -2000) {
                this.reset();
            }
        };
        Bow.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 390); // start bow at random location
            // this.y = 100;
            this.x = 860; // start bow off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Bow.prototype.update = function () {
            this.x -= 5; // moves bow from left to right
            this.checkBounds();
            if (config.HAVING_BOW) {
                game.removeChild(iron_bow);
            }
        };
        return Bow;
    })(objects.GameObject);
    objects.Bow = Bow;
})(objects || (objects = {}));
//# sourceMappingURL=bow.js.map