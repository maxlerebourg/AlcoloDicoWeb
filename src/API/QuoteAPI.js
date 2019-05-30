const server = 'www.lerebourg.eu';
//const server = '192.168.1.16';

export function getListQuoteFromApi(cat, i, j){
    const url = 'http://' + server + ':3000/list/quote/'+cat+'/'+i+'/'+j;
    return fetch(url).then(data => data.json());
}
export async function postQuoteInApi(json){
    const url = 'http://' + server + ':3000/add/quote';
    let user = await AsyncStorage.getItem('user', '');
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(user).token,
        },
        body: JSON.stringify(json)}).then(data => data.json());
}
export async function addQuoteRateInApi(id){
    const url = 'http://' + server + ':3000/quote/'+id+'/plus';
    let user = await AsyncStorage.getItem('user', '');
    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': JSON.parse(user).token,
        }}).then(data => data.json());
}
export function searchUserInApi (name) {
    const url = 'http://' + server + ':3000/search/user/'+name;
    return fetch(url).then(data => data.json());
}
