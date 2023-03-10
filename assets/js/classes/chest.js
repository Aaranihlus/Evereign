class Chest extends Phaser.Physics.Arcade.Image {

  constructor (scene, x, y, key, frame, gold) {
    super(scene, x, y, key, frame);
    this.scene = scene;
    this.coins = gold;
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
  }

}
