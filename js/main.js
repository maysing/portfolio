function setup() {
    createCanvas(windowWidth, 500);
    createStars(); // Call createStars once setup
  }
  
  let stars = [];  
  
  function createStars() {
    for (let i = 0; i < 500; i++) {
      const star = {
        x: Math.floor(random() * width),
        y: Math.floor(random() * height),
        size: random(0.5, 2),
        alpha: random(), // Initialize alpha randomly
      };
      stars.push(star);
    }
  }
  
  function draw() {
    background(0); // Add background to clear the canvas
    drawStars();
  }
