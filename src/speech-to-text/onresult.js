export default (element) => (event) => {
  var interim = '';

  for(var i = event.resultIndex; i < event.results.length; ++i) {
    interim += event.results[i][0].transcript;
  }

  element.value = interim;
}
