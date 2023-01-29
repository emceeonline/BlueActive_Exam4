import * as PIXI from "pixi.js";
import { Cells } from "./Cells";

export class GameWorld{
    container:any;
    totalRows:number = 100;
    totalColumns:number = 100;
    initialSeedCount:number = 50;
    cells:Cells;
    allGrids:Array<Cells>;
    
    constructor (_container:any){
        this.container = _container;
        this.createGrid();
    }
    
    createGrid(){
        this.allGrids = [];
        for (let y:number = 0; y < this.totalRows; y++) {
            for (let x :number= 0; x < this.totalColumns; x++) {
                this.allGrids.push(new Cells(this.container, x, y));
            }
        }
        
        let randomNumbersArray:Array<number> = [];
        let randomNumber:number;

        //generate random initial alive seeds
        /*
        while(randomNumbersArray.length < this.initialSeedCount){
            randomNumber = Math.floor(Math.random() * ((this.allGrids.length - 1) - 0 + 1)) + 0;
            if(randomNumbersArray.indexOf(randomNumber) == -1){
                randomNumbersArray.push(randomNumber);
            }
        }
        */

        //fixed middle seeds
        let a:number = 4839;
        let b:number = 4939;
        //while(randomNumbersArray.length < this.initialSeedCount){
        while(randomNumbersArray.length < this.initialSeedCount){
            randomNumbersArray.push(a);
            randomNumbersArray.push(b);
            a++;
            b++;
        }

        //revive initial seeds Count
        for (let i:number = 0; i < randomNumbersArray.length; i++) {
            this.allGrids[randomNumbersArray[i]].isAlive = true;
        }
        this.gameLoop();
    }
    isAlive(x:number, y:number){
        if (x < 0 || x >= this.totalColumns || y < 0 || y >= this.totalRows){
            return 0;
        }
        return this.allGrids[this.gridToIndex(x, y)].isAlive?1:0;
    }
    gridToIndex(x:number, y:number){
        return x + (y * this.totalColumns);
    }
    checkNeighbors (){
        // Loop over all cells
        for (let x:number = 0; x < this.totalColumns; x++) {
            for (let y:number = 0; y < this.totalRows; y++) {
                // Count the nearby neighbors
                let numAlive = this.isAlive(x - 1, y - 1) + this.isAlive(x, y - 1) + this.isAlive(x + 1, y - 1) + this.isAlive(x - 1, y) + this.isAlive(x + 1, y) + this.isAlive(x - 1, y + 1) + this.isAlive(x, y + 1) + this.isAlive(x + 1, y + 1);
                let centerIndex = this.gridToIndex(x, y);

                if (numAlive == 2){
                    // Do nothing
                    this.allGrids[centerIndex].isRevived = this.allGrids[centerIndex].isAlive;
                }else if (numAlive == 3){
                    // Make alive
                    this.allGrids[centerIndex].isRevived = true;
                }else{
                    // Make dead
                    this.allGrids[centerIndex].isRevived = false;
                }
            }
        }

        // Apply the new state to the cells
        for (let i = 0; i < this.allGrids.length; i++) {
            this.allGrids[i].isAlive = this.allGrids[i].isRevived;
        }
    }
    gameLoop() {
        setTimeout( () => {
            this.gameLoop();
        }, 500);

        for (let i = 0; i < this.allGrids.length; i++) {
            this.allGrids[i].showState();
        }

        this.checkNeighbors();
    }
}
