const app = document.querySelector('.app');

function generateProfile(){
    const markup = `

        <section class="profile-header">
            <img alt="Profile picture">
            <h1></h1>
            <h2></h2>
        </section>

        <section class="profile-info"></section>

    `
    app.innerHTML = markup;
}

export default generateProfile;
