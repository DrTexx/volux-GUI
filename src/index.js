const path = require('path')
const electron = require('electron')
// const axios = require('axios')

const { remote: { BrowserWindow } } = electron

const notifyBtn = document.getElementById('notifyBtn')

notifyBtn.addEventListener('click', () => {
  const modalPath = path.join('file://', __dirname, 'add.html')
  console.log(modalPath)
  let win = new BrowserWindow({
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    width: 400,
    height: 200,
    webPreferences: { nodeIntegration: true },
  })
  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
  // win.openDevTools()
  console.log('shown')
})
