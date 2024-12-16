document.addEventListener("DOMContentLoaded", () => {
  const balloon = document.getElementById("loginBalloon");

  // Redirecionar ao clicar no balão
  balloon.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  // Permitir mover o balão
  let isDragging = false;
  let offsetX, offsetY;

  balloon.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      balloon.style.left = `${e.pageX - offsetX}px`;
      balloon.style.top = `${e.pageY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Suporte para toque em dispositivos móveis
  balloon.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.pageX - balloon.offsetLeft;
    offsetY = touch.pageY - balloon.offsetTop;
  });

  document.addEventListener("touchmove", (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      balloon.style.left = `${touch.pageX - offsetX}px`;
      balloon.style.top = `${touch.pageY - offsetY}px`;
    }
  });

  document.addEventListener("touchend", () => {
    isDragging = false;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const balloon = document.getElementById("loginBalloon");

  // Redirecionar ao clicar no balão
  balloon.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  // Permitir mover o balão
  let isDragging = false;
  let offsetX, offsetY;

  balloon.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      balloon.style.left = `${e.pageX - offsetX}px`;
      balloon.style.top = `${e.pageY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Suporte para toque em dispositivos móveis
  balloon.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.pageX - balloon.offsetLeft;
    offsetY = touch.pageY - balloon.offsetTop;
  });

  document.addEventListener("touchmove", (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      balloon.style.left = `${touch.pageX - offsetX}px`;
      balloon.style.top = `${touch.pageY - offsetY}px`;
    }
  });

  document.addEventListener("touchend", () => {
    isDragging = false;
  });
});

document.getElementById("loginBalloon").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/login.html";
});
