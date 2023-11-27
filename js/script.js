/* Script */

/* Header  */
const header =  document.querySelector('.header');
const navigation =  document.querySelector('.navigation');
const hamburger = document.querySelectorAll('.header__hamburger');

hamburger.forEach(hamburger => {
    hamburger.addEventListener('click', () => {
        if(navigation.classList.contains('active')) {
                hamburger.classList.remove('active');
                navigation.classList.remove('active');
        }
        else {
            hamburger.classList.add('active');
            navigation.classList.add('active');
        }
    });
});

/* scroll annimation on header */
window.addEventListener('scroll', function () {
    if(scrollY >= 100) {
        header.classList.add('header--scrollanim');
    }
    else {
        header.classList.remove('header--scrollanim');
    }
})

/* Accordion */
const accordionHead = document.querySelectorAll('.accordion__head');
const accordionItem = document.querySelectorAll('.accordion__item');

accordionItem.forEach((accord, index) => {
    accord.addEventListener('click', () => {
        if(accordionItem[index].classList.contains('active')) {
            accordionItem[index].classList.remove('active');
        }
        else {
            accordionItem.forEach(accordion1 => accordion1.classList.remove('active'));
            accordionItem[index].classList.add('active');
        }
    })
})

/* Service lider */
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1;
    }  
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2500);

}

/* Testimonials */
const scrollcontainer = document.querySelector('.testimonials__slides');
const tcards = document.querySelectorAll('.tcards');
const nextbtn = document.querySelector('.slider-next');
const prevbtn = document.querySelector('.slider-prev');

scrollcontainer.addEventListener('wheel' , function(e) {
    e.preventDefault();
    scrollcontainer.scrollLeft += e.deltaY;
});

nextbtn.addEventListener('click' , () => {
    scrollcontainer.style.scrollBehaviour = "smooth";
    scrollcontainer.scrollBy({
        left: 350,
        top: 0,
        behavior: 'smooth'
    });
})

prevbtn.addEventListener('click' , () => {
    scrollcontainer.style.scrollBehaviour = "smooth";
    scrollcontainer.scrollBy({
        left: -350,
        top: 0,
        behavior: 'smooth',
    })
})

/* Intersection observer for Image Rotate */
const imgRotate = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('imgRotate');
        }
        else {
        entry.target.classList.remove('imgRotate');
        }
    },
    {
        threshold: 0.25
    });
})
const descriptionList = document.querySelectorAll('.description__left');
descriptionList.forEach((el) => {
    imgRotate.observe(el);
});

/* Intersection observer for section animation */
const sectionAnimation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('sectionanimate');
        }
    },
    {
        threshold: 0.25
    });
})
const sec_animate = document.querySelectorAll('section');
sec_animate.forEach((el) => {
    sectionAnimation.observe(el);
})

