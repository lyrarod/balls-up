export class Ball {
  constructor(game) {
    this.game = game;
    this.radius = 1 + Math.random() * 19;
    this.x =
      Math.floor(Math.random() * (this.game.width - this.radius * 2)) +
      this.radius;
    this.y = this.game.height + this.radius;
    this.speed = 0.25 + Math.random() * 1.75;

    this.balls = [];
    this.isRemoved = false;

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
    if (this.balls.length < 500) {
      this.frame--;

      if (this.frame < 0) {
        this.balls.push(new Ball(this.game));
        this.frame = 15;
      }
    }

    this.balls.forEach((ball) => {
      ball.draw(context);

      if (ball.frame > ball.interval) {
        ball.y -= ball.speed;
        ball.frame = 0;
      } else {
        ball.frame += deltatime;
      }

      ball.y < -ball.radius ? (ball.isRemoved = true) : null;
    });

    this.balls = this.balls.filter((ball) => !ball.isRemoved);
  }

  draw(context) {
    context.save();
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    context.restore();
  }
}
