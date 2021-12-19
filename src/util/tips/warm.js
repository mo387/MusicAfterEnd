export function showWarm (config) {
  const warm = document.getElementById(config.id || 'globalWarm')
  warm.style.display = 'flex'
  warm.innerText = config?.text
  setTimeout(() => {
    warm.style.opacity = '1'
  }, 100)
  setTimeout(() => {
    warm.style.opacity = '0'
  }, 1200)
  setTimeout(() => {
    warm.innerText = ''
    warm.style.display = 'none'
  }, 1800)
}
