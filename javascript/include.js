async function loadById(pageName, element) {
    await fetch(pageName)
        .then(async response => await response.text())
        .then(html => {
            document.getElementById(element).innerHTML = html;
        })
        .catch(error => console.error('Error fetching header:', error));
}

async function loadByClass(pageName, className) {
    await fetch(pageName)
        .then(async response => await response.text())
        .then(html => {
            let elements = document.getElementsByClassName(className);
            for (let i = 0, length = elements.length; i < length; i++) {
                elements[i].innerHTML = html;
            }
        })
        .catch(error => console.error('Error fetching header:', error));
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))