var h
var m
var s
var sec
var min
var hr 

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(179, 222, 229);  
  translate (200, 200)
  rotate (-90)
  h = hour();
  m = minute();
  s = second();
  sec = map(s, 0, 60, 0, 360)
  min = map(m, 0, 60, 0, 360)
  hr = map(h%12, 0, 12, 0, 360)

  push();
  rotate (sec)
  stroke (255, 104, 1)
  strokeWeight (5)
  line (0, 0, 100, 0)
  pop ();

  push();
  rotate (min)
  stroke (49, 81, 92)
  strokeWeight (5)
  line (0, 0, 70, 0)
  pop ();

  push();
  rotate (hr)
  stroke (250, 230, 177)
  strokeWeight (5)
  line (0, 0, 50, 0)
  pop ();

  point (0,0)
  
  stroke (255, 104, 1)
  strokeWeight (5)
  arc (0, 0, 300, 300, 0, sec)

  stroke (49, 81, 92)
  strokeWeight (5)
  arc (0, 0, 270, 270, 0, min)

  stroke (250, 230, 177)
  strokeWeight (5)
  arc (0, 0, 250, 250, 0, hr)
}