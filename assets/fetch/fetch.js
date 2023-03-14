const url = 'https://api.github.com/users/jimflament'

export const fetchUser = () => fetch(url)
.then(response => response.json())

