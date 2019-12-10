const electron = require('electron')

const ipc = electron.ipcRenderer
const { remote } = electron

const closeBtn = document.getElementById('closeBtn')
console.log('HELLO!')

closeBtn.addEventListener('click', () => {
  const window = remote.getCurrentWindow()
  console.log(window)
  window.close()
})

const updateBtn = document.getElementById('updateBtn')

updateBtn.addEventListener('click', () => {
  ipc.send('update-notify-value', document.getElementById('notifyVal').value)

  const window = remote.getCurrentWindow()
  window.close()
})
