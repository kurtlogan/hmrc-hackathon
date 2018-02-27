import webgazerSetup from './webgazer/setup'
import {startSpeechText, stopSpeechText, setBodyListener} from './speech-to-text/controls'
import startCalibration from './calibration/controls'
import constants from './constants'

window.onload = () => {
  if(constants.enableSpeechNavigation) {
    speechRunner();
  } else {
    webgazerRunner();
  }
}

let speechRunner = () => {
  setBodyListener();
}

let webgazerRunner = () => {
  if(typeof(window.webgazer) === 'undefined') {
    throw new Error("webgazer not found!");
  } else {
    webgazerSetup(window, window.webgazer);
  }

  let calibrateButton = document.querySelector("#calibrate")

  if(calibrateButton) {
    document.addEventListener('click', startCalibration(window.webgazer));
  }

  /*
   * Bind speech to text to all elements on page load
   */
  let speechToTextElements = document.querySelectorAll("input[type='text'], textarea");
  for (let i = 0; i < speechToTextElements.length; i++) {
    let element = speechToTextElements[i];
    element.onfocus = () => {
      startSpeechText(element, false, true);
      element.onblur = () => stopSpeechText();
    }
  }
}
