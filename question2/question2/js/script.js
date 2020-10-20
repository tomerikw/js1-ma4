const url =
  "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

const container = document.querySelector("#container");

async function fetchGames() {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);

  const results = json.results;

  results.forEach(function (games) {
    container.innerHTML += `<h1>${games.name}</h1>
                            <div>${games.rating}</div>
                            <div>${games.released}</div>`;
  });
}

fetchGames();
