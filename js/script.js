let getMovieButton = document.querySelector('button[name="getPhotosButton"]')
let getResponseContainer = document.querySelector('#get_response_container')
getPhotosButton.addEventListener('click', function() {

      fetch('https://omdb-api.now.sh/?s=freaks')
        .then(function(response) {
          return response.json();
        })
        .then(function(apiData) {
          let movies = apiData.Search;
          for (let i = 0; i < movies.length; i++); {
            var mydiv = document.getElementById('id');
            let newdiv = document.createElement("div");
            newdiv.innerHTML = movies[i].Title;
            newdiv.classList.add("box")
            mydiv.appendchild(newdiv);
          }
        });