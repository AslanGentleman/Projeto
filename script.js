function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/AVATAR-not.png")
  } else {
    img.setAttribute("src", "./assets/AVATAR.jpg")
    // sem light mode, manter img normal
  }
}
