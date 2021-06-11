let testimonialsSlider;

window.addEventListener("resize", setSlider);

const petSlider = new Swiper(".pets__inner", {
    navigation: {
        nextEl: '.card__btn-right',
        prevEl: '.card__btn-left',
    },
    loop: true,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination"
    },
    breakpoints: {
        809: {
            slidesPerView: 3
        },
        540: {
            slidesPerView: 2
        },
        300: {
            slidesPerView: 1
        }
    }
});

function setSlider() {
    if (document.documentElement.clientWidth > 640) {
        if (testimonialsSlider) {
            testimonialsSlider.destroy(true, true);
        }
        testimonialsSlider = new Swiper(".testimonials-swiper", {
            spaceBetween: 15,
            direction: "horizontal",
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                dragSize: 300
            },
            breakpoints: {
                1160: {
                    slidesPerView: 4
                },
                855: {
                    slidesPerView: 3,
                    scrollbar: {
                        dragSize: 200
                    }
                },
                640: {
                    slidesPerView: 2,
                    scrollbar: {
                        dragSize: 150
                    }
                }
            }
        });
    } else {
        if (testimonialsSlider) {
            testimonialsSlider.destroy(true, true);
        }
        testimonialsSlider = new Swiper(".testimonials-swiper-vertical", {
            direction: "vertical",
            slidesPerView: 3,
            spaceBetween: 15
        });
    }
}

setSlider();