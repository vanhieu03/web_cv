const menuElement = document.querySelector('.header-menu');
const headerWrapper = document.querySelector('.header-wrapper');
const headerWrapperElement = document.querySelector('.header-wrapper-element');
const headerClose = document.querySelector('.header-wrapper-element-close');

menuElement.addEventListener('click', (e) =>{
    headerWrapper.style.display = 'block';
    e.stopPropagation();
})

headerClose.addEventListener('click', () =>{
    headerWrapper.style.display = 'none';
})

headerWrapper.addEventListener('click', (e) =>{
    headerWrapper.style.display = 'none';
})
headerWrapperElement.addEventListener('click', (e) =>{
    e.stopPropagation();
})

///slideshow events
const eventsContainerWrapper = document.querySelector('.events-container-wrapper');
const eventsContainers = document.querySelectorAll('.events-container');
const eventsArrowLeft = document.querySelector('.events-arrowLeft');
const eventsArrowRight = document.querySelector('.events-arrowRight');
let eventsIndex = 0;

// Hiển thị slide đầu tiên
showSlideEvent(eventsIndex);

// Hàm hiển thị slide hiện tại
function showSlideEvent(eventsIndex) {
    const width = eventsContainers[0].offsetWidth;
    eventsContainerWrapper.style.transform = `translateX(${-width * eventsIndex}px)`;
}

// Sự kiện cho nút mũi tên phải
eventsArrowRight.addEventListener('click', () => {
    eventsIndex++;
    if (eventsIndex >= eventsContainers.length) {
        eventsIndex = 0; // Quay lại slide đầu tiên
    }
    showSlideEvent(eventsIndex); // Hiển thị slide mới
});

// Sự kiện cho nút mũi tên trái
eventsArrowLeft.addEventListener('click', () => {
    eventsIndex--;
    if (eventsIndex < 0) {
        eventsIndex = eventsContainers.length - 1; // Quay lại slide cuối cùng
    }
    showSlideEvent(eventsIndex); // Hiển thị slide mới
});

///slideshow tranning
const tranningWrapper =  document.querySelector('.tranning-wrapper');
const tranningContainer =  document.querySelectorAll('.tranning-container');
const tranningArrowLeft = document.querySelector('.tranning-arrowLeft');
const tranningArrowRight = document.querySelector('.tranning-arrowRight');

let tranningIndex = 0;
showSlideTranning(tranningIndex);

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
// Slideshow collab
const collabWrapper = document.querySelector('.collab-container-wrapper');
const collabContent = document.querySelectorAll('.collab-container-content');
const collabArrowLeft = document.querySelector('.collabArrowLeft');
const collabArrowRight = document.querySelector('.collabArrowRight');
let collabIndex = 0;

showSlideCollab(collabIndex);

function showSlideCollab(collabIndex){
    const width = collabContent[0].offsetWidth;
    collabWrapper.style.transform = `translateX(${ -width * collabIndex}px)`;
}

collabArrowRight.addEventListener('click', ()=>{
    collabIndex++;
    if(collabIndex >= collabContent.length){
        collabIndex = 0;
    }
    showSlideCollab(collabIndex);
})
collabArrowLeft.addEventListener('click', ()=>{
    collabIndex--;
    if(collabIndex < 0){
        collabIndex = collabContent.length - 1;
    }
    showSlideCollab(collabIndex);
})

// slideshow experience

const experienceWrapper = document.querySelector('.experience-wrapper');
const experienceContainer = document.querySelectorAll('.experience-container');
const experienceArrowLeft = document.querySelector('.experienceArrowLeft');
const experienceArrowRight = document.querySelector('.experienceArrowRight');
let experienceIndex = 0;

slideShowExperience(experienceIndex);
function slideShowExperience(experienceIndex){
    const width = experienceContainer[0].offsetWidth;
    experienceWrapper.style.transform = `translateX(${-width * experienceIndex}px)`;
}
experienceArrowRight.addEventListener('click', ()=>{
    experienceIndex++;
    if(experienceIndex >= experienceContainer.length){
        experienceIndex = 0;
    }
    slideShowExperience(experienceIndex);
})
experienceArrowLeft.addEventListener('click', ()=>{
    experienceIndex--;
    if(experienceIndex < 0){
        experienceIndex = experienceContainer.length - 1;
    }
    slideShowExperience(experienceIndex);
})

// slideshow photoGallery
const photoGalleryContainer = document.querySelector('.photoGallery-container');
const photoGalleryContent = document.querySelectorAll('.photoGallery-content');
const photoGalleryArrowLeft = document.querySelector('.photoGalleryArrowLeft');
const photoGalleryArrowRight = document.querySelector('.photoGalleryArrowRight');

let photoGalleryIndex = 0;

slideShowPhotoGallery(photoGalleryIndex);
function slideShowPhotoGallery(photoGalleryIndex){
    const width = photoGalleryContent[0].offsetWidth;
    photoGalleryContainer.style.transform = `translateX(${-width * photoGalleryIndex}px)`;
}

photoGalleryArrowRight.addEventListener('click', ()=>{
    photoGalleryIndex++;
    if(photoGalleryIndex >= photoGalleryContent.length){
        photoGalleryIndex = 0;
    }
    slideShowPhotoGallery(photoGalleryIndex);
})
photoGalleryArrowLeft.addEventListener('click', ()=>{
    photoGalleryIndex--;
    if(photoGalleryIndex < 0){
        photoGalleryIndex = photoGalleryContent.length - 1;
    }
    slideShowPhotoGallery(photoGalleryIndex);
})
