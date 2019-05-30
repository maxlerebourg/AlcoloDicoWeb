const server = 'lerebourg.eu';
//const server = '192.168.1.16';

export function getImageFromApi (url) {
    return 'https://images.' + server + '/party/'+url+'.jpg';
}
export function LogInApi (json) {
    const url = 'http://' + server + ':3000/login';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)}).then(data => data.json());
}
export function RegisterInApi (json) {
    const url = 'http://' + server + ':3000/register';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)}).then(data => data.json());
}
export async function NotificationTokenToApi(token) {
    const url = 'http://' + server + ':3000/notification_id/'+token;
    let user = await AsyncStorage.getItem('user');
    return fetch(url, {
        method: 'GET',
            headers: {
            'Authorization': JSON.parse(user).token,
        }}).then(data => data.json());
}
export function meteoFromApi () {
    const url = 'http://' + server + ':3000/meteo';
    return fetch(url).then(data => data.json());
}
export function beerFromApi () {
    const url = 'http://' + server + ':3000/beer';
    return fetch(url).then(data => data.json());
}
