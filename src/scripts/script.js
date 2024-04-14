const standartBtn = document.querySelectorAll(".standartBtn");
const komforttBtn = document.querySelectorAll(".komfortBtn");
const premiumtBtn = document.querySelectorAll(".premiumtBtn");

const coast = document.querySelectorAll('.coast');
const prices = [
    {
        "standart":105000,
        "komfort":140000,
        "premium":170000
    }
]
let price;

for(let i=0;i<komforttBtn.length;i++){
    
    komforttBtn[i].onmouseenter=()=>{
     standartBtn[i].classList.remove("activeBtn");
     komforttBtn[i].classList.add("activeBtn");
    //  price = coast[i].textContent.replace(/\s/g, '');
    //  coast[i].textContent=Number(price)+35000;
    }
    komforttBtn[i].onmouseleave=()=>{
        komforttBtn[i].classList.remove("activeBtn");
        standartBtn[i].classList.add("activeBtn");
    }
}

for(let i=0;i<premiumtBtn.length;i++){
    premiumtBtn[i].onmouseenter=()=>{
     standartBtn[i].classList.remove("activeBtn");
     premiumtBtn[i].classList.add("activeBtn");

    }
    premiumtBtn[i].onmouseleave=()=>{
        premiumtBtn[i].classList.remove("activeBtn");
        standartBtn[i].classList.add("activeBtn");
    }
}

