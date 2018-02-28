import keywords from './keywords'

let lastResult = ""

let dateHandler = (element, transcript) => {
  let matches = matchDMY(transcript) || matchMDY(transcript)

  if(matches) {
    element.querySelector(".form-group-day input").value = matches[0];
    element.querySelector(".form-group-month input").value = monthMap[matches[1].toLowerCase()];
    element.querySelector(".form-group-year input").value = matches[2];
  }
}

let matchDMY = (transcript) => {
  let r = /(\b[\d]{1,2}).*(january|february|march|april|may|june|july|august|september|october|november|december).*([\d]{4})/i
  let matches = transcript.match(r)

  if(!matches) return null;

  return [matches[1], matches[2], matches[3]]
}

let matchMDY = (transcript) => {
  let r = /(january|february|march|april|may|june|july|august|september|october|november|december).*(\b[\d]{1,2}).*([\d]{4})/i
  let matches = transcript.match(r)

  if(!matches) return null;

  return [matches[2], matches[1], matches[3]]
}

let monthMap = {
  "january": 1,
  "february": 2,
  "march": 3,
  "april": 4,
  "may": 5,
  "june": 6,
  "july": 7,
  "august": 8,
  "september": 9,
  "october": 10,
  "november": 11,
  "december": 12
}

export default (element) => (event) => {
  var interim = '';

  for(var i = event.resultIndex; i < event.results.length; ++i) {
    interim += event.results[i][0].transcript;
  }

  console.log(interim);

  if(Array.from(element.classList).find(e => e == "form-date")) {
    dateHandler(element, interim)
  } else if(element == document.body) {
    let temp = interim;
    interim = interim.replace(lastResult, "");
    lastResult = temp;

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
