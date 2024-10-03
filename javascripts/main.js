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

