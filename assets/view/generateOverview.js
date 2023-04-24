const app = document.querySelector('.app');

function generateOverview(){
    const markup = `

        <section class="overview-container">

        </section>
    `
    app.innerHTML = markup;
}

export default generateOverview;
