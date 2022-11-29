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






    //fetch("https://api.themoviedb.org/3/tv/popular?api_key=f3ab1f4ca8b593cafcfaea1eb68abff0&language=en-US&page=1")
    //.then((response) => response.json())
    //.catch(err=>{console.log(err)})
    //.then((data) => console.log(data.results))
    //.catch(err=>{console.log(err)})

    const popularMovies = () => {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=f3ab1f4ca8b593cafcfaea1eb68abff0&language=en-US&page=1")
        .then((response) => response.json())
        .catch(err=>{console.log(err)})
        .then((data) => {
            console.log(data.results)
            let popularMoviesSection = document.getElementsByClassName("popularMoviesSection");
            for(let i=0; i<data.results.length; i++){
                //console.log (data.results[i].backdrop_path)
                let popularMovie = document.createElement("div");
                popularMovie.classList.add("popularMovie");

                let img = document.createElement("img");
                img.src = "https://www.themoviedb.org/t/p/w220_and_h330_face/"+(data.results[i].poster_path);
                img.classList.add("movieCovers");
                popularMovie.appendChild(img);

                let p = document.createElement("p");
                p.innerHTML = data.results[i].name;
                p.classList.add("movieTitles");
                popularMovie.appendChild(p);

                popularMoviesSection[0].appendChild(popularMovie);
            }
        })
        .catch(err=>{console.log(err)})
    }

    const searchingTitle = () => {
        localStorage.setItem("phrase", document.getElementsByClassName("searchingSomeTitle")[0].value);
    }

    const searchedTitles = () => {
        let searchedTitles = localStorage.getItem("phrase").toLowerCase();
        console.log("SEARCHED: "+searchedTitles);

        const filterSearchingResults = (list) => list.filter(({title}) => title == searchedTitles);

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f3ab1f4ca8b593cafcfaea1eb68abff0&language=en-US&page=1")
        .then((response) => response.json())
        .catch(err=>{console.log(err)})
        .then((data) => {
            //console.log(data.results);

            let someTitle = [];

            for(let i=0; i<data.results.length; i++){
                someTitle[i] = (data.results[i].title).toLowerCase();
                console.log(someTitle[i]);
            }
            
            const filterSearchingResults = (list) => list.filter((movie) => movie.includes(searchedTitles));
            console.log("\nMATCHING TITLES: "+filterSearchingResults(someTitle));
        })
        .catch(err=>{console.log(err)})
    }

    /* // POKAZANIE WYNIKÓW WYSZUKIWANIA 
const showFilteredResults = () => {
    let resultList = document.getElementsByClassName("resultList");
    
    for(let i = 0; i<18; i++){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f3ab1f4ca8b593cafcfaea1eb68abff0&language=en-US&page=1")
        .then((response) => response.json())
        .catch(err=>{console.log(err)})
        .then((data) => {
            console.log(data.results)
            let popularMoviesSection = document.getElementsByClassName("popularMoviesSection");
            for(let i=0; i<data.results.length; i++){
                //console.log (data.results[i].backdrop_path)
                let popularMovie = document.createElement("div");
                popularMovie.classList.add("popularMovie");

                let img = document.createElement("img");
                img.src = "https://www.themoviedb.org/t/p/w220_and_h330_face/"+(data.results[i].poster_path);
                img.classList.add("movieCovers");
                popularMovie.appendChild(img);

                let p = document.createElement("p");
                p.innerHTML = data.results[i].name;
                p.classList.add("movieTitles");
                popularMovie.appendChild(p);

                popularMoviesSection[0].appendChild(popularMovie);
            }
        })
        .catch(err=>{console.log(err)})
        
        let img = document.createElement("img");
        img.src="images/troy.jpg";
        img.classList.add("showShow");
        resultList[0].appendChild(img);
    }
}
*/


 function showFilteredResults(){
     let resultList = document.getElementsByClassName("resultList");
     
     for(let i = 0; i<18; i++){
         let img = document.createElement("img");
         img.src="images/troy.jpg";
         img.classList.add("showShow");
         resultList[0].appendChild(img);
     }
 }


    /*
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=f3ab1f4ca8b593cafcfaea1eb68abff0&language=en-US&page=1")
        .then((response) => response.json())
        .catch(err=>{console.log(err)})
        .then((data) => {
            console.log(data.results)

        })
        .catch(err=>{console.log(err)})
    */