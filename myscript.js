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

