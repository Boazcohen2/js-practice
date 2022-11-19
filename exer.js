function printCredentials(e) {
  const [username, password] = [
    document.getElementById("userNameInput").value,
    document.getElementById("passwordInput").value,
  ];

  e.preventDefault();
  console.log(`the credentials are: ${username}::::${password}`);
}

function MouseEvent(event) {
  const box = document.getElementsByClassName("boaz")[0];
  box.style.top = event.clientY  + "px";
  box.style.left = event.clientX + 'px'
}
window.addEventListener("mousemove", MouseEvent);