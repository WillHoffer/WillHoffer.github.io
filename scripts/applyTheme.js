document.addEventListener("DOMContentLoaded", function(){ 
    console.log("Set.");
    document.body.setAttribute("data-theme",localStorage.getItem("siteThemeName")); 
});