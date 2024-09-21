
// A list of all the possible themes
var themesNames = ["Light Mode","Dark Mode","Ocean","Periwinkle","Riverside","Ohio State","Monochrome"];

// function setDataTheme(userTheme) {
//     document.body.setAttribute("data-theme",userTheme);
// }

// Load the current theme from local data or set to the default theme
function initTheme() {
    var userTheme = localStorage.getItem("themeName");
    var select = document.getElementById("themeSelector");

    // Check for invalid data
    if (themesNames.indexOf(userTheme) === -1){
        console.log("Invalid user theme; resetting to default.");
        userTheme = "Light Mode";
        localStorage.setItem("themeName", userTheme);   
    }
    select.value = userTheme;
    document.body.setAttribute("data-theme",userTheme);
}

// On page load, initialize the theme and add a listener for changes
document.addEventListener("DOMContentLoaded", function(){ 
    initTheme();
    var select = document.getElementById("themeSelector");
    select.addEventListener('change', function () {
        document.body.setAttribute("data-theme",select.value);
    });
});