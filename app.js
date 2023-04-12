const express = require('express')
const multer = require('./js_serveur/multer-config')
const path = require('path')
const cors = require('cors')


const PORT = 3000

const app = express()

app.use('/css', express.static('css'))
app.use('/js_client', express.static('js_client'))
app.use(cors())
app.use('/images', express.static(path.join(__dirname, 'assets/img_articles')));

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/img_articles',multer, (req, res) => {
    console.log('test')
})

app.listen(PORT, function(){
    console.log('je suis lancee sur le port 3000')
})