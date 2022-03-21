
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



// randerShop 
const shop = $('.shop');

const renderShopMain = function(){
    shop.innerHTML =`<!-- header -->
    <div class="header">

        <div class="content-pages">
            <p>Shop</p>
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
            <div class="row shop__return--js">
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
    </div>`
} 
renderShopMain();


const shopElement = $('.shop__return--js');

const dataShop = {
    dataProductShop: [
        {
            linkProduct: '#',
            img: '..//assets/img/shop/products/product-1.jpg',
            nameProduct: 'Bora Bora',
            priceStart: '$1,000.00',
            priceEnd: '$2,000.00',
            buttonProduct: 'SELECT OPTIONS',
            sale: false,
        },
        {
            linkProduct: '#',
            img: '..//assets/img/shop/products/product-2.jpg',
            nameProduct: 'Hawaii Coast',
            priceStart: '$1,000.00',
            priceEnd: '$800.00',
            buttonProduct: 'ADD TO CART',
            sale: true,
        },
        {
            linkProduct: '#',
            img: '..//assets/img/shop/products/product-3.jpg',
            nameProduct: 'Jamaica',
            priceStart: '$1,000.00',
            priceEnd: '$2,000.00',
            buttonProduct: 'SELECT OPTIONS',
            sale: false,
        },
        {
            linkProduct: '#',
            img: '..//assets/img/shop/products/product-4.jpg',
            nameProduct: 'Ko Samui',
            priceStart: '$1,200.00',
            priceEnd: '$999.00',
            buttonProduct: 'ADD TO CART',
            sale: true,
        },
        {
            linkProduct: '#',
            img: '..//assets/img/shop/products/product-5.jpg',
            nameProduct: 'Le Seychelles',
            priceStart: '$1,000.00',
            priceEnd: '$2,000.00',
            buttonProduct: 'SELECT OPTIONS',
            sale: false,
        },
        {
            linkProduct: '#',
            img: '..//assets/img/shop/products/product-6.jpg',
            nameProduct: 'Maldives',
            priceStart: '$900.00',
            priceEnd: '$500.00',
            buttonProduct: 'ADD TO CART',
            sale: true,
        },
        {
            linkProduct: '#',
            img: '..//assets/img/shop/products/product-7.jpg',
            nameProduct: 'Phuket',
            priceStart: '$1,000.00',
            priceEnd: '$2,000.00',
            buttonProduct: 'SELECT OPTIONS',
            sale: false,
        },
        {
            linkProduct: '#',
            img: '..//assets/img/shop/products/product-8.jpg',
            nameProduct: 'Polynesia',
            priceStart: '',
            priceEnd: '$1,600.00',
            buttonProduct: 'ADD TO CART',
            sale: false,
        },
    ],

    handleRenderProduct(){
        let html;
        html = this.dataProductShop.map(function(product){
            if(product.sale && product.buttonProduct === 'ADD TO CART' && product.priceStart !==''){
                return `
                <div class="shop__modul c-3">
                <div class="shop__product">
                    <a href="${product.linkProduct}" class="shop__product__link">
                        <div class="shop__product__header">
                            <img src="${product.img}" alt="${product.nameProduct}">
                            <div class="sale"> SALE!</div>
                        </div>
                        <div class="shop__product__foot">
                            <p class="text-loca">${product.nameProduct}</p>
                            <div class="icon">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="price">
                                <p class="price__cast price__cast--start">${product.priceStart}</p>
                                <p class="price__cast">-</p>
                                <p class="price__cast price__cast--end">${product.priceEnd}</p>
                            </div>
                        </div>
                    </a>
                    <div class="select">
                        <a class="shop-add-js" >${product.buttonProduct}</a>
                        <i class="fa-solid fa-check"></i>
                        <div class="select__link">
                            <div>
                                <a href="${product.linkProduct}" class="shop__select__view">VIEW CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `
            }else if(product.priceStart ==='') {
                return `
                <div class="shop__modul c-3">
                <div class="shop__product">
                    <a href="${product.linkProduct}" class="shop__product__link">
                        <div class="shop__product__header">
                            <img src="${product.img}" alt="${product.nameProduct}">
                        </div>
                        <div class="shop__product__foot">
                            <p class="text-loca">${product.nameProduct}</p>
                            <div class="icon">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="price">
                                <p class="price__cast">${product.priceEnd}</p>
                            </div>
                        </div>
                    </a>
                    <div class="select">
                        <a class="shop-add-js" >${product.buttonProduct}</a>
                        <i class="fa-solid fa-check"></i>
                        <div class="select__link">
                            <div>
                                <a href="${product.linkProduct}" class="shop__select__view">VIEW CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `
            }else if(product.sale === true) {
                return`
                <div class="shop__modul c-3">
                    <div class="shop__product">
                        <a href="${product.linkProduct}" class="shop__product__link">
                            <div class="shop__product__header">
                                <img src="${product.img}" alt="${product.nameProduct}">
                                <div class="sale"> SALE!</div>
                            </div>
                            <div class="shop__product__foot">
                                <p class="text-loca">${product.nameProduct}</p>
                                <div class="icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div class="price">
                                    <p class="price__cast price__cast--start">${product.priceStart}</p>
                                    <p class="price__cast">-</p>
                                    <p class="price__cast price__cast--end">${product.priceEnd}</p>
                                </div>
                            </div>
                        </a>
                        <div class="select">
                                    <a href="${product.linkProduct}">${product.buttonProduct}</a>
                        </div>
                    </div>
                </div>
                `
            }else if(product.buttonProduct === 'ADD TO CART') {
                return `
                <div class="shop__modul c-3">
                <div class="shop__product">
                    <a href="${product.linkProduct}" class="shop__product__link">
                        <div class="shop__product__header">
                            <img src="${product.img}" alt="${product.nameProduct}">
                        </div>
                        <div class="shop__product__foot">
                            <p class="text-loca">${product.nameProduct}</p>
                            <div class="icon">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="price">
                                <p class="price__cast price__cast--start">${product.priceStart}</p>
                                <p class="price__cast price__cast--end">${product.priceEnd}</p>
                            </div>
                        </div>
                    </a>
                    <div class="select">
                        <a class="shop-add-js" >${product.buttonProduct}</a>
                        <i class="fa-solid fa-check"></i>
                        <div class="select__link">
                            <div>
                                <a href="${product.linkProduct}" class="shop__select__view">VIEW CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `
            }else{
                return `
                <div class="shop__modul c-3">
                <div class="shop__product">
                    <a href="${product.linkProduct}" class="shop__product__link">
                        <div class="shop__product__header">
                            <img src="${product.img}" alt="${product.nameProduct}">
                        </div>
                        <div class="shop__product__foot">
                            <p class="text-loca">${product.nameProduct}</p>
                            <div class="icon">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="price">
                                <p class="price__cast">${product.priceStart}</p>
                                <p class="price__cast">-</p>
                                <p class="price__cast">${product.priceEnd}</p>
                            </div>
                        </div>
                    </a>
                    <div class="select">
                                <a href="${product.linkProduct}">${product.buttonProduct}</a>
                    </div>
                </div>
            </div>
                `
            }
            
          
        }).join('')
        shopElement.innerHTML = html;
    },

    startShop() {
        this.handleRenderProduct();
    },
}

dataShop.startShop();

const selectBtns = $$('.shop-add-js');
const iconChecks = $$('.shop-add-js + i')

function handleShopClick() {
    for ( let selectBtn of selectBtns){
        selectBtn.onclick = () => {
            selectBtn.classList.add('active');
        }
    }
}

handleShopClick();