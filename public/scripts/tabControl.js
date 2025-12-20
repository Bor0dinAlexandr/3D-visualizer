const tabBntInput = document.querySelectorAll(".tabBtn>input");
const tabPages = document.querySelectorAll(".tabPages>div");
const tabBtns = document.querySelectorAll(".tabBtn");

tabBntInput.forEach(input =>{
    input.addEventListener("change", ()=>{
        tabPages.forEach(tabPage => {
            tabPage.style.display = "none";
        })
        tabPages.forEach(tabPage => {
            tabPage.id === input.dataset.pageId ? tabPage.style.display = "block" : tabPage.style.display = "none";
        })
    })
})

tabBtns.forEach(btn => {
    btn.addEventListener("click", (event)=>{
        event.target.childNodes.forEach(children =>{
            children.tagName === "INPUT" ? children.dispatchEvent(new Event("change")) : false;
        })
    })
})

tabBntInput[0].dispatchEvent(new Event("change"));