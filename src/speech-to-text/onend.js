import { setBodyListener } from './controls'

export default (element) => () => {
  console.log("ending listener", element)
  if(element != document.body) {
    console.log("setup body listener")
    setBodyListener()
  }
}
