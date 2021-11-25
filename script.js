document.getElementById("mySearch").addEventListener("click", () => {
    let movie = document.getElementById("movie").value
    let apiKey = "k_4tz89vls"
    let uri = `https://imdb-api.com/en/API/SearchMovie/${apiKey}/${movie}`

    allMovies.innerHTML = ""

        fetch(uri)
        .then(response => response.json())
        .then(data => {


            data.results.forEach(element => {

                let myAffichage = `<div class="card gy-2 position-relative col-lg-3" style="max-width: 550px;">
            <div class="colorCards row ">
                <div class=" col-lg-4">
                    <img src="${element.image}"
                        class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-lg-8">
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${element.title}</h5>
                        <p class="card-text para">${element.description}</p>
                    </div>
                </div>
            </div>
        </div>`;
                allMovies.innerHTML += myAffichage;
            });
        })
})