import generateProfile from '../view/generateProfile.js';
import loading from '../controllers/loading.js';

loading("on")
export async function fetchUserData() {
  const url = 'https://api.github.com/users/Jimflament';
  try {
    const response = await fetch(url);
    const data = await response.json();
    generateProfile();

    const avatar = document.querySelector('.profile-header img');
    const name = document.querySelector('.profile-header h1');
    const location = document.querySelector('.profile-header h2');
    const bio = document.querySelector('.profile-info p');

    const userInfo = {
      avatar: data.avatar_url,
      name: data.name,
      location: data.location,
      bio: data.bio,
    };

    avatar.src = userInfo.avatar;
    name.innerHTML = userInfo.name;
    location.innerHTML = userInfo.location;
    bio.innerHTML = userInfo.bio;
  } catch (error) {
    console.log(error);
  }
}
loading("off")