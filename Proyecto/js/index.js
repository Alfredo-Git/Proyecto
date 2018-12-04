document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function() {
        var canvas = document.getElementById('my-canvas')
        canvas.width = window.innerWidth * 0.9;
        canvas.height = window.innerHeight * 0.9;
        var game = new Game(canvas)
        game.start();
    })
});