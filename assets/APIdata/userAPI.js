import {getUser} from '../fetch/fetch.js';

export const userData = () => {
    getUser().then(data => {
        console.log(data);
    })
}