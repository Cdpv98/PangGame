


export class Player1 extends Phaser.Physics.Arcade.Sprite {
    constructor(scene,x, y, texture, frame){
        super(scene,x,y,texture,frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setScale(1);

        this.iniitalFrame = frame;
        this.speed = 700;
        this.controls = scene.input.keyboard.createCursorKeys();
     
     
        this.state='idle';
        this.anims.play('idle');
        this.previous_state =this.state;
        
    }



create(){

    this.keys = this.input.keyboard.addKeys({
        a:  Phaser.Input.Keyboard.KeyCodes.A,
        d:  Phaser.Input.Keyboard.KeyCodes.D,
        w:  Phaser.Input.Keyboard.KeyCodes.W
    });
}


    update(time) {

        if(this.keys.a.isDown) {
            this.setVelocityX(-this.speed);
            this.flipX = true;
            this.state = 'walk';
        }
        else if(this.keys.d.isDown) {
            this.setVelocityX(this.speed);
            this.flipX = false;
            this.state = 'walk';
        }
        else {
            this.setVelocityX(0);
            this.state = "idle";
        }

        if(this.keys.w.isDown) {
           this.setVelocityX(0,0);
            this.state = 'idle';
        
        }

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
    }
}