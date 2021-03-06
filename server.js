const express = require('express')

const app = express()
const port = 3001

const clientDir = __dirname + "/client/"
const htmlDir = __dirname + "/html/"
const bsDir = __dirname + "/bs/"
const styleDir = __dirname + "/css/"

app.use(express.static(clientDir))
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(htmlDir + 'index.html')
})
app.get('/service', (req, res) => {
    res.sendFile(htmlDir + 'service.html')
})
app.get('/kontakt', (req, res) => {
    res.sendFile(htmlDir + 'kontakt.html')
})
app.get('/Tjanster', (req, res) => {
    res.sendFile(htmlDir + 'tjänser.html')
})
app.get('/Vilka', (req, res) => {
    res.sendFile(htmlDir + 'vilka.html')
})

// For the CSS and bootstrap files
app.get('/style', (req, res) => {
    res.sendFile(styleDir + 'main.css')
})
app.get('/bootstrap', (req, res) => {
    res.sendFile(bsDir + 'bootstrap.min.css')
})


app.listen(port, () => console.log(`Example app listening on port ${port}`))