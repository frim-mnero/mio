const furniture = [
    {
        "img":"furn1",
        "description":" Подъемный механиз AVENTOS HF"
    },
    {
        "img":"furn2",
        "description":" Подъемный механиз AVENTOS HL"
    },
    {
        "img":"furn3",
        "description":" Подъемный механиз AVENTOS HS"
    },
    {
        "img":"furn4",
        "description":"Петли Hettich Sensys"
    },
    {
        "img":"furn5",
        "description":"Ящик Hettich AvanTech YOU"
    },
    {
        "img":"furn6",
        "description":"Система внутренних разделителей ORGA-LINE"
    },
    {
        "img":"furn7",
        "description":"WingLine cистема фурнитуры для складных дверей"
    },
    {
        "img":"furn8",
        "description":"Системы хранения  SPACE TOWER"
    },
    {
        "img":"furn9",
        "description":"Cистема фурнитуры для раздвижных дверей TopLine XL"
    },
];

const fasads = [
    {
        "img":"fasad1",
        "description":"высокоглянцевый акриловый пластик"
    },
    {
        "img":"fasad2",
        "description":"3D фасады обработанные на ЧПУ станке"
    },
    {
        "img":"fasad3",
        "description":"Фасады с фотопечатью"
    },
    {
        "img":"fasad4",
        "description":"Фасады обтянутые кожей"
    },
    {
        "img":"fasad5",
        "description":"Жалюзийные мебельные фасады"
    },
    {
        "img":"fasad6",
        "description":"Фасады из искусственного камня"
    },
    {
        "img":"fasad7",
        "description":"Фасады с металлическим покрытием"
    },
    {
        "img":"fasad8",
        "description":"Стеклянные фасады"
    },
    {
        "img":"fasad9",
        "description":"Элемент патинирования"
    },
];

const stols=[
    {
     "img":"stol1",
     "description":"Кварцевый агломерат"   
    },
    {
     "img":"stol2",
     "description":"Массив дерева"   
    },
    {
     "img":"stol3",
     "description":"Изделия из гранита"   
    },
    {
     "img":"stol4",
     "description":"Стекло"   
    },
    {
     "img":"stol5",
     "description":"Металл"   
    },
    {
     "img":"stol6",
     "description":"Кухонные столешницы из акрила"   
    },
    {
     "img":"stol7",
     "description":"Бетон"   
    },
    {
     "img":"stol8",
     "description":"Ультратонкая"   
    },
    {
     "img":"stol9",
     "description":"Искусственный камень"   
    },
];

const furnitureCont = document.querySelector('.phurniture-cont');
const fasadsCont = document.querySelector(".fasads-cont");
const stolCont = document.querySelector(".stol-cont");


furniture.forEach((e)=>{
    let furnItemCard = `
        <div class="itemMaterial">
            <img src="./src/images/materials/${e.img}.jpg" alt="" class="imgMaterial imgFurn">
            <p class="material-desrcr descrFurn none">${e.description}</p>                
        </div>
            `;
    furnitureCont.insertAdjacentHTML('beforeend',furnItemCard);
});

fasads.forEach((e)=>{
    let fasadItemCard = `
        <div class="itemMaterial matFas">
            <img src="./src/images/fasads/${e.img}.jpg" alt="" class="imgMaterial imgFasad">
            <p class="material-desrcr descrFasad none">${e.description}</p>                
        </div>
            `;
    fasadsCont.insertAdjacentHTML('beforeend',fasadItemCard);
});

stols.forEach((e)=>{
    let stolItemCard = `
        <div class="itemMaterial matStol">
            <img src="./src/images/stols/${e.img}.jpg" alt="" class="imgMaterial imgStol">
            <p class="material-desrcr descrStol none">${e.description}</p>                
        </div>
            `;
    stolCont.insertAdjacentHTML('beforeend',stolItemCard);
});

const furnBtn = document.querySelector('.phurniture');
const fasadBtn = document.querySelector('.fasads');
const stolBtn = document.querySelector('.stol');

furnBtn.onclick = ()=>{
    fasadBtn.classList.remove('activeBtn');
    furnBtn.classList.add('activeBtn');
    stolBtn.classList.remove('activeBtn');

    fasadsCont.classList.add('noneMat');
    stolCont.classList.add('noneMat');
    furnitureCont.classList.remove('noneMat');

}


fasadBtn.onclick = ()=>{
    fasadBtn.classList.add('activeBtn');
    furnBtn.classList.remove('activeBtn');
    stolBtn.classList.remove('activeBtn');

    furnitureCont.classList.add('noneMat');
    stolCont.classList.add('noneMat');
    fasadsCont.classList.remove('noneMat');
}

stolBtn.onclick=()=>{
    fasadBtn.classList.remove('activeBtn');
    furnBtn.classList.remove('activeBtn');
    stolBtn.classList.add('activeBtn');

    furnitureCont.classList.add('noneMat');
    fasadsCont.classList.add('noneMat');
    stolCont.classList.remove('noneMat');
}

let imgFurn = document.querySelectorAll('.imgFurn');
let descrFurn = document.querySelectorAll('.descrFurn');
let imgFasad = document.querySelectorAll(".imgFasad");
let descrFasad = document.querySelectorAll('.descrFasad');
let imgStol = document.querySelectorAll('.imgStol');
let descrStol = document.querySelectorAll('.descrStol');

let itemMaterial=document.querySelectorAll('.itemMaterial');
let matFas=document.querySelectorAll('.matFas');
let matStol=document.querySelectorAll('.matStol');

let body = document.querySelector('body');

let countOpenOffItem=0;

for(let i = 0;i<imgFurn.length;i++){
    imgFurn[i].onclick=()=>{
        countOpenOffItem++;
        imgFurn[i].classList.add('fixedCenterMaterial');
        body.classList.add('noScroll');
        itemMaterial[i].classList.add('shadow');
        descrFurn[i].classList.remove('none');
        if(countOpenOffItem%2==0){
            imgFurn[i].classList.remove('fixedCenterMaterial');
            body.classList.remove('noScroll');
            itemMaterial[i].classList.remove('shadow');
            descrFurn[i].classList.add('none');
        }
    }
};

for(let i = 0;i<imgFasad.length;i++){
    imgFasad[i].onclick=()=>{
        countOpenOffItem++;
        imgFasad[i].classList.add('fixedCenterMaterial');
        body.classList.add('noScroll');
        matFas[i].classList.add('shadow');
        descrFasad[i].classList.remove('none');
        if(countOpenOffItem%2==0){
            imgFasad[i].classList.remove('fixedCenterMaterial');
            body.classList.remove('noScroll');
            matFas[i].classList.remove('shadow');
            descrFasad[i].classList.add('none');
        }
    }
};

for(let i = 0;i<imgStol.length;i++){
    imgStol[i].onclick=()=>{
        countOpenOffItem++;
        imgStol[i].classList.add('fixedCenterMaterial');
        body.classList.add('noScroll');
        matStol[i].classList.add('shadow');
        descrStol[i].classList.remove('none');
        if(countOpenOffItem%2==0){
            imgStol[i].classList.remove('fixedCenterMaterial');
            body.classList.remove('noScroll');
            matStol[i].classList.remove('shadow');
            descrStol[i].classList.add('none');
        }
    }
};
