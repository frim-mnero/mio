


let coastPrice;
const prices = [
    {
        "img":"kitchen01",
        "infoStandart":"Фасады - пленка пвх ",
        "infoKomfort":"фасады - пластик . фурнитура с доводчиком",
        "infoStandart":"фасады –эмаль( крашенные). Фурнитура  Blum,  Hettich)",
        "standart":"98 000",
        "komfort":"134 000",
        "premium":"178 000",
        "size":"355 см."
    },
    {
        "img":"kitchen01",
        "standart":"119 000",
        "komfort":"150 000",
        "premium":"180 000"
    },
    {
        "img":"kitchen01",
        "standart":"132 000",
        "komfort":"192 000",
        "premium":"256 000"
    },
    {
        "img":"kitchen01",
        "standart":"123 000",
        "komfort":"177 000",
        "premium":"237 000"
    },
    {
        "img":"kitchen01",
        "standart":"105 000",
        "komfort":"147 000",
        "premium":"215 000"
    },
    {
        "img":"kitchen01",
        "standart":"75 000",
        "komfort":"103 000",
        "premium":"146 000"
    }
]
let price;


const containerKitchen = document.querySelector('.models-items');



prices.forEach((e)=>{
    coastPrice=String(e.standart)
    let cardItem=` <div class="models-item">
                    <div class="model-mainInfo">
                        <img src="./src/images/${e.img}.jpg" alt="" class="model-item-img">
                    
                    </div>
                    <div class="models-moreInfo">
                        <!-- <p class="modelInfo-text">Белая кухня с интегрированной мойкой "модель 60"</p> -->
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

})
const standartBtn = document.querySelectorAll(".standartBtn");
const komforttBtn = document.querySelectorAll(".komfortBtn");
const premiumtBtn = document.querySelectorAll(".premiumtBtn");

const coast = document.querySelectorAll('.coast');

for(let i=0;i<komforttBtn.length;i++){
    
    komforttBtn[i].onmouseenter=()=>{
     standartBtn[i].classList.remove("activeBtn");
     komforttBtn[i].classList.add("activeBtn");
     for(let j = 0;j<prices.length;j++){
            coast[i].textContent=prices[i].komfort;
        }
    }
    komforttBtn[i].onmouseleave=()=>{
        komforttBtn[i].classList.remove("activeBtn");
        standartBtn[i].classList.add("activeBtn");
        for(let j = 0;j<prices.length;j++){
            coast[i].textContent=prices[i].standart;
        }
    }
}

for(let i=0;i<premiumtBtn.length;i++){
    premiumtBtn[i].onmouseenter=()=>{
     standartBtn[i].classList.remove("activeBtn");
     premiumtBtn[i].classList.add("activeBtn");
     for(let j = 0;j<prices.length;j++){
        coast[i].textContent=prices[i].premium;
    }
    }
    premiumtBtn[i].onmouseleave=()=>{
        premiumtBtn[i].classList.remove("activeBtn");
        standartBtn[i].classList.add("activeBtn");
        for(let j = 0;j<prices.length;j++){
            coast[i].textContent=prices[i].standart;
        }

    }
   
}