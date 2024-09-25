document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')
  let menuOpen = false

  menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen
    if (menuOpen) {
      mobileMenu.style.maxHeight = `${mobileMenu.scrollHeight}px`
    } else {
      mobileMenu.style.maxHeight = '0px'
    }
  })

  // View Transitions
  const navLinks = document.querySelectorAll('.nav-link')

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const targetId = e.target.getAttribute('href')
      const targetSection = document.querySelector(targetId)

      if (targetSection && document.startViewTransition) {
        document.startViewTransition(() => {
          window.scrollTo({
            top: targetSection.offsetTop - 68,
            behavior: 'smooth'
          })
        })
      } else {
        window.scrollTo({
          top: targetSection.offsetTop - 68,
          behavior: 'smooth'
        })
      }

      // Close mobile menu if open
      if (menuOpen) {
        menuOpen = false
        mobileMenu.style.maxHeight = '0px'
      }
    })
  })
})

const añoActual = new Date().getFullYear()
const elementoAño = document.getElementById('año')
elementoAño.textContent = añoActual
