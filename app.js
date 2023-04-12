import  Express  from 'express'
const PORT = 3000

const app = Express()

app.use('/css', Express.static('css'))
app.use('/js_client', Express.static('js_client'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, function(){
    console.log('je suis lancee sur le port 3000')
})