var submit = $('button');
var noun = $('.noun');
var verb = $('.verb');
var adj = $('.adjective');

submit.on("click", showSentence);

var wordThreeOptions = ["smart","mad","angry","happy","excited"];
function generateRandomWordThree(){
  var randomDecimal = Math.random();
  var scaledRandom = randomDecimal * wordThreeOptions.length;
  var roundedRandom = Math.floor(scaledRandom);
  var randomWordThree = wordThreeOptions[roundedRandom];
  return randomWordThree;
}
var wordFiveOptions = ["loves","needs","likes","is sure to"];
function generateRandomWordFive(){
  var randomDecimal = Math.random();
  var scaledRandom = randomDecimal * wordFiveOptions.length;
  var roundedRandom = Math.floor(scaledRandom);
  var randomWordFive = wordFiveOptions[roundedRandom];
  return randomWordFive;
}

function showSentence(){
  var submitNoun =  $('.noun').val();
  var submitVerb =  $('.verb').val();
  var submitAdj = $('.adjective').val();
  var paragraph = $('p');
  var sentence = paragraph.text(`${submitNoun} is ${generateRandomWordThree()} and ${generateRandomWordFive()} to ${submitVerb}` + ` ` + `${submitAdj} things`);
  return sentence;
  console.log("Words are inputted");
}
