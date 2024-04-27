let cont = document.getElementById("cont");
document.getElementById("select").addEventListener("click", function () {
  let sel = document.getElementById("select");
  let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${sel.value}`;

  fetchData(url);
});

async function fetchData(url) {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.data);
  displayData(data.data);
}

function displayData(arr) {
  cont.innerHTML = "";

  arr.map(el => {
    let card = document.createElement("div");
    card.className = 'card'; // Set class for styling

    let con_nam = document.createElement("p");
    con_nam.textContent = `Country: ${el.country}`;

    let id = document.createElement("p");
    id.textContent = `ID: ${el.id}`;

    let rank = document.createElement("p")
    rank.textContent = `Rank: ${el.Rank}`;

    let popu = document.createElement("p");
    popu.textContent = `Population: ${el.population}`;

    card.append(con_nam, popu, id, rank);
    cont.append(card);
  });
}
