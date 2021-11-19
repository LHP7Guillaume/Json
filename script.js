let url = "asset/movies.json"

fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data.results[0].original_title)

        data.results.forEach(element => {
            console.log(element.original_title)
            console.log(element.id)
            console.log(element.poster_path)

            let film = element
            let myAffichage = `<div class="card col-lg-3 m-0" style="max-width: 350px;">
            <div class="colorCards row">
                <div class="col-lg-4">
                    <img src="${element.poster_path}"
                        class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-lg-8">
                    <div class="card-body">
                        <h5 class="card-title">${element.original_title}</h5>
                        <p class="card-text para">${element.overview}</p>
                        <p class="card-text"><small class="text-muted">${element.vote_average}</small></p>
                    </div>
                </div>
            </div>
        </div>`;
        allMovies.innerHTML += myAffichage;

        });



    })