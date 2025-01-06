const containers = document.querySelectorAll ('.container')
const buttonLearn = document.querySelectorAll ('.learn')
const bntSwitch = document.getElementById ('switch')
const anual =document.querySelectorAll ('.anual')
const monthly = document.querySelectorAll ('.monthly')

bntSwitch.addEventListener('click', ()=>{
    if (bntSwitch.style.flexDirection === 'row') {
        bntSwitch.style.flexDirection = 'row-reverse'
        anual.forEach(anual => {
            anual.style.display = 'block'
        })
        monthly.forEach(monthly => {
            monthly.style.display = 'none'
        })       
    } else {
        bntSwitch.style.flexDirection = 'row'
        anual.forEach(anual => {
            anual.style.display = 'none'
        })
        monthly.forEach(monthly => {
            monthly.style.display = 'block'
        })
    }
})


function ContainerHover() {
    containers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            const btnLearn = container.querySelector ('.learn')
            if (btnLearn) {
                btnLearn.classList.add ('selectedbutton')
            }
        })

            container.addEventListener ('mouseleave', () => {
                const btnLearn = container.querySelector ('.learn')
                if (btnLearn) {
                    btnLearn.classList.remove ('selectedbutton')
                }
            })
        
        })
    }

ContainerHover() 