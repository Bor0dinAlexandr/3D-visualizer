const space = document.getElementById("space");

const creatorRadioBox = document.getElementById("creatorRadioBox");
const editorRadioBox = document.getElementById("editorRadioBox");

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

const editDiv = (event) => {
    const elem = event.target;
    console.log(elem.className);
}

const clickDiv = (event) =>{
    if (creatorRadioBox.checked){
        createDiv(event);
    } else if (editorRadioBox.checked){
        editDiv(event);
    }
}

space.addEventListener("click", (event)=>{clickDiv(event)});