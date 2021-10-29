document.addEventListener('mousemove', (event) => {
  let height = document.body.scrollHeight;
  let mouseY = event.clientY;

  let heightDelta = height - mouseY;
  let heightThreshold = height * 0.1;
  
  let footer = document.getElementById("footer");
  if (heightDelta < heightThreshold) {
    //Activate Footer
    footer.classList.add("grow"); //Note: Handles if the class is already there
  }
  else {
    //Close Footer
    footer.classList.remove("grow"); //Note: Handles if the class isn't there
  }
});