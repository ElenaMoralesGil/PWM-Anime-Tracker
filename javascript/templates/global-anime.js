function addNavbarEvents(){
    document.querySelector("#characters-anchor").addEventListener("click", ()=>{
        if (document.querySelector("body").id !== "character-anime-body"){
            location.assign("../../html/character-page/characters-anime.html");
        }
    })

    document.querySelector("#episodes-anchor").addEventListener("click", ()=>{
        if (document.querySelector("body").id !== "episodes-anime-body"){
            location.assign("../../html/episodes-page/episodes-anime.html");
        }
    })
}