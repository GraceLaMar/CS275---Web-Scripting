# HW6 - JSON to HTML Formatter

## Data Model

- renderList(data) - Takes a JSON object with a title(string) and items(array with name and qty) and returns an HTML string formatted as `<h2>${data.title}</h2><ul>${list}</ul>`

- renderPlaylist(data) - Custom Transformer: takes a JSON object with a title(String)and items(array with song and artist) and returns an HTML string formatted as `<section><h3>${data.title}</h3><ol>${songs}</ol></section>`

## Assertion Ideas

renderList({ title: "Inventory", items: [{name:"Wrench", qty:3},{name:"Screwdriver",qty:7}] })

- This renders `<h2>Inventory</h2><ul>` with 2 `<li>` elements

renderList({ title:"Empty", items: [] })

- This renders `<h2>Empty</h2><ul></ul>` 

This ensures that the data is not mutated by checking JSON.stringify(data) remains unchanged.

renderPlaylist({ title: "My Playlist", items: [{song:"Boogie Wonderland", artist:"Earth, Wind, & Fire"}, {song:"Gold Dust Woman", artist:"Fleetwood Mac"}] })

- This renders `<section><h3>${data.title}</h3><ol>${songs}</ol></section>` with 2 `<li>` elements

renderPlaylist({ title: "Empty Playlist", items: [] })

- This renders `<section><h3>Empty Playlist</h3><ol></ol></section>`

This ensures that the data is not mutated by checking JSON.stringify(data) remains unchanged.

## LLM Interaction

Prompt 

- Draft renderList(data) that returns an HTML string. Do not mutate input. Add three console.assert lines. Explain how each assert proves correctness.

Excerpt from LLM Response

- The LLM suggested that I use a loop to build the list elements and wrap them in a `<ul>` with the title in `<h2>`. 

Reflection

- After comparing the LLM's results to mine, i tried to include edge case asswrtions  empty arrays to ensure the function handels all expected scenarios. 
