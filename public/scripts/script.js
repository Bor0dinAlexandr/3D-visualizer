const space = document.getElementById("space");

let currentDiv; //переменная для хранения ссылки на Div

const creatorRadioBox = document.getElementById("creatorRadioBox");
const creatorColor = document.getElementById("creatorColor");

const editorRadioBox = document.getElementById("editorRadioBox");
const editorPositionY = document.getElementById("editorPositionY");
const editorPositionX = document.getElementById("editorPositionX");
const editorColor = document.getElementById("editorColor");

//Объект для получения метрик с помощю регулярных выражений
const classesRegex = {
    x: /(?<=left-\[)\d+/,
    y: /(?<=top-\[)\d+/,
    bg: /(?<=bg-\[)\#[a-fA-F0-9]+/,
}

//Функция заполнения полей редактирования метриками Div
const fillEditors = (metrics) => {
    editorPositionX.removeAttribute("disabled");
    editorPositionX.value = Number(metrics.x);

    editorPositionY.removeAttribute("disabled");
    editorPositionY.value = Number(metrics.y);

    editorColor.removeAttribute("disabled");
    editorColor.value = metrics.bg;
}

//Получение позиции рабочего пространства
const  getXYToSpace = (elem) => {
    const boundingClientRect = elem.getBoundingClientRect();
        const {x, y} = boundingClientRect;
        
        const elemX = Math.floor(parseInt(x));
        const elemY = Math.floor(parseInt(y));

        return { x: elemX, y: elemY};
}

//Получение метрик Div
const getMetricsToDiv = (classes) => {
    const elemX = classes.match(classesRegex.x);
    const elemY = classes.match(classesRegex.y);
    const elemBg = classes.match(classesRegex.bg);
    return {x: elemX, y: elemY, bg: elemBg};
}

//Изменение метрики Div
const setMetricsForDiv = (nameMetrics, scaleMetrics) => {
    if(scaleMetrics !=""){
        currentDiv.className = currentDiv.className.replace(classesRegex[nameMetrics], scaleMetrics);
    }
}
//Создание нового Div
const createDiv = (event) =>{
    const spaceXY = getXYToSpace(space);

    const newDiv = `<div class="newDiv left-[${event.x- spaceXY.x}px] top-[${event.y - spaceXY.y}px] bg-[${creatorColor.value}]"></div>`;

    space.innerHTML += newDiv;
}

//Редактирование Div
const editDiv = (event) => {
    const elem = event.target;

    if (elem.classList.contains("newDiv")){
        currentDiv = event.target;
        const metrics = getMetricsToDiv(currentDiv.className);
        fillEditors(metrics);
    }
}

//Обработка клика по рабочему пространству
const clickSpace = (event) =>{
    if (creatorRadioBox.checked){
        createDiv(event);
    } else if (editorRadioBox.checked){
        editDiv(event);
    }
}

space.addEventListener("click", event=>clickSpace(event)); //нажатие по рабочему пространству

editorPositionX.addEventListener("input", ()=>setMetricsForDiv("x", editorPositionX.value)); //редактирование позиционирования по x
editorPositionY.addEventListener("input", ()=>setMetricsForDiv("y", editorPositionY.value)); //редактирование позиционирования по y
editorColor.addEventListener("input", ()=>setMetricsForDiv("bg", editorColor.value))