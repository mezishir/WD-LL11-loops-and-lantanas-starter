function addStationElement(station) {
    const list = document.getElementById("station-list");
    const div = document.createElement("div");
    div.className = "station";
    div.innerHTML = `
      <h2>${station.name}</h2>
      ${station.name === "Elm Grove" ? '<img src="assets/elmgrove.png" alt="Elm Grove" class="station-img" />' : ""}
      ${station.name === "Cactus Corner" ? '<img src="assets/cactus.jpg" alt="Cactus Corner" class="station-img" />' : ""}
      <p><strong>Location:</strong> ${station.location}</p>
      <p><strong>Type:</strong> ${station.type}</p>
      <p class="summary">${station.summary || ""}</p>
    `;
    list.appendChild(div);
  }
