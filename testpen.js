
console.log(" teste")
function detectInputType(event) {
    switch(event.pointerType) {
        case "mouse":
          document.querySelector("#teste").textContent = "mouse"
            break;
        case "pen":
            
          console.log(event.pressure)
          document.querySelector("#teste").textContent = "caneta"
          console.log(" Caneta" );
            break;
        case "touch":
            document.querySelector("#teste").textContent = "TOUCH"
            break;
        default:
            /* pointerType is empty (could not be detected)
            or UA-specific custom type */
    }
}
document.querySelector("#test").onclick = () => {
  clear()
}

var colorPicker = new iro.ColorPicker('#picker', {
  width: 250,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#000",
  layout: [
    {
      component: iro.ui.Wheel,
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'value'
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'alpha'
      }
    },
  ]
});