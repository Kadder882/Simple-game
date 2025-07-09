
let score = localStorage.getItem('score') || 0;
document.getElementById('score').textContent = score;

document.getElementById('clicker').onclick = () => {
    score++;
    document.getElementById('score').textContent = score;
    localStorage.setItem('score', score);
};

document.getElementById('donate').onclick = () => {
    alert("This is a mock donation button. You can integrate PayPal here.");
};
