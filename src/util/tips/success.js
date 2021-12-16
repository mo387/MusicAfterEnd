export function showSuccess (id) {
  const suc = document.getElementById(id)
  suc.style.display = 'flex'
  suc.childNodes[0].childNodes[0].style.animation = 'circle 0.6s ease-out'
  suc.childNodes[0].childNodes[0].style.animationFillMode = 'forwards'
  suc.childNodes[0].childNodes[1].style.animation = 'tick 0.8s ease-out'
  suc.childNodes[0].childNodes[1].style.animationFillMode = 'forwards'
  suc.childNodes[0].childNodes[1].style.animationDelay = '.6s'
  setTimeout(() => {
    suc.childNodes[1].style.opacity = '1'
  }, 600)
  setTimeout(() => {
    suc.style.opacity = '0'
  }, 2000)
  setTimeout(() => {
    suc.style.opacity = '1'
    suc.style.display = 'none'
    suc.childNodes[0].childNodes[0].style.animation = ''
    suc.childNodes[0].childNodes[0].style.animationFillMode = ''
    suc.childNodes[0].childNodes[1].style.animation = ''
    suc.childNodes[0].childNodes[1].style.animationFillMode = ''
    suc.childNodes[0].childNodes[1].style.animationDelay = ''
  }, 2600)
}
