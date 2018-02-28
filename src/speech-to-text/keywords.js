import tabbable from '../tabbable/index'
import { startSpeechText, setBodyListener } from './controls'

let currentIndex = -1;

export default [{
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
  key: "scroll up",
  action: () => {
    window.scrollBy(0, -200)
  }
}, {
  key: "scroll down",
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
}]
