import onstart from './onstart'
import onresult from './onresult'
import onerror from './onerror'
import onend from './onend'

let startSpeechText = (element) => {
  var recog = new webkitSpeechRecognition();
  recog.continuous = false;
  recog.interimResults = true;

  recog.onstart = onstart(element);
  recog.onerror = onerror(element);
  recog.onresult = onresult(element);
  recog.onend = onend(element);

  recog.lang = "en-GB";
  recog.start();
}

let stopSpeechText = (recog) => {
  recog.stop();
}

export { startSpeechText, stopSpeechText }
