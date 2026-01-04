function checkLogin() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if (login === "nuclear" && password === "spill123") {
    window.location.href = "player.html";
  } else {
    document.getElementById("error").innerText = "Неверный логин или пароль";
  }
}
