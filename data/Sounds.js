function loadSound(asset) {
  const soundObject = new Audio('assets/sounds/'+asset);
  return soundObject;;
}

Sounds = {
  done : loadSound('Done.mp3'),
  groupCard : loadSound('GroupCard.mp3'),
  groupShare : loadSound('GroupShare.mp3'),
  pass : loadSound('Pass.mp3'),
  play : loadSound('Play.mp3'),
  retire : loadSound('Retire.mp3'),
  shuffle : loadSound('Whistle.mp3'),
  timerPaused : loadSound('TimerPaused.mp3'),
  whistle : loadSound('Whistle.mp3'),
  yourCard : loadSound('YourCard.mp3'),
}
