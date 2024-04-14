const standartBtn = document.querySelectorAll(".standartBtn");
const komforttBtn = document.querySelectorAll(".komfortBtn");
const premiumtBtn = document.querySelectorAll(".premiumtBtn");

const coast = document.querySelectorAll('.coast');
const prices = [
    {
        "standart":"105 000",
        "komfort":"140 000",
        "premium":"170 000"
    },
    {
        "standart":"119 000",
        "komfort":"150 000",
        "premium":"180 000"
    }
]
let price;

for(let i=0;i<komforttBtn.length;i++){
    
    komforttBtn[i].onmouseenter=()=>{
     standartBtn[i].classList.remove("activeBtn");
     komforttBtn[i].classList.add("activeBtn");
    //  i.preventDefault();
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

