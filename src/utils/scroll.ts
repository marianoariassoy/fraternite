export const scroll = () => {
  const menuLinks = document.querySelectorAll('.scroll')

  menuLinks.forEach(link => {
    link.addEventListener('click', smoothScroll)
  })

  function smoothScroll(e) {
    e.preventDefault()
    const targetId = this.getAttribute('target')
    const targetElement = document.querySelector(targetId)
    window.scrollTo({
      top: targetElement.offsetTop - 180,
      behavior: 'smooth'
    })
  }
}
