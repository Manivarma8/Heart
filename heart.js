const bodies = document.querySelector('body');

bodies.addEventListener('mousemove', (event)=>{
    const X = event.offsetX;
    const Y = event.offsetY;
const spans = document.createElement('span')
spans.style.left = X + "px";
spans.style.top = Y + "px";
const size = Math.random()*100;
spans.style.width = size + "px";
spans.style.height = size + "px";
bodies.appendChild(spans)
setTimeout(() => {
    spans.remove();
}, 3000);

})