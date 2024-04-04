fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
})
.catch(error => {
    console.error('Error fetching header:', error);
});

// header.js
export function renderHeader() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching header:', error);
    });
    console.log('Rendering header');
}
