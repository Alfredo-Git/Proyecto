document.addEventListener('DOMContentLoaded', function() {

    
    // var button = document.createElement("button");
    // button.innerHTML = "Button";
    
    // // 2. Append somewhere
    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild(button);
    
    // // 3. Add event handler
    // button.addEventListener ("click", function() {
    //   alert("did something");
    // });


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