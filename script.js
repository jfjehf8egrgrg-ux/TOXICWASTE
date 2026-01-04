function checkLogin() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if (login === "nuclear" && password === "spill123") {
    window.location.href = "player.html";
  } else {
    document.getElementById("error").innerText = "Неверный логин или пароль";
  }
}

const track = document.getElementById('track1');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const progressBar = document.getElementById('progress-bar');

playBtn.addEventListener('click', () => track.play());
pauseBtn.addEventListener('click', () => track.pause());
stopBtn.addEventListener('click', () => {
  track.pause();
  track.currentTime = 0;
});

// Обновление прогресс-бара
track.addEventListener('timeupdate', () => {
  const percent = (track.currentTime / track.duration) * 100;
  progressBar.style.width = percent + '%';
});
