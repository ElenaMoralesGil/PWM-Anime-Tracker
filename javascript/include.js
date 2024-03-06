function loadById(pageName, element) {
    return new Promise((resolve) => {
        fetch(pageName)
            .then(response => response.text())
            .then(html => {
                document.getElementById(element).innerHTML = html;
                resolve();
            })
            .catch(error => console.error('Error fetching header:', error));
    })
}

function loadByClass(pageName, className) {
    return new Promise((resolve) => {
        fetch(pageName)
            .then(response => response.text())
            .then(html => {
                let elements = document.getElementsByClassName(className);
                for (let element of elements){
                    element.innerHTML = html;
                    resolve();
                }
            })
            .catch(error => console.error('Error fetching header:', error));
    })
}

// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))