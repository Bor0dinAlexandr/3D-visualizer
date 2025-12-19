export class Div {
    constructor(){}

    #div = {};

    #metricsRegex = { //список регулярных выражений для манипуляциями значений метрик
        x: /(?<=left-\[)\d+/,
        y: /(?<=top-\[)\d+/,
        bg: /(?<=bg-\[)\#[a-fA-F0-9]+/,
        w: /(?<=w-\[)\d+/,
        h: /(?<=h-\[)\d+/,
    }
    
    setDiv = (div) =>{//установить таргет Div
        this.#div.classList?.remove("targetDiv");
        this.#div = div;
        this.#div.classList?.add("targetDiv");
    }

    getMetrics = () => {//получить список метрик
        const metrics = {};
        for (let metricsName in this.#metricsRegex){
            metrics[metricsName] = this.#div.className.match(this.#metricsRegex[metricsName]);
        }
        return metrics;
    }

    setMetrics = (nameMetrics, scaleMetrics) => {//изменить метрику
        if(scaleMetrics !=""){
            this.#div.className = this.#div.className.replace(this.#metricsRegex[nameMetrics], scaleMetrics);
        }
    }

    #getXYToElem = (elem) => {//получить координаты элемента
            const boundingClientRect = elem.getBoundingClientRect();
            const {x, y} = boundingClientRect;
            
            const elemX = Math.floor(parseInt(x));
            const elemY = Math.floor(parseInt(y));

            return { x: elemX, y: elemY};
    }

    createNewDiv = (parent, metrics) => { //создать новый Div
        const parentXY = this.#getXYToElem(parent);

        parent.innerHTML += `<div class="newDiv 
        left-[${metrics.x- parentXY.x}px] 
        top-[${metrics.y - parentXY.y}px] 
        bg-[${metrics.color}]
        w-[${metrics.w}px]
        h-[${metrics.h}px]
        "></div>`;
    }

    
}