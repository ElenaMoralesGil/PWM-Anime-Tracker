function loadElement(url, containerId, elementSelector) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = html.trim();
            const element = tempContainer.querySelector(elementSelector);
            if (element) {
                const fragment = document.createDocumentFragment(); // Create a document fragment
                fragment.appendChild(element.cloneNode(true)); // Append a clone of the element to the fragment
                const container = document.getElementById(containerId);
                container.appendChild(fragment); // Append the fragment to the container
            } else {
                console.error('Element not found in the fetched content.');
            }
        })
        .catch(error => console.error('Error fetching content:', error));
}
