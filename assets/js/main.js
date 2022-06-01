var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

// scroll hearder


window.onscroll = () => {
    let header = document.querySelector('header');
    if (window.scrollY > header.offsetTop + 30) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}


document.querySelector("#search").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active");
};

document.querySelector('#bag').onclick = () => {
    document.querySelector('#box-cart').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
}

document.querySelector("#close-cart").onclick = () => {
    document.querySelector("#box-cart").classList.remove("active");
    document.querySelector('.overlay').classList.remove('active');
};

function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.navbar').classList.toggle('open');
}