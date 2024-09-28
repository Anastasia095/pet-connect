document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const query = document.getElementById('searchInput').value;
    searchpet(query); // Call the searchpet function with the input value
});

function searchpet(query) {
    // Add your search logic here
    console.log("Searching for:", query);
    // You can add an AJAX request or any other logic to handle the search
}
