function loadRow(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = html.trim();
            const row = tempContainer.querySelector('.position-content');
            if (row) {
                const fragment = document.createDocumentFragment(); // Create a document fragment
                fragment.appendChild(row.cloneNode(true)); // Append a clone of the row to the fragment
                const container = document.getElementById(containerId);
                container.appendChild(fragment); // Append the fragment to the container
            } else {
                console.error('Table row not found in the fetched content.');
            }
        })
        .catch(error => console.error('Error fetching content:', error));
}
