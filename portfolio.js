
/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabsContants = document.querySelectorAll('[data-contant]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabsContants.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')
        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-solid fa-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'fa-regular fa-moon' : 'fa-solid fa-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    document.body.classList[selectedIcon === 'fa-regular fa-moon' ? 'add' : 'remove'](iconTheme)


}

themeButton.addEventListener('click' , () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme' , getCurrentTheme())
    localStorage.setItem('selected-icon' , getCurrentIcon())


})


/*=============== SCROLL REVEAL ANIMATION ===============*/