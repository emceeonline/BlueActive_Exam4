import * as PIXI from "pixi.js";

export class Cells{
    width:number = 10;
    height:number = 10;

    gridX: number;
    gridY: number;

    gridBG: PIXI.Sprite;

    public isAlive:boolean = false;
    public isRevived:boolean = false;

    aliveTexture:PIXI.Texture;
    deadTexture:PIXI.Texture;

    constructor (_container:any, _gridX:number, _gridY:number){
        this.gridX = _gridX;
        this.gridY = _gridY;

        this.aliveTexture = PIXI.loader.resources["assets/on.png"].texture;
        this.aliveTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        this.deadTexture = PIXI.loader.resources["assets/off.png"].texture;
        this.deadTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        this.gridBG = new PIXI.Sprite(this.deadTexture);
        this.gridBG.position.set(this.gridX * this.width,this.gridY * this.height);
        _container.addChild(this.gridBG);

    }

    showState() {
        if(this.isAlive){
            this.gridBG.texture = this.aliveTexture;
        }else{
            this.gridBG.texture = this.deadTexture;
        }
    }
}
