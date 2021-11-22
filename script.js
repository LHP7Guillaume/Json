let url = "asset/movies.json"


//  function getInfo(){
//  let info = document.getElementById("mySearch").value ;

//  allMovies.innerHTML = ""

//  fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${info}`, {
//  	"method": "GET",
//  	"headers": {
//  		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
//  		"x-rapidapi-key": "f96acaf05cmsh57182a86a1c91cdp1b03c1jsn635ad3578739"
//  	}
//  })
//  .then(response => response.json()) 
//  .then (data => {
//     console.log(data.titles[0].title);
//  console.log(data);
//  	data.titles.forEach(element => {
//  })}


fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data.results[0].original_title)

        data.results.forEach(element => {
            console.log(element.original_title)
            console.log(element.id)
            console.log(element.poster_path)

            let note = '';
            let vartemp = Math.floor(element.vote_average / 2);
            for (i = 0; i <= vartemp; i++) {
                note += `<i class="fas fa-star"></i>`
            }

            if (vartemp < 5) {
                for (i = 0; i < 4 - vartemp; i++) {
                    note += `<i class="far fa-star"></i>`
                }
            }


            
            let myAffichage = `<div class="card gy-2 position-relative col-lg-3" style="max-width: 350px;">
            <div class="colorCards row ">
                <div class=" col-lg-4">
                    <img src="${element.poster_path}"
                        class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-lg-8">
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${element.original_title}</h5>
                        <p class="card-text para">${element.overview}</p>
                        <p class="card-text position-absolute bottom-0 right-0"><small class="text-muted">${element.vote_average} ${note}</small></p>
                    </div>
                </div>
            </div>
        </div>`;
            allMovies.innerHTML += myAffichage;

        });

    })