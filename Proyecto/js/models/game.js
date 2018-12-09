function Game(canvas) {
  this.ctx = canvas.getContext("2d");

  this.player = new Player(this.ctx, 1000, 100, "Blue");
  this.player2 = new Player(this.ctx, 300, 100, "Red");

  this.background = new Background(this.ctx);

  this.sounds = new Sounds();

  this.drawIntervalCount = 0;
  this.drawIntervalId = undefined;
  this.setEvents();
}

// var score = 0;

// function drawScore() {
//     ctx.font = "16px Arial";
//     ctx.fillStyle = "#0095DD";
//     ctx.fillText("Score: "+score, 8, 20);
// }


Game.prototype.start = function() {
    
if (!this.isRunning()) {
    this.sounds.play("bike");
    this.sounds.play("song");
    // drawScore();

    this.drawIntervalId = setInterval(
      function() {
        this.drawIntervalCount++;
        // score++;

        if (this.checkGameOver() || this.redBorderCollision()) {
          this.stop();
          alert("Red player, you have lost");
        }

        if (this.checkGameOver() || this.blueBorderCollision()) {
          this.stop();
          alert("Blue player, you have lost");
        }

        if (this.player2.collision(this.player)) {
          this.stop();
          alert("Blue player, you have lost");
        }

        if (this.player.collision(this.player2)) {
          this.stop();
          alert("Red player, you have lost");
        }

        if (this.player.bodyCollision(this.player2.trail)) {
          this.stop();
          alert("Red player, you have lost");
        }

        if (this.player2.bodyCollision(this.player.trail)) {
          this.stop();
          alert("Blue player, you have lost");
        }

        this.clear();
        this.draw();
      }.bind(this),
      DRAW_INTERVAL_MS
    );
  }
};

Game.prototype.isRunning = function() {
  return this.drawIntervalId !== undefined;
};

Game.prototype.blueBorderCollision = function() {
  return (
    this.player2.x < 0 ||
    this.player2.x + this.player2.width * 0.9 > window.innerWidth * 0.9 || //player2 con el borde
    this.player2.y < 0 ||
    this.player2.y + this.player2.height * 0.9 > window.innerHeight * 0.9
  ); //player2 con el borde
};

Game.prototype.redBorderCollision = function() {
  return (
    this.player.x < 0 ||
    this.player.x + this.player.width * 0.9 > window.innerWidth * 0.9 || //player con el borde
    this.player.y < 0 ||
    this.player.y + this.player.height * 0.9 > window.innerHeight * 0.9
  ); //player con el borde
};

Game.prototype.stop = function() {
    location.reload();
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = undefined;
};

Game.prototype.onKeyEvent = function(event) {
  this.player.onKeyEvent(event);
  this.player2.onKeyEvent2(event);
};

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw("red");
  this.player2.draw("blue");
};

Game.prototype.checkGameOver = function() {
    
};

Game.prototype.gameOver = function() {
  clearInterval(this.intervalId);

  if (confirm("GAME OVER! Play again?")) {
    this.stop();
    location.reload();
  }
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
};

Game.prototype.setEvents = function() {
  document.addEventListener("keydown", this.onKeyEvent.bind(this));
  document.addEventListener("keyup", this.onKeyEvent.bind(this));
};
