
// Static Variables
var themeNames=["light","dark","purple"];
var lightBlue = "#4DC8FF"; // Capri
var royalBlue = "#0300AB"; // Trypan Blue
var darkGray = "#171717";
var lightGray = "#B5B5B5";
var lighterGray = "#E0E0E0"; 
var periwinkle = "#BB87FF";
var darkerPeriwinkle = "#9977CC";
var darkLink = "#6866CC";
var lightLink = "#0099E0";

var russianViolet = "#34113F";
var ecru = "#D8C99B";
var darkOliveGreen = "#657153";

var lightColors ={
  background  : lighterGray,
  primary     : royalBlue,
  text        : "black",
  links       : lightLink
};

var darkColors ={
  background  : darkGray,
  primary     : lightBlue,
  text        : lightGray,
  links       : darkLink
};

var purpleColors ={
  background  : russianViolet,
  primary     : darkerPeriwinkle,
  text        : "white",
  links       : lightLink
};

function toggleTheme(){
  var themeIndex = localStorage.getItem("whThemeIndex");
  themeIndex++;
  if(themeIndex==themeNames.length)
    themeIndex=0;

  setTheme(themeIndex);
}

function setTheme(newIndex){
  localStorage.setItem("whThemeIndex",newIndex);
  
  switch(themeNames[newIndex]){
    case "dark":
      setThemeColors(darkGray,lightBlue,lightGray,darkLink);
      break;
    case "light":
      setThemeColors(lighterGray,royalBlue,"black",lightLink);
      break;
    case "purple":
      setThemeColors(russianViolet,darkerPeriwinkle,"white",lightBlue);
      break;
    default:
      // Same as light theme
      setThemeColors(lighterGray,royalBlue,"black",lightLink);
  }
}

function setThemeColors(bgColor,headingColor,textColor,linkColor){
  let root = document.documentElement;
  
  root.style.setProperty('--bg-color',bgColor);
  root.style.setProperty('--primary-color',headingColor);
  root.style.setProperty('--body-text-color',textColor);
  root.style.setProperty('--body-link-color',linkColor);
}

function initTheme(){
  var userTheme = localStorage.getItem("whThemeIndex");
  
  if(userTheme === null)
    localStorage.setItem("whThemeIndex",0);
  else
    setTheme(userTheme);
}

window.onload = initTheme();
