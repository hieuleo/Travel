const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//render data:
const modulMenuList1 = $('.modul-menu__list-1');
const modulMenuList2 = $('.modul-menu__list-2');
const productTicket = $('.product-ticket');
const slideWrapper = $('.slide-wrapper');
const modalPackages = $('.modal-packages');

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
    
    start(){
        this.randerMenu();
        this.randerModulTicker();
        this.handleProductTicket();
        this.randerslide();
        this.randerPackage();
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