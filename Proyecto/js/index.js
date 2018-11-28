document.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('my-canvas')
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
    new Game(canvas).start()
});