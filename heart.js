const bodies = document.querySelector('body');

bodies.addEventListener('mousemove', (event)=>{
    const X = event.offsetX;
    const Y = event.offsetY;
const spans = document.createElement('span')
spans.style.left = X + "px";
spans.style.top = Y + "px";

bodies.appendChild(spans)

})