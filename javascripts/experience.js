// slideshow experience

const experienceWrapper = document.querySelector('.experience-wrapper');
const experienceContainer = document.querySelectorAll('.experience-container');
const experienceContainerWrapper = document.querySelectorAll('.experience-container-wrapper');
const experienceContainerAvt = document.querySelectorAll('.experience-container-avatar');
const experienceContainerHeader = document.querySelectorAll('.experience-container-header');
const experienceContainerDecription = document.querySelectorAll('.experience-container-description');
const experienceMoreIcon = document.querySelectorAll('.experience-more-icon');
const experienceMoreTime = document.querySelectorAll('.experience-more-time');
const experienceArrowLeft = document.querySelector('.experienceArrowLeft');
const experienceArrowRight = document.querySelector('.experienceArrowRight');
const experienceOverlay = document.querySelector('.experience-overlay');
const experienceContentHeader = document.querySelector('.experience-overlay-content-header');
const experienceContentDescription = document.querySelector('.experience-overlay-content-description');

const experienceContent = [
    {
        id : 0,
        avt: "./imgs/experience.webp",
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa",
        iconTime: "<i class=\"fa-regular fa-calendar-xmark\"></i>",
        time: "21/10/2021"
    },
    {
        id : 1,
        avt: "./imgs/experience.webp",
        header: "Đam mê quảng bá văn hóa Việt của nữ du học sinh Ý",
        description: "Chia sẻ về hành trình du học của mình, Vân " 
                    + "cho biết: Em không có ý định du học ngay từ đầu, mãi đến " 
                    +"hè năm lớp 10 lên lớp 11 em mới bắt đầu nhen nhóm ý tưởng",
        iconTime: "",
        time: ""
    },
    {
        id : 2,
        avt: "./imgs/experience.webp",
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa",
        iconTime: "",
        time: ""
    },
    {
        id : 3,
        avt: "./imgs/experience.webp",
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa",
        iconTime: "<i class=\"fa-regular fa-calendar-xmark\"></i>",
        time: ""
    },
    {
        id : 4,
        avt: "./imgs/experience.webp",
        header: "Đam mê quảng bá văn hóa Việt của nữ du học sinh Ý",
        description: "Chia sẻ về hành trình du học của mình, Vân " 
                    + "cho biết: Em không có ý định du học ngay từ đầu, mãi đến " 
                    +"hè năm lớp 10 lên lớp 11 em mới bắt đầu nhen nhóm ý tưởng",
        iconTime: "",
        time: ""
    },
    {
        id : 5,
        avt: "./imgs/experience.webp",
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa",
        iconTime: "",
        time: ""
    },
    {
        id : 6,
        avt: "./imgs/experience.webp",
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa",
        iconTime: "<i class=\"fa-regular fa-calendar-xmark\"></i>",
        time: "21/10/2021"
    },
    {
        id : 7,
        avt: "./imgs/experience.webp",
        header: "Đam mê quảng bá văn hóa Việt của nữ du học sinh Ý",
        description: "Chia sẻ về hành trình du học của mình, Vân " 
                    + "cho biết: Em không có ý định du học ngay từ đầu, mãi đến " 
                    +"hè năm lớp 10 lên lớp 11 em mới bắt đầu nhen nhóm ý tưởng",
        iconTime: "",
        time: ""
    },
    {
        id : 8,
        avt: "./imgs/experience.webp",
        header: "Hành trình khám phá Italy của cô gái Việt",
        description: "Dung Trần có tình yêu đặc biệt" 
                    +" dành cho Italy. Với cô, Italy là nơi "
                    +"Dung học tập để mở mang nhận "
                    +"thức lẫn trái tim . Cô ấn tượng với "
                    +"các công trình kiến trúc, văn hóa",
        iconTime: "",
        time: ""
    }
]

const renderExperience = (index) =>{
    let find = experienceContent.find(element =>{
        return element.id === index;
    })
    experienceContainerAvt[index].innerHTML = `<img src="${find.avt}" alt="ảnh lỗi" class="experience-container-avatar-link">`;
    experienceContainerHeader[index].innerHTML = find.header;
    experienceContainerDecription[index].innerHTML = find.description;
    experienceMoreIcon[index].innerHTML = find.iconTime;
    experienceMoreTime[index].innerHTML = find.time;
}
experienceContainerWrapper.forEach((element, index) =>{
    renderExperience(index);
})

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