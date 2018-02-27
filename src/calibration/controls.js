let textField;
let dot;
let running = false;

let dotTop = () => dot ? parseInt(dot.style.top) : 0
let dotLeft = () => dot ? parseInt(dot.style.left) : 0

let speed = 15;
let maxIterations = 4
let counter = 0;

let spawnRedDot = () => {
  if (!dot) {
    dot = document.createElement('div');
    dot.style.width = "20px"
    dot.style.height = "20px"
    dot.style.position = 'fixed'
    dot.style.left = "10px"
    dot.style.top = "10px"
    dot.style.backgroundColor = 'red'
    dot.style.borderRadius = '50%'

    document.body.appendChild(dot)
  }

  return dot
}

let dir = "right"
let updateDotPosition = (webgazer) => () => {
  if(counter >= maxIterations) {
    dot.style.backgroundColor = 'green'
    setTimeout(cleanup, 2500)
    return;
  }

  if(dot) {
    if(dotLeft() >= window.innerWidth - 50 && dir == "right") {
      dir = "down"
      counter++
    } else if(dotTop() >= window.innerHeight - 50 && dir == "down") {
      dir = "left"
      counter++
    } else if(dotLeft() <= 10 && dir == "left") {
      dir = "up"
      counter++
    } else if(dotTop() <= 10 && dir == "up") {
      dir = "right"
      counter++
    }

    switch (dir) {
      case "right": dot.style.left = (dotLeft() + speed) + "px"; break;
      case "down": dot.style.top = (dotTop() + speed) + "px"; break;
      case "left": dot.style.left = (dotLeft() - speed) + "px"; break;
      case "up": dot.style.top = (dotTop() - speed) + "px"; break;
    }

    webgazer.recordScreenPosition(dotLeft(), dotTop())
  }

  setTimeout(updateDotPosition(webgazer), 75)
}

let cleanup = () => {
  running = false;
  counter = 0;
  document.body.removeChild(textField);
  document.body.removeChild(dot);
  textField = undefined
  dot = undefined
}

export default (webgazer) => () => {
  if(!running) {
    running = true;

    if(!textField) {
      textField = document.createElement("div")
      textField.innerText = "Stare at the red dot, follow it with you eyes until it turns green"
      textField.style.position = "fixed"
      textField.style.top = "50%"
      textField.style.left = "50%"

      document.body.appendChild(textField);
    }

    spawnRedDot()
    updateDotPosition(webgazer)()
  }
}
