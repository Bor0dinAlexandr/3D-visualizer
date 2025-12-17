const space = document.getElementById("space");

const creatorCheckbox = document.getElementById("creatorCheckbox");

const  getXYonElement = (elem) => {
    const boundingClientRect = elem.getBoundingClientRect();
        const {x, y} = boundingClientRect;
        
        const elemX = Math.floor(parseInt(x));
        const elemY = Math.floor(parseInt(y));

        return { x: elemX, y: elemY};
}

const createDiv = (event) =>{
    const spaceXY = getXYonElement(space);
    const newDiv = `<div class="newDiv left-[${event.x- spaceXY.x}px] top-[${event.y - spaceXY.y}px]"></div>`;
    space.innerHTML += newDiv;
}

const clickDiv = (event) =>{
    if (creatorCheckbox.checked){
        createDiv(event);
    } 
}

space.addEventListener("click", (event)=>{clickDiv(event)});