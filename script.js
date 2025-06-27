const wrapper = document.querySelector(".wrapper"),
    imagelist = document.querySelector(".imagelist"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");

let imageIndex = 1,
intervalId;

//function to strt automatic slidedow
const autoSlide = () => {
    //start slide showby calling slideImage() in a time interval
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
//autoslide on page load
autoSlide();

//imagelist display to show specified image
const slideImage = () =>  {
    //calculate updated image index
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;

    //imagelist to show specified image
   imagelist.style.transform =`translate(-${imageIndex * 100}%)` ;
};


//function to update imagelist display to prev or next one
const updateClick = (e) => {
    //stop automatic slideshow
    clearInterval(intervalId);
    //image index on button clicked
    imageIndex += e.target.id === "next" ? 1 :-1 ;
    slideImage(imageIndex);
    autoSlide();
};

//add buttonslistener
buttons.forEach((button) => button.addEventListener("click", updateClick));


// adding mouseover event listener to wrapper element to stop auto slide
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
//add mouseleave event listener to wrapper element to start auto slide
wrapper.addEventListener("mouseleave", autoSlide);