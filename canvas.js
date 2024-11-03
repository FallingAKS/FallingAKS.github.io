const myButton = document.getElementById("returnButton");
myButton.onclick = function () {
  history.back();
}

/******************/

class Tank {
  constructor(x, y, width, height, speed, color, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = color;
    this.direction = direction;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    switch (this.direction) {
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
    }
  }

  changeDirection(direction) {
    this.direction = direction;
  }
}

class Bullet {
  constructor(x, y, width, height, speed, color, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = color;
    this.direction = direction;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    switch (this.direction) {
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
    }
  }
}

class Field {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, this.width, this.height);
  }
}

class Page {
  constructor(page) {
    this.page = page;
    this.canvas = document.createElement("canvas");
    this.canvas.style.position = "fixed";
    this.page.appendChild(this.canvas);

  }

  draw() {
    console.log(this.canvas);
  }
}

window.onload = () => {
  const page = new Page(document.getElementById("page"));
  page.draw();
}