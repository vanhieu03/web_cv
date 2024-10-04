///slideshow tranning
const tranningWrapper =  document.querySelector('.tranning-wrapper');
const tranningContainer =  document.querySelectorAll('.tranning-container');
const tranningContentHeader = document.querySelectorAll('.tranning-container .bodyContent-content-header');
const tranningContentDescription = document.querySelectorAll('.tranning-container .bodyContent-content-description');
const tranningArrowLeft = document.querySelector('.tranning-arrowLeft');
const tranningArrowRight = document.querySelector('.tranning-arrowRight');
const tranningOverlay = document.querySelector('.tranning-overlay');
// const tranningReadMore = document.querySelectorAll('.tranning-container-readMore');
const tranningOverlayHeader = document.querySelector('.tranning-overlay-content-header');
const tranningOverlayDescription = document.querySelector('.tranning-overlay-content-description');

const tranningContent = [
    {
        id: 0,
        header: "Hệ Chính quy Ngôn ngữ Italia1",
        description: "Chương trình đào tạo đại học ngành Ngôn ngữ Italia nhằm đào tạo sinh viên có phẩm chất chính trị vững vàng; có kiến thức, kỹ năng, thái độ và đạo đức phù hợp để làm việc trong môi trường đa ngôn ngữ, đa văn hóa và có khả năng thích ứng cao với những thay đổi nhanh chóng của nền kinh tế đang trong quá trình hội"
    },
    {
        id: 1,
        header: "Hệ Chính quy Ngôn ngữ Italia2",
        description: "Chương trình đào tạo đại học ngành Ngôn ngữ Italia nhằm đào tạo sinh viên có phẩm chất chính trị vững vàng; có kiến thức, kỹ năng, thái độ và đạo đức phù hợp để làm việc trong môi trường đa ngôn ngữ, đa văn hóa và có khả năng thích ứng cao với những thay đổi nhanh chóng của nền kinh tế đang trong quá trình hội"
    },
    {
        id: 2,
        header: "Hệ Chính quy Ngôn ngữ Italia3",
        description: "Chương trình đào tạo đại học ngành Ngôn ngữ Italia nhằm đào tạo sinh viên có phẩm chất chính trị vững vàng; có kiến thức, kỹ năng, thái độ và đạo đức phù hợp để làm việc trong môi trường đa ngôn ngữ, đa văn hóa và có khả năng thích ứng cao với những thay đổi nhanh chóng của nền kinh tế đang trong quá trình hội"
    }
]

const renderTranning = (index)=>{
    let find = tranningContent.find(element =>{
        return element.id === index;
    })
    tranningContentHeader[index].innerHTML = find.header;
    tranningContentDescription[index].innerHTML = find.description;
}
tranningContainer.forEach((element, index) =>{
    renderTranning(index);
})

let tranningIndex = 0;

function showSlideTranning(tranningIndex){
    const width = tranningContainer[0].offsetWidth;
    tranningWrapper.style.transform = `translateX(${-width * tranningIndex}px)`;
}
tranningArrowRight.addEventListener('click', ()=>{
    tranningIndex++;
    if(tranningIndex >= tranningContainer.length){
        tranningIndex = 0;
    }
    showSlideTranning(tranningIndex);
})
tranningArrowLeft.addEventListener('click', ()=>{
    tranningIndex--;
    if(tranningIndex < 0){
        tranningIndex = tranningContainer.length - 1;
    }
    showSlideTranning(tranningIndex);
})

const handleTranningReadMore = (id)=>{
    let find = tranningContent.find((element)=>{
        return element.id === id;
    })
    tranningOverlayHeader.innerHTML = find.header;
    tranningOverlayDescription.innerHTML = find.description;
}

tranningContentHeader.forEach((element, index) =>{
    element.addEventListener('click', ()=>{
        handleTranningReadMore(index);
        tranningOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
})

backOverlay.forEach(element =>{
    element.addEventListener('click', ()=>{
        tranningOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    })
})