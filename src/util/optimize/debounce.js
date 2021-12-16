export default function debounce (fn, interval) {
  interval = interval || 500
  let time = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(time)
    time = setTimeout(() => {
      fn.call(context, args)
    }, interval)
  }
}
