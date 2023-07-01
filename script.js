document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        // Get the filename from the data-page attribute
        const filename = this.getAttribute('data-page');

        fetch(filename)
            .then(response => response.text())
            .then(data => {
                // Load the entire HTML into the main content area
                document.querySelector('#main-content').innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });
});
