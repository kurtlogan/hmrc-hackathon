import {startSpeechText, stopSpeechText} from './speech-to-text/controls'

window.onload = () => {
  if(typeof(window.webgazer) === 'undefined') {
    throw new Error("webgazer not found!");
  }

  webgazer.begin();

  /*
   * Bind speech to text to all elements on page load
   */
  var speechToTextElements = document.querySelectorAll("input[type='text'], textarea");
  console.log(speechToTextElements)
  for (let i = 0; i < speechToTextElements.length; i++) {
    let element = speechToTextElements[i];
    console.log(element)
    element.onfocus = () => {
      let recog = startSpeechText(element);
      element.onblur = () => stopSpeechText(recog);
    }
  }
}
