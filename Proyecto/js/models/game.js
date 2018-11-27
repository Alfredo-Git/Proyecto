function Game(canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
  
    document.addEventListener('keydown', this.onKeyEvent.bind(this));
    document.addEventListener('keyup', this.onKeyEvent.bind(this));

    this.player = new Player(this.ctx, 100, 100);
    this.player2 = new Player(this.ctx, 300, 100);

    this.drawIntervalCount = 0;
    this.drawIntervalId = undefined;
}
  
// var blockMovement = false;

// window.addEventListener('keydown', function(e) {
//     if (!blockMovement) {
//         blockMovement = keyDownEventHandler(e, this.player);
//     }
// }, true);

// function keyDownEventHandler(e, player) {
    
//    var direction = player.currentDirection;

//    switch(e.keyCode){
//        case player.movements.up:
//         if (direction !== 'down' && direction !== 'up'){
//             player.currentDirection = 'up';
//             return true;
//         }
//         break;

//         case player.movements.right:
//         if (direction !== 'left' && direction !== 'right'){
//             player.currentDirection = 'right';
//             return true;
//         }
//         break;

//         case player.movements.down:
//         if (direction !== 'up' && direction !== 'down'){
//             player.currentDirection = 'down';
//             return true;
//         }
//         break;

//         case player.movements.left:
//         if (direction !== 'right' && direction !== 'left'){
//             player.currentDirection = 'left';
//             return true;
//         }
//         break;
    
//         default:
//             break;
//    }

// }

Game.prototype.start = function() {
    if (!this.isRunning()){
        this.drawIntervalId = setInterval(function() {
            this.drawIntervalCount++;
        
            if (this.checkGameOver()){
                this.stop();
                console.log("terminado");
            
            }

            // this.clear(); commented to keep the trail
            this.draw();
        
        }.bind(this), DRAW_INTERVAL_MS);
    }
};
  
Game.prototype.isRunning = function(){
      return this.drawIntervalId !== undefined;
}

Game.prototype.stop = function(){
      clearInterval(this.drawIntervalId);
      this.drawIntervalId = undefined;
}

Game.prototype.onKeyEvent = function(event) {
      this.player.onKeyEvent(event);
      this.player2.onKeyEvent2(event);
}

Game.prototype.draw = function() {
    this.player.draw();
    this.player2.draw();
};
  
  
Game.prototype.checkGameOver = function() {
 
};
  
Game.prototype.gameOver = function() {
    clearInterval(this.intervalId);
  
    if (confirm("GAME OVER! Play again?")) {
      location.reload();
    }
};
  
Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
};