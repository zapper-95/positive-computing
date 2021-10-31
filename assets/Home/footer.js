//Javascript file containing the logic for hiding and showing
//the page footer when the mouse is near the bottom of the page

//ISSUE: I am aware that this design doesn't work at all on
//mobile, but as this is just a bit of fun I didn't consider
//it to be a deal-breaker

//Whenever the mouse is moved...
document.addEventListener('mousemove', (event) => {
  //Get the dimentions of the page
  let height = window.innerHeight
  let mouseY = event.clientY;

  //heightDelta is the distance the mouse is from the bottom of the screen
  let heightDelta = height - mouseY;
  //heightThreshold is how close to the bottom of the screen the mouse needs to be to
  //activate the footer
  let heightThreshold = height * 0.16;
  
  //Get the footer
  let footer = document.getElementById("footer");
  //If the mouse is below the threshold for activating the footer
  if (heightDelta < heightThreshold) {
    //Activate Footer
    footer.classList.add("grow"); //Note: Handles if the class is already there
  }
  else {
    //Close Footer
    footer.classList.remove("grow"); //Note: Handles if the class isn't there
  }
});
