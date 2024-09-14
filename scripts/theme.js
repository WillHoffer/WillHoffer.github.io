
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
  themeName   : "lightColors",
  background  : lighterGray,
  primary     : royalBlue,
  text        : "black",
  links       : wikiLinkBlue
};

var darkColors={
  themeName   : "darkColors",
  background  : darkGray,
  primary     : lightBlue,
  text        : lightGray,
  links       : darkLink
};

var riverside={
  themeName   : "riverside",
  background  : "#003DA5",
  primary     : "#FFB71B",
  text        : "white",
  links       : lightBlue
};

var blackWhite={
  themeName   : "blackWhite",
  background  : "white", 
  primary     : "black", 
  text        : "black", 
  links       : wikiLinkBlue  
};

var fractalPic={
  themeName   : "fractalPic",
  background  : "#14336B",
  primary     : "#80AF79",
  text        : lighterGray,
  links       : "#A6E3FF"
};

var ohioState={
  themeName   : "ohioState",
  background  : lighterGray, 
  primary     : "#BB0000", 
  text        : "#2A2A2A", 
  links       : "#BB0000"
}; 

var lightFractalPic={
  themeName   : "lightFractalPic",
  background  : lightBluePurple,
  primary     : russianViolet, 
  text        : "black",
  links       : "#570C7D"
};

var themesArray = 
  [lightColors,darkColors,riverside,fractalPic,blackWhite,ohioState,lightFractalPic];

function toggleTheme(){
  var themeIndex = localStorage.getItem("whThemeIndex");
  themeIndex++;
  if(themeIndex==themesArray.length)
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
  setThemeColors(themesArray[newIndex]);
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
  
  if(userTheme === null || userTheme >= themesArray.length)
    localStorage.setItem("whThemeIndex",0);
  else
    setTheme(userTheme);
}

// Function to create the <select> tag and place it in the specified DOM element
function createThemeSelector(selectorId, labelText) {
  // Get the target DOM element where the dropdown will be placed
  const targetElement = document.getElementById(selectorId);
  
  if (!targetElement) {
      console.error(`Element with id '${selectorId}' not found.`);
      return;
  }

  // Create a label element
  const label = document.createElement('label');
  label.innerHTML = labelText;
  label.setAttribute('for', 'themeSelector');

  // Create a <select> element
  const select = document.createElement('select');
  select.id = 'themeSelector';  // Set an id for the select element

  // Add a default option
  const defaultOption = document.createElement('option');
  defaultOption.text = 'Pick Theme';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  // Loop through the array and create an <option> for each theme color
  themesArray.forEach(theme => {
      const option = document.createElement('option');
      option.value = themesArray.indexOf(theme);
      option.text = theme.themeName;
      select.appendChild(option);
  });

  // Add an event listener to call setThemeColors() when an option is selected
  select.addEventListener('change', function() {
      const selectedColor = select.value;
      setThemeColors(selectedColor);
  });

  // Append the label and the select to the target DOM element
  targetElement.appendChild(label);
  targetElement.appendChild(select);
}

window.onload += function() {
  initTheme();
  createThemeSelector('theme-selector-container', 'Choose Theme');
  console.log("Loaded");
};
