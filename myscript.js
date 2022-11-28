let searchView = document.getElementsByClassName("searchView");
function showSearchView(){
    searchView[0].style.display="block";
}
function hideSearchView(){
    searchView[0].style.display="none";
}

function disableScrolling(){
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    window.onscroll = function(){
    window.scrollTo(LeftScroll, TopScroll);
};}
function enableScrolling(){
    window.onscroll = function(){};
}


function showFilteredResults(){
    let resultList = document.getElementsByClassName("resultList");
    
    for(let i = 0; i<18; i++){
        let img = document.createElement("img");
        img.src="images/troy.jpg";
        img.classList.add("showShow");
        resultList[0].appendChild(img);
    }
}