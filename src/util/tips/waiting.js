export function showWaiting (id) {
  const wait = document.getElementById(id)
  wait.style.transition = '0.6s all ease-in-out'
  wait.style.display = 'flex'
  setTimeout(() => {
    wait.style.opacity = '1'
  }, 100)
}
export function hideWaiting (id) {
  const wait = document.getElementById(id)
  wait.style.opacity = '0'
  setTimeout(() => {
    wait.style.display = 'none'
  }, 600)
}
