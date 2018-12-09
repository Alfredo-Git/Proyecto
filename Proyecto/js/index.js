document.addEventListener('DOMContentLoaded', function() {

 
    // var score = getScore();
    // console.log(score);


    var start = document.getElementById("Start");
    

    start.addEventListener('click', function() {
        var canvas = document.getElementById('my-canvas')
        canvas.width = window.innerWidth * 0.9;
        canvas.height = window.innerHeight * 0.9;
        var game = new Game(canvas);
        $('#start-game').hide();
        game.start();
    })
}); 

// function getScore() {
//     var score = localStorage.getItem('score') || '{}';
//     return JSON.parse(score);
//   }
  
//   function addScore(name, value) {
//     var score = getScore();
  
//     score[name] = value;
  
//     localStorage.setItem('score', JSON.stringify(score));
//   }