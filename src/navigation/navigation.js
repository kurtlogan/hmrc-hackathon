function startGazeListener() {
  webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
      return;
    }
    var xprediction = data.x;
    var yprediction = data.y;
  }).begin();
};

function navigator() {
  getPrediction();
};

function getPrediction() {
  var xCoords = [];
  var yCoords = [];
  var avgX = 0;
  var avgX = 0;

  for (i = 0; i < 10; i++) {
    var currentPrediction = webgazer.getCurrentPrediction();
    xCoords.push(currentPrediction.x);
    yCoords.push(currentPrediction.y);
    var avgX = xCoords.reduce(function(a, b) { return a + b; }, 0) / 10;
    var avgY = yCoords.reduce(function(a, b) { return a + b; }, 0) / 10;
  }
  console.log(avgX + "x");
  console.log(avgY + "y");
};
