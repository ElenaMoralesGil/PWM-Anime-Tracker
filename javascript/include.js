function loadById(pageName, element) {
    return fetch(pageName)
        .then(response => response.text())
        .then(html => {
            document.getElementById(element).innerHTML = html;
        })
        .catch(error => console.error('Error fetching header:', error));
}

function loadByClass(pageName, className) {
    return fetch(pageName)
        .then(response => response.text())
        .then(html => {
            let elements = document.getElementsByClassName(className);
            for (let element of elements){
                element.innerHTML = html;
            }
        })
        .catch(error => console.error('Error fetching header:', error));
}

// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))