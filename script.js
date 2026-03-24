let timeLeft = 30;
const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');

// 2. 新增隨機安撫語陣列 (安撫功能升級)
const coolingMessages = [
    "主辦單位正在後台幫大家排椅子，請耐心候位...",
    "正在確認您的網路連線速度，請勿按 F5 重新整理！",
    "系統正在過濾大量搶票請求，您的順位已在保留中...",
    "再喝口水休息一下，門票就在不遠處了。",
    "目前伺服器正努力負載中，感謝您的耐心等待。"
];

// 倒數計時功能
const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;

    // 每 6 秒隨機換一次訊息
    if (timeLeft % 6 === 0 && timeLeft > 0) {
        const randomIndex = Math.floor(Math.random() * coolingMessages.length);
        messageElement.textContent = coolingMessages[randomIndex];
    }

    if (timeLeft <= 0) {
        clearInterval(countdown);
        messageElement.innerHTML = "伺服器已就緒！正在引導您進入購票視窗...";
        messageElement.style.color = "#27ae60";
        timerElement.style.color = "#27ae60";
    }
}, 1000);

// 按鈕互動
document.getElementById('refresh-btn').addEventListener('click', () => {
    alert("正在重新連接至拓元高效能伺服器...");
});