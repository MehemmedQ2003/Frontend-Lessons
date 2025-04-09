// ****************** Slider Data ****************** //

userSliderData = [
    {
        id: 1,
        img: "img/slider/1.jpg",
    },
    {
        id: 2,
        img: "img/slider/2.jpg",
    },
    {
        id: 3,
        img: "img/slider/3.jpg",
    },
    {
        id: 4,
        img: "img/slider/4.jpg",
    },
    {
        id: 5,
        img: "img/slider/5.jpg",
    },
    {
        id: 6,
        img: "img/slider/6.jpg",
    },
    {
        id: 7,
        img: "img/slider/7.jpg",
    },
    {
        id: 8,
        img: "img/slider/8.jpg",
    },
    {
        id: 9,
        img: "img/slider/9.jpg",
    }
];


// ****************** Document ready ****************** //
let slides = document.querySelector(".slides");
let slider = document.querySelector("#slider");
let sliderControls = document.querySelector(".slider-controls");
let sliderDots = document.querySelector(".slider-dots");



// ****************** Slider settings ****************** //
let sliderSettings = {
    sliderPosition: 0,
    sliderAmount: 800,
    sliderHeight: 500,
}



// ****************** Slider properties ****************** // 
function sliderProperties(data){
    slides.style.width = `${data.length * sliderSettings.sliderAmount}px`;
    slider.style.width = `${sliderSettings.sliderAmount}px`;
    slider.style.height = `${sliderSettings.sliderHeight}px`;
    sliderControls.style.width = `${sliderSettings.sliderAmount}px`;
    sliderDots.style.width = `${sliderSettings.sliderAmount}px`;
}
sliderProperties(userSliderData);



// ****************** Slider generation ****************** //
function generateSlides(data){
    slides.innerHTML = '';
    sliderDots.innerHTML = '';
    for(let i = 0; i < data.length; i++){
        let template = `
            <div class="slide" style='width:${sliderSettings.sliderAmount}px;'>
                <img src="${data[i].img}" alt="">
            </div>
        `;
        slides.innerHTML += template; 
        
        let dots = `<span></span>`;
        sliderDots.innerHTML += dots;
    }
}
generateSlides(userSliderData);



// ****************** Slider left controls ****************** //
function slideLeft(e){
    e.prevendDefault;
    if(sliderSettings.sliderPosition <= 0){
        sliderSettings.sliderPosition = userSliderData.length * sliderSettings.sliderAmount;
    }
    sliderSettings.sliderPosition -= sliderSettings.sliderAmount;
    slides.style.transform = `translateX(-${sliderSettings.sliderPosition}px)`;
}



// ****************** Slider right controls ****************** //
function slideRight(e){
    e.prevendDefault;
    if(sliderSettings.sliderPosition > (userSliderData.length-1) * sliderSettings.sliderAmount - 1){
        sliderSettings.sliderPosition = 0
    }
    sliderSettings.sliderPosition += sliderSettings.sliderAmount;
    slides.style.transform = `translateX(-${sliderSettings.sliderPosition}px)`;
}