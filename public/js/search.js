const searchpet = async (event) => {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    //adding logic to prevent blank request (will return everything from plant DB)
    if (query == "") {
        alert("Please enter at least one keyword")
    } else {
        const words = query.split(' ');
        console.log("Searching for:", words[0]);
        const response = await fetch('/test/test2?token=RtS0E2HxvBT5IKfFXRKWPTI97g0cTNnw5EkZ2&distance=' + words[0] +'&animal=' + words[1] + '&breed=' +words[2]+ '&location='+words[3], {
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/test/test2?token=RtS0E2HxvBT5IKfFXRKWPTI97g0cTNnw5EkZ2&distance=' + words[0] +'&animal=' + words[1] + '&breed=' +words[2]+ '&location='+words[3]);
        } else {
            alert("Error...")
        }
    }
};

document
    .getElementById('searchForm')
    .addEventListener('submit', searchpet);
