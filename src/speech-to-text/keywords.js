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
      startSpeechText(element, false, true);
    }
  }
}, {
  key: "back",
  action: () => window.history.back()
}, {
  key: "start now",
  action: () => {
    let element = Array.from(document.querySelectorAll("a"))
      .find(e => e.innerText.toLowerCase() == "start now")
console.log(element)
    if(element) {
      element.click();
    }
  }
}, {
  key: "option yes",
  action: () => {
    let element = Array.from(document.querySelectorAll("input[type=radio]"))
      .find(e => e.value.toLowerCase() == "yes")

    if(element) {
      element.click();
    }
  }
}, {
  key: "option no",
  action: () => {
    let element = Array.from(document.querySelectorAll("input[type=radio]"))
      .find(e => e.value.toLowerCase() == "no")

    if(element) {
      element.click();
    }
  }
}, {
  key: "continue",
  action: () => {
    let element = Array.from(document.querySelectorAll("input[type=submit]"))
      .find(e => e.value.toLowerCase() == "continue")

    if(element) {
      element.click();
    }
  }
}, {
  key: "name",
  action: () => {
    let element = document.querySelector("input[type=text]")

    if(element) {
      element.focus();
      startSpeechText(element, false, true);
    }
  }
}, {
  key: "confirm and send",
  action: () => {
    let element = Array.from(document.querySelectorAll("a"))
      .find(e => e.innerText.toLowerCase() == "confirm and send")

    if(element) {
      element.click();
    }
  }
}, {
  key: "date",
  action: () => {
    let element = document.querySelector(".form-date")

    if(element) {
        element.focus();
        startSpeechText(element, false, true);
    }
  }
}]
