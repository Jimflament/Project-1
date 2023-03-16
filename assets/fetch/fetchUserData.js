import generateProfile from '../view/generateProfile.js';


export function fetchUserInfo() {
  const url = 'https://api.github.com/users/Jimflament';
  return fetch(url)
    .then(response => response.json())
    .then(data => {

      generateProfile();

      const userInfo = {
        avatar: data.avatar_url,
        name: data.name,
        location: data.location,
      };
      
      const avatar = document.querySelector('.profile-header img');
      const name = document.querySelector('.profile-header h1');
      const location = document.querySelector('.profile-header h2');

      avatar.src = userInfo.avatar;
      name.innerHTML = userInfo.name;
      location.innerHTML = userInfo.location;
    })
    .catch(error => {
      console.log(error);
    });
}