function fetchPotter (character) {
    return fetch('https://hp-api.lainocs.fr/characters/' + character)
       .then((response) => response.json())

}

async function displayPotter(character) {
    const data = await fetchPotter(character)
    document.getElementById(character).innerHTML =
    `
    <h1>${data.name}</h1>
    <img src="${data.image}" alt=${data.name}" />
    <h2>${data.role}</h2>
    <h2>${ data.house}</h2>
    `
}

displayPotter("harry-potter")
displayPotter("ron-weasley")
displayPotter("minerva-mcgonagall")