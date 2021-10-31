//Javascript file containing the logic for dynamically changing the opacity
//of each wonder section as you mouse over it

//When the page is first loaded
window.onload = () => {
  //Get the wonders container
  let wonders = document.getElementsByClassName("wonder");
  //And for every wonder in this container
  for (let i = 0; i < wonders.length; i++) {
    const wonder = wonders[i];
    //When you put the mouse over it make it brighter
    wonder.addEventListener('mouseover', (event) => {
      wonder.classList.remove("darken");
    });
    //When you remove the mouse from it make it darker
    wonder.addEventListener('mouseout', (event) => {
      wonder.classList.add("darken");
    });
  }
}
