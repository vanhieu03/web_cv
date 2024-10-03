// Slideshow collab
const collabWrapper = document.querySelector('.collab-container-wrapper');
const collabContainerContent = document.querySelectorAll('.collab-container-content');
const collabWrapperHeader = document.querySelectorAll('.collab-wrapper .bodyContent-content-header');
const collabWrapperDescription = document.querySelectorAll('.collab-wrapper .bodyContent-content-description');
const collabMoreTime = document.querySelectorAll('.collab-more-time');
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
        description: "In occasione del 15o anniversario del Dipartimento di Italianistica presso l’Università di Hanoi e celebrando la prima Settimana dell Italia in ASEAN, considerato il forte e reciproco interesse tra l Italia e l’ASEAN, l’Università di Hanoi (HANU) intende organizzare",
        time: "21/10/2021"
    },
    {
        id: 1,
        header: "Call for papers Convego Internazionale ItaHanu",
        description: "In occasione del 15o anniversario del Dipartimento di Italianistica presso l’Università di Hanoi e celebrando la prima Settimana dell Italia in ASEAN, considerato il forte e reciproco interesse tra l Italia e l’ASEAN, l’Università di Hanoi (HANU) intende organizzare",
        time: "21/10/2022"
    },
    {
        id: 2,
        header: "Call for papers Convego Internazionale ItaHanu",
        description: "In occasione del 15o anniversario del Dipartimento di Italianistica presso l’Università di Hanoi e celebrando la prima Settimana dell Italia in ASEAN, considerato il forte e reciproco interesse tra l Italia e l’ASEAN, l’Università di Hanoi (HANU) intende organizzare",
        time: "21/10/2023"
    }
]

//render
const renderCollab = (index)=>{
    let find = collabContent.find(element=>{
        return element.id === index;
    })
    collabWrapperHeader[index].innerHTML = find.header;
    collabWrapperDescription[index].innerHTML = find.description;
    collabMoreTime[index].innerHTML = find.time;
    
}
collabContainerContent.forEach((element, index) =>{
    renderCollab(index);
})

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