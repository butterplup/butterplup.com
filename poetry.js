
let poemVisible = true;

async function swapContent(poem) {
    console.log("hello");
    let poemChildren = poem.children
    if (poemVisible) {
        poemChildren[0].style.opacity = 0;
        await new Promise(resolve => setTimeout(resolve, 250)); // wait .5s for transition
        poemChildren[0].style.display = "none";
        poemChildren[1].style.display = "block";
        poemChildren[1].style.opacity = 0;
        await new Promise(resolve => setTimeout(resolve, 250)); // wait .5s for transition
        poemChildren[1].style.opacity = 1;
        poemVisible = false;
    } else {
        poemChildren[1].style.opacity = 0;
        await new Promise(resolve => setTimeout(resolve, 250)); // wait .5s for transition
        poemChildren[1].style.display = "none";
        poemChildren[0].style.display = "block";
        poemChildren[0].style.opacity = 0;
        await new Promise(resolve => setTimeout(resolve, 250)); // wait .5s for transition
        poemChildren[0].style.opacity = 1;
        poemVisible = true;
    }
}