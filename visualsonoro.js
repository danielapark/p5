var track01;
var track02;
var track03;
var track04;

var tracks = new Array();
var datosTrack01 = new Array();
function preload() {
  for (var i=0; i<1; i++) {
    tracks[i] = loadSound("music_tracks/1.mp3");
  }
  /*track01 = loadSound('music_tracks/SOHO_stems_2-Audio.mp3');
  track02 = loadSound('music_tracks/SOHO_stems_3-Audio.mp3');
  track03 = loadSound('music_tracks/SOHO_stems_4-Audio.mp3');
  track04 = loadSound('music_tracks/SOHO_stems_4-Audio.mp3');*/
}

function setup() {
  
  createCanvas( 1280,720 );
  for (var i=0; i<1; i++) {
    tracks[i].play();
  }
  amplitud = new p5.Amplitude();
  /*track01.play();
  track02.play();
  track03.play();*/
  background(0);
}

function draw() {
  background(0);
  var level = amplitud.getLevel();
  var diametroLevel = map(level, 0, 1, 10, 300 );
  datosTrack01.push(level);
  ellipse(width/2, height/2, diametroLevel, diametroLevel);
  /*if ( !tracks[0].isPlaying() && frameCount > 1000 ) {
    saveStrings(datosTrack01,"track01data");
    noLoop();
  }*/
}

function mousePressed() {
  tracks[0].stop();
  saveStrings(datosTrack01,"track01data_otro")
}
