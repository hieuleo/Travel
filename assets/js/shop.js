
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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

const ahihi = $$('.hix')
//uodate