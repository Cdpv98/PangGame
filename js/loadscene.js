export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    
    }
    
preload()  {
    this.load.image('bg0', './img/bg01.png');
    this.load.image('bg', './img/bg02.png');
   this.load.image('bg1', './img/bg03.png');
    this.load.spritesheet('ball','./img/0.png',{
        frameWidth:128,
        frameHeight:128
    });
    this.load.spritesheet('player','./img/player.png',{
        frameWidth:128,
        frameHeight:128
    });
    this.load.image('weapon', './img/harpon.png');
    this.load.image('lives', './img/2.png');
    
}
create(){
    this.scene.start("nivel1"); 
   this.createAnimations();
  
}

createAnimations(){
    this.anims.create({
        key:'idle',
        frames: this.anims.generateFrameNames('player',{
            start: 1, end:1, first:1
        }), frameRate:6, yoyo: true, repeat: -1 });
    this.anims.create({
    key:'walk',
    frames: this.anims.generateFrameNames('player',{
        start: 1, end:0, first:1
    }), frameRate:6, yoyo: true, repeat: -1 });

    this.anims.create({
        key:'shoot',
        frames: this.anims.generateFrameNames('player',{
            start: 1, end:1, first:1
        }), frameRate:6, yoyo: true, repeat: -1 });
     
}

}