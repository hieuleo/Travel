const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


//rander main:
const home = $('.home');
const renderHomeMain = function(){
    home.innerHTML =`<!-- header -->
    <div class="header">
        <!-- header-navigation -->
        <div class="grid">
            <div class="row">
                <div class="header-nav">
                    <div class="header-nav__logo">
                        <a href="">
                            <img src="./assets/img/header/logo.png" alt="">
                        </a>
                    </div>
                    <div class="menu">
                        <ul class="menu__list">
                            <li class="menu__item">
                                <a href="./index.html">Home</a>
                            </li>
                            <li class="menu__item">
                                <a href="./pages/search.html">Packages</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="./pages/search.html" class="menu-more__link">Search 1</a></li>
                                        <li class="menu-more__item">
                                            <a href="./pages/search.html" class="menu-more__link">Search 2
                                                <span class="hot" >hot</span>
                                            </a>
                                        </li>
                                        <li class="menu-more__item">
                                            <a href="./pages/search.html" class="menu-more__link">Tour Package
                                                <i class="fas fa-caret-right"></i>
                                            </a>
                                            <div class="menu-more">
                                                <ul class="menu-more__list">
                                                    <li class="menu-more__item"><a href="./pages/search.html" class="menu-more__link">Carousel <span class="best" >best</span> </a></li>
                                                    <li class="menu-more__item"><a href="./pages/search.html" class="menu-more__link">Custom Map</a></li>
                                                    <li class="menu-more__item"><a href="./pages/search.html" class="menu-more__link">360° Panorama</a></li>
                                                    <li class="menu-more__item"><a href="./pages/search.html" class="menu-more__link">Default</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="menu-more__item"><a href="./pages/search.html" class="menu-more__link">Destination</a></li>
                                        <li class="menu-more__item"><a href="./pages/search.html" class="menu-more__link">Typology</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item">
                                <a href="./pages/shop.html">Shop</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="./pages/shop.html" class="menu-more__link">Archive</a></li>
                                        <li class="menu-more__item"><a href="./pages/shop.html" class="menu-more__link">Single Product</a></li>
                                        <li class="menu-more__item"><a href="./pages/shop.html" class="menu-more__link">Cart</a></li>
                                        <li class="menu-more__item"><a href="./pages/shop.html" class="menu-more__link">Checkout</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item">
                                <a href="./pages/aboutUs.html">About us</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="./pages/aboutUs.html" class="menu-more__link">About Us 2</a></li>
                                        <li class="menu-more__item"><a href="./pages/aboutUs.html" class="menu-more__link">About Us 3</a></li>
                                        <li class="menu-more__item"><a href="./pages/aboutUs.html" class="menu-more__link">About Us <span class="new">news</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item">                               
                                <a href="./pages/pages.html">Pages</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">Services</a></li>
                                        <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">Agency Tours</a></li>
                                        <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">Testimonials</a></li>
                                        <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">Promotions</a></li>
                                        <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">Faq</a></li>
                                        <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">Coming Soon</a></li>
                                        <li class="menu-more__item">
                                            <a href="./pages/pages.html" class="menu-more__link">About Us
                                                <i class="fas fa-caret-right"></i>
                                            </a>
                                                <div class="menu-more">
                                                    <ul class="menu-more__list">
                                                        <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">About Us 1</a></li>
                                                        <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">About Us 2</a></li>
                                                        <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">About Us 3</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li class="menu-more__item">
                                            <a href="./pages/pages.html" class="menu-more__link">Contact
                                                <i class="fas fa-caret-right"></i>
                                            </a>
                                            <div class="menu-more">
                                                <ul class="menu-more__list">
                                                    <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">Contact 1</a></li>
                                                    <li class="menu-more__item"><a href="./pages/pages.html" class="menu-more__link">Contact 2</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item">
                                <a href="./pages/news.html">New</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="./pages/news.html" class="menu-more__link">Archive</a></li>
                                        <li class="menu-more__item">
                                            <a href="./pages/news.html" class="menu-more__link">Single Post
                                                <i class="fas fa-caret-right"></i>
                                            </a>
                                            <div class="menu-more">
                                                <ul class="menu-more__list">
                                                    <li class="menu-more__item"><a href="./pages/news.html" class="menu-more__link">Full Width</a></li>
                                                    <li class="menu-more__item"><a href="./pages/news.html" class="menu-more__link">Right Sidebar</a></li>
                                                    <li class="menu-more__item"><a href="./pages/news.html" class="menu-more__link">Left Sidebar</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item">
                                <a href="./pages/contant.html">contact</a>
                                <div class="menu-more">
                                    <ul class="menu-more__list">
                                        <li class="menu-more__item"><a href="./pages/contant.html" class="menu-more__link">Contact 1</a></li>
                                        <li class="menu-more__item"><a href="./pages/contant.html" class="menu-more__link">Contact 2</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu__item purple" style="margin-left: 20px;"><a href="./pages/search.html">Book now</a></li>
                        </ul>
                    </div>
                    <label for="menu-hidden" class="menu-bar">
                        <img src="./assets/img/header/icon-menu-bav.png" alt="">
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
                                    <img class="modal-ticket__show-img" src="./assets/img/location/europe.jpg" alt="">
                                    <div class="modal-ticket__show-content">
                                        <img src="./assets/img/location/icon-modal-eu.png" alt="" class="modal-ticket__show-icon">
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
                <div class="header-content">
                    <div class="header-content__header">
                        <p>Search your next Holiday</p>
                    </div>
                    <div class="header-content__subheader">
                        <p>CHECK OUR BEST PROMOTIONS</p>
                    </div>
                    <div class="header-content__choose">
                        <select id="tour">
                            <option value="8">Choose your Destination ...</option>
                            <option value="1">Europe</option>
                            <option value="2">&nbsp;&nbsp;- Italy</option>
                            <option value="3">&nbsp;&nbsp;- Netherlands</option>
                            <option value="4">Asia</option>
                            <option value="5">&nbsp;&nbsp;- Thailandia</option>
                            <option value="6">United States</option>
                            <option value="7">Oceania</option>
                        </select>
                        <div class="header-content__choose-input">
                            <a href="">
                                <i class="fas fa-search"></i>
                            </a>
                        </div>
                    </div>
                    <div class="header-content__travel">
                        <a href="" class="header-content__item">
                            <img src="./assets/img/header/t-relax.png" alt="">
                            <p>relax</p>
                        </a>
                        <a href="" class="header-content__item">
                            <img src="./assets/img/header/t-cultural.png" alt="">
                            <p>cultural</p>
                        </a>
                        <a href="" class="header-content__item">
                            <img src="./assets/img/header/t-sport.png" alt="">
                            <p>sport</p>
                        </a>
                        <a href="" class="header-content__item">
                            <img src="./assets/img/header/t-history.png" alt="">
                            <p>history</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- container -->
    <div class="container">

        <!-- tag-container-1 -->
        <div class="grid wide">
            <div class="product-header row">
                <div class="col c-12">OUR PROPOSALS</div>
            </div>
            <div class="row">
                <div class="product-sub-header col c-12">
                    <div class="product-sub-header-contant">OUR DESTINATIONS</div> 
                </div>
            </div>
            <div class="row product-ticket">

            </div>
        </div>

        <!-- poster-1 -->
        <div class="grid">
            <div class="row">
                <div class="c-12">
                    <div class="split-poster">
                        <div class="split-poster__content">
                            <p>your</p>
                            <p>next holiday</p>
                        </div>
                        <a href="">view all packages</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- slide -->
        <div class="grid wide">
            <div class="row">
                <div class="col c-4">
                    <div class="slide-content">
                        <div class="slide-content__sub-header">
                            NORTH AMERICA
                        </div>
                        <div class="slide-content__header">
                            <div>The Best</div>
                            <span>Beaches</span>
                        </div>
                        <div class="slide-content__body">
                            <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin rhoncus urna dictum neque molestie ultricies mauris ac.<br> <br> Warm weather has officially arrived, and we’ve got your plan: the most stunning beaches for surfing, casting, lounging, and explorin</p>
                        </div>
                        <div class="slide-content__price">
                            <span>800</span>
                            <span>&nbsp;500 $</span>
                            <span>/ FOR PERSON</span>
                        </div>
                        <a href="" class="slide-content__book">Book now</a>
                    </div>
                </div>
                <div class="col c-8">
                    <div class="slide-img">
                        <div class="slide-wrapper">
                        </div>
                        <div class="slide-lable">
                            <div class="slide-lable-item active" data-id="1"></div>
                            <div class="slide-lable-item" data-id="2"></div>
                            <div class="slide-lable-item" data-id="3"></div>
                            <div class="slide-lable-item" data-id="4"></div>
                        </div>
                        <div class="slide-time">
                            <div class="slide-time__item">
                                <p class="day-text-js">000</p>
                                <span>DAYS</span>
                            </div>
                            <div class="slide-time__item">
                                <p class="hours-text-js">000</p>
                                <span>HOURS</span>
                            </div>
                            <div class="slide-time__item">
                                <p class="minutues-text-js">000</p>
                                <span>MINUTES</span>
                            </div>
                            <div class="slide-time__item">
                                <p class="seconds-text-js">000</p>
                                <span>SECONDS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide-content-js row">
                <!-- render-js  -->
            </div>
        </div>

         <!-- poster-2 -->
         <div class="grid">
            <div class="row">
                <div class="c-6">
                    <div class="split-poster-2" style="background-image: url(./assets/img/poster-2/poster-1.jpg);">
                        <div class="split-poster-2__header">
                            01. LAST MINUTE
                        </div>
                        <div class="split-poster-2__sub-header">
                            Discover Cities
                        </div>
                        <a href="" class="split-poster-2__info">DETAILS</a>
                    </div>
                </div>
                <div class="c-6">
                    <div class="split-poster-2" style="background-image: url(./assets/img/poster-2/poster-2.jpg);">
                        <div class="split-poster-2__header">
                            02. PROMOTIONS
                        </div>
                        <div class="split-poster-2__sub-header">
                            Discover Nature
                        </div>
                        <a href="" class="split-poster-2__info green">DETAILS</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- tag-container-2 -->
        <div class="grid wide">
            <div class="product-header row">
                <div class="col c-12">PROMOTIONS</div>
            </div>
            <div class="row">
                <div class="product-sub-header col c-12">
                    <div class="product-sub-header-contant">OUR PACKAGES</div> 
                </div>
            </div>
            <div class="row modal-packages">
                <!-- modal-tour -->     
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
                            <img src="./assets/img/footer/logo-color.png" alt="" class="footer-travel__img">
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
                    <!-- js -->
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
    </div>`
} 
renderHomeMain();

//render data:
const modulMenuList1 = $('.modul-menu__list-1');
const modulMenuList2 = $('.modul-menu__list-2');
const productTicket = $('.product-ticket');
const slideWrapper = $('.slide-wrapper');
const modalPackages = $('.modal-packages');
const footerContent = $('.footer-text-js')
const slideContentElement = $('.slide-content-js')

const data = {
    dataModulMenuHome: [
        {
            id: '0',
            img: './assets/img/header/berlin.jpg',
            city: 'Berlin',
            location: 'Europe',
            price: 'FROM  700 $',
            color:  'berlin',
        },
        {
            id: '1',
            img: './assets/img/header/hongkong.jpg',
            city: 'Hong Kong',
            location: 'Asia',
            price: 'FROM  500 $',
            color:  'hongkong',
        },
        {
            id: '2',
            img: './assets/img/header/san-francisco.jpg',
            city: 'San Francisco',
            location: 'United States',
            price: 'FROM  400 $',
            color:  'usa',
        },
        {
            id: '3',
            img: './assets/img/header/Tuscany.jpg',
            city: 'Tuscany',
            location: 'Italy',
            price: 'FROM  730 $',
            color:  'tuscany',
        },
        {
            id: '4',
            img: './assets/img/header/Amsterdam.jpg',
            city: 'Amsterdam',
            location: 'Netherlands',
            price: 'FROM  1500 $',
            color:  'amsterdam',
        },
        {
            id: '5',
            img: './assets/img/header/Phuket.jpg',
            city: 'Phuket',
            location: 'Thailandia',
            price: 'FROM  1200 $',
            color:  'phuket',
        },
    ],
    
    modalTicket:[
        {
            img: './assets/img/location/europe.jpg',
            icon: './assets/img/location/icon-modal-eu.png',
            loca:'Europe',
            package:'3 packages',
            city1: 'Berlin',
            city2: 'Amsterdam',
            city3: 'Tuscany',
        },
        {
            img: './assets/img/location/thailand.jpg',
            icon: './assets/img/location/icon-modal-thailand.png',
            loca:'Thailandia',
            package:'1 packages',
            city1: 'Phuket',
            city2: '',
            city3: '',
        },
        {
            img: './assets/img/location/img-assian.jpg',
            icon: './assets/img/location/icon-asian.png',
            loca:'Asia',
            package:'3 packages',
            city1: 'Hong Kong',
            city2: 'Tokyo',
            city3: 'Ho Chi Minh',
        }, 
        {
            img: './assets/img/location/img-italia.jpg',
            icon: './assets/img/location/icon-italia.png',
            loca:'Italy',
            package:'1 packages',
            city1: 'Tuscany',
            city2: '',
            city3: '',
        }, 
        {
            img: './assets/img/location/img-netherlands.jpg',
            icon: './assets/img/location/icon-netherlands.png',
            loca:'Netherlands',
            package:'1 packages',
            city1: 'Amsterdam',
            city2: '',
            city3: '',
        }, 
        {
            img: './assets/img/location/img-usa.jpg',
            icon: './assets/img/location/icon-usa.png',
            loca:'United States',
            package:'1 packages',
            city1: 'San Francisco',
            city2: '',
            city3: '',
        }, 
    ],

    dataSlides: [
        {
            class:'slide-1',
            dataSlide:'1',
            img:'./assets/img/slide/slide-1.jpg',
        },
        {
            class:'slide-2',
            dataSlide:'2',
            img:'./assets/img/slide/slide-2.jpg',
        },
        {
            class:'slide-3',
            dataSlide:'3',
            img:'./assets/img/slide/slide-3.jpg',
        },
        {
            class:'slide-4',
            dataSlide:'4',
            img:'./assets/img/slide/slide-4.jpg',
        },
    ],

    slideContents:[
        {
            icon: './assets/img/slide/icon-1.png',
            heading: 'World Tour',
            content: 'Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.',
            links: {
                contentLink: 'View More',
                href: '#',
            }
        },
        {
            icon: './assets/img/slide/iocn-2.png',
            heading: 'Cruises',
            content: 'Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.',
            links: {
                contentLink: 'View More',
                href: '#',
            }
        },
        {
            icon: './assets/img/slide/icon-3.png',
            heading: 'Best Tours',
            content: 'Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.',
            links: {
                contentLink: 'View More',
                href: '#',
            }
        }
    ],

    dataPackage:[
        {
            img: './assets/img/product-2/berlin.jpg',
            color: 'berlin',
            icon: './assets/img/product-2/icon-berlin.png',
            city: 'Berlin',
            locations:'Europe',
            service1: 'Cultural',
            service2: 'Relax',
            price: '700 $',
            content: ' we are very happy to finally welcome you back to the capital. Berlin\'s hotels, museums, attractions, restaurants and even the clubs are open',
            sale: false,
        },
        {
            img: './assets/img/product-2/hongkong.jpg',
            color: 'hongkong',
            icon: './assets/img/product-2/icon-hongkong.png',
            city: 'Hong Kong',
            locations:'Asia',
            service1: 'History',
            service2: 'Cultural',
            price: '1000',
            priceSale: '500 $',
            content: 'Steamy and gargantuan, Hong Kong has evolved into one of Asia’s most lovable cities. Its incredible skyline – part neon, part steel-and-glass.',
            sale: true,
        },
        {
            img: './assets/img/product-2/san-fransico.jpg',
            color: 'usa',
            icon: './assets/img/product-2/icon-san-fransico.png',
            city: 'San Francisco',
            locations:'United States',
            service1: 'Sport',
            service2: 'Relax',
            price: '400 $',
            content: 'Because San Francisco weather is moderate year-round, it\'s a destination you can visit all 12 months of the year.',
            sale: false,
        },
    ],

    footing:[
        {
            headings: 'OUR AGENCY',
            content__1: 'Services',
            content__2: 'Insurancee',
            content__3: 'Agency',
            content__4: 'Tourism',
            content__5: 'Payment',
        },
        {
            headings: 'PARTNERS',
            content__1: 'Booking',
            content__2: 'RentalCar',
            content__3: 'HostelWorld',
            content__4: 'Trivago',
            content__5: 'TripAdvisor',
        },
        {
            headings: 'LAST MINUTE',
            content__1: 'London',
            content__2: 'California',
            content__3: 'Indonesia',
            content__4: 'Europe',
            content__5: 'Oceania',
        },
    ],

    renderFooting(){
        let html;
        let footContents = this.footing;
        html = footContents.map(function(footContent){
            return`
            <div class="col c-4">
                    <div class="footer-item">
                        <div class="footer-item__header">
                            ${footContent.headings}
                        </div>
                        <div class="footer-item__list">
                            <div>
                                <i class="fas fa-chevron-right"></i>
                                ${footContent.content__1}
                            </div>
                            <div>
                                <i class="fas fa-chevron-right"></i>
                                ${footContent.content__2}
                            </div>
                            <div>
                                <i class="fas fa-chevron-right"></i>
                                ${footContent.content__3}
                            </div>
                            <div>
                                <i class="fas fa-chevron-right"></i>
                                ${footContent.content__4}
                            </div>
                            <div>
                                <i class="fas fa-chevron-right"></i>
                                ${footContent.content__5}
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        footerContent.innerHTML = html;
    },

    randerMenu(){
        let html1;
        let localdatas = this.dataModulMenuHome;
        
        html1 = localdatas.map(function(localdata){
            if (localdata.id <=2){
                return `<div class="modul-menu__item">
                            <div class="modul-menu__item-img">
                                <img src="${localdata.img}" alt="">
                            </div>
                            <a href="" class="modul-menu__item-content">
                                <div class="modul-menu__item-header">
                                    ${localdata.city}
                                </div>
                                <div class="modul-menu__item-loca">
                                    <i class="fas fa-map-marker-alt"></i>
                                    ${localdata.location}
                                </div>
                                <div class="modul-menu__item-buy ${localdata.color}">
                                    ${localdata.price}
                                </div>
                            </a>
                        </div>`
            }
        }).join('')
        modulMenuList1.innerHTML = html1;
        let html2;
        html2 = localdatas.map(function(localdata){
            if (localdata.id > 2){
                return `<div class="modul-menu__item">
                            <div class="modul-menu__item-img">
                                <img src="${localdata.img}" alt="">
                            </div>
                            <a href="" class="modul-menu__item-content">
                                <div class="modul-menu__item-header">
                                    ${localdata.city}
                                </div>
                                <div class="modul-menu__item-loca">
                                    <i class="fas fa-map-marker-alt"></i>
                                    ${localdata.location}
                                </div>
                                <div class="modul-menu__item-buy ${localdata.color}">
                                    ${localdata.price}
                                </div>
                            </a>
                        </div>`
            }
        }).join('')
        modulMenuList2.innerHTML = html2;
    },

    randerModulTicker(){
        let html;
        let localdatas = this.modalTicket;
        html = localdatas.map(function(localdata){
            return `<div class="col c-4">
            <div class="modal-ticket">
                <div class="modal-ticket__show">
                    <img class="modal-ticket__show-img" src="${localdata.img}" alt="">
                    <div class="modal-ticket__show-content">
                        <img src="${localdata.icon}" alt="" class="modal-ticket__show-icon">
                        <div class="modal-ticket__show-text">
                            <div class="modal-ticket__show-loca">
                                ${localdata.loca}
                            </div>
                            <div class="modal-ticket__show-package">
                                ${localdata.package}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-ticket__hidden">
                    <div class="modal-ticket__hidden-header">
                        Packages
                    </div>
                    <a href="" class="modal-ticket__hidden-loca">${localdata.city1}</a>
                    <a href="" class="modal-ticket__hidden-loca">${localdata.city2}</a>
                    <a href="" class="modal-ticket__hidden-loca">${localdata.city3}</a>
                    <a href="" class="modal-ticket__hidden-view">
                        VIEW DESTINATION
                    </a>
                </div>
            </div>
        </div>`
        }).join('');
        productTicket.innerHTML = html;
    },

    handleProductTicket(){
        const modalTicketLoca = Array.from($$('.modal-ticket__hidden-loca'));
                // console.log(modalTicketLoca)
                for (let i of modalTicketLoca){
            if (i.innerText == ''){
               i.style.height = '0';
            }}
    },

    randerslide(){
        let html;
        html = this.dataSlides.map(function(slide){
            if(slide.dataSlide == 1 ){
                return `<div class="slide ${slide.class} active" data-slide="${slide.dataSlide}"><img src="${slide.img}"></div>`
            }else{
                return `<div class="slide ${slide.class}" data-slide="${slide.dataSlide}"><img src="${slide.img}"></div>`
            }
        })
        slideWrapper.innerHTML = html;
    },
    
    randerPackage(){
        let html;
        html = this.dataPackage.map(function(data){
            if (data.sale){
                return `<div class="col c-4">
                <div class="modal-tour">
                    <div class="modal-tour__picture">
                        <img src="${data.img}" alt="" class="modal-tour__img">
                    </div>
                    <a href="" class="modal-tour__sale">SALE</a>
                    <div class="modal-tour__body">
                        <a href="" class="modal-tour__icon ${data.color}">
                            <img src="${data.icon}" alt="" class="modal-tour__icon-img">
                        </a>
                        <a href="" class="modal-tour__header">
                            ${data.city}
                        </a>
                        <a href="" class="modal-tour__loca">
                            <i class="fas fa-map-marker-alt"></i>
                            ${data.locations}
                        </a>
                        <div class="modal-tour__list">
                            <div class="modal-tour__item">
                                <a href="">${data.service1}</a>
                                <a href="">
                                    ${data.service2}
                                    <span class="${data.color}">+ 1</span>
                                </a>
                            </div>
                            <div class="modal-tour__price">
                                <span>${data.price}</span>
                                ${data.priceSale}
                            </div>
                        </div>
                        <div class="modal-tour__content">
                        ${data.content}
                        </div>
                        <a href="" class="modal-tour__link ${data.color}">
                            DETAILS
                        </a>
                    </div>
                </div>
            </div>`
            }else{
                return `<div class="col c-4">
                <div class="modal-tour">
                    <div class="modal-tour__picture">
                        <img src="${data.img}" alt="" class="modal-tour__img">
                    </div>
                    <div class="modal-tour__body">
                        <a href="" class="modal-tour__icon ${data.color}">
                            <img src="${data.icon}" alt="" class="modal-tour__icon-img">
                        </a>
                        <a href="" class="modal-tour__header">
                            ${data.city}
                        </a>
                        <a href="" class="modal-tour__loca">
                            <i class="fas fa-map-marker-alt"></i>
                            ${data.locations}
                        </a>
                        <div class="modal-tour__list">
                            <div class="modal-tour__item">
                                <a href="">${data.service1}</a>
                                <a href="">
                                    ${data.service2}
                                    <span class="${data.color}">+ 1</span>
                                </a>
                            </div>
                            <div class="modal-tour__price">
                                ${data.price}
                            </div>
                        </div>
                        <div class="modal-tour__content">
                        ${data.content}
                        </div>
                        <a href="" class="modal-tour__link ${data.color}">
                            DETAILS
                        </a>
                    </div>
                </div>
            </div>`
            }
        }).join('');
        modalPackages.innerHTML = html;
    },

    renderContentSlide(){
        let html;  
        html= this.slideContents.map(function(slideContent){
            return `
            <div class="col c-4">
                    <div class="slide-footer">
                        <img src="${slideContent.icon}" alt="" class="slide-footer-icon">
                        <div class="slide-footer__content">
                            <div class="slide-footer__content-header">
                            ${slideContent.heading}
                            </div>
                            <div class="slide-footer__content-body">
                            ${slideContent.content}
                            </div>
                            <a href="${slideContent.links.href}" class="slide-footer__content-view">${slideContent.links.contentLink}</a>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        slideContentElement.innerHTML = html;
    },

    start(){
        this.randerMenu();
        this.randerModulTicker();
        this.handleProductTicket();
        this.randerslide();
        this.randerPackage();
        this.renderFooting();
        this.renderContentSlide();
    },
}

data.start()



// slide:
const slides = Array.from($$('.slide'));
const slideLable = Array.from($$('.slide-lable-item'));
let slideTime = 1;
var isOnclick = false;
var setTimeSlide;

for(let i of slideLable){
    i.onclick = () => {
        slideTime = Number.parseInt(i.dataset.id);
        handleSlide();
        clearInterval(setTimeSlideMain);
        if (setTimeSlide){
            clearInterval(setTimeSlide);
        }
        setTimeSlide = setInterval(() => {
            if(slideTime < slides.length){
                slideTime = slideTime + 1;
            }else{
                slideTime = 1;
            }
            handleSlide();
        }, 5000);
    }
}

var setTimeSlideMain = setInterval(() => {
    if(slideTime < slides.length){
        slideTime = slideTime + 1;
    }else{
        slideTime = 1;

    }
    handleSlide();
}, 5000);

function handleSlide() {
    for (let i of slides) {
        i.classList.remove('active')
        if(slideTime == i.dataset.slide){
            i.classList.add('active')
        }
    }
    for(let i of slideLable){
        i.classList.remove('active')
        if(slideTime == i.dataset.id){
            i.classList.add('active')
        }
    }
}

// get date:
const dateText = $('.day-text-js');
const secondsText = $('.seconds-text-js');
const minutesText = $('.minutues-text-js');
const hoursText = $('.hours-text-js');

function timeLive(){
    const dateNow = new Date();
    const dateStart = new Date(dateNow.getFullYear(), 0, 0);
    const diff = dateNow - dateStart;
    const oneDay = 1000*60*60*24;
    const day = Math.floor(diff/oneDay); // math.floor return số nguyên gần nhất lớn nhất.

    const hours = dateNow.getHours();
    const minutes = dateNow.getMinutes();
    const seconds = dateNow.getSeconds();
    
    if (day<10){
        dateText.innerHTML = '00'+day;
    }else if(day<100){
        dateText.innerHTML = '0'+day;
    }else{
        dateText.innerHTML = day;
    }

    if (seconds<10){
        secondsText.innerHTML = '00' + seconds;
    }else{
        secondsText.innerHTML = '0' + seconds;
    }

    if (minutes<10){
        minutesText.innerHTML = '00' + minutes;
    }else{
        minutesText.innerHTML = '0' + minutes;
    }

    if (hours<10){
        hoursText.innerHTML = '00' + hours;
    }else{
        hoursText.innerHTML = '0' + hours;
    }
}



setInterval(() => {
    timeLive()
}, 1000);