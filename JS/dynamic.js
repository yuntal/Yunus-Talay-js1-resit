const numbers = document.querySelector("input");
const dynamicContainer = document.querySelector(".dynamic-divs");

numbers.onchange = function () {
    console.log(event.target.value);

    const selectedNumber = this.value;

    dynamicContainer.innerHTML = "";

    for (let i = 1; i <= selectedNumber; i++) {
    

        dynamicContainer.innerHTML += `<div class="number ${[i]}"></div>`;

    }
    document.querySelector(".reset").addEventListener("click", removeClass);

    function removeClass() {
      document.querySelector(".dynamic-divs").innerHTML = "";
}
};