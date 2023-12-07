function showPopUp(){
    let wrapper = document.querySelector('.wrapper')
    wrapper.classList.add('active')
}

function closePopUp(){
    let elem = event.target

    let wrapper = document.querySelector('.wrapper')
    // wrapper.classList.remove('active')
    if(elem == wrapper){
        wrapper.classList.remove('active')
    }
}

let btns = document.querySelectorAll('.popUpButton')
btns.forEach( btn => {
    btn.addEventListener('click', showPopUp)
})

let wrapper = document.querySelector('.wrapper')
wrapper.addEventListener('click', closePopUp)