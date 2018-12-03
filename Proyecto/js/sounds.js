function Sounds(){
    this.sounds = [
      'bikesound',
      'bike.mp3',
      'kabuki-yoo.m4a',
      'koto.m4a',
      'scream.m4a'
    ];
  }
  
  Sounds.prototype.play = function(track){
    new Audio("./sounds/" + this.sounds[track]).play();
  };