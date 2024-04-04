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

// Fetch the JSON data
fetch('pages.json')
    .then(response => response.json()) // Parse JSON response
    .then(data => {
        // Generate HTML content dynamically based on JSON data
        let htmlContent = '';
        data.forEach(page => {
            htmlContent += `
                <div class="headerContainer">
                    <div class="headerTitle">${page.headerTitle}</div>
                    <div class="navBar" id="navBar"></div>
                </div>
                <div class="mainContainer">
                    <div class="insideContainer">
                        <div class="videoContainer">
                            <iframe width="100%" height="100%" src="${page.embedLink}" title="${page.embedTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div class="youtubeLink">YouTube Link: <a href="${page.youtubeLink}">${page.title} Video</a></div>
                        <div class="footer" id="footer"></div>
                    </div>
                </div>
            `;
        });

        // Update the HTML content with the dynamically generated content
        document.body.innerHTML = htmlContent;
    })
    .catch(error => console.error('Error fetching JSON:', error));
