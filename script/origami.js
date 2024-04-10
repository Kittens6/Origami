// Parse the URL to extract the title query parameter
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');

// Fetch the JSON data
fetch('pages.json')
    .then(response => response.json()) // Parse JSON response
    .then(data => {
        // Find the page corresponding to the selected title
        const selectedPage = data.find(page => page.title === title);

        if (selectedPage) {
            // Set the document title to the title of the selected page
            document.title = selectedPage.title;

            // Generate the HTML content for the navbar dynamically based on the data
            const navbarLinks = data.map(page => `<li><a href="origami.html?title=${page.title}">${page.pageTitle}</a></li>`).join('');

            // Fetch the footer HTML content and generate the page content
            fetch('footer.html')
                .then(response => response.text())
                .then(footerHtml => {
                    // Now, use selectedPage details to populate the page content
                    // No need to regenerate the whole page HTML, just modify the needed parts
                    document.querySelector('.headerTitle').textContent = selectedPage.headerTitle;
                    document.querySelector('.videoContainer iframe').src = selectedPage.embedLink;
                    document.querySelector('.videoContainer iframe').title = selectedPage.embedTitle;
                    document.querySelector('.youtubeLink a').href = selectedPage.youtubeLink;
                    document.querySelector('.youtubeLink a').textContent = `${selectedPage.pageTitle} Video`;
                    document.getElementById('navBar').innerHTML = `<div class="navBarHamburgerContainer" onclick="toggleMenu(this)">
                                                                    <div class="bar1"></div>
                                                                    <div class="bar2"></div>
                                                                    <div class="bar3"></div>
                                                                  </div>
                                                                  <div class="menu" id="menu">
                                                                    <ul>${navbarLinks}</ul>
                                                                  </div>`;
                    document.getElementById('footer').innerHTML = footerHtml;
                })
                .catch(error => console.error('Error fetching footer:', error));
        } else {
            console.error('Page not found');
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));

function toggleMenu(x) {
    x.classList.toggle("change");
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
