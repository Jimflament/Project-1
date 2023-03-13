const url = 'https://api.github.com/users/jimflament'

export const getUser = () => fetch(url)
.then(response => response.json())