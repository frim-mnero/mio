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

const furnitureCont = document.querySelector('.phurniture-cont');

furniture.forEach((e)=>{
    let furnItemCard = `
        <img src="./src/images/materials/${e.img}.jpg" alt="" class="imgMaterial">
        <p class="material-secrcr none">${e.description}</p>                
    `;
    furnitureCont.insertAdjacentHTML('beforebegin',furnItemCard);
});