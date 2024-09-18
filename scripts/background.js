// The purpose of this script is to add support for dynamic/static background toggling

function toggleBackground() {
    var isBackgroundDynamic = localStorage.getItem("isBackgroundDynamic");

    setBackgroundDynamics(1-isBackgroundDynamic);
}

function setBackgroundDynamics(isBackgroundDynamic){
    if(isBackgroundDynamic == 1){ //Yes, it's dynamic
        document.getElementById("mainHeader").className = "page-header";
        localStorage.setItem("isBackgroundDynamic",1);
    }else if(isBackgroundDynamic == 0){ //No, it's static
        document.getElementById("mainHeader").className = "page-header-static";
        localStorage.setItem("isBackgroundDynamic",0);
    }
}

function initBackgroundState(){
    var isBackgroundDynamic = localStorage.getItem("isBackgroundDynamic");
    console.log(isBackgroundDynamic);
        
    if(isBackgroundDynamic == null){
        localStorage.setItem("isBackgroundDynamic",0);
    }

    setBackgroundDynamics(isBackgroundDynamic);
}

// To be run on load of script
//document.onload += initBackgroundState();

document.addEventListener("DOMContentLoaded", function(){ 
    initBackgroundState();
});
