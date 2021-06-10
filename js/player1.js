
export class Player1 extends Phaser.Physics.Arcade.Sprite {
    constructor(scene,x, y, texture, frame){
        super(scene,x,y,texture,frame);
       
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setScale(1);
        this.state='idle';
        this.anims.play('idle');
        this.iniitalFrame = frame;
        this.speed = 700;
        this.previous_state =this.state;
        var keyA;
        var keyD;
        var keyW;
    }


 
create(){
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
}


    update(time) {
   ;
       if(this.keyA.isDown) {
        this.setVelocityX(-this.speed);
       this.flipX = true;
      this.state = 'walk';
         }
    else if(this.keyD.isDown ) {
        this.setVelocityX(this.speed);
        this.flipX = false;
        this.state = 'walk';
    }
    else {
        this.setVelocityX(0);
        this.state = "idle";
    }

    if(this.keyW.isDown) {
       //this.setVelocityX(0,0);
        this.state = 'idle';
    
  
     

        if(this.state != this.previous_state) {
            this.previous_state = this.state;

            if(this.state == 'walk')
            {
                this.anims.play('walk');
            }
            if(this.state == 'idle')
            {
                this.anims.play('idle');
            }
            if(this.state == 'shoot')
            {
                this.anims.play('shoot');
            }
            
            else if (this.state == 'idle') {
                this.setFrame(this.initialFrame);
            }
        }
        var keyA;
        var keyD;
        var keyW;
    }
   
    }

    
}