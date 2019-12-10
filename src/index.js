const path = require('path')
const electron = require('electron')

const { remote: { BrowserWindow } } = electron

const notifyBtn = document.getElementById('notifyBtn')

notifyBtn.addEventListener('click', () => {
  const modalPath = path.join('file://', __dirname, 'add.html')
  console.log(modalPath)
  let win = new BrowserWindow({ width: 800, height: 200 })
  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})
