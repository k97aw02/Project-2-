$(docuemnt).ready(function() {
    // When the the search button is clicked, it is re-directed to the directory.
    $('form.searchDirectory'),on('submit', function(event) {
        event.preventDefault();

        //Grab input from search bar

        let userSearch = $('#search').val().trim();
    })
})