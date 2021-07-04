//let poemBox = document.querySelector('.poem');
//let cursor = document.querySelector('.cursor');

let poemVisible = true;

//poemBox.onclick = swapContent;

function swapContent(poem) {
    console.log("hello");
    let poemChildren = poem.children
    if (poemVisible) {
        //document.getElementById("poem-title-1").style.opacity = 0;
        //poemBox.style.display = "none";
        poemChildren[0].style.display = "none";
        poemChildren[1].style.display = "block";
        poemVisible = false;
    } else {
        //document.getElementById("poem-title-1").style.opacity = 1;
        //poemBox.style.display = "block";
        poemChildren[1].style.display = "none";
        poemChildren[0].style.display = "block";
        poemVisible = true;
    }

}