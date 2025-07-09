let score = localStorage.getItem('score') || 0;
document.getElementById('score').textContent = score;
const sound = document.getElementById('click-sound');

document.getElementById('clicker').onclick = () => {
  score++;
  document.getElementById('score').textContent = score;
  localStorage.setItem('score', score);
  sound.currentTime = 0;
  sound.play();
};

document.getElementById('donatePayPal').onclick = () => {
  window.open("https://www.paypal.com/donate?business=aekder6@yahoo.fr&currency_code=USD&amount=1", "_blank");
  alert("💖 Thank you for supporting the game!");
};

document.getElementById('showCrypto').onclick = () => {
  const info = document.getElementById('cryptoInfo');
  info.classList.toggle('hidden');
};
