const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// rander 
const about = $('.about');

const renderAboutMain = function(){
    about.innerHTML =`<!-- header -->
    <div class="header">

        <div class="content-pages">
            <p>About Us</p>
        </div>

        <!-- header-navigation -->
        <div class="grid">
            <div class="row">
                <div class="header-nav">
                    <div class="header-nav__logo">
                        <a href="../index.html">
                            <img src="../assets/img/header/logo.png" alt="">
                        </a>
                    </div>
                    <div class="menu">
                        <ul class="menu__list">
                            <li class="menu__item">
                                <a href="../index.html">Home</a>
                            </li>
                            <li class="menu__item">
                                <a href="../pages/search.html">Packages</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="../pages/search.html" class="menu-more__link">Search 1</a></li>
                                        <li class="menu-more__item">
                                            <a href="../pages/search.html" class="menu-more__link">Search 2
                                                <span class="hot" >hot</span>
                                            </a>
                                        </li>
                                        <li class="menu-more__item">
                                            <a href="../pages/search.html" class="menu-more__link">Tour Package
                                                <i class="fas fa-caret-right"></i>
                                            </a>
                                            <div class="menu-more">
                                                <ul class="menu-more__list">
                                                    <li class="menu-more__item"><a href="../pages/search.html" class="menu-more__link">Carousel <span class="best" >best</span> </a></li>
                                                    <li class="menu-more__item"><a href="../pages/search.html" class="menu-more__link">Custom Map</a></li>
                                                    <li class="menu-more__item"><a href="../pages/search.html" class="menu-more__link">360° Panorama</a></li>
                                                    <li class="menu-more__item"><a href="../pages/search.html" class="menu-more__link">Default</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="menu-more__item"><a href="../pages/search.html" class="menu-more__link">Destination</a></li>
                                        <li class="menu-more__item"><a href="../pages/search.html" class="menu-more__link">Typology</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item">
                                <a href="../pages/shop.html">Shop</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="../pages/shop.html" class="menu-more__link">Archive</a></li>
                                        <li class="menu-more__item"><a href="../pages/shop.html" class="menu-more__link">Single Product</a></li>
                                        <li class="menu-more__item"><a href="../pages/shop.html" class="menu-more__link">Cart</a></li>
                                        <li class="menu-more__item"><a href="../pages/shop.html" class="menu-more__link">Checkout</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item">
                                <a href="../pages/aboutUs.html">About us</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="../pages/aboutUs.html" class="menu-more__link">About Us 2</a></li>
                                        <li class="menu-more__item"><a href="../pages/aboutUs.html" class="menu-more__link">About Us 3</a></li>
                                        <li class="menu-more__item"><a href="../pages/aboutUs.html" class="menu-more__link">About Us <span class="new">news</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item">                               
                                <a href="../pages/pages.html">Pages</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">Services</a></li>
                                        <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">Agency Tours</a></li>
                                        <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">Testimonials</a></li>
                                        <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">Promotions</a></li>
                                        <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">Faq</a></li>
                                        <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">Coming Soon</a></li>
                                        <li class="menu-more__item">
                                            <a href="../pages/pages.html" class="menu-more__link">About Us
                                                <i class="fas fa-caret-right"></i>
                                            </a>
                                                <div class="menu-more">
                                                    <ul class="menu-more__list">
                                                        <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">About Us 1</a></li>
                                                        <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">About Us 2</a></li>
                                                        <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">About Us 3</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-more__item">
                                            <a href="../pages/pages.html" class="menu-more__link">Contact
                                                <i class="fas fa-caret-right"></i>
                                            </a>
                                            <div class="menu-more">
                                                <ul class="menu-more__list">
                                                    <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">Contact 1</a></li>
                                                    <li class="menu-more__item"><a href="../pages/pages.html" class="menu-more__link">Contact 2</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item">
                                <a href="../pages/news.html">New</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="../pages/news.html" class="menu-more__link">Archive</a></li>
                                        <li class="menu-more__item">
                                            <a href="../pages/news.html" class="menu-more__link">Single Post
                                                <i class="fas fa-caret-right"></i>
                                            </a>
                                            <div class="menu-more">
                                                <ul class="menu-more__list">
                                                    <li class="menu-more__item"><a href="../pages/news.html" class="menu-more__link">Full Width</a></li>
                                                    <li class="menu-more__item"><a href="../pages/news.html" class="menu-more__link">Right Sidebar</a></li>
                                                    <li class="menu-more__item"><a href="../pages/news.html" class="menu-more__link">Left Sidebar</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item">
                                <a href="../pages/contant.html">contact</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="../pages/contant.html" class="menu-more__link">Contact 1</a></li>
                                        <li class="menu-more__item"><a href="../pages/contant.html" class="menu-more__link">Contact 2</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item purple" style="margin-left: 20px;"><a href="../pages/search.html">Book now</a></li>
                        </ul>
                    </div>
                    <label for="menu-hidden" class="menu-bar">
                        <img src="../assets/img/header/icon-menu-bav.png" alt="">
                    </label>
                    <input type="checkbox" name="" id="menu-hidden" hidden>
                    <div class="modul-menu">
                        <!-- page-1 --> 
                        <div class="modul-menu__sub-header">
                            best
                        </div>
                        <div class="modul-menu__header">
                            <div class="modul-menu__header-content">
                                Packages
                            </div>
                        </div>
                        <div class="modul-menu__body">
                            <div class="modul-menu__list modul-menu__list-1">
                                
                            </div>
                            <div class="modal-ticket">
                                <div class="modal-ticket__show">
                                    <img class="modal-ticket__show-img" src="../assets/img/location/europe.jpg" alt="">
                                    <div class="modal-ticket__show-content">
                                        <img src="../assets/img/location/icon-modal-eu.png" alt="" class="modal-ticket__show-icon">
                                        <div class="modal-ticket__show-text">
                                            <div class="modal-ticket__show-loca">
                                                Europe
                                            </div>
                                            <div class="modal-ticket__show-package">
                                                3 packages
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-ticket__hidden">
                                    <div class="modal-ticket__hidden-header">
                                        Packages
                                    </div>
                                    <a href="" class="modal-ticket__hidden-loca">Berlin</a>
                                    <a href="" class="modal-ticket__hidden-loca">Amsterdam</a>
                                    <a href="" class="modal-ticket__hidden-loca">Tuscany</a>
                                    <a href="" class="modal-ticket__hidden-view">
                                        VIEW DESTINATION
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- page-2 -->
                        <div class="modul-menu__sub-header">
                            LAST
                        </div>
                        <div class="modul-menu__header">
                            <div class="modul-menu__header-content">
                                MINUTES
                            </div>
                        </div>
                        <div class="modul-menu__body">
                            <div class="modul-menu__list modul-menu__list-2">
                                
                            </div>
                        </div>
                        <label for="menu-hidden" class="modul-menu__close">
                            <i class="far fa-times-circle"></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <!-- header-content  -->
        <div class="grid">
            <div class="row">
                
            </div>
        </div>
    </div>

    <!-- container -->
    <div class="container">
        <div class="grid wide">
            <div class="row">
                <h2 class="about__header col c-6">
                    Hello. Our agency has been present for over 20 years in the market. We make the most of all our customers.
                </h2>
                <p class="about__header--content col c-3">
                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut. <br/><br/>

                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.
                    
                    
                </p>
                <p class="about__header--content col c-3">
                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut. <br/><br/>

                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut.
                </p>
            </div>
            <div class="row">
                <div class="col c-12">
                    <div class="about__us__video">
                        <img src="../assets/img/aboutUs/imgvideo.jpg" alt="" class="about__us--imgvideo">
                        <div class="about__us__button--play about__us--open--video-js">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid ">
            <div class="row">
                <div class="contact__us">
                    <div class="grid wide">
                        <div class="row">
                            <div class="col c-6">
                            </div>
                            <div class="contact__us__background col c-6">
                                <h2 class="contact__us__heading">Our Staff</h2>
                                <p class="contact__us__content">LOREM IPSUM DOLOR SIT AMET, CONSECTETURADIPISCING ELIT. DONEC AT LIGULA IN LIGULA ULTRICESVULPUTATE AT AC SAPIEN. IN JUSTO NEQUE, MALESUADAA LIBERO ET, LOREM IPSUM DOLOR SIT AMET,CONSECTETUR ADIPISCING ELIT</p>
                                <a href="#" class="contact__us__button">CONTACT US</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid wide">
            <div class="row about__team--js">
                    <!-- render team -->
            </div>
        </div>


        <div class="grid wide">
            <p class="promotions-heading">PROMOTIONS</p>
            <h2 class="promotions-sub-heading">OUR DESTINATIONS</h2>
            <div class="row promotions--js">
                <div class="promotions col c-6">
                    <div class="row">
                        <h3 class="promotion__heading">HAWAII TOURS</h3>
                        <h3 class="promotions__price">$ 50,80</h3>
                    </div>
                    <div class="row">
                        <p class="promotion__content">HAWAII TOURS</p>
                        <div class="promotions__mode pro--blue">NEW</div>
                    </div>
                </div>
                <div class="promotions col c-6">
                    <div class="row">
                        <h3 class="promotion__heading">HAWAII TOURS</h3>
                        <h3 class="promotions__price">$ 50,80</h3>
                    </div>
                    <div class="row">
                        <p class="promotion__content">HAWAII TOURS</p>
                        <div class="promotions__mode">NEW</div>
                    </div>
                </div>
                <div class="promotions col c-6">
                    <div class="row">
                        <h3 class="promotion__heading">HAWAII TOURS</h3>
                        <h3 class="promotions__price">$ 50,80</h3>
                    </div>
                    <div class="row">
                        <p class="promotion__content">HAWAII TOURS</p>
                        <p class="promotions__mode">NEW</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- footer -->
    <div class="footer">
        <div class="grid wide">
            <div class="row">
                <div class="footer-header">
                    <div class="footer-header__text">
                        <div class="footer-header__sub">
                            KEEP IN TOUCH
                        </div>
                        <div class="footer-header__header">
                            Travel with Us
                        </div>
                    </div>
                    <div class="footer-header__form">
                        <form action="">
                            <input type="email" name="" id="email" class="footer-header__email" required placeholder="Email">
                            <input type="submit" value="SEND">
                        </form>
                    </div>
                </div>    
            </div>
            <div class="row footer-body">
                <div class="col c-6">
                    <div class="footer-content">
                        <div class="footer-travel">
                            <img src="../assets/img/footer/logo-color.png" alt="" class="footer-travel__img">
                            <div class="footer-travel__content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam et nibh condimentum venenatis eu ac magnasin. Quisque interdum est mauris, eget ullamcorper.
                            </div>
                            <div class="footer-travel__link">
                                <a href="" class="fab fa-twitter"></a>
                                <a href="" class="fab fa-youtube"></a>
                                <a href="" class="fab fa-facebook-square"></a>
                                <a href="" class="fab fa-vimeo-v"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-text-js col c-6">
                </div>
            </div>
            <div class="row footer-end">
                <div class="col c-6">
                    <div class="footer-end__item">
                        THE BEST frontend TRAVEL THEME
                    </div>
                </div>
                <div class="col c-6">
                    <div class="footer-end__item footer-end__item--right">
                        @ COPYRIGHT leopard THEMES 2021
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- video-iframe-->
    <div class="about__us--video about__us--video--js">
        <i class="fa-solid fa-xmark about__us--video--close"></i>
        <iframe class="about__us-content-ifame-js" width="560" height="315" src="https://www.youtube.com/embed/UM1O-4ll-vU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`
} 
renderAboutMain();


// ----------------------------------------------------------------
const aboutUsTeam = $('.about__team--js');
const promotions = $('.promotions--js');
const aboutUsRender = {

    dataTeam : [
        {
            img: '../assets/img/aboutUs/1.jpg',
            name: 'Jane Mcallister',
            job: 'OWNER',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at portitor.',
            links:'#'
        },
        {
            img: '../assets/img/aboutUs/2.jpg',
            name: 'Mandy Johnson',
            job: 'CUSTOMER CARE',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at portitor.',
            links:'#'
        },
        {
            img: '../assets/img/aboutUs/3.jpg',
            name: 'Elly Spitch',
            job: 'CO-FOUNDER',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at portitor.',
            links:'#'
        },
        {
            img: '../assets/img/aboutUs/4.jpg',
            name: 'Hanna Zafron',
            job: 'SPECIALIST',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at portitor.',
            links:'#'
        },
    ],

    dataPromotion : [
        {
            name: 'HAWAII TOURS',
            price: '$ 50,80',
            content: 'Lorem ipsum dolor sit amet',
            mode:'NEW',
            color: 'blue'
        },
        {
            name: 'OCEANIA',
            price: '$ 23,45',
            content: 'Lorem ipsum dolor sit amet',
            mode:'NEW',
            color: 'green'
        },
        {
            name: 'SAN FRANCISCO',
            price: '$ 29.60',
            content: 'Lorem ipsum dolor sit amet',
            mode:'NEW',
            color: 'red'
        },
        {
            name: 'LAS VEGAS TOUR',
            price: '$ 50.89',
            content: 'Lorem ipsum dolor sit amet',
            mode:'NEW',
            color: 'orange'
        },
        {
            name: 'TUSCANY',
            price: '$ 70,90',
            content: 'Lorem ipsum dolor sit amet',
            mode:'1 HOUR',
            color: 'white'
        },
        {
            name: 'BRAZIL',
            price: '$ 13.50',
            content: 'Lorem ipsum dolor sit amet',
            mode:'1 HOUR',
            color: 'white'
        },
        {
            name: 'ITALY COST',
            price: '$ 60,80',
            content: 'Lorem ipsum dolor sit amet',
            mode:'1 HOUR',
            color: 'white'
        },
        {
            name: 'NORTH AMERICA',
            price: '$ 43,80',
            content: 'Lorem ipsum dolor sit amet',
            mode:'NEW',
            color: 'yellow'
        },

    ],

    randerTeam(){
        let html;
        html = this.dataTeam.map(function(team){
            return`<div class="about__team col c-3">
            <img src="${team.img}" alt="" class="about__team__img">
            <div class="about__team__info">
                <h2 class="about__team__name">
                ${team.name}
                </h2>
                <p class="about__team__job">
                ${team.job}
                </p>
                <p class="about__team__content">
                ${team.content}
                </p>
                <a href="${team.links}" class="about__team__contact">
                    CONTACT ME
                </a>
            </div>
        </div>`
        }).join('');
        aboutUsTeam.innerHTML = html;
    },

    randerPromotion(){
        let html;
        html = this.dataPromotion.map(function(data){
            return`
            <div class="promotions col c-6">
                <div class="row">
                    <h3 class="promotion__heading">${data.name}</h3>
                    <h3 class="promotions__price">${data.price}</h3>
                </div>
                <div class="row">
                    <p class="promotion__content">${data.content}</p>
                    <div class="promotions__mode pro--${data.color}">${data.mode}</div>
                </div>
            </div>
            `
        }).join('');
        promotions.innerHTML = html;
    },

    start(){
        this.randerTeam();
        this.randerPromotion();
    }
}
aboutUsRender.start();



// handle logit
const aboutUsOpenVideo = $('.about__us--open--video-js');
const aboutIfame = $('.about__us--video--js');
const aboutIfameClose = $('.about__us--video--close');

aboutUsOpenVideo.onclick = function(){
    aboutIfame.style.display = 'flex'
}

function closeIfame() {
    aboutIfame.style.display = 'none';
}

function clickNotClose(event){ 
    event.stopPropagation();
}	

// function reLoadIfame (){
//     ifame.load();
// }

aboutIfameClose.onclick = function(){
    closeIfame();
    // reLoadIfame();
}

aboutIfame.onclick = function(){
    closeIfame();
    // reLoadIfame();
}



