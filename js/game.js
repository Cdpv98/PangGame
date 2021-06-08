import  { nivel1 } from "./level001.js";
import { nivel2 } from "./level002.js";
import { nivel3 } from "./level003.js";
import { LoadScene } from "./loadscene.js";

const config = {
    width: 1345,
    height: 755,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#d3fa2',
    scene: [LoadScene, nivel1, nivel2, nivel3],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 1000

            },
            debug: false
        }
    },
    pixelArt: true
}

new Phaser.Game(config);