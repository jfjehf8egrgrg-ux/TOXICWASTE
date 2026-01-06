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


track.addEventListener('timeupdate', () => {
  const percent = (track.currentTime / track.duration) * 100;
  progressBar.style.width = percent + '%';
});

<script>
  const bgMusic = document.getElementById('bg-music');
  const loginBtn = document.getElementById('login-btn');

  loginBtn.addEventListener('click', () => {
  
    if(bgMusic.paused) {
      bgMusic.volume = 0.2; 
      bgMusic.play().catch(err => {
        console.log("Не удалось включить звук:", err);
      });
    }


  });
</script>

