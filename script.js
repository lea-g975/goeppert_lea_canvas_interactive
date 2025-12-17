const titleContainer = document.getElementById('title-container');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

window.addEventListener('resize', updateCanvasSize);
updateCanvasSize();

/* Mond-Funktion */
function Moon(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2); // Kreis für den Mond
  ctx.fillStyle = '#f5f3ce';             // sanftes Gelb/Creme
  ctx.fill();
}

/* Stern-Funktion */
function Star(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2); // runde kleine Sterne
  ctx.fillStyle = 'white';
  ctx.fill();
}

/* Canvas aktualisieren */
function updateCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Mond
  Moon(context, canvas.width - 150, 100, 50);

  // Sterne
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 1.5 + 0.5; // kleine Sterne
    Star(context, x, y, radius);
  }
}