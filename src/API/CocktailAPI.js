export function getImageFromApi (url) {
    return url;
}

const server = 'lerebourg.eu';
//const server = '192.168.1.16';


export function getListCocktailFromApi () {
    const url = 'http://' + server + ':3000/list/cocktail';
    return fetch(url).then(data => data.json());
}
