import { Player } from "./player.js";
import { Ball } from "./ball.js";
import { Weapon } from "./weapon.js";
export  class nivel2 extends Phaser.Scene {
    constructor() {
        super("nivel2");
      
    } 

init(){
    this.controls = this.input.keyboard.createCursorKeys();
  this.maxLife =5;
}
    create() {
        this.add.image(0, 0, 'bg0').setOrigin(0).setScale(0.7);
      
   
        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'player', 1
           
        );
   
        this.groupBall= this.add.group();
        this.addBall(250,0,5);
        this.physics.add.overlap(this.player,this.groupBall,this.playerLoseLive,null,this);
    }


    update(time) {
       this.player.update(time);
     
       if(this.controls.space.isDown){

        this.fireHarpoon();
       }
        }

                                                                        
 
     fireHarpoon(){
      console.log("couting_shoots");
        var harpoon = this.physics.add.image(this.player.x,this.player.y-1, 'weapon').setOrigin(0).setScale(3);
      harpoon.scaleY=0;
      this.physics.add.overlap(harpoon,this.groupBall,this.hitHarpoon,null,this);
     

      this.tweens.add({
        targets:harpoon,
        y:100,
        scaleY:5,
        duration:125,
        onComplete:function(tweens,targets){
            this.countHarpoon--;
            harpoon.destroy();
        }.bind(this)
    })
   }
  
hitHarpoon(harpoon,targets){
    if(targets.scale>1)
    this.addBall(targets.x,targets.y,targets.scale-=1);
    harpoon.destroy();
    targets.destroy();
    if(this.groupBall.children.size==0){
        console.log("nova cena");
        this.scene.start("nivel3"); 
    }
}
addBall(x,y,scale){
    this.groupBall.add(new Ball(this,x,y,'ball',1,scale));
    this.groupBall.add(new Ball(this,x,y,'ball',-1,scale));
}


playerLoseLive(){
    console.log("player lose health by ball touching him");
    this.maxLife--;
    console.log("perdi 1 vida");
    if(this.maxLife <=0){
        this.scene.start("nivel2");
    }
}
}
