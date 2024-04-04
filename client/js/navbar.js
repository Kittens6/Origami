// Fetch the JSON data for navbar items
fetch('pages.json')
.then(response => response.json()) // Parse JSON response
.then(data => {
    // Generate HTML content for navbar items dynamically
    const navbarList = document.getElementById('navbarList');
    data.forEach(page => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `origami.html?animal=${encodeURIComponent(page.animal)}`;
        link.textContent = page.animal;
        listItem.appendChild(link);
        navbarList.appendChild(listItem);
    });
})
.catch(error => console.error('Error fetching JSON for navbar:', error));

// navbar.js
export function renderNavbar() {
// Fetch the JSON data for navbar items
fetch('pages.json')
.then(response => response.json()) // Parse JSON response
.then(data => {
    // Generate HTML content for navbar items dynamically
    const navbarList = document.getElementById('navbarList');
    data.forEach(page => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `origami.html?animal=${encodeURIComponent(page.animal)}`;
        link.textContent = page.animal;
        listItem.appendChild(link);
        navbarList.appendChild(listItem);
    });
})
.catch(error => console.error('Error fetching JSON for navbar:', error));
    console.log('Rendering navbar');
}
