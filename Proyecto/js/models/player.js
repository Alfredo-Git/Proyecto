function Player(ctx, x, y) {
    this.ctx = ctx;
    this.x = x || 0;
    this.y = y || 0;
    this.width = 50;
    this.height = 50;

    this.vx = 0;
    this.vy = 0;

    this.currentDirection = 'down';

    this.movements = {
        up: false,
        down: false,
        right: false,
        left: false
    }
  }
  
  Player.prototype.draw = function() {
      this.move();

      this.ctx.fillRect(
          this.x,
          this.y,
          this.width,
          this.height
      )
  };
  
  Player.prototype.move = function() {
        if (this.movements.up){
            this.vy = -SPEED_MOVE;
            this.vx = 0;
        }

      if (this.movements.down){
            this.vy = SPEED_MOVE;
            this.vx = 0;
        }

        if (this.movements.right){
            this.vx = SPEED_MOVE;
            this.vy = 0;
        }

        if (this.movements.left){
            this.vx = -SPEED_MOVE;
            this.vy = 0;
        }

        this.x += this.vx;
        this.y += this.vy;

  };
  
  Player.prototype.onKeyEvent = function (event) {
      
    var state = event.type === 'keydown' ? true : false;
    switch (event.keyCode){
        case KEY_UP:
            this.movements.up = state;
            break;
        case KEY_DOWN:
            this.movements.down = state;
            break;
        case KEY_LEFT:
            this.movements.left = state;
            break;
        case KEY_RIGHT:
            this.movements.right = state;
            break;
    }

  }