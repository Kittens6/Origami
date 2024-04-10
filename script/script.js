// Fetch the JSON data
fetch('pages.json')
    .then(response => response.json()) // Parse JSON response
    .then(data => {
        // Generate HTML content dynamically based on JSON data for the title list
        let htmlContent = '<div class="insideContainer">';
        data.forEach(page => {
            htmlContent += `
                <hr>
                <div class="origamiContainer">
                    <div class="tableOfContententsTitle"><a href="origami.html?title=${page.title}">${page.title}</a></div>
                </div>
            `;
        });
        htmlContent += '<hr></div>';
        
        // Update the HTML content with the dynamically generated pageTitle list
        document.getElementById('pageTitleList').innerHTML = htmlContent;

        // Add event listener for the search input
        document.getElementById('searchInput').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase(); // Get the search term from the input field

            // Filter the list based on the search term
            const filteredData = data.filter(page => page.pageTitle.toLowerCase().includes(searchTerm));

            // Generate HTML content for the filtered list
            let filteredHtmlContent = '<div class="insideContainer">';
            filteredData.forEach(page => {
                filteredHtmlContent += `
                    <hr>
                    <div class="origamiContainer">
                        <div class="tableOfContententsTitle"><a href="origami.html?title=${page.title}">${page.title}</a></div>
                    </div>
                `;
            });
            filteredHtmlContent += '<hr></div>';

            // Update the HTML content with the filtered list
            document.getElementById('pageTitleList').innerHTML = filteredHtmlContent;
        });

        // Fetch and display the footer
        fetch('footer.html')
            .then(response => response.text())
            .then(footerHtml => {
                document.getElementById('footer').innerHTML = footerHtml;
            })
            .catch(error => console.error('Error fetching footer:', error));
    })
    .catch(error => console.error('Error fetching JSON:', error));
