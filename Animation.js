import { Ball } from "./Ball";

class Animation {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width = innerWidth;
    this.height = this.canvas.height = innerHeight;
    app.append(this.canvas);

    this.ball = new Ball(this);

    this.frame = 0;
    this.interval = 1000 / 60;
    this.lasttime = 0;
  }

  start() {
    this.render();
    this.resize();
  }

  resize() {
    addEventListener("resize", () => {
      this.ball.resize();
      this.width = this.canvas.width = innerWidth;
      this.height = this.canvas.height = innerHeight;
    });
  }

  render = (timestamp = 0) => {
    let deltatime = timestamp - this.lasttime;
    this.lasttime = timestamp;

    this.context.fillStyle = "#0002";
    this.context.fillRect(0, 0, this.width, this.height);

    this.ball.update(deltatime, this.context);

    requestAnimationFrame(this.render);
  };
}

export const animation = new Animation();
