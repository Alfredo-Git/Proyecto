function Player(ctx, x, y) {
    this.ctx = ctx;
    this.x = x || 0;
    this.y = y || 0;
    this.width = 10;
    this.height = 10;

    this.vx = 0;
    this.vy = 0; // put value 3 so it starts going down directly

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
            if (this.currentDirection != 'down'){
            this.movements.up = state;
            this.currentDirection = 'up';  
            }
        break;
        
        case KEY_DOWN:
            if(this.currentDirection != 'up'){
                this.movements.down = state;
                this.currentDirection = 'down';
            }
        break;

        case KEY_LEFT:
            if (this.currentDirection != 'right') {
                this.movements.left = state;
                this.currentDirection = 'left';
            }
        break;

        case KEY_RIGHT:
            if (this.currentDirection != 'left') {
                this.movements.right = state;
                this.currentDirection = 'right'
            }
        break;
    }

}

Player.prototype.onKeyEvent2 = function (event) {
      
    var state = event.type === 'keydown' ? true : false;
    switch (event.keyCode){
          
        case KEY_UP2:
            if (this.currentDirection != 'down'){
            this.movements.up = state;
            this.currentDirection = 'up';  
            }
        break;
        
        case KEY_DOWN2:
            if(this.currentDirection != 'up'){
                this.movements.down = state;
                this.currentDirection = 'down';
            }
        break;

        case KEY_LEFT2:
            if (this.currentDirection != 'right') {
                this.movements.left = state;
                this.currentDirection = 'left';
            }
        break;

        case KEY_RIGHT2:
            if (this.currentDirection != 'left') {
                this.movements.right = state;
                this.currentDirection = 'right'
            }
        break;
    }

}