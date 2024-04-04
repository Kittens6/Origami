// Fetch the header content from header.html
// Fetch the header content from header.html
fetch('navBar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navBar').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching navBar:', error);
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching footer:', error);
    });


function toggleMenu(x) {
    x.classList.toggle("change");
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}