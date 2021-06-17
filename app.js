let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');

window.addEventListener('mousemove', updateCursor);

function updateCursor(e) {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        cursor.classList.add("cursor-active");
    })
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-active");
    })
    
});