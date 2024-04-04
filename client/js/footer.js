fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => {
    console.error('Error fetching footer:', error);
});

// footer.js
export function renderFooter() {
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching footer:', error);
    });
    
    console.log('Rendering footer');
}
