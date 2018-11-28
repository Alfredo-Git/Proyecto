document.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('my-canvas')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    new Game(canvas).start()
});