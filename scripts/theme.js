
var themeIndex=0;
var themes=["light","dark"];
var lightBlue = "#4DC8FF";
var royalBlue = "#0300AB";
var darkGray = "#171717";
var lightGray = "#B5B5B5";
var lighterGray = "#E0E0E0";
var periwinkle = "#BB87FF";
var darkerPeriwinkle = "#9977CC";
var darkLink = "#6866CC";
var lightLink = "#0099E0";

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
      setThemeColors(darkGray,lightBlue,lightGray,darkLink);
      break;
    case "light":
      setThemeColors(lighterGray,royalBlue,"black",lightLink);
      break;
    default:
      // Same as light theme
      setThemeColors(lighterGray,royalBlue,"black",lightLink);
  }
}

function setThemeColors(bgColor,headingColor,textColor,linkColor){
  let root = document.documentElement;
  
  //document.body.style.backgroundColor=bgColor;
  root.style.setProperty('--bg-color',bgColor);
  root.style.setProperty('--section-headings-color',headingColor);
  root.style.setProperty('--body-text-color',textColor);
  root.style.setProperty('--body-link-color',linkColor);
}