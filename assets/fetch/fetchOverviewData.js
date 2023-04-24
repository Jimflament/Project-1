import generateOverview from "../view/generateOverview.js";
import loading from '../controllers/loading.js';

loading("on")
export async function fetchOverviewData() {
  const url = 'https://api.github.com/users/Jimflament/repos';
  try {
        const response = await fetch(url);
        const data = await response.json();
        generateOverview();

        const overviewContainer = document.querySelector('.overview-container');
        data.forEach(item => {
            const article = document.createElement("article");
            overviewContainer.appendChild(article);

            const repoName = document.createElement("h1");
            article.appendChild(repoName);
            repoName.innerHTML = item.name;

            const repoDesc = document.createElement("p");
            article.appendChild(repoDesc);
            repoDesc.innerHTML = item.description;

            const repoLink = document.createElement("a");
            article.appendChild(repoLink);
            repoLink.href = item.html_url;
            repoLink.target = '_blank'

            const button = document.createElement('button');
            repoLink.appendChild(button);
            button.innerHTML = "View repository";
            button.target = "_blank";
            button.addEventListener("click", () => {
                repoLink.click();
            });
            
        });
    } catch (error) {
        console.log(error);
    }
}
loading("off")