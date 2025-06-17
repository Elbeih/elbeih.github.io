function showForms() {
  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('login-form').classList.add('active');
  document.getElementById('back-arrow').style.display = 'block';
}

function toggleForms() {
  document.getElementById('error-message').style.display = 'none';
  const login = document.getElementById('login-form');
  const signup = document.getElementById('signup-form');
  login.classList.toggle('active');
  signup.classList.toggle('active');
}

function goBack() {
  document.getElementById('login-form').classList.remove('active');
  document.getElementById('signup-form').classList.remove('active');
  document.getElementById('main-screen').style.display = 'flex';
  document.getElementById('error-message').style.display = 'none';
  document.getElementById('back-arrow').style.display = 'none';
}

function goBackToHome() {
  document.getElementById('cats-page').style.display = 'none';
  document.getElementById('main-screen').style.display = 'flex';
}

function signup() {
  const name = document.getElementById('signup-name').value;
  const phone = document.getElementById('signup-phone').value;
  const email = document.getElementById('signup-email').value;
  const pass = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;

  if (pass !== confirm || !name || !email || !phone) {
    alert("Please fill all fields correctly.");
    return;
  }

  localStorage.setItem('elbeih_user', JSON.stringify({ name, phone, email, pass }));
  toggleForms();
  alert("Account created successfully!");
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const user = JSON.parse(localStorage.getItem('elbeih_user'));

  if (user && (username === user.name || username === user.email) && password === user.pass) {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('back-arrow').style.display = 'none';
    document.getElementById('cats-page').style.display = 'flex';
    const video = document.getElementById('royalVideo');
    video.muted = false;
    video.play();
    document.querySelector('.mute-btn').innerText = "Mute";
  } else {
    const error = document.getElementById('error-message');
    error.innerText = "🚫 Royal access denied! Check your credentials.";
    error.style.display = 'block';
  }
}

function toggleMute() {
  const video = document.getElementById("royalVideo");
  const btn = document.querySelector(".mute-btn");
  video.muted = !video.muted;
  btn.innerText = video.muted ? "Unmute" : "Mute";
}
