﻿module managers {
    export class Assets {
        //public properties
        public textureAtlas: createjs.SpriteSheet;
        public loader: createjs.LoadQueue;


        //private properties
        private manifest = [
            { id: "Background", src: "assets/images/Background.png" },
            { id: "level2Background", src: "assets/images/level2background.png" },
            { id: "level3Background", src: "assets/images/level3Background.png" },
            { id: "playButton", src: "assets/images/playButton.png" },
            { id: "instructionsButton", src: "assets/images/instructionsButton.png" },
            { id: "levelsButton", src: "assets/images/levelsButton.png" },
            { id: "exitButton", src: "assets/images/exitButton.png" },
            { id: "level1Button", src: "assets/images/level1Button.png" },
            { id: "level2Button", src: "assets/images/level2Button.png" },
            { id: "level3Button", src: "assets/images/level3Button.png" },
            { id: "menuButton", src: "assets/images/menuButton.png" },
            { id: "nextButton", src: "assets/images/nextButton.png" },
            { id: "backButton", src: "assets/images/backButton.png" },
            { id: "transition", src: "assets/images/transition.png" },
            { id: "nextLevelButton", src: "assets/images/nextLevelButton.png" },
          
          
            { id: "gameoverlbl", src: "assets/images/gameover.png" },
            { id: "winlbl", src: "assets/images/winlbl.png" },
            { id: "l1instlbl", src: "assets/images/Level1Instructions.png" },
            { id: "l2instlbl", src: "assets/images/Level2Instructions.png" },
            { id: "l3instlbl", src: "assets/images/Level3Instructions.png" },
         
            { id: "startbutton", src: "assets/images/startbutton.png" },
            { id: "ringing", src: "assets/audio/pickupcoin.wav" },

            { id: "watermelonSound", src: "assets/audio/watermelon.wav" },
            { id: "hit_monsterSound", src: "assets/audio/hit_monster.wav" },
            { id: "arrowSound", src: "assets/audio/arrow.wav" },
            { id: "level3Sound", src: "assets/audio/level3Sound.wav" },
            { id: "jumpSound", src: "assets/audio/jump.wav" },
            { id: "menuSound", src: "assets/audio/menuStateSound.wav" },
            { id: "monsterSound", src: "assets/audio/monster_dying.wav" },
            { id: "weepSound", src: "assets/audio/weep.wav" },
            { id: "monsterFiring", src: "assets/audio/monsterFiring.wav" },

            { id: "fireballs", src: "assets/audio/destroy.wav" },
            { id: "level1Sound", src: "assets/audio/star.ogg" },
            { id: "colliding", src: "assets/images/colliding.png" },
            { id: "bullet", src: "assets/images/bullet.png" },
        ];
        //constructor

        public data = {
            "images": [
                "assets/images/MyJason.png"
            ],

            "frames": [[2, 2, 45, 295, 0, -1, -5],
                [49, 2, 45, 294, 0, -1, 0],
                [2, 299, 87, 48, 0, 0, -16],
                [96, 2, 78, 81, 0, 0, -2],
                [96, 85, 58, 87, 0, -4, -3],
                [176, 2, 86, 56, 0, 0, -6],
                [264, 2, 81, 52, 0, -4, -6],
                [96, 174, 60, 65, 0, 0, 0],
                [96, 241, 73, 59, 0, 0, -2],
                [91, 302, 35, 45, 0, -3, -1],
                [176, 60, 73, 50, 0, 0, -14],
                [156, 112, 60, 54, 0, 0, -10],
                [158, 168, 71, 64, 0, 0, 0],
                [171, 234, 55, 65, 0, -2, 0],
                [128, 302, 72, 41, 0, -1, -23],
                [202, 301, 40, 46, 0, 0, -1],
                [218, 112, 51, 47, 0, 0, 0],
                [231, 161, 31, 63, 0, -12, -2],
                [264, 56, 71, 21, 0, -1, -8],
                [251, 79, 68, 23, 0, -1, -41],
                [271, 104, 46, 40, 0, 0, -4],
                [319, 104, 28, 35, 0, -1, -6],
                [319, 141, 28, 35, 0, -1, -6],
                [271, 146, 38, 40, 0, -3, -4],
                [264, 188, 60, 37, 0, -1, 0],
                [228, 234, 24, 38, 0, -6, -3],
                [254, 227, 30, 38, 0, -3, -5],
                [286, 227, 28, 35, 0, -1, -6],
                [316, 227, 24, 38, 0, -8, -3],
                [254, 267, 38, 10, 0, -2, -2],
                [244, 279, 28, 35, 0, -1, -6],
                [244, 316, 28, 30, 0, -4, -6],
                [274, 279, 24, 38, 0, -6, -3],
                [274, 319, 26, 28, 0, -5, -8],
                [228, 274, 14, 14, 0, -1, 0],
                [300, 267, 24, 38, 0, -8, -3],
                [302, 307, 28, 29, 0, -4, -7],
                [156, 85, 13, 14, 0, -1, 0],
                [321, 79, 13, 12, 0, -1, 0],
                [326, 267, 13, 11, 0, -1, 0]
            ],

            "animations": {

                "obstacle1": [0],
                "obstacle2": [1],
                "FinalMonster": {
                    frames: [2, 5, 4, 8, 6, 3],
                    speed:0.1
                },
              
                
               
               
              
               
              
               
              
              
                "FinalMonsterDieing": {
                   frames: [13, 7, 11, 10, 14, 12, 19],
                    speed: 0.1,
                },
              
                "melon": {
                    frames: [15, 9],
                    speed: 0.1
                },
                
                "ring": [17],
            
              
             


                "melon3": {
                    frames: [23,16,20,24,18],
                    speed: 0.1
                },
              

                "Iron_Bow": [26],
                "DomArrow": [27],
                "Dom": {
                    frames: [21, 22, 25, 28],
                    speed: 0.5
                },

                "Arrow": [29],
                "DomArrow1": [30],
                "Dora_die": {
                    frames: [31, 36, 33],
                    speed:0.1
                },
                "DomArrow2": [32],
             
               
                "DomArrow3": [35],
               
                
                "Fireball": {
                    frames: [39, 37, 38, 34],
                    speed:0.3
                }
            },



        }
        constructor() {
            this.preload();

        }

        preload() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            
          
            this.textureAtlas = new createjs.SpriteSheet(this.data);
        }

    }
}