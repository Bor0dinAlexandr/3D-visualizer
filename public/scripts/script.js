import { Div } from "./TargetDiv.js"; //Переименовать

const space = document.getElementById("space");
const creatorRadioBox = document.getElementById("creatorRadioBox");
const editorRadioBox = document.getElementById("editorRadioBox");

const creatorColor = document.getElementById("creatorColor");

const editors = {//список полей редактирования
    positionY: document.getElementById("editorPositionY"),
    positionX: document.getElementById("editorPositionX"),
    color: document.getElementById("editorColor"),
}

const div = new Div(); //переменная для работы с div

const fillEditors = (metrics) => { //Функция заполнения полей редактирования метриками Div
    for (let editorName in editors){
        editors[editorName].removeAttribute("disabled");
        editors[editorName].value = metrics[editors[editorName].dataset.editor];
    }
}

const clearEditors = () =>{//Функция отчиски полей редактирования
    for (let editorName in editors){
        editors[editorName].setAttribute("disabled", "");
        editors[editorName].value = editors[editorName].dataset.defaultValue;
    }
}

const getMetricsForNewDiv = (event) => {//Получение мтрик для нового Div
    const metrics = {};
    metrics.x = event.x;
    metrics.y = event.y;
    metrics.color = creatorColor.value;
    return metrics;
}

const editDiv = (target) => {//Редактирование Div
        div.setDiv(target);
        fillEditors(div.getMetrics());
}

const clickSpace = (event) =>{//Обработка клика по рабочему пространству
    if (creatorRadioBox.checked){
        clearEditors();
        div.setDiv({});
        div.createNewDiv(space, getMetricsForNewDiv(event));
    } else if (editorRadioBox.checked){
        if (event.target.classList.contains("newDiv")){
            editDiv(event.target);
        };
    }
}

space.addEventListener("click", event=>clickSpace(event)); //нажатие по рабочему пространству


//сделать метод присвоения обработчиков событий
editors.positionX.addEventListener("input", ()=>div.setMetrics("x", editorPositionX.value)); //редактирование позиционирования по x
editors.positionY.addEventListener("input", ()=>div.setMetrics("y", editorPositionY.value)); //редактирование позиционирования по y
editors.color.addEventListener("input", ()=>div.setMetrics("bg", editorColor.value)) //редактирование цвета
