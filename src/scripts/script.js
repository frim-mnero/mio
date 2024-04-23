


let coastPrice;
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
];

const price_shkaf=[
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

const containerKitchen = document.querySelector('.models-items');
const btnShkaf=document.querySelector(".btn-shkaf");
const btnKitchen=document.querySelector(".btn-kitchen");
const btnOther = document.querySelector('.btn-other');
const contBtns=document.querySelectorAll('models-btn-item');





function renderShkaf(){
    price_shkaf.forEach((e)=>{
        modelDescriptionText=e.infoStandart;
        coastPrice=String(e.standart)
        let cardItemShkaf=` <div class="models-item">
                        <div class="model-mainInfo">
                            <img src="./src/images/${e.img}.jpg" alt="" class="model-item-img">
                            <p class="model-item-description" id="none"></p>
                        </div>
                        <div class="models-moreInfo">
                            <div class="model-item-btnsPrice">
                                <button class="modelPrice-btn standartBtn activeBtn">Стандарт</button>
                                <button class="modelPrice-btn komfortBtn">Комфорт</button>
                                <button class="modelPrice-btn premiumtBtn">Премиум</button>
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
                    containerKitchen.insertAdjacentHTML('beforeend',cardItemShkaf);
    });
    
}

let price;
let modelDescriptionText;
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
                                <button class="modelPrice-btn standartBtn activeBtn">Стандарт</button>
                                <button class="modelPrice-btn komfortBtn">Комфорт</button>
                                <button class="modelPrice-btn premiumtBtn">Премиум</button>
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
        containerKitchen.insertAdjacentHTML('beforeend',cardItem);
    });
}


renderKitchen();

const standartBtn = document.querySelectorAll(".standartBtn");
const komforttBtn = document.querySelectorAll(".komfortBtn");
const premiumtBtn = document.querySelectorAll(".premiumtBtn");

const coast = document.querySelectorAll('.coast');

const model_infoDescr=document.querySelectorAll(".model-item-description");



for(let i = 0;i<standartBtn.length;i++){
    standartBtn[i].onclick=()=>{
        alert('standart click');
    }
    standartBtn[i].onmouseenter=()=>{
    model_infoDescr[i].removeAttribute('id');
    model_infoDescr[i].textContent=prices[i].infoStandart; 
   }
   standartBtn[i].onmouseleave=()=>{
    model_infoDescr[i].setAttribute('id','none');
   }

}

for(let i=0;i<komforttBtn.length;i++){
    
    komforttBtn[i].onmouseenter=()=>{
     standartBtn[i].classList.remove("activeBtn");
     komforttBtn[i].classList.add("activeBtn");
        model_infoDescr[i].removeAttribute('id');
         model_infoDescr[i].textContent=prices[i].infoKomfort;
     for(let j = 0;j<prices.length;j++){
            coast[i].textContent=prices[i].komfort;           
        }
    }
    komforttBtn[i].onmouseleave=()=>{
        komforttBtn[i].classList.remove("activeBtn");
        standartBtn[i].classList.add("activeBtn");
        for(let j = 0;j<prices.length;j++){
            coast[i].textContent=prices[i].standart;
            model_infoDescr[i].setAttribute('id','none');
        }
    }
}

for(let i=0;i<premiumtBtn.length;i++){
    premiumtBtn[i].onmouseenter=()=>{
     standartBtn[i].classList.remove("activeBtn");
     premiumtBtn[i].classList.add("activeBtn");
     model_infoDescr[i].removeAttribute('id');
     model_infoDescr[i].textContent=prices[i].infoPremium;
     for(let j = 0;j<prices.length;j++){
        coast[i].textContent=prices[i].premium;
    }
    }
    premiumtBtn[i].onmouseleave=()=>{
        premiumtBtn[i].classList.remove("activeBtn");
        standartBtn[i].classList.add("activeBtn");
        for(let j = 0;j<prices.length;j++){
            coast[i].textContent=prices[i].standart;
            model_infoDescr[i].setAttribute('id','none');
        }

    }
   
}
btnKitchen.onclick=()=>{
    btnShkaf.classList.remove('active');
    btnOther.classList.remove('active');
    btnKitchen.classList.add('active');
    
    while(containerKitchen.firstChild){
        containerKitchen.removeChild(containerKitchen.firstChild);
    }
    renderKitchen();
}

btnShkaf.onclick =()=>{
    btnKitchen.classList.remove('active');
    btnOther.classList.remove('active');
    btnShkaf.classList.add('active');
    while(containerKitchen.firstChild){
        containerKitchen.removeChild(containerKitchen.firstChild);
    }
    renderShkaf();
}