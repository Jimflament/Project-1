import { fetchRepos } from "../fetch/fetchRepos.js";

export const reposData = () => {
    fetchRepos().then(data => {
        console.log(data);
    })
}