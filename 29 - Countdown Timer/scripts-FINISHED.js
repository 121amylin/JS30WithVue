let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers 清除所有定時器
  clearInterval(countdown);

  const now = Date.now(); //獲取當前時間
  const then = now + seconds * 1000; // 計算結束時間
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it! 檢查我們是否應該停止它！
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it 顯示它！
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60); //分鐘
  const remainderSeconds = seconds % 60; //剩餘秒數
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`; //用三元運算將個位數前面補0
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour; //調整時間
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`; //用三元運算將個位數前面補0
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value; //取value
  console.log(mins);
  timer(mins * 60); //將value換成秒數，並開始計時器
  this.reset();
});