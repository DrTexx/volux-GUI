const path = require('path')
const electron = require('electron')
const axios = require('axios')

const ipc = electron.ipcRenderer

const { remote: { BrowserWindow } } = electron

const notifyBtn = document.getElementById('notifyBtn')
const price = document.querySelector('h1')
const targetPrice = document.getElementById('targetPrice')

function getBTC() {
  axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,AUD')
    .then((res) => {
      const cryptos = res.data.AUD
      price.innerHTML = `$ ${cryptos.toLocaleString('en')}`
    })
}
getBTC()
setInterval(getBTC, 30000)

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

ipc.on('targetPriceVal', (event, arg) => {
  const targetPriceVal = Number(arg)
  targetPrice.innerHTML = `$ ${targetPriceVal.toLocaleString('en')}`
})
