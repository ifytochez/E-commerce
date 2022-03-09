let thumbnails = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");

buttonLeft.addEventListener("click", () =>{
 slider.scrollLeft -= 125;
});

buttonRight.addEventListener("click", () =>{
    slider.scrollLeft += 125;
    // this means that the slider should scroll +125px from the current position
 });

 const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
//  alert(maxScrollLeft)

// autoplay slider
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)){
        slider.scrollLeft -= maxScrollLeft;
    }else {
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoPlay, 50);
// the 50 is milliseconds


// pause slider on hover
// the i means the item
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", () => {
        clearInterval(play)
    })
    
    thumbnails[i].addEventListener("mouseout", () => {
        return play = setInterval(autoPlay, 50);
    })
}

