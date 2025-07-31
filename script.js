function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 300);
// 🎂 Countdown logic for 14th Oct 2025
const targetDate = new Date("October 14, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    document.querySelector('.countdown').innerHTML = "<h2>🎉 It's Birthday Time! 🎉</h2>";
    return;
  }

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

document.addEventListener('DOMContentLoaded', () => {
  const cameraButton = document.querySelectorAll('.sidebar button')[1]; // 📷 button
  const photoUI = document.getElementById('photoUI');
  const closeUIBtn = document.querySelector('.close-ui');

  cameraButton.addEventListener('click', () => {
    photoUI.style.display = 'block';
  });

  closeUIBtn.addEventListener('click', () => {
    photoUI.style.display = 'none';
  });
});
