// Fetch the JSON data
fetch('pages.json')
.then(response => response.json()) // Parse JSON response
.then(data => {
    // Generate HTML content dynamically based on JSON data
    let htmlContent = '<div class="insideContainer">';
    data.forEach(page => {
        htmlContent += `
            <hr>
            <div class="origamiContainer">
                <div class="tableOfContententsTitle"><a href="origami.html?animal=${page.animal}">${page.animal}</a></div>
            </div>
        `;
    });
    htmlContent += '<hr></div>';
    
    // Update the HTML content with the dynamically generated content
    document.getElementById('animalList').innerHTML = htmlContent;
})
.catch(error => console.error('Error fetching JSON:', error));