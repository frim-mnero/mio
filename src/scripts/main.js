
const prices = [
    {
        "img":"kitchen01",
        "infoStandart":"Фасады - пленка пвх ",
        "infoKomfort":"фасады - пластик . фурнитура с доводчиком",
        "infoPremium":"фасады –эмаль( крашенные). Фурнитура  Blum,  Hettich)",
        "standart":"98 000",
        "komfort":"134 000",
        "premium":"178 000",
        "size":"355 см."
    },
    {
        "img":"kitchen02",
        "infoStandart":"Фасады - пленка пвх с фрезеровкой ",
        "infoKomfort":"фасады – комбинированные (пластик, пленка пвх с фрезеровкой ). Фурнитура с доводчиком",
        "infoPremium":"фасады –эмаль( крашенные) с фрезеровкой . Фурнитура  Blum,  Hettich",
        "standart":"145 000",
        "komfort":"187 000",
        "premium":"231 000",
        "size":"Длина 300 см,Ширина 130см"
    },
    {
        "img":"kitchen03",
        "infoStandart":"Фасады –пленка пвх с  интегрированной ручкой ",
        "infoKomfort":"( фасады – пленка пвх с  интегрированной ручкой . Корпус лдсп Egger . Фурнитура с доводчиком",
        "infoPremium":"(фасады –эмаль( крашенные) с  интегрированной ручкой . Фурнитура  Blum,  Hettich",
        "standart":"230 000",
        "komfort":"280 000",
        "premium":"340 000",
        "size":"Длина  380 см, Ширина 250см"
    },
    {
        "img":"kitchen04",
        "infoStandart":"Фасады - пленка пвх с фрезеровкой ",
        "infoKomfort":"фасады – пленка пвх с фрезеровкой . Корпус лдсп Egger . фурнитура с доводчиком",
        "infoPremium":"фасады –эмаль( крашенные). Фурнитура  Blum,  Hettich",
        "standart":"180 000",
        "komfort":"215 000",
        "premium":"275 000",
        "size":"Длина  200 см, Ширина 200см"
    },
    {
        "img":"kitchen05",
        "infoStandart":"Фасады - пленка пвх ",
        "infoKomfort":" фасады - пластик . фурнитура с доводчиком",
        "infoPremium":"фасады –пластик . Фурнитура  Blum,  Hettich",
        "standart":"188 000",
        "komfort":"235 000",
        "premium":"290 000",
        "size":"Длина 480 см"
    },
    {
        "img":"kitchen06",
        "infoStandart":"Фасады - пленка пвх с фрезеровкой ",
        "infoKomfort":"фасады – пленка пвх с фрезеровкой ) . Фурнитура с доводчиком",
        "infoPremium":"фасады –эмаль( крашенные) с фрезеровкой . Фурнитура  Blum,  Hettich",
        "standart":"250 000",
        "komfort":"320 000",
        "premium":"390 000",
        "size":"Длина  370 см,Ширина 220 см"
    }
]

const shkafprice=[
    {
        "img":"shkaf01",
        "infoStandart":"Фасады – лдсп Egger",
        "infoKomfort":"фасады – пленка пвх . фурнитура с доводчиком",
        "infoPremium":"фасады –эмаль( крашенные). Фурнитура Blum, Hettich",
        "standart":"53 000",
        "komfort":"88 000",
        "premium":"114 000",
        "size":"180 см."
    },
    {
        "img":"shkaf02",
        "infoStandart":"Фасады – Гравировка на зеркале",
        "infoKomfort":"фасады – Гравировка на зеркале. Фурнитура с доводчиком",
        "infoPremium":"фасады –Зеркало с фацетом. Фурнитура Blum, Hettich",
        "standart":"103 000",
        "komfort":"145 000",
        "premium":"193 000",
        "size":"170 см."
    },
    {
        "img":"shkaf03",
        "infoStandart":"Фасады – лдсп Egger",
        "infoKomfort":"фасады – пленка пвх . фурнитура с доводчиком",
        "infoPremium":"фасады –эмаль( крашенные). Фурнитура Blum, Hettich",
        "standart":"84 000",
        "komfort":"128 000",
        "premium":"169 000",
        "size":"230 см."
    },
    {
        "img":"shkaf04",
        "infoStandart":"(Фасады – лдсп Egger ",
        "infoKomfort":"фасады – пленка пвх . фурнитура с доводчиком",
        "infoPremium":"фасады –эмаль( крашенные). Фурнитура Blum, Hettich",
        "standart":"142 000",
        "komfort":"188 000",
        "premium":"244 000",
        "size":"200 см."
    },
    {
        "img":"shkaf05",
        "infoStandart":"Фасады – лдсп Egger",
        "infoKomfort":"фасады – пленка пвх . фурнитура с доводчиком",
        "infoPremium":"фасады –эмаль( крашенные). Фурнитура Blum, Hettich",
        "standart":"122 000",
        "komfort":"164 000",
        "premium":"214 000",
        "size":"240см."
    },
    {
        "img":"shkaf06",
        "infoStandart":"Фасады –фотопечать ",
        "infoKomfort":"( фасады – фотопечать . фурнитура с доводчиком",
        "infoPremium":"фасады –фотопечать. Фурнитура Blum, Hettich",
        "standart":"94 000",
        "komfort":"113 000",
        "premium":"155 000",
        "size":"200 см."
    }
];

const kitchen=document.querySelector('.kitchen');
const shkaf = document.querySelector('.shkaf');
const other = document.querySelector('.other');

const btnKitchen=document.querySelector('.btn-kitchen');
const btnShkaf=document.querySelector('.btn-shkaf');
const btnOther=document.querySelector('.btn-other');




function renderKitchen(){
    prices.forEach((e)=>{
        modelDescriptionText=e.infoStandart;
        coastPrice=String(e.standart)
        
        let cardItem=` <div class="models-item">
                        <div class="model-mainInfo">
                            <img src="./src/images/${e.img}.jpg" alt="" class="model-item-img">
                            <p class="model-item-description" id="none"></p>
                        </div>
                        <div class="models-moreInfo">
                            <div class="model-item-btnsPrice">
                                <button class="modelPrice-btn standartBtn activeBtn standartKitchen">Стандарт</button>
                                <button class="modelPrice-btn komfortBtn komfortKitchen">Комфорт</button>
                                <button class="modelPrice-btn premiumtBtn premiumKitchen">Премиум</button>
                            </div>
                        </div>
    
                        <div class="model-infoPrice">
                            <div class="infoPrice-titles">
                                <p class="infoPrice-title">Габаритные размеры</p>
                                <p class="infoPrice-title">Стоимость</p>
                            </div>
                            <div class="infoPrice-info">
                                <p class="infoPrice-info-size">${e.size}</p>
                                <p class="infoPrice-info-coast"><span class="coast">${coastPrice}</span>  руб.</p>
                            </div>
                        </div>
                    </div>`;
                    kitchen.insertAdjacentHTML('beforeend',cardItem);
    });
    
};
function renderShkaf(){
    shkafprice.forEach((e)=>{
        modelDescriptionText=e.infoStandart;
        coastPrice=String(e.standart)
        let cardItemShkaf=` <div class="models-item">
                        <div class="model-mainInfo">
                            <img src="./src/images/${e.img}.jpg" alt="" class="model-item-img">
                            <p class="model-item-descriptionS" id="none"></p>
                        </div>
                        <div class="models-moreInfo">
                            <div class="model-item-btnsPrice">
                                <button class="modelPrice-btn standartBtn activeBtn standartShkaf">Стандарт</button>
                                <button class="modelPrice-btn komfortBtn komfortShkaf">Комфорт</button>
                                <button class="modelPrice-btn premiumtBtn premiumShkaf">Премиум</button>
                            </div>
                        </div>
    
                        <div class="model-infoPrice">
                            <div class="infoPrice-titles">
                                <p class="infoPrice-title">Габаритные размеры</p>
                                <p class="infoPrice-title">Стоимость</p>
                            </div>
                            <div class="infoPrice-info">
                                <p class="infoPrice-info-size">${e.size}</p>
                                <p class="infoPrice-info-coast"><span class="coastS">${coastPrice}</span>  руб.</p>
                            </div>
                        </div>
                    </div>`;
                    shkaf.insertAdjacentHTML('beforeend',cardItemShkaf);
    });
    
};

renderKitchen();
renderShkaf(); 



const coast = document.querySelectorAll('.coast');
const coastS = document.querySelectorAll('.coastS');

const btnks = document.querySelectorAll('.standartKitchen');
const btnkk=document.querySelectorAll('.komfortKitchen');
const btnkp=document.querySelectorAll('.premiumKitchen');

const btnss = document.querySelectorAll('.standartShkaf');
const btnsk = document.querySelectorAll('.komfortShkaf');
const btnsp = document.querySelectorAll('.premiumShkaf');

const model_infoDescr=document.querySelectorAll(".model-item-description");
const model_infoDescrShkaf=document.querySelectorAll(".model-item-descriptionS");



btnKitchen.onclick=()=>{
    kitchen.classList.remove('none');
    shkaf.classList.add('none');
    btnKitchen.classList.add('active');
    btnShkaf.classList.remove('active');
    namer=1;
    console.log(namer);
};

btnShkaf.onclick=()=>{
    btnKitchen.classList.remove('active');
    btnShkaf.classList.add('active');
    kitchen.classList.add('none');
    shkaf.classList.remove('none');

};

// standart kitchen

    for(let i = 0;i<btnks.length;i++){
        btnks[i].onmouseenter=()=>{
            model_infoDescr[i].removeAttribute('id');
            model_infoDescr[i].textContent=prices[i].infoStandart;
        };
    
        btnks[i].onmouseleave=()=>{
            model_infoDescr[i].setAttribute('id','none');
        };
    };
    
    
    
    for(let i = 0;i<btnkk.length;i++){
        btnkk[i].onmouseenter=()=>{
            btnkk[i].classList.add('activeBtn');
            btnks[i].classList.remove('activeBtn');
    
            model_infoDescr[i].removeAttribute('id');
            model_infoDescr[i].textContent=prices[i].infoKomfort;
    
            for(let j = 0;j<prices.length;j++){
                coast[i].textContent=prices[i].komfort;           
            }
            
        };
    
        btnkk[i].onmouseleave=()=>{
            btnkk[i].classList.remove('activeBtn');
            btnks[i].classList.add('activeBtn');
    
            model_infoDescr[i].setAttribute('id','none');
    
            for(let j = 0;j<prices.length;j++){
                coast[i].textContent=prices[i].standart;
            }
        };
    }
    
    for(let i = 0;i<btnkp.length;i++){
        btnkp[i].onmouseenter=()=>{
            btnkp[i].classList.add('activeBtn');
            btnks[i].classList.remove('activeBtn');
    
            model_infoDescr[i].removeAttribute('id');
            model_infoDescr[i].textContent=prices[i].infoPremium;
    
            for(let j = 0;j<prices.length;j++){
                coast[i].textContent=prices[i].premium;
            }
    
        };
        btnkp[i].onmouseleave=()=>{
            btnkp[i].classList.remove('activeBtn');
            model_infoDescr[i].setAttribute('id','none');
    
            for(let j = 0;j<prices.length;j++){
                coast[i].textContent=prices[i].standart;
            }
        };
    };
    
 //standart shkaf
    for(let i = 0;i<btnss.length;i++){
        btnss[i].onmouseenter=()=>{
            model_infoDescrShkaf[i].removeAttribute('id');
            model_infoDescrShkaf[i].textContent=shkafprice[i].infoStandart;
        };

        btnss[i].onmouseleave=()=>{
            model_infoDescrShkaf[i].setAttribute('id','none');
        };
    }

    for(let i = 0;i<btnsk.length;i++){
        btnsk[i].onmouseenter=()=>{
            btnsk[i].classList.add('activeBtn');
            btnss[i].classList.remove('activeBtn');
            model_infoDescrShkaf[i].removeAttribute('id');
            model_infoDescrShkaf[i].textContent=shkafprice[i].infoKomfort;
            for(let j = 0;j<shkafprice.length;j++){
                coastS[i].textContent=shkafprice[i].komfort;
            }
        };
        btnsk[i].onmouseleave=()=>{
            btnsk[i].classList.remove('activeBtn');
            btnss[i].classList.add('activeBtn');
            model_infoDescrShkaf[i].setAttribute('id','none');
            for(let j = 0;j<shkafprice.length;j++){
                coastS[i].textContent=shkafprice[i].standart;
            }
        };
    };
      
    for(let i = 0;i<btnsp.length;i++){
        btnsp[i].onmouseenter=()=>{
            btnsp[i].classList.add('activeBtn');
            btnss[i].classList.remove('activeBtn');
            model_infoDescrShkaf[i].removeAttribute('id');
            model_infoDescrShkaf[i].textContent=shkafprice[i].infoPremium;
            for(let j = 0;j<shkafprice.length;j++){
                coastS[i].textContent=shkafprice[i].premium;
            }
        };
        btnsp[i].onmouseleave=()=>{
            btnsp[i].classList.remove('activeBtn');
            btnss[i].classList.add('activeBtn');
            model_infoDescrShkaf[i].setAttribute('id','none');
            for(let j = 0;j<shkafprice.length;j++){
                coastS[i].textContent=shkafprice[i].standart;
            }
        };
    }
    

