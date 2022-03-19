
//render data:
const modulMenuList1 = $('.modul-menu__list-1');
const modulMenuList2 = $('.modul-menu__list-2');
const footerContent = $('.footer-text-js');

const data = {
    dataModulMenuHome: [
        {
            id: '0',
            img: '../assets/img/header/berlin.jpg',
            city: 'Berlin',
            location: 'Europe',
            price: 'FROM  700 $',
            color:  'berlin',
        },
        {
            id: '1',
            img: '../assets/img/header/hongkong.jpg',
            city: 'Hong Kong',
            location: 'Asia',
            price: 'FROM  500 $',
            color:  'hongkong',
        },
        {
            id: '2',
            img: '../assets/img/header/san-francisco.jpg',
            city: 'San Francisco',
            location: 'United States',
            price: 'FROM  400 $',
            color:  'usa',
        },
        {
            id: '3',
            img: '../assets/img/header/Tuscany.jpg',
            city: 'Tuscany',
            location: 'Italy',
            price: 'FROM  730 $',
            color:  'tuscany',
        },
        {
            id: '4',
            img: '../assets/img/header/Amsterdam.jpg',
            city: 'Amsterdam',
            location: 'Netherlands',
            price: 'FROM  1500 $',
            color:  'amsterdam',
        },
        {
            id: '5',
            img: '../assets/img/header/Phuket.jpg',
            city: 'Phuket',
            location: 'Thailandia',
            price: 'FROM  1200 $',
            color:  'phuket',
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

    handleProductTicket(){
        const modalTicketLoca = Array.from($$('.modal-ticket__hidden-loca'));
                // console.log(modalTicketLoca)
                for (let i of modalTicketLoca){
            if (i.innerText == ''){
               i.style.height = '0';
            }}
    },

    
    start(){
        this.randerMenu();
        this.handleProductTicket();
        this.renderFooting();
    },
}

data.start()