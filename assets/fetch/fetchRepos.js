const url = 'https://api.github.com/users/Jimflament/repos'

export const fetchRepos = () => fetch(url)
.then(response => response.json())