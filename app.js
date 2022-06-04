const navSlide = () => {
    const navBox = document.getElementsByClassName('navbox')[0]
    const navUl = document.getElementsByClassName('links')[0]

    navBox.addEventListener('click', () => {
        navUl.classList.toggle('active')
        
        navBox.classList.toggle('toggle')
    })
}

navSlide()

