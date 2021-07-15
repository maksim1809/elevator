window.addEventListener( "DOMContentLoaded", () =>  {
    const menu = document.querySelector(".menu");
    let menuItem = document.querySelector(".menu_item");
    let burger = document.querySelector(".burger");
    let icon = document.querySelector(".header_icon");
    let phoneBtn = document.querySelector(".header_phone-btn");
    let headerNumber = document.querySelector(".header__number");

    phoneBtn.addEventListener("click", () => {
        headerNumber.classList.toggle('header__number-active')
    });
    burger.addEventListener("click", () => {
        burger.classList.toggle("burger_active");
        menu.classList.toggle("menu_active");
        icon.classList.toggle("header_icon-mobile")
    });
    menuItem.forEach(item => {
        item.addEventListener("click" , () => {
            burger.classList.toggle("burger_active");
            menu.classList.toggle("menu_active");
        })
    });
});



$('div.views__buttons').on('click', 'button:not(.btn-views_active)', function(){
    $(this)
        .addClass('btn-views_active').siblings().removeClass('btn-views_active')
        .closest('div.row').find('div.views__about').removeClass('views__about-active')
        .eq($(this).index()).addClass('views__about-active')
});

$('.carousel__inner').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

