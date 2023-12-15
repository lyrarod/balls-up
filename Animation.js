import { Ball } from "./Ball";

class Animation {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width = innerWidth;
    this.height = this.canvas.height = innerHeight;
    app.append(this.canvas);

    this.ball = new Ball(this);

    this.ballsObjectPool = [this.ball];

    this.frame = 0;
    this.interval = 1000 / 60;
    this.lasttime = 0;

    addEventListener("resize", () => {
      this.width = this.canvas.width = innerWidth;
      this.height = this.canvas.height = innerHeight;
      this.ball.balls = [];
    });
  }

  start() {
    this.render();
  }

  render = (timestamp = 0) => {
    let deltatime = timestamp - this.lasttime;
    this.lasttime = timestamp;

    this.context.fillStyle = "#0001";
    this.context.fillRect(0, 0, this.width, this.height);

    this.ballsObjectPool.forEach((object) => {
      object.update(deltatime, this.context);
    });

    requestAnimationFrame(this.render);
  };
}

export const animation = new Animation();
