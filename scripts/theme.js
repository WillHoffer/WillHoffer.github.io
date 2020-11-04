
var themeIndex=0;
var themes=["light","dark"];
var lightBlue = "#4DC8FF";
var royalBlue = "#0300AB";

function toggleTheme(){
  themeIndex++;
  if(themeIndex==themes.length)
    themeIndex=0;
  
  setTheme(themes[themeIndex]);
}

function setTheme(newTheme){
  let root = document.documentElement;
  
  switch(newTheme){
    case "dark":
      setThemeColors("black",lightBlue);
      break;
    case "light":
      setThemeColors("white",royalBlue);
      break;
    default:
      // Same as light theme
      setThemeColors("white",royalBlue);
  }
}

function setThemeColors(colorBG,colorHead){
  let root = document.documentElement;
  
  document.body.style.backgroundColor=colorBG;
  root.style.setProperty('--section-headings-color',colorHead);
}