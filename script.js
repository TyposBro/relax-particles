const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
console.log(canvas);
console.log(ctx);
const particles = [];

window.addEventListener("resize", () => {});

const mouse = {
  x: Math.random() * 100,
  y: Math.random() * 100,
};

// const startDrawing = () => {
//   canvas.addEventListener("mousemove", (event) => {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     particles.forEach((p) => p.update());
//   });
// };

canvas.addEventListener("mousedown", (e) => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  particles.splice(0, particles.length);

  init(e);

  console.log(particles[0].speedX);
});

class Particle {
  constructor(e) {
    this.x = e.x;
    this.y = e.y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 10 - 5;
    this.speedY = Math.random() * 10 - 5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
    ctx.fill();
  }
}

const init = (e) => {
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(e));
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => p.draw());
  particles.forEach((p) => p.update());
  requestAnimationFrame(animate);
};
animate();
