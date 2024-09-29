const menuElement = document.querySelector('.header-menu')
const headerWrapper = document.querySelector('.header-wrapper')
const headerWrapperElement = document.querySelector('.header-wrapper-element')
const headerClose = document.querySelector('.header-wrapper-element-close')

menuElement.addEventListener('click', (e) =>{
    headerWrapper.style.display = 'block'
    e.stopPropagation()
})

headerClose.addEventListener('click', () =>{
    headerWrapper.style.display = 'none'
})

headerWrapper.addEventListener('click', (e) =>{
    headerWrapper.style.display = 'none'
})
headerWrapperElement.addEventListener('click', (e) =>{
    e.stopPropagation();
})

///slideshow events
const eventsContainerWrapper = document.querySelector('.events-container-wrapper');
const eventsContainers = document.querySelectorAll('.events-container');
const eventsArrowLeft = document.querySelector('.events-arrowLeft');
const eventsArrowRight = document.querySelector('.events-arrowRight');
let index = 0;

// Hiển thị slide đầu tiên
showSlideEvent(index);

// Hàm hiển thị slide hiện tại
function showSlideEvent(index) {
    const width = eventsContainers[0].offsetWidth;
    eventsContainerWrapper.style.transform = `translateX(${-width * index}px)`;
}

// Sự kiện cho nút mũi tên phải
eventsArrowRight.addEventListener('click', () => {
    index++;
    if (index >= eventsContainers.length) {
        index = 0; // Quay lại slide đầu tiên
    }
    showSlideEvent(index); // Hiển thị slide mới
});

// Sự kiện cho nút mũi tên trái
eventsArrowLeft.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = eventsContainers.length - 1; // Quay lại slide cuối cùng
    }
    showSlideEvent(index); // Hiển thị slide mới
});

///slideshow tranning
const tranningWrapper =  document.querySelector('.tranning-wrapper');
const tranningContainer =  document.querySelectorAll('.tranning-container');
const tranningArrowLeft = document.querySelector('.tranning-arrowLeft');
const tranningArrowRight = document.querySelector('.tranning-arrowRight');

let i = 0;
showSlideTranning(i);

function showSlideTranning(i){
    const width = tranningContainer[0].offsetWidth;
    tranningWrapper.style.transform = `translateX(${-width * i}px)`;
}
tranningArrowRight.addEventListener('click', ()=>{
    i++;
    if(i >= tranningContainer.length){
        i = 0;
    }
    showSlideTranning(i);
})
tranningArrowLeft.addEventListener('click', ()=>{
    i--;
    if(i < 0){
        i = tranningContainer.length - 1;
    }
    showSlideTranning(i);
})