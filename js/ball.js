export class Ball extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, scale) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setBounce(1, 1);
        this.setCollideWorldBounds(true);
        this.setScale(scale);
        this.setGravityY(55/(scale*0.1));
        this.initialFrame = frame;

        this.initial_velocity = {
            min: {
                x: -250,
                y: -350,
            },
            max: {
                x: 350,
                y: -250
            }
        }

        this.setVelocity(
            Phaser.Math.Between(
                this.initial_velocity.min.x,
                this.initial_velocity.max.x
        ),
            Phaser.Math.Between(
                this.initial_velocity.min.y,
                this.initial_velocity.max.y
            )
        );
    }

        }
