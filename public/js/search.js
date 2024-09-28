document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const query = document.getElementById('searchInput').value;
    searchpet(query); // Call the searchpet function with the input value
});

function searchpet(query) {
    // Add your search logic here
    console.log("Searching for:", query);
    const words = query.split(' ');
    console.log("Searching for:", words[0]);
    const response = fetch('/test/test2?token=RtS0E2HxvBT5IKfFXRKWPTI97g0cTNnw5EkZ2&distance=' + words[0] +'&animal=' + words[1] + '&breed=' +words[2]+ '&location='+words[3], {
        headers: { 'Content-Type': 'application/json' }
    });
    // You can add an AJAX request or any other logic to handle the search
}
