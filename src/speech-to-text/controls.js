import onstart from './onstart'
import onresult from './onresult'
import onerror from './onerror'
import onend from './onend'
import keywords from './keywords'

let recog

let startSpeechText = (element, continuous, interim) => {
  if(recog) { stopSpeechText(); }

  recog = new webkitSpeechRecognition();
  recog.grammars = new webkitSpeechGrammarList();
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
  let recog = startSpeechText(document.body, true, true);

  let k = '#JSGF V1.0; grammar actions; public <actions> = ' +
    keywords.map(a => a.key).join(' | ') + ';';
console.log(k)
  let grammars = new webkitSpeechGrammarList();
  grammars.addFromString(k, 1);
  recog.grammars = grammars;
}

export { startSpeechText, stopSpeechText, setBodyListener }
