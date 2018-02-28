import keywords from './keywords'

let lastResult = ""

export default (element) => (event) => {
  var interim = '';

  for(var i = event.resultIndex; i < event.results.length; ++i) {
    interim += event.results[i][0].transcript;
  }

  if(element == document.body) {
    let temp = interim;
    interim = interim.replace(lastResult, "");
    lastResult = temp;

    console.log(temp, interim)

    var word = keywords.find(i => interim.indexOf(i.key) > -1)

    if(word)
    {
      console.log(word.key);
      word.action();
    }
  } else {
    element.value = interim;
  }
}
