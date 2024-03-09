function addHeaderEvent(){
    document.querySelector("#home-anchor").addEventListener("click", ()=>{
        if (document.querySelector("body").id !== "index-body"){
            location.assign("../../html/index-page/index.html");
        }
    })
    document.querySelector("#ranking-anchor").addEventListener("click", ()=>{
        if (document.querySelector("body").id !== "ranking-body"){
            location.assign("../../html/ranking-page/ranking-page.html");
        }
    })
}