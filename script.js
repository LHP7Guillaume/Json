let url = "asset/movies.json"

fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data.results[0].original_title)

        data.results.forEach(element => {
            console.log(element.original_title)
            console.log(element.id)
            console.log(element.poster_path)
        });



    })