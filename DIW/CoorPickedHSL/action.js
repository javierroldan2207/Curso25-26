const hue = document.getElementById("hue");
const saturation = document.getElementById("saturation");
const lightness = document.getElementById("lightness");
const colorBox = document.getElementById("colorBox");
const colorInfo = document.getElementById("colorInfo");
const colorHEX = document.getElementById("colorHex");
const colorRGB = document.getElementById("colorRgb");


function actualizarColor() {
    const h = parseInt(hue.value);
    const s = parseInt(saturation.value);
    const l = parseInt(lightness.value);
    const colorHSL = `hsl(${h}, ${s}%, ${l}%)`;
    colorBox.style.backgroundColor = colorHSL;
    colorInfo.innerHTML = `HSL: ${colorHSL}`;
    colorHEX.innerHTML = `HEX: ${hslToHex(h,s,l)}`;
    colorRGB.innerHTML = `RGB: ${hexToRgb(hslToHex(h,s,l))}`;
}

function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   

  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToRgb(hex) {
  const hexClean = hex.replace("#", "");

  const r = parseInt(hexClean.substring(0, 2), 16);
  const g = parseInt(hexClean.substring(2, 4), 16);
  const b = parseInt(hexClean.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}



hue.addEventListener("input", actualizarColor);
saturation.addEventListener("input", actualizarColor);
lightness.addEventListener("input", actualizarColor);

actualizarColor();


