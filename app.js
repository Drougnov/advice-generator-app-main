const getQuotes = async()=> {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    
    let adviceId = document.querySelector('#advice-id');
    let quote = document.querySelector('#quote');
    
    adviceId.innerHTML = data.slip.id;
    quote.innerHTML = data.slip.advice;
}

const btn = document.querySelector(".btn");

function timeout() {
    btn.disabled = true;
    setTimeout(()=>{btn.disabled = false;}, 2000)
}

function onClickDelayEvent (elem) {
    function newColor(elem) {
        elem.style.background = "hsl(186, 72%, 24%)";
        elem.style.cursor = "not-allowed";
    }
    function normalColor(elem) {
        elem.style.background = "var(--dice-bg)";
        elem.style.cursor = "pointer";
    }
    setTimeout(normalColor,2000,elem);
    newColor(elem);
}