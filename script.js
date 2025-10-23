// Search input and button event handler
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const searchFilter = document.getElementById("search-filter");
  if (searchInput && searchBtn && searchFilter) {
    const doSearch = () => {
      searchStations(searchInput.value, searchFilter.value);
    };
    searchBtn.addEventListener("click", doSearch);
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        doSearch();
      }
    });
    searchFilter.addEventListener("change", doSearch);
  }
});
// Initial rendering logic – to be refactored during the lab

// Wishlist array for wishlist-related features
// Each item in the wishlist is an object with three properties:
//   id   - a unique number for the station
//   name - the name of the station
//   city - the city where the station is located
// Example:
//   { id: 1, name: "Central Park Station", city: "New York" }
const wishlist = [
  { id: 1, name: "Central Park Station", city: "New York" },
  { id: 2, name: "Union Square Station", city: "San Francisco" },
  { id: 3, name: "King's Cross", city: "London" },
  { id: 4, name: "Shinjuku Station", city: "Tokyo" },
  { id: 5, name: "Gare du Nord", city: "Paris" },
  { id: 6, name: "Flinders Street", city: "Melbourne" },
  { id: 7, name: "Berlin Hauptbahnhof", city: "Berlin" },
  { id: 8, name: "Union Station", city: "Toronto" }
];
function addStations(stations) {
  // TODO: Refactor this loop using map() or forEach()
  stations.map(station => addStationElement(station));
}

// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  // TODO: Use forEach to display items in wishlist
}

// ❌ Search Feedback
function searchStations(query) {
  let results = stations.filter(station => {
    const lowerQuery = query.toLowerCase();
    return (
      station.name.toLowerCase().includes(lowerQuery) ||
      station.location.toLowerCase().includes(lowerQuery) ||
      station.type.toLowerCase().includes(lowerQuery)
    );
  });

  // Filter by type if dropdown is selected
  if (arguments.length > 1 && arguments[1]) {
    results = results.filter(station => station.type === arguments[1]);
  }

  const feedbackSection = document.getElementById("search-feedback");
  feedbackSection.innerHTML = "";

  const list = document.getElementById("station-list");
  list.innerHTML = "";

  if (results.length === 0) {
    feedbackSection.textContent = `No stations found for "${query}".`;
  } else {
    results.forEach(addStationElement);
  }
}

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // TODO: Use Math.random to select and display a station
}

// 🏙️ Group by City
function groupStationsByCity() {
  // TODO: Loop through stations and group under each city
}

// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page start
addStations(stations);
