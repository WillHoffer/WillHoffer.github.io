
// Named colors for reuse in different themes
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

// Themes are sets of colors and a name for selection
var lightColors = {
    themeName: "Light Mode",
    background: lighterGray,
    primary: royalBlue,
    text: "black",
    links: wikiLinkBlue
};

var darkColors = {
    themeName: "Dark Mode",
    background: darkGray,
    primary: lightBlue,
    text: lightGray,
    links: darkLink
};

var riverside = {
    themeName: "Riverside",
    background: "#003DA5",
    primary: "#FFB71B",
    text: "white",
    links: lightBlue
};

var blackWhite = {
    themeName: "Monochrome",
    background: "white",
    primary: "black",
    text: "black",
    links: wikiLinkBlue
};

var fractalPic = {
    themeName: "Fractal Dark",
    background: "#14336B",
    primary: "#80AF79",
    text: lighterGray,
    links: "#A6E3FF"
};

var ohioState = {
    themeName: "Ohio State",
    background: lighterGray,
    primary: "#BB0000",
    text: "#2A2A2A",
    links: "#BB0000"
};

var lightFractalPic = {
    themeName: "Fractal Light",
    background: lightBluePurple,
    primary: russianViolet,
    text: "black",
    links: "#570C7D"
};

// A list of all the possible themes
var themesArray = [lightColors, darkColors, riverside, fractalPic, blackWhite, ohioState, lightFractalPic];

// Switch the theme, toggling through the themes array in order
function toggleTheme() {
    var themeIndex = localStorage.getItem("whThemeIndex");
    themeIndex++;
    if (themeIndex === themesArray.length)
        themeIndex = 0;

    setTheme(themeIndex);
}

// Set the theme based on the given index of the theme in themesArray
function setTheme(newIndex) {
    // if (newIndex === null || newIndex === NaN || newIndex >= themesArray.length || newIndex < 0 ) {
    //     console.log("Invalid index; setting to default theme.");
    //     localStorage.setItem("whThemeIndex", 0);
    //     setThemeColors(themesArray[0]);
    // } else {
    //     localStorage.setItem("whThemeIndex", newIndex);
    //     setThemeColors(themesArray[newIndex]);
    //     console.log("Changed theme.");
    // }

    localStorage.setItem("whThemeIndex",newIndex);
    //setThemeColors(themesArray[newIndex]);
    setDataTheme(themesArray[newIndex]);
}

function setDataTheme(theme) {
    document.body.setAttribute("data-theme",theme.themeName);
}

// Set the document colors to the theme's colors
function setThemeColors(themeColors) {
    let root = document.documentElement;   
    root.style.setProperty('--bg-color',        themeColors.background);
    root.style.setProperty('--primary-color',   themeColors.primary);
    root.style.setProperty('--body-text-color', themeColors.text);
    root.style.setProperty('--body-link-color', themeColors.links);
}

// Load the current theme from local data or set to the default theme
function initTheme() {
    var userTheme = localStorage.getItem("whThemeIndex");

    // Check for invalid data
    if (userTheme === null || userTheme === NaN || userTheme <0 || userTheme >= themesArray.length){
        console.log("Invalid user theme index; resetting to default.");
        localStorage.setItem("whThemeIndex", 0);
        setTheme(0);
    } else 
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
    select.setAttribute('class','selector');

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
    select.addEventListener('change', function () {
        const selectedColor = select.value;
        setTheme(selectedColor);
    });

    // Append the label and the select to the target DOM element
    targetElement.appendChild(label);
    targetElement.appendChild(select);
}

// Function to populate the <select> tag with options
function populateThemeSelector(selectorId) {
    // Get the target DOM element where the dropdown will be placed
    const select = document.getElementById(selectorId);

    if (!select) {
        console.error(`Element with id '${selectorId}' not found.`);
        return;
    }

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
    select.addEventListener('change', function () {
        const selectedColor = select.value;
        setTheme(selectedColor);
    });

}

// Use to compile a theme into CSS 
function printTheme(theme) {
    console.log("[data-theme=\""+theme.themeName+"\"] {\n",
        "\t--bg-color: "+theme.background+";\n",
        "\t--primary-color: "+theme.primary+";\n",
        "\t--body-text-color: "+theme.text+";\n",
        "\t--body-link-color:"+theme.links+";\n",
        "}\n"
    );
}

// window.onload = function () {
//     initTheme();
//     //createThemeSelector('theme-selector-container', '');
//     populateThemeSelector("themeSelector");
// };

document.addEventListener("load", function(){ 
    initTheme();
    //createThemeSelector('theme-selector-container', '');
    populateThemeSelector("themeSelector"); 
});