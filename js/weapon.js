

export class Weapon extends Phaser.Physics.Arcade.Sprite{
constructor(scene,x,y,texture,frame){
    super(scene,x,y, texture,frame);
scene.add.existing(this);
scene.physics.add.existing(this);
this.setCollideWorldBounds(true);
this.controls = scene.input.keyboard.createCursorKey();
this.CountWeapon =0;


}


}