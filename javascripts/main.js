var menuElement = document.querySelector('.header-menu')
var headerWrapper = document.querySelector('.header-wrapper')
var headerWrapperElement = document.querySelector('.header-wrapper-element')
var headerClose = document.querySelector('.header-wrapper-element-close')

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