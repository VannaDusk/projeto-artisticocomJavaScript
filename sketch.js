function setup() {
    // cria uma tela de 600px de largura por 600px de altura
    createCanvas(600, 600);
  background("lightgrey");}
    
  function draw() {
    stroke("pink") 
    fill("hotpink");
    
     //console.log(mouseIsPressed);
    
    if (mouseIsPressed)
      rect(mouseX, mouseY, 10, 10);
  }