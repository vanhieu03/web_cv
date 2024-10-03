// slideshow photoGallery
const photoGalleryContainer = document.querySelector('.photoGallery-container');
const photoGalleryContent = document.querySelectorAll('.photoGallery-content');
const photoGalleryContentImgChild = document.querySelectorAll('.photoGallery-content-img .border-block');
const photoGalleryArrowLeft = document.querySelector('.photoGalleryArrowLeft');
const photoGalleryArrowRight = document.querySelector('.photoGalleryArrowRight');
const photoGalleryOverlay = document.querySelector('.photoGallery-overlay');
const photoGalleryContentImg = document.querySelector('.photoGallery-overlay-content-img');

const photoGalleryImg = [
    {
        id : 0,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 1,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 2,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 3,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 4,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 5,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 6,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 7,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 8,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 9,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 10,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 11,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 12,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 13,
        img : "./imgs/photoGallery4.jpeg"
    },
    {
        id : 14,
        img : "./imgs/photoGallery4.jpeg"
    }

]

//render
const renderPhotoGallery = (index)=>{
    let find = photoGalleryImg.find(element =>{
        return element.id === index;
    })
    photoGalleryContentImgChild[index].innerHTML = `<img src="${find.img}" alt="ảnh lỗi" class="photoGallery-content-img-link">`;
}
photoGalleryContentImgChild.forEach((element, index) =>{
    renderPhotoGallery(index);
})
const photoGalleryImgLink = document.querySelectorAll('.photoGallery-content-img-link');

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

const handlePhotoGalleryReadMore = (index) =>{
    let find = photoGalleryImg.find(element=>{
        return element.id === index;
    }) 
    photoGalleryContentImg.innerHTML = `<img src="${find.img}" alt="ảnh lỗi" style = "width: 100%">`;
}

photoGalleryImgLink.forEach((element, index) =>{
    element.addEventListener('click', ()=>{
        handlePhotoGalleryReadMore(index);
        photoGalleryOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
})

backOverlay.forEach(element =>{
    element.addEventListener('click', (e)=>{
        photoGalleryOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    })
})