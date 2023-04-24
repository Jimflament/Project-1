const app = document.querySelector('.app');

function generateLoading(){
    const markup = `
    
    <section class='loading-screen'>
        <h1>Loading</h1>
    </section>

    `
    app.innerHTML = markup;
}

export default generateLoading;