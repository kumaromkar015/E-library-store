searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.tog('active');
}

let loginform = document.querySelector('.login-form-container')
document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginform.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeout();
}
function loader(){
    document.querySelector('.loader-container').classList.add('active');
    
}

function fadeout() {
     setTimeout(loader,4000);
}
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            
        },
        768: {
            slidesPerView: 2,
            
        },
        1024: {
            slidesPerView: 3,
            
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            
        },
        200: {
            slidesPerView: 2,
            
        },
        400: {
            slidesPerView: 3,
            
        },
        768: {
            slidesPerView: 4,
            
        },
        1024: {
            slidesPerView: 5,
            
        },
    },
});
var swiper = new Swiper(".arrivals-slider", {
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});
var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    grabCursor:true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});
var swiper = new Swiper(".blogs-slider", {
    spaceBetween:10,
    grabCursor:true,
    // effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay:9000,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});
