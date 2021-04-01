let defaultStroke = 3;
let canvas = null;
function setup() {
  canvas = createCanvas(1000, 500);
  canvas.class('notebook');
  canvas.parent("#canvas")
  strokeWeight(defaultStroke);
  stroke(0);
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
window.addEventListener("pointermove", detectInputType);
function detectInputType(event) {
    switch(event.pointerType) {
        case "mouse":
            strokeWeight(defaultStroke/2)
            break;
        case "pen":
          strokeWeight(event.pressure * defaultStroke);
            break;
        case "touch":
          strokeWeight(event.pressure * defaultStroke)
            break;
    }
}
document.querySelector("#strokeValue").addEventListener('change', (event)=>{
  defaultStroke = event.srcElement.value;
});
let curColor = 0;
colorPicker.on('color:change', function(color) {
  // log the current color as a HEX string
  console.log(color.rgbaString);
  curColor = color.rgbaString;
  stroke(color.rgbaString);
});
document.querySelector("#escreve").addEventListener('change', (event)=>{
  console.log(event.srcElement.checked)
  if (event.srcElement.checked){
    noErase();
    stroke(curColor);
  }
  else{
    erase()
  }
});
document.querySelector("#save").onclick = () => {
  let teste = canvas.elt.toDataURL();
  console.log(teste);
}