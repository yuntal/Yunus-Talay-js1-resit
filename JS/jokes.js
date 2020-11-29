const url = "https://official-joke-api.appspot.com/random_ten";

const header = document.querySelector("h1")

const jokesContainer = document.querySelector(".results");




async function makeApi() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

        const jokes = results;

        jokesContainer.innerHTML = "";

        for (let i = 0; i < jokes.length; i++) {
            console.log(jokes[i].text);

            if (i === 5) {
                break;
            }

            jokesContainer.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card">
            <div class="joke-detail">
            <div class="type">Type: ${jokes[i].type}</div>
            <div class="setup">Setup: ${jokes[i].setup}</div>
            <div class="punchline">Punchline: ${jokes[i].punchline}</div>
            </div>
            </div>
           </div>
           `
        }

    } catch (error) {
        console.log("An error occurred");
        header.innerHTML = display("An error occurred when calling the API");
    }
}


makeApi();