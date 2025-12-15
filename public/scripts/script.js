const space = document.getElementById("space");

const creatorCheckbox = document.getElementById("creatorCheckbox");

const createDiv = (event) =>{
    if (creatorCheckbox.checked){
        const boundingClientRect = space.getBoundingClientRect();
        const {x, y} = boundingClientRect;
        
        const spaceX = Math.floor(parseInt(x));
        const spaceY = Math.floor(parseInt(y));

        const newDiv = `<div class="newDiv left-[${event.x- spaceX}px] top-[${event.y - spaceY}px]"></div>`;
        space.innerHTML += newDiv;
        creatorCheckbox.checked = false;
    }
}

space.addEventListener("click", (event)=>{createDiv(event)});