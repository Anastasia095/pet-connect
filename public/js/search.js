const searchpet = async (event) => {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (query == "") {
        alert("Please enter at least one keyword")
    } else {
        const words = query.split(' ');
        // console.log("Searching for:", words[0]);
        const response = await fetch('/test/test2?token=RtS0E2HxvBT5IKfFXRKWPTI97g0cTNnw5EkZ2&distance=' + words[0] +'&animal=' + words[1] + '&breed=' +words[2]+ '&country='+words[3] + '&state='+words[4] + '&city='+words[5], {
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/test/test2?token=RtS0E2HxvBT5IKfFXRKWPTI97g0cTNnw5EkZ2&distance=' + words[0] +'&animal=' + words[1] + '&breed=' +words[2]+'&country='+words[3] + '&state='+words[4] + '&city='+words[5]);
        } else {
            alert("Error fething pets")
        }
    }
};

document
    .getElementById('searchForm')
    .addEventListener('submit', searchpet);
