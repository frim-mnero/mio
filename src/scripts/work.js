const btnKitchenWork = document.querySelector('.work-kitchen');
const btnShkafWork = document.querySelector('.work-shkaf');

btnKitchenWork.onmouseenter=()=>{
    
};

btnShkafWork.onmouseenter=()=>{
    btnKitchenWork.classList.remove('active-work');
    btnShkafWork.classList.add('active-work');
};
btnShkafWork.onmouseleave=()=>{
    btnKitchenWork.classList.add('active-work');
    btnShkafWork.classList.remove('active-work');
};