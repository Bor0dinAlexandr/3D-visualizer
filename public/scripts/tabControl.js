const tabBntInput = document.querySelectorAll(".tabBtn>input");
const tabPages = document.querySelectorAll(".tabPages>div");
const tabBtns = document.querySelectorAll(".tabBtn");

tabBntInput.forEach(input =>{
    input.addEventListener("change", ()=>{
        input.parentElement.classList.add("tabBtnTarget");
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
        tabBtns.forEach(btn =>{
           btn.classList.remove("tabBtnTarget"); 
        });
        event.target.childNodes.forEach(children =>{
            children.dispatchEvent(new Event("change"));
        })

    })
})



tabBntInput[0].dispatchEvent(new Event("change"));