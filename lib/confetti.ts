import confetti from 'canvas-confetti'

export const fireConfetti = () => {
  // First burst
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#e9435e', '#2ecc71', '#f1c40f', '#e74c3c', '#3498db']
  });

  // Cannon left
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#e9435e', '#2ecc71', '#f1c40f', '#e74c3c', '#3498db']
    });
  }, 200);

  // Cannon right
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#e9435e', '#2ecc71', '#f1c40f', '#e74c3c', '#3498db']
    });
  }, 200);
} 