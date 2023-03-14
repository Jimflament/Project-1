import {fetchUser} from '../fetch/fetch.js';

export const userData = () => {
    fetchUser().then(data => {
        console.log(data);
    })
}