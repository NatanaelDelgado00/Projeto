function toggleMode() {
  const html = document.body
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/macaco-preto.jpg")
  } else {
    img.setAttribute("src", "./assets/macaco-branco.jpg")
  }
}
