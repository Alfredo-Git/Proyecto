function Sounds() {
    this.sounds = {
      bike: 'bike.mp3',
      song: 'Daft_Punk_The_Son_Of_Flynn_Ringtone_(by Fringster.com).mp3'
    };
  }
  
  Sounds.prototype.play = function(track){
    new Audio("./sounds/" + this.sounds[track]).play();
  };