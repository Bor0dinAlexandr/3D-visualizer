import { Div } from "./Div.js";

const space = document.getElementById("space");
const creatorRadioBox = document.getElementById("tabBtnCreator");
const editorRadioBox = document.getElementById("tabBtnEditor");

const creators = document.querySelectorAll(".creator");
const editors = document.querySelectorAll(".editor"); //NodeList полей для редактирования

const div = new Div(); //переменная для работы с div

const fillEditors = (metrics) => { //Функция заполнения полей редактирования метриками Div
    editors.forEach(editor =>{
        editor.removeAttribute("disabled");
        editor.value = metrics[editor.dataset.editorName];
    });
}

const clearEditors = () =>{//Функция отчиски полей редактирования
    editors.forEach(editor =>{
        editor.setAttribute("disabled", "");
        editor.value = editor.dataset.defaultValue;
    });
}

const getMetricsForNewDiv = (event) => {//Функция получения метрик из полей создания для нового Div
    const metrics = {};
    creators.forEach(creator => metrics[creator.dataset.creatorName] = creator.value);
    metrics.x = event.x;
    metrics.y = event.y;
    return metrics;
}

const editDiv = (target) => {//Функция редактирование Div
    div.setDiv(target);
    fillEditors(div.getMetrics());
}

const clickSpace = (event) =>{//Функция обработки клика по рабочему пространству
    console.log("click");
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

const addEventInputForEditors = () =>{ //Функция присвоения полям редактирования своих обработчиков
    editors.forEach(editor =>{
        editor.addEventListener("input", ()=>div.setMetrics(editor.dataset.editorName, editor.value));
    });
}

addEventInputForEditors();
console.log(space);