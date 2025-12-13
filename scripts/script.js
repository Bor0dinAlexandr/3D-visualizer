const space = document.getElementById("space");

const creatorCheckbox = document.getElementById("creatorCheckbox");

const createDiv = () =>{
    if (creatorCheckbox.checked){
        const newDiv = `<div class="newDiv"></div>`;
        space.innerHTML += newDiv;
        creatorCheckbox.checked = false;
    }
}

space.addEventListener("click", createDiv);
