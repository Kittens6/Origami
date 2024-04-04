// Parse the URL to extract the animal query parameter
const urlParams = new URLSearchParams(window.location.search);
const animal = urlParams.get('animal');

// Fetch the JSON data
fetch('pages.json')
    .then(response => response.json()) // Parse JSON response
    .then(data => {
        // Generate the HTML content for the navbar dynamically based on the data
        const navbarLinks = data.map(page => `<li><a href="origami.html?animal=${page.animal}">${page.animal}</a></li>`).join('');

        // Find the page corresponding to the selected animal
        const selectedPage = data.find(page => page.animal === animal);
        
        // Generate HTML content dynamically based on the selected page
        const htmlContent = `
            <div class="headerContainer">
                <div class="headerTitle">${selectedPage.headerTitle}</div>
                <div class="navBar" id="navBar">
                    <div class="navBarHamburgerContainer" onclick="toggleMenu(this)">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>

                    <div class="menu" id="menu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            ${navbarLinks}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mainContainer">
                <div class="insideContainer">
                    <div class="videoContainer">
                        <iframe width="100%" height="100%" src="${selectedPage.embedLink}" title="${selectedPage.embedTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div class="youtubeLink">YouTube Link: <a href="${selectedPage.youtubeLink}">${selectedPage.title} Video</a></div>
                    <div class="footer" id="footer"></div>
                </div>
            </div>
        `;

        // Update the HTML content with the dynamically generated content
        document.body.innerHTML = htmlContent;
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
