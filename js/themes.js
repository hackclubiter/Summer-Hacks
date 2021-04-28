const colorTags = document.querySelectorAll(".theme_color");

colorTags.forEach((colorTag) => {
  const Color = colorTag.style.backgroundColor.toString();
  const colorHex = RGBToHex(Color);
  const spanEle = document.createElement("span");
  spanEle.classList.add("color_name");
  const spanText = document.createTextNode(colorHex);
  spanEle.appendChild(spanText);
  spanEle.addEventListener("click", copyText, false);
  colorTag.appendChild(spanEle);
});

function RGBToHex(Color) {
  let colorRGB = Color.slice(4, Color.length - 1).split(",");
  let red = parseInt(colorRGB[0].trim()).toString(16);
  let green = parseInt(colorRGB[1].trim()).toString(16);
  let blue = parseInt(colorRGB[2].trim()).toString(16);
  if (red.length == 1) red = "0" + red;
  if (green.length == 1) green = "0" + green;
  if (blue.length == 1) blue = "0" + blue;

  return "#" + red + green + blue;
}

function copyText(e) {
  let colorCode = e.target.textContent;
  e.view.navigator.clipboard.writeText(colorCode);
}
