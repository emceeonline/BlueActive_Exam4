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
        
        let seedNumbers:Array<number> = [];
        let randomNumber:number;

        //generate random initial alive seeds
        /*
        while(seedNumbers.length < this.initialSeedCount){
            randomNumber = Math.floor(Math.random() * ((this.allGrids.length - 1) - 0 + 1)) + 0;
            if(seedNumbers.indexOf(randomNumber) == -1){
                seedNumbers.push(randomNumber);
            }
        }
        */

        /*
        //fixed middle seeds
        let a:number = 4839;
        let b:number = 4939;
        //while(seedNumbers.length < this.initialSeedCount){
        while(seedNumbers.length < this.initialSeedCount){
            seedNumbers.push(a);
            seedNumbers.push(b);
            a++;
            b++;
        }
        */

        //missile
        seedNumbers.push(926);
        seedNumbers.push(927);
        seedNumbers.push(1026);
        seedNumbers.push(1027);

        seedNumbers.push(760);
        seedNumbers.push(761);
        seedNumbers.push(860);
        seedNumbers.push(861);

        seedNumbers.push(1043);
        seedNumbers.push(1042);
        seedNumbers.push(942);
        seedNumbers.push(841);
        seedNumbers.push(739);
        seedNumbers.push(738);
        seedNumbers.push(837);
        seedNumbers.push(936);
        seedNumbers.push(1036);
        seedNumbers.push(1136);
        seedNumbers.push(1237);
        seedNumbers.push(1338);
        seedNumbers.push(1339);
        seedNumbers.push(1040);
        seedNumbers.push(1241);
        seedNumbers.push(1142);

        seedNumbers.push(550);
        seedNumbers.push(650);
        seedNumbers.push(648);
        seedNumbers.push(746);
        seedNumbers.push(846);
        seedNumbers.push(946);
        seedNumbers.push(947);
        seedNumbers.push(847);
        seedNumbers.push(747);
        seedNumbers.push(1048);
        seedNumbers.push(1050);
        seedNumbers.push(1150);

        seedNumbers.push(5090);
        seedNumbers.push(5191);
        seedNumbers.push(5190);
        seedNumbers.push(6191);


        seedNumbers.push(5949);
        seedNumbers.push(6049);
        seedNumbers.push(6149);
        seedNumbers.push(6249);
        seedNumbers.push(6349);
        seedNumbers.push(6449);
        seedNumbers.push(6549);
        seedNumbers.push(6649);
        seedNumbers.push(6749);
        seedNumbers.push(6849);


        //revive initial seeds Count
        for (let i:number = 0; i < seedNumbers.length; i++) {
            this.allGrids[seedNumbers[i]].isAlive = true;
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
        }, 100);

        for (let i = 0; i < this.allGrids.length; i++) {
            this.allGrids[i].showState();
        }

        this.checkNeighbors();
    }
}
