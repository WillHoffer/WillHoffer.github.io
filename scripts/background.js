// The purpose of this script is to add support for dynamic/static background toggling
// Todo: instead of 0 and 1, change to storing true/false

// Called by the toggle animation button
function toggleBackground() {
    setBackgroundDynamics(1-localStorage.getItem("isBackgroundDynamic"));
}

// Change the background state
// Optional change: edit the displayed button name
function setBackgroundDynamics(isBackgroundDynamic){
    if(isBackgroundDynamic == 1){ //Yes, it's dynamic
        document.getElementById("mainHeader").className = "page-header";
        localStorage.setItem("isBackgroundDynamic",1);
    }else if(isBackgroundDynamic == 0){ //No, it's static
        document.getElementById("mainHeader").className = "page-header-static";
        localStorage.setItem("isBackgroundDynamic",0);
    }
}

// Check for valid data, then set dynamic/static state
function initBackgroundState(){
    var isBackgroundDynamic = localStorage.getItem("isBackgroundDynamic");
    //console.log(isBackgroundDynamic);
        
    if(!(isBackgroundDynamic === 0 || isBackgroundDynamic === 1) ){
        localStorage.setItem("isBackgroundDynamic",0);
        isBackgroundDynamic = 0;
    }

    setBackgroundDynamics(isBackgroundDynamic);
}

// On load, determine whether the background should be animated or not
document.addEventListener("DOMContentLoaded", function(){ 
    initBackgroundState();
});
