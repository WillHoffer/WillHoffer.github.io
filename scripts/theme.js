
var lightBlue = "#4DC8FF"; 
var royalBlue = "#0300AB"; 
var darkGray = "#171717";
var lightGray = "#B5B5B5";
var lighterGray = "#E0E0E0"; 
var periwinkle = "#BB87FF";
var darkerPeriwinkle = "#9977CC";
var darkLink = "#6866CC";
var lightLink = "#0099E0"; 
var wikiLinkBlue = "#0645AD";
var russianViolet = "#34113F";
var ecru = "#D8C99B";
var darkOliveGreen = "#657153";
var lightPurple = "#8387D8";
var lightBluePurple = "#8DA6DF";
var lighterBlue = "#A2D8FB";

var lightColors={
  background  : lighterGray,
  primary     : royalBlue,
  text        : "black",
  links       : wikiLinkBlue
};

var darkColors={
  background  : darkGray,
  primary     : lightBlue,
  text        : lightGray,
  links       : darkLink
};

var riverside={
  background  : "#003DA5",
  primary     : "#FFB71B",
  text        : "white",
  links       : lightBlue
};

var blackWhite={
  background  : "white", 
  primary     : "black", 
  text        : "black", 
  links       : wikiLinkBlue  
};

var fractalPic={
  background  : "#14336B",
  primary     : "#80AF79",
  text        : lighterGray,
  links       : "#A6E3FF"
};

var ohioState={
  background  : lighterGray, 
  primary     : "#BB0000", 
  text        : "#2A2A2A", 
  links       : "#BB0000"
}; 

var lightFractalPic={
  background  : lightBluePurple,
  primary     : russianViolet, 
  text        : "black",
  links       : "#570C7D"
};

var themesColorsArray = 
  [lightColors,darkColors,riverside,fractalPic,blackWhite,ohioState,lightFractalPic];

function toggleTheme(){
  var themeIndex = localStorage.getItem("whThemeIndex");
  themeIndex++;
  if(themeIndex==themesColorsArray.length)
    themeIndex=0;

  setTheme(themeIndex);
}

function setTheme(newIndex){
  localStorage.setItem("whThemeIndex",newIndex);
  /* // Use only if specfic adjustments are needed
  switch(themeNames[newIndex]){
    case "dark":
      setThemeColors(darkColors);
      break;
    case "light":
      setThemeColors(lightColors);
      break;
    case "purple":
      setThemeColors(purpleColors);
      break;
    default:
      setThemeColors(lightColors);
  }
  */
  setThemeColors(themesColorsArray[newIndex]);
}

function setThemeColors(themeColors){
  let root = document.documentElement;
  
  root.style.setProperty('--bg-color',        themeColors.background);
  root.style.setProperty('--primary-color',   themeColors.primary);
  root.style.setProperty('--body-text-color', themeColors.text);
  root.style.setProperty('--body-link-color', themeColors.links);
}

function initTheme(){
  var userTheme = localStorage.getItem("whThemeIndex");
  
  if(userTheme === null || userTheme >= themesColorsArray.length)
    localStorage.setItem("whThemeIndex",0);
  else
    setTheme(userTheme);
}

window.onload = initTheme();
