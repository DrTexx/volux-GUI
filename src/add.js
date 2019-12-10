const electron = require('electron')

const { remote } = electron

const closeBtn = document.getElementById('closeBtn')
console.log('HELLO!')

closeBtn.addEventListener('click', () => {
  const window = remote.getCurrentWindow()
  console.log(window)
  window.close()
})
