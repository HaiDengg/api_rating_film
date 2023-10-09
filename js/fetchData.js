const BASE_URL = "https://movie-list.alphacamp.io/posters/";

// Get list movies
async function getListMovie() {
    await fetch('http://localhost:3000/films')
        .then((response) => response.json())
        .then((data) => {
            appendFilms(data)
        });
}

function appendFilms(data) {
    const dataPanel = document.getElementById("data-panel");
    let htmlContent = "";
    data.forEach(function (item, index) {
        htmlContent += `
        <div class="col-sm-3">
          <div class="card mb-2">
            <img class="card-img-top " src="${BASE_URL}${
                item.image
              }" alt="Card image cap">
            <div class="card-body movie-item-body">
              <h6 class="card-title">${item.title}</h5>
            </div>
            <!-- "More" button -->
            <div class="card-footer">
              <button class="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#show-movie-modal" data-id="${item.id
            }">Rating</button>
                <!-- favorite button -->
              <button class="btn btn-info btn-add-favorite" data-id="${item.id
            }">+</button>
            </div>
          </div>
        </div>
      `;
    });
    dataPanel.innerHTML = htmlContent;
}

getListMovie()

