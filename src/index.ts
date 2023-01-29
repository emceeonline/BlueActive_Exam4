import * as PIXI from "pixi.js";


import { GameWorld } from "./GameWorld";

const width = 1000;
const height = 1000;

const app = new PIXI.Application({
    width: width,
    height: height,
    antialias: true,
});

const appContainer = document.getElementById("app_container")
appContainer.appendChild(app.view);

let gameWorld:GameWorld;

function loadAssets() {
    PIXI.loader
       .add("assets/off.png")
       .add("assets/on.png")
       .load(run);
}

function run() {
    gameWorld = new GameWorld(app.stage);
}

loadAssets();

