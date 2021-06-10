import { Player } from "./player.js";
import { Ball } from "./ball.js";

export  class nivel1 extends Phaser.Scene {
    constructor() {
        super("nivel1");
        
      
    } 


    init(){

        //cria os controlos para as keys
        this.controls = this.input.keyboard.createCursorKeys();
    }
        create() {
            //vidas total por ronda
            this.maxLife = 5;
            // add background
            this.add.image(0, 0, 'bg').setOrigin(0).setScale(0.7);
          //add texto do nivel
            this.add.text(50, 50, 'Nivel 01', {
                color: '#2c3e50',
                font: "30px Arial"
                
            });
        //add vidas restantes em texto
         this.lives  = this.add.text( 'Vidas Restantes ' + this.maxLife + '.' , {
                font: "30px Arial",
                color: '#2c3e50'
    
            });
        //adiciona o jogador a cena
            this.player = new Player(
                this,
                this.game.config.width * 0.5,
                this.game.config.height * 0.5,
                'player', 1
            );
        //grupo de bolas      e add a bola
            this.ballGroup= this.add.group();
            this.addBall(250,0,5);
            //colisao entre bola e jogador
            this.physics.add.collider(this.player,this.ballGroup,this.playerLoseLive,null,this);
        }
    
    
        update(time) {
            //chama o update do script do player
           this.player.update(time);
       //ao clicar no espaço atira o harpoon
           if(this.controls.space.isDown){
            this.fireHarpoon();
           
           }
        }  
  //>  //ADAPTADO DO https://github.com/MacChoi/App/tree/master/Pang 
     //metodo do harppon
         fireHarpoon(){
            var harpoon = this.physics.add.image(this.player.x,this.player.y-1, 'weapon').setOrigin(0).setScale(3);
            harpoon.scaleY=0;
            this.physics.add.overlap(harpoon,this.ballGroup,this.hitHarpoon,null,this);
            this.tweens.add({
            targets:harpoon,
            y:100,
            scaleY:5,
            duration:100,
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
        //quando nao tem bolas ativa a cena seguinte
        if(this.ballGroup.children.size==0){
            this.scene.start("nivel2"); 
        }
    }
    //adiciona as bolas a cena
    addBall(x,y,scale){
        this.ballGroup.add(new Ball(this,x,y,'ball',1,scale));
     //<
    }
    //sistema de vida do jogador
    playerLoseLive(){
//conta a colisao e remove 1 vida
    this.maxLife--;
    //update no texto do hud quando perde vida
    this.lives.setText('Vidas Restantes ' + this.maxLife);
    
    console.log("perdi 1 vida");
    //quando a vida for zero para dar reset ao nivel 1
    if(this.maxLife <=0){
        this.scene.start("nivel1");
    }
    
    let lives;

}

}



