const url =
  "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

const container = document.querySelector("#container");

async function fetchGames() {
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);

  results.forEach(function (games) {
    container.innerHTML += `<div>${games.results.name}</div>`;
  });
}

fetchGames();
