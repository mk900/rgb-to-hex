const redColor = document.getElementById("red-range")
const greenColor = document.getElementById("green-range")
const blueColor = document.getElementById("blue-range")
const hexColor = document.getElementById("hexcolor")

function rgbToHex() {
  const redValue = Number(redColor.value).toString(16)
  const greenValue = Number(greenColor.value).toString(16)
  const blueValue = Number(blueColor.value).toString(16)
  return (hexcolor.innerHTML = `#${redValue.padStart(2, "0")}${greenValue.padStart(2, "0")}${blueValue.padStart(2, "0")}`)
}

function rgbColor() {
  return (document.body.style.backgroundColor = hexColor.innerText)
}

function red(event) {
  const red = document.getElementById("red")
  const color = event.target.value
  //console.log(color)
  red.innerHTML = `${color}`
  rgbToHex()
  rgbColor()
}

function green(event) {
  const green = document.getElementById("green")
  const color = event.target.value
  //console.log(color)
  green.innerHTML = `${color}`
  rgbToHex()
  rgbColor()
}

function blue(event) {
  const blue = document.getElementById("blue")
  const color = event.target.value
  //console.log(color)
  blue.innerHTML = `${color}`
  rgbToHex()
  rgbColor()
}

//Listener
redColor.addEventListener('mousemove', red)
greenColor.addEventListener('mousemove', green)
blueColor.addEventListener('mousemove', blue)

rgbColor()