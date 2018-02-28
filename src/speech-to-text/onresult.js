import tabbable from '../tabbable/index'
import { startSpeechText, setBodyListener } from './controls'

let currentIndex = -1;
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

let keywords = [
  {
    key: "next",
    action: () => {
      let tabs = tabbable(document.body)
      let nextIndex = ++currentIndex

      if(nextIndex > tabs.length - 1) {
        currentIndex = nextIndex = 0
      }

      tabs[nextIndex].focus();
    }
  }, {
    key: "previous",
    action: () => {
      let tabs = tabbable(document.body)
      let nextIndex = --currentIndex

      if(nextIndex < 0) {
        currentIndex = nextIndex = tabs.length - 1
      }

      tabs[nextIndex].focus();
    }
  }, {
    key: "up",
    action: () => {
      window.scrollBy(0, -200)
    }
  }, {
    key: "down",
    action: () => {
      window.scrollBy(0, 200)
    }
  }, {
    key: "click",
    action: () => {
      let element = tabbable(document.body)[currentIndex]

      if(element) {
        element.click()
      }
    }
  }, {
    key: "edit",
    action: () => {
      let element = tabbable(document.body)[currentIndex]

      if(element) {
        element.focus();
        element.style.border = "1px solid yellow"
        startSpeechText(element, false, true);
      }
    }
  }, {
    key: "back",
    action: () => window.history.back()
  }


]
