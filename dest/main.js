// Header Menu
let menuElements = document.querySelectorAll('header .menu li');
let str, section;
menuElements.forEach((element) => {
    element.addEventListener('click', (e) => {
        str = '.' + e.target.innerHTML;
        section = document.querySelector(str);
        window.scrollTo(0, section.offsetTop);
    });
});
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 3800){
        menuElements.forEach(element => {
            element.classList.remove('active');
        });
        menuElements[4].classList.add('active');
    }
    else if (window.pageYOffset > 3000) {
        menuElements.forEach(element => {
            element.classList.remove('active');
        });
        menuElements[3].classList.add('active');
    }
    else if (window.pageYOffset > 2500) {
        menuElements.forEach(element => {
            element.classList.remove('active');
        });
        menuElements[2].classList.add('active');
    }
    else if (window.pageYOffset > 400) {
        menuElements.forEach(element => {
            element.classList.remove('active');
        });
        menuElements[1].classList.add('active');
    }
    else {
        menuElements.forEach(element => {
            element.classList.remove('active');
        });
        menuElements[0].classList.add('active');
    }
})
// Languages

let langCurrent = document.querySelector('.lang__current');
let temp;
let langChoices = document.querySelectorAll('.lang__wrap a');

langChoices.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        temp = langCurrent.childNodes[0].nodeValue;
        langCurrent.childNodes[0].nodeValue = e.target.innerText;
        e.target.childNodes[0].nodeValue = temp;
    });
});

let btnMenu = document.querySelector('.menu-btn');
let nav = document.querySelector('.nav');

btnMenu.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    btnMenu.classList.toggle('active');
})

// Slide control
// let sliders = document.querySelectorAll('.slider__item-wrap .slider__item');
// let pagingDot = document.querySelectorAll('.paging__dot li');
// let pagingNumber = document.querySelector('.paging__number');
// let controlLeft = document.querySelector('.control .--left');
// let controlRight = document.querySelector('.control .--right');
// let slideNum = sliders.length;

// pagingDot.forEach((element, i) => {
//     element.addEventListener('click', () => {
//         sliders.forEach(e => {
//             e.classList.remove('active');
//         });
//         pagingDot.forEach(e => {
//             e.classList.remove('active');
//         });
//         sliders[i].classList.add('active');
//         pagingDot[i].classList.add('active');
//         pagingNumber.textContent = '0' + (i + 1);
//     });
// })
// controlLeft.addEventListener('click', () => {
//     for (let i = 0; i < slideNum; i++) {
//         if (sliders[i].classList.contains('active')) {
//             sliders[i].classList.remove('active');
//             pagingDot[i].classList.remove('active');
//             if (i != 0) {
//                 sliders[i - 1].classList.add('active');
//                 pagingDot[i - 1].classList.add('active');
//                 pagingNumber.textContent = '0' + (i);
//                 break;
//             } else {
//                 sliders[slideNum - 1].classList.add('active');
//                 pagingDot[slideNum - 1].classList.add('active');
//                 pagingNumber.textContent = '0' + (slideNum);
//                 break;
//             }
//         }
//     }
// })
// controlRight.addEventListener('click', () => {
//     for (let i = 0; i < slideNum; i++) {
//         if (sliders[i].classList.contains('active')) {
//             sliders[i].classList.remove('active');
//             pagingDot[i].classList.remove('active');
//             if (i != slideNum - 1) {
//                 sliders[i + 1].classList.add('active');
//                 pagingDot[i + 1].classList.add('active');
//                 pagingNumber.textContent = '0' + (i + 2);
//                 break;
//             } else {
//                 sliders[0].classList.add('active');
//                 pagingDot[0].classList.add('active');
//                 pagingNumber.textContent = '01';
//                 break;
//             }
//         }
//     }
// })

// Popup videos

let popupVideo = document.querySelector('.popup-video');
let videos = document.querySelectorAll('.videos__item-img');
let close = document.querySelector('.close');
let frame = document.querySelector('.popup-video .iframe_wrap iframe');

videos.forEach((element) => {
    element.addEventListener('click', (e) => {
        let videoId = element.getAttribute("data-video-id");
        frame.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
        popupVideo.classList.add('active');
        close.addEventListener('click', (e) => {
            popupVideo.classList.remove('active');
            frame.setAttribute('src','')
        });
        popupVideo.addEventListener('click', (e) => {
            popupVideo.classList.remove('active');
            frame.setAttribute('src','');
        });
    })
})


// Back to top button
let backtotop = document.querySelector('.backtotop');
backtotop.addEventListener('click', function() {
    window.scrollTo(0, 0);
})

// Jquery

$(document).ready(function () {
    // Slider
    let $carousel = $('.slider__item-wrap');
    $carousel.flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        on: {
            ready: function () {
                let dot = $('.paging__dot');
                $('.flickity-page-dots').appendTo(dot);
            },
            change: function (index) {
                $('.slider__bottom .paging .paging__number').text(0 + (index+1).toString());
            }
        }
    });

    $('.slider .control .--left').click(function(){
        $carousel.flickity('previous');
    });

    $('.slider .control .--right').click(function(){
        $carousel.flickity('next');
    });
    
    // Progress
    $(".news__paging-tab").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let i = $(this).index();
        $(".news__list").eq(i).addClass("active").siblings().removeClass("active");
      });

    $(document).scroll(function (){
        let progress = Math.round($(document).scrollTop() / ($(document).height() - $(window).height())  * 100);
        $(".progress").css({
            width: progress +'%'
        });
    });
});