
var currentTheme=0;
var lightBlue = "#4DC8FF";
var royalBlue = "#0300AB";

function toggleTheme(){
  currentTheme++;
  if(currentTheme==2)
    currentTheme=0;
  
  switch(currentTheme){
    case 1:
      document.body.style.backgroundColor="black";
      /*
      var mContent = document.getElementById("main-content");
      mContent.h1.color="white";
      document.body.style.backgroundColor="black";
      document.h2.style.color="white";
      document.h3.style.color=lightBlue;
      document.h4.style.color=lightBlue;
      document.h5.style.color=lightBlue;
      document.h6.style.color=lightBlue;
      */
      break;
    default:
      document.body.style.backgroundColor="white";
  }
}