function loadElement(url, containerId, elementSelector) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = html.trim();
            const elements = tempContainer.querySelectorAll(elementSelector);
            if (elements.length > 0) {
                const fragment = document.createDocumentFragment(); // Create a document fragment
                let count = 0; // Initialize a count variable
                elements.forEach(element => {
                    if (count < 5) { // Check if the count is less than 5
                        fragment.appendChild(element.cloneNode(true)); // Append a clone of each element to the fragment
                        count++; // Increment the count
                    }
                });
                const container = document.getElementById(containerId);
                container.appendChild(fragment); // Append the fragment to the container
            } else {
                console.error('Elements not found in the fetched content.');
            }
        })
        .catch(error => console.error('Error fetching content:', error));
}
