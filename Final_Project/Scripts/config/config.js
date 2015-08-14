var config;
(function (config) {
    // font constants
    config.FONT_FAMILY = "Consolas";
    config.FONT_SMALL = "20px";
    config.FONT_MEDIUM = "40px";
    config.FONT_LARGE = "60px";
    config.FONT_EXTRA_LARGE = "80px";
    // colour constants
    config.WHITE = "#FFFFFF";
    config.BLACK = "#000000";
    config.YELLOW = "#FFFF00";
    config.RED = "#FF0000";
    config.GREEN = "#00FF00";
    config.BLUE = "#0000FF";
    // state constants
    config.MENU_STATE = 0;
    config.INSTRUCTION_STATE = 1;
    config.PLAY_STATE = 2;
    config.GAME_OVER_STATE = 3;
    // key constants
    config.KEY_LEFT = 37;
    config.KEY_RIGHT = 39;
    config.KEY_UP = 38;
    config.KEY_DOWN = 40;
    config.KEY_SPACE = 32;
    config.KEY_A = 65;
    config.KEY_S = 83;
    config.KEY_D = 68;
    config.KEY_W = 87;
    config.KEY_DOWN_EVENT = 0x0001; //Key down flag
    config.KEY_UP_EVENT = 0x0002; //Key up flag
    // control constants
    config.FORWARD = false;
    config.REVERSE = false;
    config.TURN_LEFT = false;
    config.TURN_RIGHT = false;
    config.JUMP = false;
    config.FIRING = false;
    //constans for internal mechanics of game
    config.RINGSTRIKE = false;
    config.HAVING_BOW = false;
    config.PLAY_MELLON_ANIMATION = false;
    config.MELLON_IS_THERE = true;
    config.ARROW_FIRED = false;
    config.MOVE_UP = false;
    config.MOVE_DOWN = false;
    config.FIRING_FIREBALL = false;
    config.ACTIVE_STATE = 99;
    config.FRAME_COUNTER = 0;
    config.MONSTER_IS_THERE = true;
    config.MELLON_DIEING = false;
    config.DORAEMON_DIEING = false;
    config.HAVING_CONTROLS = true;
    config.OBSTACLE_COLLIDING = false;
    config.MENU_INSTRUCTIONS = 0;
    // avatar constants
    config.PLAYER_FORWARD = 5;
    config.PLAYER_REVERSE = 2;
    config.PLAYER_TURN_RATE = 2;
    // bullet constants
    config.BULLET_SPEED = 10;
})(config || (config = {}));
//# sourceMappingURL=config.js.map