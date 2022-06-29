// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']

const insertY = ['the soup kitchen', 'Disneyland', 'the White House']

const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

let xItem = randomValueFromArray(insertX)
let yItem = randomValueFromArray(insertY)
let zItem = randomValueFromArray(insertZ)

let newStory = 'It was 94 fahrenheit outside, so ' + xItem + ' went for a walk. When they got to ' + yItem + ' , they stared in horror for a few moments, then ' + zItem + '. Bob saw the whole thing, but was not surprised — ' + xItem + ' weighs 300 pounds, and it was a hot day.'

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    let name = customName.value;
    
    
    newStory = newStory.replace('Bob', name)
    
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stones`;
    const temperature =  `${Math.round((94 - 32) * 5/9) } centigrade`;
    newStory = newStory.replace('300 pounds', weight)
    newStory = newStory.replace('94 fahrenheit', temperature)
  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}