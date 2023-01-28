function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const avatar = document.querySelector('#profile img');

html.classList.contains('light') ? avatar.setAttribute('src', './assets/avatar-light.png') : avatar.setAttribute('src', './assets/avatar.png');
}