function loadRankingPosition(positionContainer){
    let rankingData = positionContainer.querySelectorAll("p");
    for (let data of rankingData){
        data.innerHTML="Ano Hi Mita Hana No Wa Bokutachi Wa Mada Shiranai";
    }
    let image = positionContainer.querySelector("img");
    image.alt="ranking anime cover";
    image.title="ranking anime cover";
    image.src="../../resources/images/frieren.jpg";
}