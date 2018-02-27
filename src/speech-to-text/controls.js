import onstart from './onstart'
import onresult from './onresult'
import onerror from './onerror'
import onend from './onend'

let recog

let startSpeechText = (element, continuous, interim) => {
  if(recog) { stopSpeechText(); }

  recog = new webkitSpeechRecognition();
  recog.continuous = continuous;
  recog.interimResults = interim;

  recog.onstart = onstart(element);
  recog.onerror = onerror(element);
  recog.onresult = onresult(element);
  recog.onend = onend(element);

  recog.lang = "en-GB";
  recog.start();

  return recog;
}

let stopSpeechText = () => {
  recog.stop();
}

let setBodyListener = () => {
  startSpeechText(document.body, true, true);
}

export { startSpeechText, stopSpeechText, setBodyListener }
