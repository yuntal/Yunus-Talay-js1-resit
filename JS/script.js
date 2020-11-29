const container = document.querySelector(".container");
const header = document.querySelector("h2");


const url = "https://official-joke-api.appspot.com/random_joke";

async function fetchJoke() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createContent(details);
      
    }
    
    catch (error) {
        console.log("An error occurred");
        header.innerHTML = display("An error occurred when calling the API");
    }
    
}

function createContent(details) {
    container.innerHTML = `<h1>JavaScript 1 CA Resit</h1>
    <h2> type: ${details.type} Joke</h2>
    <div class="joke setup"> Setup: ${details.setup}</div>
    <div class="joke punchline"> Punchline: ${details.punchline}</div>
    `;}
 
    fetchJoke();