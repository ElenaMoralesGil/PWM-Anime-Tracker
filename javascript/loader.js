
export const basicComponents = [
    { url: '../html/top-header.html', targetElement: document.getElementById('header') },
    { url: '../html/bottom-footer.html', targetElement: document.getElementById('footer') }
];
export const basicComponentsLogin = [
    { url: '../html/top-header-login.html', targetElement: document.getElementById('header') },
    { url: '../html/bottom-footer.html', targetElement: document.getElementById('footer') }
];
export function loadComponents(components) {
    return Promise.all(components.map(({ url, targetElement }) => {
        return fetch(url)
            .then(response => response.text())
            .then(html => {
                targetElement.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading component:', error);
                // Ensure the promise chain continues by returning a resolved promise
                return Promise.resolve();
            });
    }));
}

// Call loadComponents after DOM content has loaded
document.addEventListener('DOMContentLoaded', () => {
    Promise.all([

        loadComponents(basicComponents),
        loadComponents(basicComponentsLogin)
    ]).catch(error => {
        console.error('Failed to load components:', error);
    });
});
