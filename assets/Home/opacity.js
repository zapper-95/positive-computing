window.onload = () => {
  let wonders = document.getElementsByClassName("wonder");
  for (let i = 0; i < wonders.length; i++) {
    const wonder = wonders[i];
    wonder.addEventListener('mouseover', (event) => {
      wonder.classList.remove("darken");
    });
    wonder.addEventListener('mouseout', (event) => {
      wonder.classList.add("darken");
    });
  }
}
