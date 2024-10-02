// button backOverlay
const backOverlay = document.querySelectorAll('.back-overlay-btn');


// menu
const menuElement = document.querySelector('.header-menu');
const headerWrapper = document.querySelector('.header-wrapper');
const headerWrapperElement = document.querySelector('.header-wrapper-element');
const headerClose = document.querySelector('.header-wrapper-element-close');

menuElement.addEventListener('click', (e) =>{
    headerWrapper.style.display = 'block';
    document.body.style.overflow = 'hidden'
    e.stopPropagation();
})

headerClose.addEventListener('click', () =>{
    headerWrapper.style.display = 'none';
    document.body.style.overflow = 'auto'
})

headerWrapper.addEventListener('click', (e) =>{
    headerWrapper.style.display = 'none';
    document.body.style.overflow = 'auto'
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
// readMore events
const eventsReadMores = document.querySelectorAll('.events-readMore');
const eventsOverlay = document.querySelector('.events-overlay');
const eventsOverlayHeader = document.querySelector('.events-overlay-content-header');
const eventsOverlayDescription = document.querySelector('.events-overlay-content-description');

const eventsContent = [
    {id: 0, header: "Tọa đàm Dịch Văn học dành cho SV định hướng", description: "Sáng ngày 13/4/2022, Khoa tiếng Italia đã tổ chức buổi Tọa đàm Dịch văn học với sự tham gia của diễn giả Nguyễn Xuân Hồng - Một dịch giả có nhiều tác phẩm dịch có uy tín. Khách mời của buổi tọa đàm là dịch giả, nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa"},
    {id: 1, header: "Tọa đàm Dịch Văn học dành cho SV định hướng", description: "Sáng ngày 13/4/2023s, Khoa tiếng Italia đã tổ chức buổi Tọa đàm Dịch văn học với sự tham gia của diễn giả Nguyễn Xuân Hồng - Một dịch giả có nhiều tác phẩm dịch có uy tín. Khách mời của buổi tọa đàm là dịch giả, nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa"},
    {id: 2, header: "Tọa đàm Dịch Văn học dành cho SV định hướng", descriptiong: "Sáng ngày 13/4/2022, Khoa tiếng Italia đã tổ chức buổi Tọa đàm Dịch văn học với sự tham gia của diễn giả Nguyễn Xuân Hồng - Một dịch giả có nhiều tác phẩm dịch có uy tín. Khách mời của buổi tọa đàm là dịch giả, nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa"}
]

const handleEventsReadMore = (id) => {
    let find = eventsContent.find((content) => {
        return content.id === id;
    });
    eventsOverlayHeader.innerHTML = find.header;
    eventsOverlayDescription.innerHTML = find.description;
}

eventsReadMores.forEach((eventsReadMore, index) =>{
    eventsReadMore.addEventListener('click', ()=>{
        handleEventsReadMore(index)
        eventsOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
    
})

backOverlay.forEach(element =>{
    element.addEventListener('click', ()=>{
        eventsOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    })
})


///slideshow tranning
const tranningWrapper =  document.querySelector('.tranning-wrapper');
const tranningContainer =  document.querySelectorAll('.tranning-container');
const tranningArrowLeft = document.querySelector('.tranning-arrowLeft');
const tranningArrowRight = document.querySelector('.tranning-arrowRight');
const tranningOverlay = document.querySelector('.tranning-overlay');
// const tranningReadMore = document.querySelectorAll('.tranning-container-readMore');
const tranningOverlayHeader = document.querySelector('.tranning-overlay-content-header');
const tranningOverlayDescription = document.querySelector('.tranning-overlay-content-description');


const tranningContent = [
    {
        id: 0,
        header: "Hệ Chính quy Ngôn ngữ Italia",
        description: "Chương trình đào tạo đại học ngành Ngôn ngữ Italia nhằm đào tạo sinh viên có phẩm chất chính trị vững vàng; có kiến thức, kỹ năng, thái độ và đạo đức phù hợp để làm việc trong môi trường đa ngôn ngữ, đa văn hóa và có khả năng thích ứng cao với những thay đổi nhanh chóng của nền kinh tế đang trong quá trình hội"
    },
    {
        id: 1,
        header: "Hệ Chính quy Ngôn ngữ Italia",
        description: "Chương trình đào tạo đại học ngành Ngôn ngữ Italia nhằm đào tạo sinh viên có phẩm chất chính trị vững vàng; có kiến thức, kỹ năng, thái độ và đạo đức phù hợp để làm việc trong môi trường đa ngôn ngữ, đa văn hóa và có khả năng thích ứng cao với những thay đổi nhanh chóng của nền kinh tế đang trong quá trình hội"
    },
    {
        id: 2,
        header: "Hệ Chính quy Ngôn ngữ Italia",
        description: "Chương trình đào tạo đại học ngành Ngôn ngữ Italia nhằm đào tạo sinh viên có phẩm chất chính trị vững vàng; có kiến thức, kỹ năng, thái độ và đạo đức phù hợp để làm việc trong môi trường đa ngôn ngữ, đa văn hóa và có khả năng thích ứng cao với những thay đổi nhanh chóng của nền kinh tế đang trong quá trình hội"
    }
]

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

const handleTranningReadMore = (id)=>{
    let find = tranningContent.find((element)=>{
        return element.id === id;
    })
    tranningOverlayHeader.innerHTML = find.header;
    tranningOverlayDescription.innerHTML = find.description;
}

tranningContainer.forEach((element, index) =>{
    element.addEventListener('click', ()=>{
        handleTranningReadMore(index)
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


// Slideshow collab
const collabWrapper = document.querySelector('.collab-container-wrapper');
const collabContainerContent = document.querySelectorAll('.collab-container-content');
const collabArrowLeft = document.querySelector('.collabArrowLeft');
const collabArrowRight = document.querySelector('.collabArrowRight');
const collabReadMore = document.querySelectorAll('.collab-readMore');
const collabOverlay = document.querySelector('.collab-overlay');
const collabOverlayHeader = document.querySelector('.collab-overlay-content-header');
const collabOverlayDescription = document.querySelector('.collab-overlay-content-description');

const collabContent = [
    {
        id: 0,
        header: "Call for papers Convego Internazionale ItaHanu",
        description: "In occasione del 15o anniversario del Dipartimento di Italianistica presso l’Università di Hanoi e celebrando la prima Settimana dell Italia in ASEAN, considerato il forte e reciproco interesse tra l Italia e l’ASEAN, l’Università di Hanoi (HANU) intende organizzare"
    },
    {
        id: 1,
        header: "Call for papers Convego Internazionale ItaHanu",
        description: "In occasione del 15o anniversario del Dipartimento di Italianistica presso l’Università di Hanoi e celebrando la prima Settimana dell Italia in ASEAN, considerato il forte e reciproco interesse tra l Italia e l’ASEAN, l’Università di Hanoi (HANU) intende organizzare"
    },
    {
        id: 2,
        header: "Call for papers Convego Internazionale ItaHanu",
        description: "In occasione del 15o anniversario del Dipartimento di Italianistica presso l’Università di Hanoi e celebrando la prima Settimana dell Italia in ASEAN, considerato il forte e reciproco interesse tra l Italia e l’ASEAN, l’Università di Hanoi (HANU) intende organizzare"
    }
]

let collabIndex = 0;

showSlideCollab(collabIndex);

function showSlideCollab(collabIndex){
    const width = collabContainerContent[0].offsetWidth;
    collabWrapper.style.transform = `translateX(${ -width * collabIndex}px)`;
}

collabArrowRight.addEventListener('click', ()=>{
    collabIndex++;
    if(collabIndex >= collabContainerContent.length){
        collabIndex = 0;
    }
    showSlideCollab(collabIndex);
})
collabArrowLeft.addEventListener('click', ()=>{
    collabIndex--;
    if(collabIndex < 0){
        collabIndex = collabContainerContent.length - 1;
    }
    showSlideCollab(collabIndex);
})

const handleCollabReadMore = (index)=>{
    let find = collabContent.find(content =>{
        return content.id === index;
    })
    collabOverlayHeader.innerHTML = find.header;
    collabOverlayDescription.innerHTML = find.description;
}

collabReadMore.forEach((element, index) =>{
    element.addEventListener('click', ()=>{
        handleCollabReadMore(index);
        collabOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
})

backOverlay.forEach((element)=>{
    element.addEventListener('click', ()=>{
        collabOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    })
})


// slideshow experience

const experienceWrapper = document.querySelector('.experience-wrapper');
const experienceContainer = document.querySelectorAll('.experience-container');
const experienceArrowLeft = document.querySelector('.experienceArrowLeft');
const experienceArrowRight = document.querySelector('.experienceArrowRight');
const experienceContainerWrapper = document.querySelectorAll('.experience-container-wrapper');
const experienceOverlay = document.querySelector('.experience-overlay');
const experienceContentHeader = document.querySelector('.experience-overlay-content-header');
const experienceContentDescription =document.querySelector('.experience-overlay-content-description');

const experienceContent = [
    {
        id : 0,
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa"
    },
    {
        id : 1,
        header: "Đam mê quảng bá văn hóa Việt của nữ du học sinh Ý",
        description: "Chia sẻ về hành trình du học của mình, Vân " 
        + "cho biết: Em không có ý định du học ngay từ đầu, mãi đến " 
        +"hè năm lớp 10 lên lớp 11 em mới bắt đầu nhen nhóm ý tưởng"
    },
    {
        id : 2,
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa"
    },
    {
        id : 3,
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa"
    },
    {
        id : 4,
        header: "Đam mê quảng bá văn hóa Việt của nữ du học sinh Ý",
        description: "Chia sẻ về hành trình du học của mình, Vân " 
        + "cho biết: Em không có ý định du học ngay từ đầu, mãi đến " 
        +"hè năm lớp 10 lên lớp 11 em mới bắt đầu nhen nhóm ý tưởng"
    },
    {
        id : 5,
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa"
    },
    {
        id : 6,
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa"
    },
    {
        id : 7,
        header: "Đam mê quảng bá văn hóa Việt của nữ du học sinh Ý",
        description: "Chia sẻ về hành trình du học của mình, Vân " 
        + "cho biết: Em không có ý định du học ngay từ đầu, mãi đến " 
        +"hè năm lớp 10 lên lớp 11 em mới bắt đầu nhen nhóm ý tưởng"
    },
    {
        id : 8,
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa"
    }
]


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

const handleExperienceReadMore = (index)=>{
   let find = experienceContent.find(element =>{
        return element.id === index;
   })
   experienceContentHeader.innerHTML = find.header;
   experienceContentDescription.innerHTML = find.description;
}

experienceContainerWrapper.forEach((element, index) =>{
    element.addEventListener('click', ()=>{
        handleExperienceReadMore(index);
        experienceOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
})


backOverlay.forEach((element)=>{
    element.addEventListener('click', ()=>{
        experienceOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    })
})


// slideshow photoGallery
const photoGalleryContainer = document.querySelector('.photoGallery-container');
const photoGalleryContent = document.querySelectorAll('.photoGallery-content');
const photoGalleryArrowLeft = document.querySelector('.photoGalleryArrowLeft');
const photoGalleryArrowRight = document.querySelector('.photoGalleryArrowRight');
const photoGalleryImgLink = document.querySelectorAll('.photoGallery-content-img-link');
const photoGalleryOverlay = document.querySelector('.photoGallery-overlay');
const photoGalleryContentImg = document.querySelector('.photoGallery-overlay-content-img');
const photoGallery1 = document.querySelector('.photoGallery-content-1')

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
    photoGalleryContentImg.innerHTML = `<img src=${find.img} alt="ảnh lỗi">`;
}

photoGalleryImgLink.forEach((element, index) =>{
    element.addEventListener('click', ()=>{
        handlePhotoGalleryReadMore(index);
        photoGalleryOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
})

backOverlay.forEach(element =>{
    element.addEventListener('click', ()=>{
        photoGalleryOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    })
})

