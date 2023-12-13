import { Enemy } from "./Enemy";

class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width = innerWidth;
    this.height = this.canvas.height = innerHeight;
    app.append(this.canvas);

    this.enemy = new Enemy(this);

    this.gameObjects = [];

    this.frame = 0;
    this.interval = 1000 / 60;
    this.lasttime = 0;
  }

  start() {
    this.render();
    this.gameObjects = [this.enemy];
  }

  render = (timestamp = 0) => {
    let deltatime = timestamp - this.lasttime;
    // console.log(Math.floor(deltatime));
    this.lasttime = timestamp;

    // this.context.clearRect(0, 0, this.width, this.height);
    this.context.fillStyle = "#000";
    this.context.fillRect(0, 0, this.width, this.height);

    this.gameObjects.forEach((object) => {
      object.update(deltatime, this.context);
    });

    requestAnimationFrame(this.render);
  };
}

export const game = new Game();
console.log(game);
