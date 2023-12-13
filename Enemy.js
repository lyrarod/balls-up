export class Enemy {
  constructor(game) {
    this.game = game;
    // this.size = 50;
    this.size = 1 + Math.random() * 5;
    this.width = this.size;
    this.height = this.size;
    this.x =
      Math.floor(Math.random() * (this.game.width - this.size * 2)) + this.size;
    this.y = this.game.height;
    this.speedY = 0.2 + Math.random() * 0.8;

    this.isDelete = false;
    this.enemies = [];

    this.colors = [
      "firebrick",
      "seagreen",
      "steelblue",
      "goldenrod",
      "rebeccapurple",
      "cyan",
      "purple",
      "violet",
      "yellow",
      "red",
      "green",
      "papayawhip",
      "white",
      "magenta",
      "lime",
      "orangered",
      "orange",
      "teal",
      "turquoise",
      "salmon",
      "crimson",
      "tomato",
    ];

    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];

    this.frame = 0;
    this.interval = 1000 / 60;
  }

  update(deltatime, context) {
    if (this.enemies.length < 100) {
      this.frame--;

      if (this.frame < 0) {
        this.enemies.push(new Enemy(this.game));
        this.frame = 10;
      }
    }

    this.enemies.forEach((enemy, index) => {
      enemy.draw(context);
      enemy.y -= enemy.speedY;

      if (enemy.y < -enemy.size) {
        enemy.isDelete = true;
      }

      // Remove enemy
      // if (enemy.isDelete) this.enemies.splice(index, 1);
    });

    // Remove enemy
    this.enemies = this.enemies.filter((enemy) => !enemy.isDelete);

    // console.log(this.enemies);
  }

  draw(context) {
    context.save();
    context.beginPath();
    context.fillStyle = this.color;
    context.shadowColor = this.color;
    context.shadowBlur = this.size * 2;
    // context.strokeStyle = this.color;
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
    // context.stroke();
    context.closePath();
    context.restore();
  }
}
