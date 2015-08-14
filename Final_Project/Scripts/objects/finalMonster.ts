﻿module objects {
    //Final Monster Class ++++++++++++++++++++++++++++++++++++++
    export class FinalMonster extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "FinalMonster";
            this.soundString = "hit_monsterSound";
            this.x = 580;
            this.y = 600;
            this.scaleX = -1;
            config.MOVE_UP = true;
        
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

           //to keep monster in between the cancas height
            if (this.y < 40) { 
                config.MOVE_UP = false;
                config.MOVE_DOWN = true;                
            }
            if (this.y > 360) {
                config.MOVE_UP = true;
                config.MOVE_DOWN = false;
            }
        }


      


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            if (config.MONSTER_IS_THERE) {
                if (config.MOVE_UP) { this.y -= 4; }
                if (config.MOVE_DOWN) { this.y += 4; }
                this.checkBounds();
            }
        }
    }
}    