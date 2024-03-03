function loadRow(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById(containerId);
            if (!container) {
                console.error('Container element not found with ID:', containerId);
                return;
            }
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = html.trim();
            const row = tempContainer.querySelector('.position-content');
            if (row) {
                container.appendChild(row);
            } else {
                console.error('Table row not found in the fetched content.');
            }
        })
        .catch(error => console.error('Error fetching content:', error));
}
