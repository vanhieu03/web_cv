// events 
//render
const eventsContainers = document.querySelectorAll('.events-container');
const eventsImg = document.querySelectorAll('.events-img');
const eventsContentHeader = document.querySelectorAll('.events-wrapper .bodyContent-content-header');
const eventsContentDescription = document.querySelectorAll('.events-wrapper .bodyContent-content-description');
const eventsMoreTime = document.querySelectorAll('.events-more-time');


const eventsContent = [
    {id: 0, img: "./imgs/toadam1.jpg" , header: "Tọa đàm Dịch Văn học dành cho SV định hướng", description: "Sáng ngày 13/4/2022, Khoa tiếng Italia đã tổ chức buổi Tọa đàm Dịch văn học với sự tham gia của diễn giả Nguyễn Xuân Hồng - Một dịch giả có nhiều tác phẩm dịch có uy tín. Khách mời của buổi tọa đàm là dịch giả, nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa", time: "21/10/2021"},
    {id: 1, img: "./imgs/toadam.jpg" , header: "Tọa đàm Dịch Văn học dành cho SV định hướng", description: "Sáng ngày 13/4/2023s, Khoa tiếng Italia đã tổ chức buổi Tọa đàm Dịch văn học với sự tham gia của diễn giả Nguyễn Xuân Hồng - Một dịch giả có nhiều tác phẩm dịch có uy tín. Khách mời của buổi tọa đàm là dịch giả, nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa", time: "21/10/2022"},
    {id: 2, img: "./imgs/toadam3.jfif" , header: "Tọa đàm Dịch Văn học dành cho SV định hướng", description: "Sáng ngày 13/4/2022, Khoa tiếng Italia đã tổ chức buổi Tọa đàm Dịch văn học với sự tham gia của diễn giả Nguyễn Xuân Hồng - Một dịch giả có nhiều tác phẩm dịch có uy tín. Khách mời của buổi tọa đàm là dịch giả, nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa", time: "21/10/2023"}
]

const renderEvents = (id)=>{
    let find = eventsContent.find(element =>{
        return element.id === id;
    })
    eventsImg[id].innerHTML = `<img src="${find.img}" alt="ảnh lỗi" class="events-img-link">`;
    eventsContentHeader[id].innerHTML = find.header;
    eventsContentDescription[id].innerHTML = find.description;
    eventsMoreTime[id].innerHTML = find.time;
}

eventsContainers.forEach((element, index) =>{
    renderEvents(index);
})


///slideshow events
const eventsContainerWrapper = document.querySelector('.events-container-wrapper');
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