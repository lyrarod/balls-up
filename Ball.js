export class Ball {
  constructor(animation) {
    this.animation = animation;

    this.radius = 1 + Math.random() * 9;
    this.x =
      Math.floor(Math.random() * (this.animation.width - this.radius * 2)) +
      this.radius;
    this.y = this.animation.height + this.radius;
    this.speed = 0.2 + Math.random() * 1.8;

    this.balls = [];
    this.numberOfBalls = 0;
    this.isRemoved = false;
    this.mediaQueryList = null;

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

    this.resize();
  }

  resize() {
    this.balls = [];
    this.mediaQueryList = window.matchMedia("(min-width: 769px)").matches;
    this.mediaQueryList
      ? (this.numberOfBalls = 1000)
      : (this.numberOfBalls = 500);
  }

  update(deltatime, context) {
    if (this.balls.length < this.numberOfBalls) {
      this.frame--;

      if (this.frame < 0) {
        this.balls.push(new Ball(this.animation));
        this.frame = 8;
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
    context.beginPath();
    context.fillStyle = this.color;
    context.shadowColor = "#fff5";
    context.shadowOffsetY = 1;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.closePath();
    context.restore();
  }
}
