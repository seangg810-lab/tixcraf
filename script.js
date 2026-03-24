let timeLeft = 30;
const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');

const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        messageElement.innerHTML = "伺服器已就緒！正在為您導向購票頁面...";
        timerElement.style.color = "#27ae60";
    }
}, 1000);

document.getElementById('refresh-btn').addEventListener('click', () => {
    alert("正在重新偵測網路連線速度...");
});