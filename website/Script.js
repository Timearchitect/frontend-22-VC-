
document.body.addEventListener('mousemove', bodyBackground);

function bodyBackground(event){
    const lightness = mapLightness(event.clientY);
    document.body.style.backgroundColor = `hsl(284, 78%, ${lightness}%)`
}

function mapLightness(y){
  const maxHeight = window.innerHeight;
  const newLightness = 100 - y/maxHeight * 75;
  console.log(newLightness);
  return newLightness;
}

