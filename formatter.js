
const data = {
  title: "Inventory",
  items: [
    { name: "Wrench", qty: 3 },
    { name: "Screwdriver", qty: 7 }
  ]
};

function renderList(data) {
  let list = "";

  for (let item of data.items) {
    list += `<li>${item.name} (${item.qty})</li>`;
  }

  return `<h2>${data.title}</h2><ul>${list}</ul>`;
}

const result = renderList(data);

// happy path
console.assert(
  result.startsWith("<h2>Inventory</h2><ul>"),
  "title and ul rendered"
);

// correct number of list items
console.assert(
  (result.match(/<li>/g) || []).length === 2,
  "two li elements"
);

// non mutation
console.assert(
  JSON.stringify(data) === '{"title":"Inventory","items":[{"name":"Wrench","qty":3},{"name":"Screwdriver","qty":7}]}',
  "input not mutated"
);

// edge case
console.assert(
  renderList({ title: "Empty", items: [] }) === "<h2>Empty</h2><ul></ul>",
  "empty list works"
);

const playlist = {
  title: "My Playlist",
  items: [
    { song: "Boogie Wonderland", artist: "Earth, Wind, & Fire" },
    { song: "Gold Dust Woman", artist: "Fleetwood Mac" }
  ]
};


function renderPlaylist(data) {
  let songs = "";

  const items = data.items || [];

  for (let item of items) {
    songs += `<li>${item.song} - ${item.artist}</li>`;
  }

  return `<section><h3>${data.title}</h3><ol>${songs}</ol></section>`;
}

const playlistResult = renderPlaylist(playlist);

// happy path
console.assert(
  playlistResult.includes("<section>"),
  "section rendered"
);

// correct number of songs
console.assert(
  (playlistResult.match(/<li>/g) || []).length === 2,
  "two songs rendered"
);

// edge case
console.assert(
  renderPlaylist({ title: "Empty Playlist", items: [] }) ===
  "<section><h3>Empty Playlist</h3><ol></ol></section>",
  "empty playlist works"
);
